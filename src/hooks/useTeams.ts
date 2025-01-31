import { TeamFactory, TeamService } from "@services";
import { Team } from "@types";
import { useEffect, useState } from "react";
import { useAppSelector } from "./useAppSelector";

export const useTeams = (subscriptionId: number): { teams: Team[]; isLoading: boolean } => {
  const competitionId = useAppSelector(
    (state) => state.subscription.subscriptions.find((s) => s.id === subscriptionId)?.competition.id
  );
  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (competitionId) {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const teams = await TeamService.listCompetitionTeams(competitionId);
          const teamsViewModel: Team[] = teams.teams.map((t) => TeamFactory.create(t));
          setTeams(teamsViewModel);
        } catch (error) {
          console.error("Failed to fetch teams:", error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [competitionId]);

  return { teams, isLoading };
};
