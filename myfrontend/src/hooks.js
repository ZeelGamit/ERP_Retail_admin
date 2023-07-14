import { useEffect } from 'react';

export const useOnClickOutSide = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      // BurgerとMenuを囲むdiv（を包括する要素）以外をクリックした場合は何もしない
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};