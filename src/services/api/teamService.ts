import { AxiosInstance } from "axios";
import { TeamList, TeamListItem, TeamMatches } from "@types";
import api from "./footballApi";

class TeamService {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  async listCompetitionTeams(competitionId: number): Promise<TeamList> {
    const url = encodeURI(`/competitions/${competitionId}/teams`);
    const response = await this.instance.get<TeamList>(`?url=${url}`);

    return response.data;
  }

  async getTeamInfo(teamId: number): Promise<TeamListItem> {
    const url = encodeURI(`/teams/${teamId}`);
    const response = await this.instance.get<TeamListItem>(`?url=${url}`);

    return response.data;
  }

  async getTeamMatches(teamId: number): Promise<TeamMatches> {
    const url = encodeURI(`/teams/${teamId}/matches`);
    const response = await this.instance.get<TeamMatches>(`url=${url}`);

    return response.data;
  }
}

export default new TeamService(api);
