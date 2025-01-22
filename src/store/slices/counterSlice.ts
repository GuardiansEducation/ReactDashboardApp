import { createSlice } from "@reduxjs/toolkit";
import { CompetitionState } from "../CompetitionState";

const competitions: CompetitionState[] = [
  {
    area: {
      id: 2072,
      name: "England",
      code: "ENG",
      flag: "https://crests.football-data.org/770.svg",
    },
    name: "Premier League",
    code: "PL",
    followedTeams: [1, 2, 3],
  },
  {
    area: {
      id: 2114,
      name: "Italy",
      code: "ITA",
      flag: "https://crests.football-data.org/784.svg",
    },
    name: "Serie A",
    code: "SA",
    followedTeams: [1, 2, 3],
  },
  {
    area: {
      id: 2088,
      name: "Germany",
      code: "DEU",
      flag: "https://crests.football-data.org/759.svg",
    },
    name: "Bundesliga",
    code: "BL1",
    followedTeams: [1, 2, 3],
  },
  {
    area: {
      id: 2224,
      name: "Spain",
      code: "ESP",
      flag: "https://crests.football-data.org/760.svg",
    },
    name: "Primera Division",
    code: "PD",
    followedTeams: [1, 2, 3],
  },
];

const counterSlice = createSlice({
  name: "Competitions",
  initialState: {
    value: 0,
    competitions,
  },
  reducers: {
    incremented: (state) => {
      state.value += 2;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export const { incremented, decremented } = counterSlice.actions;
export const counterSliceReducer = counterSlice.reducer;
