import { SubscribedArea } from "./SubscribedArea";
import { SubscribedCompetition } from "./SubscribedCompetition";

export interface Subscription {
  id: number;
  area: SubscribedArea;
  competition: SubscribedCompetition;
}
