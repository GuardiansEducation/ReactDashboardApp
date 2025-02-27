import { useCallback, useMemo } from "react";
import { subscribeCompetitionTeam, unsubscribeCompetitionTeam } from "@store";
import { useAppDispatch } from "../store/useAppDispatch";
import { useAppSelector } from "../store/useAppSelector";
import { SubscribedTeam } from "@types";

export interface FollowTeamsActions {
  followedTeams: number[];
  subscribe: (team: SubscribedTeam) => void;
  unsubscribe: (team: SubscribedTeam) => void;
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
    (team: SubscribedTeam) => {
      dispatch(
        subscribeCompetitionTeam({
          subscriptionId,
          team,
        })
      );
    },
    [subscriptionId, dispatch]
  );

  const unsubscribe = useCallback(
    (team: SubscribedTeam) => {
      dispatch(
        unsubscribeCompetitionTeam({
          subscriptionId,
          teamId: team.id,
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
