import { TeamMatchFilters } from "./TeamMatchFilters";
import { TeamMatchResultSet } from "./TeamMatchResultSet";
import { TeamMatch } from "./TeamMatch";

export interface TeamMatches {
  filters: TeamMatchFilters;
  resultSet: TeamMatchResultSet;
  matches: TeamMatch[];
}
