import { useCallback, useEffect, useState } from "react";
import { CompetitionList, SubscribedArea, SubscribedCompetition } from "@types";
import { CompetitionService, SubscribedCompetitionFactory } from "@services";
import { subscribeCompetition, unsubscribeCompetition } from "@store";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";

export interface CompetitionActions {
  competitions: SubscribedCompetition[];
  subscribedCompetition?: SubscribedCompetition;
  subscribe: (subscribedCompetition: SubscribedCompetition) => void;
  unsubscribe: (subscribedCompetition: SubscribedCompetition) => void;
}

export const useSubscribedCompetition = (
  subscriberId: number,
  subscribedArea?: SubscribedArea
): CompetitionActions => {
  const dispatch = useAppDispatch();
  const subscription = useAppSelector((state) =>
    state.subscription.subscriptions.find((x) => x.id === subscriberId)
  );

  const [competitions, setCompetitions] = useState<SubscribedCompetition[]>([]);

  const subscribe = useCallback(
    (subscribedCompetition: SubscribedCompetition) => {
      if (subscribedArea == null) {
        return;
      }

      dispatch(
        subscribeCompetition({
          id: subscriberId,
          area: subscribedArea,
          competition: subscribedCompetition,
        })
      );
    },
    [subscriberId, subscribedArea]
  );

  const unsubscribe = useCallback(
    (subscribedCompetition: SubscribedCompetition) => {
      if (subscription?.competition.id != subscribedCompetition.id) {
        return;
      }

      dispatch(unsubscribeCompetition({ id: subscriberId }));
    },
    [subscriberId, subscription]
  );

  useEffect(() => {
    if (subscribedArea == null) {
      return;
    }

    if (subscribedArea.id !== subscription?.area.id) {
      dispatch(unsubscribeCompetition({ id: subscriberId }));
    }

    const fetchData = async () => {
      const list: CompetitionList = await CompetitionService.listAreaCompetitions(
        subscribedArea.id
      );
      const competitions: SubscribedCompetition[] = list.competitions.map((x) =>
        SubscribedCompetitionFactory.create(x)
      );
      setCompetitions(competitions);
    };

    fetchData();
  }, [subscribedArea]);

  return {
    competitions: competitions,
    subscribedCompetition: subscription?.competition,
    subscribe: subscribe,
    unsubscribe: unsubscribe,
  };
};
