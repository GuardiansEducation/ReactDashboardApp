import { AxiosInstance } from "axios";
import { TeamList, TeamListItem, TeamMatches } from "@types";
import api from "./footballApi";

class TeamService {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  async listCompetitionTeams(competitionId: number): Promise<TeamList> {
    const response = await this.instance.get<TeamList>(`/competitions/${competitionId}/teams`);

    return response.data;
  }

  async getTeamInfo(teamId: number): Promise<TeamListItem> {
    const response = await this.instance.get<TeamListItem>(`/teams/${teamId}`);

    return response.data;
  }

  async getTeamMatches(teamId: number): Promise<TeamMatches> {
    const response = await this.instance.get<TeamMatches>(`/teams/${teamId}/matches`);

    return response.data;
  }
}

export default new TeamService(api);
