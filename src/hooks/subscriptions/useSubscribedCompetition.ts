import { useCallback } from "react";
import { SubscribedArea, SubscribedCompetition } from "@types";
import { subscribeCompetition, unsubscribeCompetition } from "@store";
import { useAppDispatch } from "../store/useAppDispatch";
import { useAppSelector } from "../store/useAppSelector";

export interface SubscribedCompetitionActions {
  subscribedCompetition?: SubscribedCompetition;
  subscribe: (subscribedArea: SubscribedArea, subscribedCompetition: SubscribedCompetition) => void;
  unsubscribe: (subscribedCompetition: SubscribedCompetition) => void;
}

export const useSubscribedCompetition = (subscriberId: number): SubscribedCompetitionActions => {
  const dispatch = useAppDispatch();
  const subscription = useAppSelector((state) =>
    state.subscription.subscriptions.find((x) => x.id === subscriberId)
  );

  const subscribe = useCallback(
    (subscribedArea: SubscribedArea, subscribedCompetition: SubscribedCompetition) => {
      dispatch(
        subscribeCompetition({
          subscriptionId: subscriberId,
          area: subscribedArea,
          competition: subscribedCompetition,
        })
      );
    },
    [subscriberId, dispatch]
  );

  const unsubscribe = useCallback(
    (subscribedCompetition: SubscribedCompetition) => {
      if (subscription?.competition.id != subscribedCompetition.id) {
        return;
      }

      dispatch(unsubscribeCompetition({ subscriptionId: subscriberId }));
    },
    [subscriberId, subscription, dispatch]
  );

  return {
    subscribedCompetition: subscription?.competition,
    subscribe: subscribe,
    unsubscribe: unsubscribe,
  };
};
