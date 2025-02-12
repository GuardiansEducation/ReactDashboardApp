import { subscribeCompetitionTeam, unsubscribeCompetitionTeam } from "@store";
import { useCallback, useMemo } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";

export interface FollowTeamsActions {
  followedTeams: number[];
  subscribe: (teamId: number) => void;
  unsubscribe: (teamId: number) => void;
}

export const useFollowedTeams = (subscriptionId: number): FollowTeamsActions => {
  const dispatch = useAppDispatch();
  const subscription = useAppSelector((state) =>
    state.subscription.subscriptions.find((x) => x.id === subscriptionId)
  );

  const followedTeams = useMemo(
    () => subscription?.competition.teams.map((t) => t.id) || [],
    [subscription]
  );

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
    followedTeams: followedTeams,
    subscribe: subscribe,
    unsubscribe: unsubscribe,
  };
};
