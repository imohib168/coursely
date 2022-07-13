import { useEffect, useRef } from 'react';

export const useOutsideClick = (callback) => {
  const ref = useRef(); 

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.addEventListener('click', handleClick, true);
    };
  }, [callback, ref]);

  return ref;
};
