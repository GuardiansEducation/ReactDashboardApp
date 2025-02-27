import { useState, useEffect } from 'react';
import { apiThrottledKey } from '@constants';

export type ApiThrottlingInfo = {
  isApiThrottled: boolean;
  waitingTime: number;
};

const getApiThrottlingFlag = (): boolean => {
  const isApiThrottled = sessionStorage.getItem(apiThrottledKey);
  return Boolean(isApiThrottled);
};

export const useApiThrottlingInfo = (): ApiThrottlingInfo => {
  const [isApiThrottled, setIsApiThrottled] = useState<boolean>(false);
  const [waitingTime, setWaitingTime] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const isApiThrottled = getApiThrottlingFlag();
      setWaitingTime(prev => prev + 1);
      setIsApiThrottled(isApiThrottled);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return {
    isApiThrottled,
    waitingTime,
  };
};
