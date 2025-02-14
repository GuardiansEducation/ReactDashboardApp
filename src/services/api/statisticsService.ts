import { CompetitionScorers } from "@types";
import { cachedApi } from "./footballApi";
import { AxiosCacheInstance } from "axios-cache-interceptor";

class StatisticsService {
  private instance: AxiosCacheInstance;

  constructor(instance: AxiosCacheInstance) {
    this.instance = instance;
  }

  async get(id: string): Promise<CompetitionScorers> {
    const response = await this.instance.get<CompetitionScorers>(
      `/football/competitions/${id}/scorers?limit=300`
    );

    return response.data;
  }

  async getBySeason(id: string, season: string): Promise<CompetitionScorers> {
    const response = await this.instance.get<CompetitionScorers>(
      `/football/competitions/${id}/scorers?limit=300&season=${season}`
    );

    return response.data;
  }
}

export default new StatisticsService(cachedApi);
