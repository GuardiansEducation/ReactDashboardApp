import { AxiosInstance } from "axios";
import { TeamList } from "@types";
import api from "./footballApi";

class TeamService {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  async listCompetitionTeams(competitionId: string): Promise<TeamList> {
    const response = await this.instance.get<TeamList>(
      `/football/competitions/${competitionId}/teams`
    );

    return response.data;
  }
}

export default new TeamService(api);
