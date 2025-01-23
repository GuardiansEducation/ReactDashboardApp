import { AxiosInstance } from "axios";
import { AreaList } from "@types";
import api from "./footballApi";

class AreasService {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  async list(): Promise<AreaList> {
    const response = await this.instance.get<AreaList>(`/football/areas`)
    return response.data
  }
}

export default new AreasService(api);
