import { useEffect } from 'react';

export function useOnMount(init, delay) {
  useEffect(() => {
    if (delay) {
      setTimeout(() => {
        init();
      }, delay);
    } else {
      init();
    }
  }, []);
}
