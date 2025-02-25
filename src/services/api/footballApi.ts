import axios, { AxiosInstance } from "axios";
import { cachingRequestInterceptor, cachingResponseErrorInterceptor, cachingResponseInterceptor } from "./infrastructure/caching";
import { rateLimitInterceptor } from "./infrastructure/rateLimit";

const token = FOOTBALL_API_TOKEN;

const baseApi: AxiosInstance = axios.create({
  headers: {
    "X-Auth-Token": `${token}`,
  },
  maxRedirects: 0,
});

baseApi.interceptors.request.use(rateLimitInterceptor);
baseApi.interceptors.request.use(cachingRequestInterceptor);

baseApi.interceptors.response.use(cachingResponseInterceptor, cachingResponseErrorInterceptor)

export default baseApi;
