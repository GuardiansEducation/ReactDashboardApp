import { useAppSelector } from "@hooks";
import { Center, Flex } from "@mantine/core";
import { useEffect, useState } from "react";
import { SubscribedTeam, TeamListItem, TeamMatches } from "@types";
import { TeamService } from "@services";
import { CommonAlert, OverviewLoader } from "@components";
import TeamCard from "./components/TeamCard";
import OverviewLayout from "../OverviewLayout";

interface TeamData {
  team: TeamListItem;
  teamMatches: TeamMatches;
}

const FavoriteTeams: React.FC = () => {
  const [teamsData, updateTeamsData] = useState<TeamData[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const favoriteTeams = useAppSelector((state) => state.subscription.selectedOverviewCompetition?.teams || []);
  const hasFavoriteTeams = favoriteTeams.length > 0;

  const loadTeamsData = async (subscribedTeams: SubscribedTeam[]) => {
    setLoading(true);

    const dataRequests = subscribedTeams.map(async subscribedTeam => {
      const team = await TeamService.getTeamInfo(subscribedTeam.id);
      const teamMatches = await TeamService.getTeamMatches(subscribedTeam.id);

      const teamData: TeamData = {
        team,
        teamMatches,
      };

      return teamData;
    });

    const teamsData = await Promise.all(dataRequests);

    updateTeamsData(teamsData);

    setLoading(false);
  };

  useEffect(() => {
    if (favoriteTeams.length > 0) {
      loadTeamsData(favoriteTeams);
    }
  }, [favoriteTeams]);

  const loadingComponent = (
    <Flex align="center" justify="center" h="50vh">
      <OverviewLoader size={50} />
    </Flex>
  );

  const noTeamsComponent = (
    <Center mih="50vh">
      <CommonAlert message="No teams selected. Please, get back to the subscription page and tick some" />
    </Center>
  )

  const teamsComponent = (
    <Flex mt="md" justify="center" wrap="wrap" gap="md" direction={{ base: "column", lg: "row" }}>
      {teamsData.map(({ team, teamMatches }, index) => (
        <Flex key={index} flex={{ base: "1 1 100%", lg: "1 1 40%" }}>
          <TeamCard team={team} teamMatches={teamMatches} />
        </Flex>
      ))}
    </Flex>
  );

  const pageContentComponent = hasFavoriteTeams ? teamsComponent : noTeamsComponent;

  return (
    <OverviewLayout>
      {isLoading ? loadingComponent : pageContentComponent}
    </OverviewLayout>
  )
};

export default FavoriteTeams;
