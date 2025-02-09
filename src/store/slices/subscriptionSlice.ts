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
        area: {
          id: 2114,
          name: "Italy",
          code: "ITA",
          flag: "https://crests.football-data.org/784.svg",
        },
        teams: [{ id: 1 }, { id: 2 }, { id: 3 }],
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
        area: {
          id: 2088,
          name: "Germany",
          code: "DEU",
          flag: "https://crests.football-data.org/759.svg",
        },
        teams: [{ id: 1 }, { id: 2 }, { id: 3 }],
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
        area: {
          id: 2224,
          name: "Spain",
          code: "ESP",
          flag: "https://crests.football-data.org/760.svg",
        },
        teams: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  ],
  selectedOverviewCompetition: {
    id: 2021,
    name: "Premier League",
    code: "PL",
    area: {
      id: 2072,
      name: "England",
      code: "ENG",
      flag: "https://crests.football-data.org/770.svg",
    },
    teams: [{ id: 57 }, { id: 57 }, { id: 57 }, { id: 57 }],
  },
};

//#endregion

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

      if (state.selectedOverviewCompetition === undefined)
        state.selectedOverviewCompetition = competition;
    },
    unsubscrubeCompetition: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      state.subscriptions = state.subscriptions.filter((x) => x.id !== id);

      if (state.subscriptions.length === 0) state.selectedOverviewCompetition = undefined;
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
    selectOverviewCompetition: (state, action: PayloadAction<{ code: string | null }>) => {
      const { code } = action.payload;
      const index = state.subscriptions.findIndex((x) => x.competition.code === code);

      if (index < 0) {
        return;
      }

      state.selectedOverviewCompetition = state.subscriptions[index].competition;
    },
  },
});

export const {
  subscrubeCompetition,
  unsubscrubeCompetition,
  subscribeCompetitionTeam,
  unsubscrubeCompetitionTeam,
  selectOverviewCompetition,
} = subscriptionSlice.actions;
export const subscriptionSliceReducer = subscriptionSlice.reducer;
