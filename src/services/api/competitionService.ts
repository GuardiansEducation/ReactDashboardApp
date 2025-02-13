import { Competition, CompetitionList } from "@types";
import { cachedApi } from "./footballApi";
import { AxiosCacheInstance } from "axios-cache-interceptor";

class CompetitionService {
  private instance: AxiosCacheInstance;

  constructor(instance: AxiosCacheInstance) {
    this.instance = instance;
  }

  async get(id: number): Promise<Competition> {
    const response = await this.instance.get<Competition>(`/football/competitions/${id}`);

    return response.data;
  }

  async listAreaCompetitions(areaId: number): Promise<CompetitionList> {
    const response = await this.instance.get<CompetitionList>(
      `/football/competitions?areas=${areaId}`
    );

    return response.data;
  }
}

export default new CompetitionService(cachedApi);
