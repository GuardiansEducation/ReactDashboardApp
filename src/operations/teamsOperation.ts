import { TeamService } from "@services";
import { Team } from "@types";
import { TeamFactory } from "@services";

class TeamsOperation {
  async execute(competitionId: number): Promise<Team[]> {
    const teams = await TeamService.listCompetitionTeams(competitionId);
    return teams.teams.map((t) => TeamFactory.create(t));
  }
}

export default new TeamsOperation();
