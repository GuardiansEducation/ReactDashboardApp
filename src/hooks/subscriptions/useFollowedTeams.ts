import { useCallback, useMemo } from "react";
import { subscribeCompetitionTeam, unsubscribeCompetitionTeam } from "@store";
import { useAppDispatch } from "../store/useAppDispatch";
import { useAppSelector } from "../store/useAppSelector";

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
    [subscriptionId, dispatch]
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
    [subscriptionId, dispatch]
  );

  return {
    followedTeams: followedTeams,
    subscribe: subscribe,
    unsubscribe: unsubscribe,
  };
};
