import { AxiosInstance } from "axios";
import { Competition, CompetitionList } from "@types";
import api from "./footballApi";

class CompetitionService {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  async get(id: number): Promise<Competition> {
    const url = encodeURI(`competitions/${id}`);
    const response = await this.instance.get<Competition>("", { params: { url } });

    return response.data;
  }

  async listAreaCompetitions(areaId: number): Promise<CompetitionList> {
    const url = encodeURI(`competitions?areas=${areaId}`);
    const response = await this.instance.get<CompetitionList>("", { params: { url } });

    return response.data;
  }
}

export default new CompetitionService(api);
