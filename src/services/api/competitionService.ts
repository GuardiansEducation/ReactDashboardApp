import { AxiosInstance } from "axios";
import { Competition, CompetitionList } from "@types";
import api from "./footballApi";
import { createRequestParams } from "./infrastructure/requestUtils";

class CompetitionService {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  async get(id: number): Promise<Competition> {
    const { path, config } = createRequestParams(`competitions/${id}`);
    const response = await this.instance.get<Competition>(path, config);

    return response.data;
  }

  async listAreaCompetitions(areaId: number): Promise<CompetitionList> {
    const { path, config } = createRequestParams(`competitions?areas=${areaId}`);
    const response = await this.instance.get<CompetitionList>(path, config);

    return response.data;
  }
}

export default new CompetitionService(api);
