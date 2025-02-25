import axios, { AxiosInstance } from "axios";
import { setupCache, buildWebStorage } from 'axios-cache-interceptor';
import rateLimit from 'axios-rate-limit';

const token = FOOTBALL_API_TOKEN;

const baseApi: AxiosInstance = axios.create({
  headers: {
    "X-Auth-Token": `${token}`,
  },
  maxRedirects: 0,
});

const cachedApi: AxiosInstance = setupCache(baseApi, {
  storage: buildWebStorage(sessionStorage, 'axios-cache:')
}) as unknown as AxiosInstance;

const rateLimitedApi: AxiosInstance = rateLimit(cachedApi, {
  maxRequests: 10,
  perMilliseconds: 60000,
});

export default rateLimitedApi;
