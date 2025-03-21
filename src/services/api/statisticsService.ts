import { AxiosInstance } from "axios";
import { CompetitionScorers } from "@types";
import api from "./footballApi";
import { createRequestParams } from "./infrastructure/requestUtils";

class StatisticsService {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  async get(id: string): Promise<CompetitionScorers> {
    const { path, config } = createRequestParams(`competitions/${id}/scorers?limit=300`);
    const response = await this.instance.get<CompetitionScorers>(path, config);

    return response.data;
  }

  async getBySeason(id: string, season: string): Promise<CompetitionScorers> {
    const { path, config } = createRequestParams(`competitions/${id}/scorers?limit=300&season=${season}`);
    const response = await this.instance.get<CompetitionScorers>(path, config);

    return response.data;
  }
}

export default new StatisticsService(api);
