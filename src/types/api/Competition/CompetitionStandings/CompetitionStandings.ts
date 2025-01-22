import { CompetitionArea } from "../CompetitionArea";
import { Season } from "../Season";
import { CompetitionStandingItem } from "./CompetitionStandingItem";
import { CompetitionStandingsFilters } from "./CompetitionStandingsFilters";
import { Standing } from "./Standing";

export interface CompetitionStandings {
  filters: CompetitionStandingsFilters;
  area: CompetitionArea;
  competition: CompetitionStandingItem;
  season: Season;
  standings: Standing[];
}
