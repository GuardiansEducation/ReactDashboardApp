import { TeamListItem, FrontEndTeam } from "@types";

class TeamFactory {
  create(team: TeamListItem): FrontEndTeam {
    return {
      name: team.shortName,
      logo: team.crest,
      id: team.id,
    };
  }
}

export default new TeamFactory();
