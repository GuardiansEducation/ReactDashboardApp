import { StandingsFilters } from "./StandingsFilters";
import { StandingsArea } from "./StandingsArea";
import { StandingsCompetition } from "./StandingsCompetition";
import { StandingsSeason } from "./StandingsSeason";
import { Standings } from "./Standings";

export interface CompetitionStandings {
  filters: StandingsFilters;
  area: StandingsArea;
  competition: StandingsCompetition;
  season: StandingsSeason;
  standings: Standings[];
}
