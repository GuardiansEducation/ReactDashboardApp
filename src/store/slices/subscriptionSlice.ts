import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SubscribedArea, SubscribedCompetition, SubscribedTeam, SubscriptionStore } from "@types";

const initialState: SubscriptionStore = {
  subscriptions: [],
  selectedCompetitionCode: undefined,
};

// #region Initial State

const initialState2: SubscriptionStore = {
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
        emblem: "",
        area: {
          id: 2072,
          name: "England",
          code: "ENG",
          flag: "https://crests.football-data.org/770.svg",
        },
        teams: [{ id: 57 }],
      },
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
        emblem: "",
        area: {
          id: 2114,
          name: "Italy",
          code: "ITA",
          flag: "https://crests.football-data.org/784.svg",
        },
        teams: [{ id: 109 }],
      },
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
        emblem: "",
        area: {
          id: 2088,
          name: "Germany",
          code: "DEU",
          flag: "https://crests.football-data.org/759.svg",
        },
        teams: [{ id: 5 }],
      },
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
        emblem: "",
        area: {
          id: 2224,
          name: "Spain",
          code: "ESP",
          flag: "https://crests.football-data.org/760.svg",
        },
        teams: [{ id: 86 }],
      },
    },
  ],
  selectedCompetitionCode: "PL",
};

// #endregion

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
