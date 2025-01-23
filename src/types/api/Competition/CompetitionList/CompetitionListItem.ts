import { CompetitionArea } from "../CompetitionArea";
import { Season } from "../Season";

export interface CompetitionListItem {
  id: number;
  area: CompetitionArea;
  name: string;
  code: string;
  type: string;
  emblem: string;
  plan: string;
  currentSeason: Season;
  numberOfAvailableSeasons: number;
  lastUpdated: string;
}
