import { Area } from "./Area";
import { CurrentSeason } from "./CurrentSeason";
import { Season } from "./Season";

export interface RootObject {
  area: Area;
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
  currentSeason: CurrentSeason;
  seasons: Season[];
  lastUpdated: string;
}
