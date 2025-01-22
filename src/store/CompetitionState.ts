import { AreaState } from "./AreaState";

export interface CompetitionState {
  area: AreaState;
  name: string;
  code: string;
  followedTeams: [number, number, number];
}
