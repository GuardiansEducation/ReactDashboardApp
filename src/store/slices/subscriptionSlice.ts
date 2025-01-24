import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SubscribedArea, SubscribedCompetition, SubscribedTeam, SubscriptionStore } from "@types";

const initialState: SubscriptionStore = {
  subscriptions: [],
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    subscrubeCompetition: (
      state,
      action: PayloadAction<{
        id: number;
        area: SubscribedArea;
        competition: SubscribedCompetition;
      }>
    ) => {
      const { id, area, competition } = action.payload;
      state.subscriptions = [
        ...state.subscriptions.filter((x) => x.id !== id),
        { id, area, competition },
      ];
    },
    unsubscrubeCompetition: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      state.subscriptions = state.subscriptions.filter((x) => x.id !== id);
    },
    subscribeCompetitionTeam: (
      state,
      action: PayloadAction<{ id: number; team: SubscribedTeam }>
    ) => {
      const { id, team } = action.payload;
      const index = state.subscriptions.findIndex((x) => x.id === id);
      if (index < 0) {
        return;
      }

      const { competition } = state.subscriptions[index];
      competition.teams = [...competition.teams.filter((x) => x.id !== team.id), team];
    },
    unsubscrubeCompetitionTeam: (state, action: PayloadAction<{ id: number; teamId: number }>) => {
      const { id, teamId } = action.payload;
      const index = state.subscriptions.findIndex((x) => x.id === id);
      if (index < 0) {
        return;
      }

      const { competition } = state.subscriptions[index];
      competition.teams = competition.teams.filter((x) => x.id !== teamId);
    },
  },
});

export const {
  subscrubeCompetition,
  unsubscrubeCompetition,
  subscribeCompetitionTeam,
  unsubscrubeCompetitionTeam,
} = subscriptionSlice.actions;
export const subscriptionSliceReducer = subscriptionSlice.reducer;
