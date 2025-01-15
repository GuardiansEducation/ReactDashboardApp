import { Winner } from "./Winner";

export interface Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: null | number;
  winner: Winner | null;
}
