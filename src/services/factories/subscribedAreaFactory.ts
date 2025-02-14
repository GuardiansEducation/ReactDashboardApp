import { SubscribedArea, CompetitionArea } from "@types";

class SubscribedAreaFactory {
  createFromName(id: number, name: string): SubscribedArea {
    const result: SubscribedArea = {
      id,
      name,
      code: "",
      flag: "",
    };

    return result;
  }

  createFromCompetitionArea(area: CompetitionArea): SubscribedArea {
    const result: SubscribedArea = {
      id: area.id,
      code: area.code,
      name: area.name,
      flag: area.flag ?? "",
    };

    return result;
  }
}

export default new SubscribedAreaFactory();
