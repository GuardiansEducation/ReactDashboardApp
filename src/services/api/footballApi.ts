import axios from "axios";
import { setupCache } from 'axios-cache-interceptor';

const token = FOOTBALL_API_TOKEN;

const api = axios.create({
  // baseURL: `${base_uri}`,
  headers: {
    "X-Auth-Token": `${token}`,
  },
  maxRedirects: 0,
});

const cachedApi = setupCache(api)

export default api;
export { api, cachedApi };
