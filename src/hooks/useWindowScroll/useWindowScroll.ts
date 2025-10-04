import { useState } from 'react';
import { useWindowEvent } from '../useWindowEvent';
import { useThrottle } from '../useThrottle';
import type { IUseWindowScroll } from '../../types/hook.types';

const useWindowScroll = (): IUseWindowScroll => {
  const [x, setX] = useState(window.scrollX);
  const [y, setY] = useState(window.scrollY);

  const scrollTo = ({ x, y }: { x?: number, y?: number }): void => {
    if (x)
      setX(x);
    if (y)
      setY(y);
    window.scrollTo({
      top: y,
      left: x,
      behavior: 'smooth'
    });
  }

  const throttledSetScroll = useThrottle(() => {
    setX(window.scrollX);
    setY(window.scrollY);
  }, 100);


  useWindowEvent('scroll', throttledSetScroll, { passive: true });

  return [
    { x: x, y: y },
    scrollTo
  ]
}

export default useWindowScroll