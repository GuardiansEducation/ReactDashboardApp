import { AxiosRequestConfig } from "axios";

type CustomAxiosRequestParams = {
  path: string
  config: AxiosRequestConfig
}

export const createRequestParams = (path: string): CustomAxiosRequestParams => {
  const isProduction = process.env.NODE_ENV === "production";

  const resultPath = isProduction ? "" : path;
  let resultConfig: AxiosRequestConfig = {};

  if (isProduction) {
    const encodedPath = encodeURI(path)

    resultConfig = {
      params: { url: encodedPath }
    }
  }

  return {
    path: resultPath,
    config: resultConfig
  }
};
