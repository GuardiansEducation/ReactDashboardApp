import { Player } from "./Player";
import { Team } from "./Team";

export interface Scorer {
  player: Player;
  team: Team;
  goals: number;
  assists: null | number;
  penalties: null | number;
}
