import { TeamListItem, Team } from "@types";

class TeamFactory {
  create(team: TeamListItem): Team {
    return {
      name: team.shortName,
      logo: team.crest,
      id: team.id,
    };
  }
}

export default new TeamFactory();
