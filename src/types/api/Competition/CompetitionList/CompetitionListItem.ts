import { CompetitionArea } from "../CompetitionArea";
import { CurrentSeason } from "../CurrentSeason";

export interface CompetitionListItem {
  id: number;
  area: CompetitionArea;
  name: string;
  code: string;
  type: string;
  emblem: string;
  plan: string;
  currentSeason: CurrentSeason;
  numberOfAvailableSeasons: number;
  lastUpdated: string;
}
