import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SubscribedArea, SubscribedCompetition, SubscribedTeam, SubscriptionStore } from "@types";

const initialState: SubscriptionStore = {
  subscriptions: [],
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    subscribeCompetition: (
      state,
      action: PayloadAction<{
        subscriptionId: number;
        area: SubscribedArea;
        competition: SubscribedCompetition;
      }>
    ) => {
      const { subscriptionId, area, competition } = action.payload;
      state.subscriptions = [
        ...state.subscriptions.filter((x) => x.id !== subscriptionId),
        { id: subscriptionId, area, competition },
      ];
    },
    unsubscribeCompetition: (state, action: PayloadAction<{ subscriptionId: number }>) => {
      const { subscriptionId } = action.payload;
      state.subscriptions = state.subscriptions.filter((x) => x.id !== subscriptionId);
    },
    subscribeCompetitionTeam: (
      state,
      action: PayloadAction<{ subscriptionId: number; team: SubscribedTeam }>
    ) => {
      const { subscriptionId, team } = action.payload;
      const index = state.subscriptions.findIndex((x) => x.id === subscriptionId);
      if (index < 0) {
        return;
      }

      const { competition } = state.subscriptions[index];
      competition.teams = [...competition.teams.filter((x) => x.id !== team.id), team];
    },
    unsubscribeCompetitionTeam: (
      state,
      action: PayloadAction<{ subscriptionId: number; teamId: number }>
    ) => {
      const { subscriptionId, teamId } = action.payload;
      const index = state.subscriptions.findIndex((x) => x.id === subscriptionId);
      if (index < 0) {
        return;
      }

      const { competition } = state.subscriptions[index];
      competition.teams = competition.teams.filter((x) => x.id !== teamId);
    },
  },
});

export const {
  subscribeCompetition,
  unsubscribeCompetition,
  subscribeCompetitionTeam,
  unsubscribeCompetitionTeam,
} = subscriptionSlice.actions;
export const subscriptionSliceReducer = subscriptionSlice.reducer;
export const selectSubscription = (state: { subscription: SubscriptionStore }) =>
  state.subscription.subscriptions;
