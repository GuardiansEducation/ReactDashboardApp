import { Subscription } from "./Subscription";
import { SubscribedCompetition } from "./SubscribedCompetition";

export interface SubscriptionStore {
  subscriptions: Subscription[];
  selectedOverviewCompetition?: SubscribedCompetition;
}
