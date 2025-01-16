import { AxiosInstance } from "axios";
import { RootObject } from "@types";
import api from "./footballApi";

class CompetitionService {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  async get(id: string = "PL"): Promise<RootObject> {
    const response = await this.instance.get<RootObject>(
      `/football/competitions/${id}`
    );

    return response.data;
  }
}

export default new CompetitionService(api);
