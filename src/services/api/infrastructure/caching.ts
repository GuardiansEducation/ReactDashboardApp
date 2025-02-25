import { AxiosResponse, InternalAxiosRequestConfig } from "axios";

type CachedRejection = {
  config: InternalAxiosRequestConfig;
  cachedResponse: AxiosResponse;
};

const cacheKeyPrefix = 'axios-cache:';

const getCacheKey = (config: InternalAxiosRequestConfig) => {
  return `${cacheKeyPrefix}${config.method}:${config.url}`;
};

const setCache = (key: string, data: AxiosResponse) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};

const getCache = (key: string): AxiosResponse | undefined => {
  let result: AxiosResponse | undefined;

  const cachedData = sessionStorage.getItem(key);

  if (cachedData) {
    result = JSON.parse(cachedData);
  }

  return result;
};

export const cachingRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  const cacheKey = getCacheKey(config);
  const cachedResponse = getCache(cacheKey);

  if (cachedResponse) {
    const cachedRejection: CachedRejection = { config, cachedResponse };
    return Promise.reject(cachedRejection);
  }

  return config;
};

export const cachingResponseInterceptor = (response: AxiosResponse) => {
  const cacheKey = getCacheKey(response.config);
  setCache(cacheKey, response);

  return response;
};

export const cachingResponseErrorInterceptor = (error: CachedRejection) => {
  if (error.cachedResponse) {
    return Promise.resolve(error.cachedResponse);
  }

  return Promise.reject(error);
}
