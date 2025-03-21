import { AxiosInstance } from "axios";
import { TeamList, TeamListItem, TeamMatches } from "@types";
import api from "./footballApi";
import { createRequestParams } from "./infrastructure/requestUtils";

class TeamService {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  async listCompetitionTeams(competitionId: number): Promise<TeamList> {
    const { path, config } = createRequestParams(`competitions/${competitionId}/teams`);
    const response = await this.instance.get<TeamList>(path, config);
    return response.data;
  }

  async getTeamInfo(teamId: number): Promise<TeamListItem> {
    const { path, config } = createRequestParams(`teams/${teamId}`);
    const response = await this.instance.get<TeamListItem>(path, config);

    return response.data;
  }

  async getTeamMatches(teamId: number): Promise<TeamMatches> {
    const { path, config } = createRequestParams(`teams/${teamId}/matches`);
    const response = await this.instance.get<TeamMatches>(path, config);

    return response.data;
  }
}

export default new TeamService(api);
