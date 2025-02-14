import { TeamMatchFullTime } from "./TeamMatchFullTime";

export interface TeamMatchScore {
  winner: null | string;
  duration: string;
  fullTime: TeamMatchFullTime;
  halfTime: TeamMatchFullTime;
}
