import { SubscribedArea } from "./SubscribedArea";
import { SubscribedTeam } from "./SubscribedTeam";

export interface SubscribedCompetition {
  id: number;
  name: string;
  code: string;
  area: SubscribedArea;
  teams: SubscribedTeam[];
}
