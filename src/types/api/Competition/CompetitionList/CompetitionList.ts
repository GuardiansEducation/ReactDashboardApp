import { CompetitionFilters } from "./CompetitionFilters";
import { CompetitionListItem } from "./CompetitionListItem";

export interface CompetitionList {
  count: number;
  filters: CompetitionFilters;
  competitions: CompetitionListItem[];
}
