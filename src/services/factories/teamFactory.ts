import { TeamListItem, SubscribedTeam } from "@types";

class TeamFactory {
  create(team: TeamListItem): SubscribedTeam {
    return {
      name: team.shortName,
      logo: team.crest,
      id: team.id,
    };
  }
}

export default new TeamFactory();
