import { StatisticsCompetition } from "./StatisticsCompetition";
import { Scorer } from "./Scorer";
import { ScorerFilters } from "./ScorerFilters";
import { Season } from "./Season";

export interface CompetitionScorers {
  count: number;
  filters: ScorerFilters;
  competition: StatisticsCompetition;
  season: Season;
  scorers: Scorer[];
}
