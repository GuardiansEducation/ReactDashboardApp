import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SubscribedArea, SubscribedCompetition, SubscribedTeam, SubscriptionStore } from "@types";

//#region Initial State

const initialState: SubscriptionStore = {
  subscriptions: [
    {
      id: 1,
      area: {
        id: 2072,
        name: "England",
        code: "ENG",
        flag: "https://crests.football-data.org/770.svg",
      },
      competition: {
        id: 2021,
        name: "Premier League",
        code: "PL",
        area: {
          id: 2072,
          name: "England",
          code: "ENG",
          flag: "https://crests.football-data.org/770.svg",
        },
        teams: [{ id: 1 }, { id: 2 }, { id: 3 }],
      }
    },
    {
      id: 2,
      area: {
        id: 2114,
        name: "Italy",
        code: "ITA",
        flag: "https://crests.football-data.org/784.svg",
      },
      competition: {
        id: 2019,
        name: "Serie A",
        code: "SA",
        area: {
          id: 2114,
          name: "Italy",
          code: "ITA",
          flag: "https://crests.football-data.org/784.svg",
        },
        teams: [{ id: 1 }, { id: 2 }, { id: 3 }],
      }
    },
    {
      id: 3,
      area: {
        id: 2088,
        name: "Germany",
        code: "DEU",
        flag: "https://crests.football-data.org/759.svg",
      },
      competition: {
        id: 2002,
        name: "Bundesliga",
        code: "BL1",
        area: {
          id: 2088,
          name: "Germany",
          code: "DEU",
          flag: "https://crests.football-data.org/759.svg",
        },
        teams: [{ id: 1 }, { id: 2 }, { id: 3 }],
      }
    },
    {
      id: 4,
      area: {
        id: 2224,
        name: "Spain",
        code: "ESP",
        flag: "https://crests.football-data.org/760.svg",
      },
      competition: {
        id: 2014,
        name: "Primera Division",
        code: "PD",
        area: {
          id: 2224,
          name: "Spain",
          code: "ESP",
          flag: "https://crests.football-data.org/760.svg",
        },
        teams: [{ id: 1 }, { id: 2 }, { id: 3 }],
      }
    }
  ],
};

//#endregion

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
