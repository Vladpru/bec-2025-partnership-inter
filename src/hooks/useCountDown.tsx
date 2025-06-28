import { useEffect, useState } from 'react';

export const useCountdown = (targetDate: Date) => {
  const countDownDate = targetDate.getTime();
  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  const getReturnValues = (millis: number) => {
    const totalSeconds = Math.floor(millis / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return [days, hours, minutes, seconds];
  };

  return getReturnValues(countDown);
};
