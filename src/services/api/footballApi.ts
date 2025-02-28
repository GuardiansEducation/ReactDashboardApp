import axios, { AxiosInstance } from "axios";
import {
  cachingRequestInterceptor,
  cachingResponseErrorInterceptor,
  cachingResponseInterceptor,
} from "./infrastructure/caching";
import { rateLimitInterceptor } from "./infrastructure/rateLimit";

// const baseApiUrl = IS_PRODUCTION ? `${FOOTBALL_API_BASE_URL}v4` : "/football";

const baseApi: AxiosInstance = axios.create({
  baseURL: "https://0z1w0cmaoh.execute-api.eu-central-1.amazonaws.com/football/api",
  maxRedirects: 0,
});

baseApi.interceptors.request.use(rateLimitInterceptor);
baseApi.interceptors.request.use(cachingRequestInterceptor);

baseApi.interceptors.response.use(cachingResponseInterceptor, cachingResponseErrorInterceptor);

export default baseApi;
