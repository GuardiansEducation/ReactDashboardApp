import { cachedApi } from "./footballApi";
import { CompetitionStandings } from "../../types/api/Standings";
import { AxiosCacheInstance } from "axios-cache-interceptor";

class StandingsService {
  private instance: AxiosCacheInstance;

  constructor(instance: AxiosCacheInstance) {
    this.instance = instance;
  }

  async getBySeason(id: string, season: string): Promise<CompetitionStandings> {
    const response = await this.instance.get<CompetitionStandings>(
      `/football/competitions/${id}/standings?season=${season}`
    );

    return response.data;
  }
}

export default new StandingsService(cachedApi);
