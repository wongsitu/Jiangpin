import { useCallback, useEffect } from 'react';
import { useClickAwayProps } from './types';

const useClickAway = ({
  onClickAway,
  ref,
  mountListenersWhen,
}: useClickAwayProps) => {
  const onClickOutside = useCallback(
    (event: Event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        onClickAway
      ) {
        onClickAway();
      }
    },
    [onClickAway, ref],
  );

  const onKeyDown = useCallback(
    e => {
      if (e.key === 'Escape' && onClickAway) {
        onClickAway();
      }
    },
    [onClickAway],
  );

  useEffect(() => {
    if (mountListenersWhen) {
      document.addEventListener('keydown', onKeyDown, true);
      document.addEventListener('mousedown', onClickOutside, true);
      document.addEventListener('touchstart', onClickOutside, true);
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown, true);
      document.removeEventListener('mousedown', onClickOutside, true);
      document.removeEventListener('touchstart', onClickOutside, true);
    };
  }, [mountListenersWhen, onClickOutside, onKeyDown]);
};

export default useClickAway;
