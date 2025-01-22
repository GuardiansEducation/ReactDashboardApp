import { CompetitionStandingItem } from "../CompetitionStandings/CompetitionStandingItem";
import { CompetitionMatchesFilters } from "./CompetitionMatchesFilters";
import { ResultSet } from "./ResultSet";

export interface CompetitionMatches {
  filters: CompetitionMatchesFilters;
  resultSet: ResultSet;
  competition: CompetitionStandingItem;
  matches: Match[];
}
