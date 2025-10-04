import { useState } from 'react';

const useThrottle = (callback: () => void, ms: number) => {
  const [throttle, setThrottle] = useState(false);
  const throttled = () => {
    if (!throttle) {
      setThrottle(true);
      callback();
      setTimeout(() => setThrottle(false), ms);
    }
  }

  return throttled
}

export default useThrottle