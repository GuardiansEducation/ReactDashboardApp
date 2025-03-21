import { AxiosInstance } from "axios";
import { CompetitionStandings } from "@types";
import api from "./footballApi";
import { createRequestParams } from "./infrastructure/requestUtils";

class StandingsService {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  async get(id: string): Promise<CompetitionStandings> {
    const { path, config } = createRequestParams(`competitions/${id}/standings`);
    const response = await this.instance.get<CompetitionStandings>(path, config);

    return response.data;
  }

  async getBySeason(id: string, season: string): Promise<CompetitionStandings> {
    const { path, config } = createRequestParams(`competitions/${id}/standings?season=${season}`);
    const response = await this.instance.get<CompetitionStandings>(path, config);

    return response.data;
  }
}

export default new StandingsService(api);
