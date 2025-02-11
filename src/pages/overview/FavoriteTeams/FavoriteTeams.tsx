import { useAppSelector } from "@hooks";
import { Center, Flex } from "@mantine/core";
import { useEffect, useState } from "react";
import { SubscribedTeam, TeamListItem, TeamMatches } from "@types";
import { TeamService } from "@services";
import TeamCard from "./components/TeamCard";
import { CommonAlert } from "@components";

interface TeamData {
  team: TeamListItem;
  teamMatches: TeamMatches;
}

const FavoriteTeams: React.FC = () => {
  const [teamsData, updateTeamsData] = useState<TeamData[]>([]);
  const favoriteTeams = useAppSelector((state) => state.subscription.selectedOverviewCompetition?.teams || []);
  const hasFavoriteTeams = favoriteTeams.length > 0;

  const loadTeamsData = async (subscribedTeams: SubscribedTeam[]) => {
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
  };

  useEffect(() => {
    if (favoriteTeams.length > 0) {
      console.log("Executed");
      loadTeamsData(favoriteTeams);
    }
  }, [favoriteTeams]);

  return (
    hasFavoriteTeams ?
      <Flex mt="md" justify="center" wrap="wrap" gap="sm" direction={{ base: "column", lg: "row" }}>
        {teamsData.map(({ team, teamMatches }, index) => (
          <Flex key={index} flex={{ base: "1 1 100%", lg: "1 1 40%" }}>
            <TeamCard team={team} teamMatches={teamMatches} />
          </Flex>
        ))}
      </Flex>
      :
      <Center mih="50vh">
        <CommonAlert message="No teams selected. Please, get back to the main page and tick some" />
      </Center>
  );
};

export default FavoriteTeams;
