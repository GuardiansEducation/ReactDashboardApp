import { useEffect, useState } from "react";
import { SubscribedTeam, TeamListItem, TeamMatches } from "@types";
import { TeamService } from "@services";

export type TeamData = {
  team: TeamListItem;
  teamMatches: TeamMatches;
}

export type TeamDataActions = {
  loading: boolean;
  teamsData: TeamData[];
}

export const useTeamData = (favoriteTeams: SubscribedTeam[]): TeamDataActions => {
  const [loading, setLoading] = useState<boolean>(false);
  const [teamsData, updateTeamsData] = useState<TeamData[]>([]);

  const loadTeamsData = async (subscribedTeams: SubscribedTeam[]) => {
    try {
      setLoading(true);

      const dataRequests = subscribedTeams.map(async (subscribedTeam) => {
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (favoriteTeams.length > 0) {
      loadTeamsData(favoriteTeams);
    }
  }, [favoriteTeams]);

  return {
    loading,
    teamsData,
  };
};
