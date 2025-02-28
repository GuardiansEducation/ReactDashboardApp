import { AxiosInstance } from "axios";
import { CompetitionStandings } from "@types";
import api from "./footballApi";

class StandingsService {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  async get(id: string): Promise<CompetitionStandings> {
    const url = encodeURI(`/competitions/${id}/standings`);
    const response = await this.instance.get<CompetitionStandings>(`?url=${url}`);

    return response.data;
  }

  async getBySeason(id: string, season: string): Promise<CompetitionStandings> {
    const url = encodeURI(`/competitions/${id}/standings?season=${season}`);
    const response = await this.instance.get<CompetitionStandings>(`?url=${url}`);

    return response.data;
  }
}

export default new StandingsService(api);
