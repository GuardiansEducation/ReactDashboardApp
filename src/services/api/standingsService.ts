import { AxiosInstance } from "axios";
import api from "./footballApi";
import { CompetitionStandings } from "../../types/api/Standings";

class StandingsService {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  async get(id: string): Promise<CompetitionStandings> {
    const response = await this.instance.get<CompetitionStandings>(
      `/football/competitions/${id}/standings`
    );

    return response.data;
  }

  async getBySeason(id: string, season: string): Promise<CompetitionStandings> {
    const response = await this.instance.get<CompetitionStandings>(
      `/football/competitions/${id}/standings?season=${season}`
    );

    return response.data;
  }
}

export default new StandingsService(api);
