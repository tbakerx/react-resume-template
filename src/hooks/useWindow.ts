import {useEffect, useState} from 'react';

import {throttle} from '../utils/throttle';

interface WindowSize {
  width: number;
  height: number;
}

const useWindow = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  // Set size at the first client-side load
  useEffect(() => {
    const handleSize = throttle(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 100);

    window.addEventListener('resize', handleSize);
    handleSize();
    return () => {
      window.removeEventListener('resize', handleSize);
      handleSize.cancel();
    };
  }, []);

  return windowSize;
};

export default useWindow;
