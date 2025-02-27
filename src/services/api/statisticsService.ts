import { AxiosInstance } from "axios";
import { CompetitionScorers } from "@types";
import api from "./footballApi";

class StatisticsService {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  async get(id: string): Promise<CompetitionScorers> {
    const response = await this.instance.get<CompetitionScorers>(
      `/competitions/${id}/scorers?limit=300`
    );

    return response.data;
  }

  async getBySeason(id: string, season: string): Promise<CompetitionScorers> {
    const response = await this.instance.get<CompetitionScorers>(
      `/competitions/${id}/scorers?limit=300&season=${season}`
    );

    return response.data;
  }
}

export default new StatisticsService(api);
