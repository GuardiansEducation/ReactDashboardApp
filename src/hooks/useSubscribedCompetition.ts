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

  useEffect(() => {
    if (subscribedArea == null) {
      return;
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
    dispatch(unsubscribeCompetition({ id: subscriberId }));
  }, [subscribedArea]);

  return {
    competitions: competitions,
    subscribedCompetition: subscription?.competition,
    subscribe: subscribe,
  };
};
