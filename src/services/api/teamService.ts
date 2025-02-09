import { TeamList, TeamListItem } from "@types";
import { cachedApi } from "./footballApi";
import { AxiosCacheInstance } from "axios-cache-interceptor";

class TeamService {
  private instance: AxiosCacheInstance;

  constructor(instance: AxiosCacheInstance) {
    this.instance = instance;
  }

  async listCompetitionTeams(competitionId: string): Promise<TeamList> {
    const response = await this.instance.get<TeamList>(
      `/football/competitions/${competitionId}/teams`
    );

    return response.data;
  }

  async getTeamInfo(teamId: number): Promise<TeamListItem> {
    const response = await this.instance.get<TeamListItem>(
      `/football/teams/${teamId}`
    );

    return response.data;
  }
}

export default new TeamService(cachedApi);
