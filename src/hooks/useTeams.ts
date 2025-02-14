import { TeamFactory, TeamService } from "@services";
import { Team } from "@types";
import { useEffect, useState } from "react";
import { useSubscribedCompetition } from "./useSubscribedCompetition";

export interface TeamsActions {
  teams: Team[];
  loading: boolean;
}

export const useTeams = (subscriptionId: number): TeamsActions => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { subscribedCompetition } = useSubscribedCompetition(subscriptionId);
  const competitionId = subscribedCompetition?.id;

  useEffect(() => {
    if (competitionId == null) {
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const list = await TeamService.listCompetitionTeams(competitionId);
        const teamsViewModel: Team[] = list.teams.map((x) => TeamFactory.create(x));
        setTeams(teamsViewModel);
      } catch (error) {
        console.error("Failed to fetch teams:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [competitionId]);

  return { teams, loading };
};
