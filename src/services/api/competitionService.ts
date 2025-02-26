import { AxiosInstance } from "axios";
import { Competition, CompetitionList } from "@types";
import api from "./footballApi";

class CompetitionService {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
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

export default new CompetitionService(api);
