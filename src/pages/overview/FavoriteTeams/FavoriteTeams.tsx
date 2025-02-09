import { useAppSelector } from "@hooks";
import { Center, Container } from "@mantine/core";
import { useEffect, useState } from "react";
import { SubscribedTeam, TeamListItem } from "@types";
import { TeamService } from "@services";
import TeamCard from "./components/TeamCard";
import { CommonAlert } from "@components";

const FavoriteTeams: React.FC = () => {
  const [teams, updateTeams] = useState<TeamListItem[]>([]);
  const favoriteTeams = useAppSelector((state) => state.subscription.selectedOverviewCompetition?.teams || []);
  const hasFavoriteTeams = favoriteTeams.length > 0;

  const getTeams = async (subscribedTeams: SubscribedTeam[]) => {
    const teamRequests = subscribedTeams.map(subscribedTeam => TeamService.getTeamInfo(subscribedTeam.id));

    Promise.all(teamRequests).then(teamsData => updateTeams(teamsData));
  };

  useEffect(() => {
    if (favoriteTeams.length > 0) {
      getTeams(favoriteTeams);
    }
  }, [favoriteTeams]);

  return (
    <Container fluid>
      {
        hasFavoriteTeams ?
          teams.map((team, index) => (
            <TeamCard key={index} team={team} />
          ))
          :
          <Center mih="50vh">
            <CommonAlert message="No teams selected. Please, get back to the main page and tick some" />
          </Center>
      }
    </Container >
  );
};

export default FavoriteTeams;
