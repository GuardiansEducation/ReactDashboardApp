import { subscribeCompetitionTeam, unsubscribeCompetitionTeam } from "@store";
import { useCallback } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";

interface FollowTeamActions {
  subscribeCompetitionTeam: (teamId: number) => void;
  unsubscribeCompetitionTeam: (teamId: number) => void;
  followedTeams: number[];
}

export const useFollowedTeams = (subscriptionId: number): FollowTeamActions => {
  const dispatch = useAppDispatch();
  const subscription = useAppSelector((state) =>
    state.subscription.subscriptions.find((x) => x.id === subscriptionId)
  );
  const followedTeams = subscription?.competition.teams || [];

  const subscribe = useCallback(
    (teamId: number) => {
      dispatch(
        subscribeCompetitionTeam({
          subscriptionId,
          team: { id: teamId },
        })
      );
    },
    [subscriptionId]
  );

  const unsubscribe = useCallback(
    (teamId: number) => {
      dispatch(
        unsubscribeCompetitionTeam({
          subscriptionId,
          teamId,
        })
      );
    },
    [subscriptionId]
  );

  return {
    subscribeCompetitionTeam: subscribe,
    unsubscribeCompetitionTeam: unsubscribe,
    followedTeams: followedTeams?.map((t) => t.id) || [],
  };
};
