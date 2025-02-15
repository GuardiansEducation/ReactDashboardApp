import { StandingsInfoTeam } from "./StandingsInfoTeam";

export interface StandingsInfo {
  position: number;
  team: StandingsInfoTeam;
  playedGames: number;
  form: string;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}
