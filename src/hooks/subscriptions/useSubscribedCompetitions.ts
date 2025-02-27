import { SubscribedCompetition } from "@types";
import { useAppSelector } from "../store/useAppSelector";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store";

export interface SubscribedCompetitionsActions {
  subscribedCompetitions: SubscribedCompetition[];
}

const selectSubscribedCompetitions = createSelector(
  [(state: RootState) => state.subscription.subscriptions],
  (subscribtions) => {
    return subscribtions.map((x) => x.competition);
  }
);

export const useSubscribedCompetitions = (): SubscribedCompetitionsActions => {
  const subscribedCompetitions = useAppSelector(selectSubscribedCompetitions);

  return {
    subscribedCompetitions,
  };
};
