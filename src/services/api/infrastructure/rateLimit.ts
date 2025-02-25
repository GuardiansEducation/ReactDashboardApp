import { InternalAxiosRequestConfig } from "axios";

let lastInvocationTime: number | undefined = undefined;

let requestCount = 0;
const maxRequests = 10;
const intervalPerMilliseconds = 60000;

const requestQueue: Array<() => void> = [];

const processQueue = () => {
  if (requestQueue.length <= 0) {
    return;
  }

  const now = Date.now();
  const timeSinceLastInvocation = lastInvocationTime ? now - lastInvocationTime : intervalPerMilliseconds + 1;

  if (timeSinceLastInvocation > intervalPerMilliseconds) {
    requestCount = 0;
    lastInvocationTime = now;
  }

  if (requestCount >= maxRequests) {
    const delay = intervalPerMilliseconds - timeSinceLastInvocation;
    setTimeout(processQueue, delay);
    return;
  }

  requestCount++;
  lastInvocationTime = now;
  const nextRequest = requestQueue.shift();
  nextRequest!();
};

export const rateLimitInterceptor = (config: InternalAxiosRequestConfig) => {
  return new Promise<InternalAxiosRequestConfig>((resolve) => {
    requestQueue.push(() => resolve(config));
    processQueue();
  });
};
