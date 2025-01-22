import { CurrentSeason } from "./CurrentSeason";
import { CompetitionArea } from "./CompetitionArea";
import { Season } from "./Season";

export interface Competition {
  area: CompetitionArea;
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
  currentSeason: CurrentSeason;
  seasons: Season[];
  lastUpdated: string;
}
