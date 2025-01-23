import { CompetitionStandingItem } from "../CompetitionStandings/CompetitionStandingItem";
import { CompetitionMatchesFilters } from "./CompetitionMatchesFilters";
import { ResultSet } from "./ResultSet";
import { Match } from "./Match";

export interface CompetitionMatches {
  filters: CompetitionMatchesFilters;
  resultSet: ResultSet;
  competition: CompetitionStandingItem;
  matches: Match[];
}
