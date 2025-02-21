import { useCallback, useEffect, useState } from "react";
import { SubscribedAreaFactory } from "@services";
import { SubscribedArea } from "@types";
import { useAppSelector } from "../store/useAppSelector";
import { useAppDispatch } from "../store/useAppDispatch";
import { unsubscribeCompetition } from "@store";

export interface AreaActions {
  subscribedArea?: SubscribedArea;
  setSubscribedArea: (id: number, name: string) => void;
}

export const useSubscribedArea = (subscriberId: number): AreaActions => {
  const dispatch = useAppDispatch();
  const subscription = useAppSelector((state) =>
    state.subscription.subscriptions.find((x) => x.id === subscriberId)
  );

  const [area, setArea] = useState<SubscribedArea>();

  const setSubscribedArea = useCallback(
    (id: number, name: string) => {
      if (area?.id === id) {
        return;
      }

      dispatch(unsubscribeCompetition({ subscriptionId: subscriberId }));
      const subscribedArea: SubscribedArea = SubscribedAreaFactory.createFromName(id, name);
      setArea(subscribedArea);
    },
    [subscriberId, area, dispatch]
  );

  useEffect(() => {
    if (subscription == null) {
      return;
    }

    setArea(subscription?.area);
  }, []);

  return {
    subscribedArea: area,
    setSubscribedArea: setSubscribedArea,
  };
};
