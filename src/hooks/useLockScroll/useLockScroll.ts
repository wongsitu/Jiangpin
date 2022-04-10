import { useLayoutEffect } from 'react';

const useLockScroll = ({ lockWhen }: { lockWhen: boolean }) => {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (lockWhen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalStyle;
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [lockWhen]);
};

export default useLockScroll;
