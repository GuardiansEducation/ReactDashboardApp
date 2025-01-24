import { TeamCompetition } from "./TeamCompetition";
import { TeamListItem } from "./TeamListItem";
import { TeamSeason } from "./TeamSeason";

export interface TeamList {
  count: number;
  season: TeamSeason;
  competition: TeamCompetition;
  teams: TeamListItem[];
}
