import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SubscribedArea, SubscribedCompetition, SubscribedTeam, SubscriptionStore } from "@types";

const initialState: SubscriptionStore = {
  subscriptions: [],
  selectedCompetitionCode: undefined,
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

      if (state.selectedCompetitionCode === undefined)
        state.selectedCompetitionCode = competition.code;
    },
    unsubscribeCompetition: (state, action: PayloadAction<{ subscriptionId: number }>) => {
      const { subscriptionId } = action.payload;
      const removedSubscription = state.subscriptions.find((x) => x.id === subscriptionId);
      state.subscriptions = state.subscriptions.filter((x) => x.id !== subscriptionId);

      if (removedSubscription?.competition.code === state.selectedCompetitionCode) {
        const firstSubscription = state.subscriptions.at(0);
        state.selectedCompetitionCode = firstSubscription?.competition.code || undefined;
      }
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
    selectOverviewCompetition: (state, action: PayloadAction<{ code: string }>) => {
      const { code } = action.payload;
      const index = state.subscriptions.findIndex((x) => x.competition.code === code);

      if (index < 0) {
        return;
      }

      state.selectedCompetitionCode = code;
    },
  },
});

export const {
  subscribeCompetition,
  unsubscribeCompetition,
  subscribeCompetitionTeam,
  unsubscribeCompetitionTeam,
  selectOverviewCompetition,
} = subscriptionSlice.actions;
export const subscriptionSliceReducer = subscriptionSlice.reducer;
export const selectSubscription = (state: { subscription: SubscriptionStore }) =>
  state.subscription.subscriptions;
