import { useState } from 'react';
import { useWindowEvent } from '../useWindowEvent';
import { useThrottle } from '../useThrottle';

const useViewportSize = (throttlesMs = 100) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const throttledSetSize = useThrottle(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, throttlesMs);

  useWindowEvent('resize', throttledSetSize, { passive: true });

  return {
    width: width,
    height: height
  }
}

export default useViewportSize