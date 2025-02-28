import { AxiosInstance } from "axios";
import { TeamList, TeamListItem, TeamMatches } from "@types";
import api from "./footballApi";

class TeamService {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  async listCompetitionTeams(competitionId: number): Promise<TeamList> {
    const url = encodeURI(`competitions/${competitionId}/teams`);
    console.log(url);
    const response = await this.instance.get<TeamList>("", { params: { url } });
    console.log(response);
    return response.data;
  }

  async getTeamInfo(teamId: number): Promise<TeamListItem> {
    const url = encodeURI(`teams/${teamId}`);
    const response = await this.instance.get<TeamListItem>("", { params: { url } });

    return response.data;
  }

  async getTeamMatches(teamId: number): Promise<TeamMatches> {
    const url = encodeURI(`teams/${teamId}/matches`);
    const response = await this.instance.get<TeamMatches>("", { params: { url } });

    return response.data;
  }
}

export default new TeamService(api);
