import axios, { AxiosInstance } from "axios";
import {
  cachingRequestInterceptor,
  cachingResponseErrorInterceptor,
  cachingResponseInterceptor,
} from "./infrastructure/caching";
import { rateLimitInterceptor } from "./infrastructure/rateLimit";

const baseApi: AxiosInstance = axios.create({
  baseURL: FOOTBALL_API_PROXY_URL,
  maxRedirects: 0,
  headers: {
    "X-Auth-Token": `${FOOTBALL_API_TOKEN}`,
  },
});

baseApi.interceptors.request.use(rateLimitInterceptor);
baseApi.interceptors.request.use(cachingRequestInterceptor);

baseApi.interceptors.response.use(cachingResponseInterceptor, cachingResponseErrorInterceptor);

export default baseApi;
