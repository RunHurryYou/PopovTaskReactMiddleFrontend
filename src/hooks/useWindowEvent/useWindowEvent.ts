import { useEffect } from 'react';
import type { IUseWindowOptions } from '../../types/hook.types';

const useWindowEvent = (type: string, listener: EventListener, options: Partial<IUseWindowOptions>) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener, options]);
}

export default useWindowEvent