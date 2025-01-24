import { SubscribedCompetition, SubscribedArea, CompetitionListItem } from "@types";
import SubscribedAreaFactory from "./subscribedAreaFactory";

class SubscribedCompetitionFactory {
  create(competition: CompetitionListItem): SubscribedCompetition {
    const area: SubscribedArea = SubscribedAreaFactory.createFromCompetitionArea(competition.area);
    const result: SubscribedCompetition = {
      id: competition.id,
      code: competition.code,
      name: competition.name,
      area: area,
      teams: [],
    };

    return result;
  }
}

export default new SubscribedCompetitionFactory();
