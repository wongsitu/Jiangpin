import React, { useEffect, useState, useCallback, forwardRef } from 'react';

import { PresenceProps } from './types';

// eslint-disable-next-line react/display-name
const Presence = forwardRef<HTMLDivElement, PresenceProps>(
  (
    {
      children,
      mounted,
      onClose,
      mountedStyles,
      unmountedStyles,
      'data-testid': dataTestId,
      baseStyles,
    },
    ref,
  ) => {
    const [{ show, style }, setStyles] = useState({
      show: false,
      style: {
        ...unmountedStyles,
      },
    });

    const mountStyle = useCallback(() => {
      setTimeout(() => {
        setStyles(state => ({
          ...state,
          show: true,
          style: {
            ...state.style,
            ...mountedStyles,
          },
        }));
      }, 0);
    }, [mountedStyles]);

    const unmountStyle = useCallback(() => {
      setStyles(state => ({
        ...state,
        style: {
          ...state.style,
          ...unmountedStyles,
        },
      }));
    }, [unmountedStyles]);

    const transitionEnd = () => {
      if (!mounted) {
        setStyles(state => ({
          ...state,
          show: false,
        }));
        if (onClose) {
          onClose();
        }
      }
    };

    useEffect(() => {
      if (mounted) {
        mountStyle();
      } else {
        unmountStyle();
      }
    }, [mountStyle, mounted, unmountStyle]);

    return mounted || show ? (
      <div
        data-testid={dataTestId}
        style={{ ...baseStyles, ...style }}
        onTransitionEnd={transitionEnd}
        className="transition-all duration-200 ease-in"
        ref={ref}
      >
        {children}
      </div>
    ) : null;
  },
);

export default Presence;
