import React, { FC, useRef } from 'react';
import ReactDOM from 'react-dom';

import useClickAway from '@/src/hooks/useClickAway';
import useLockScroll from '@/src/hooks/useLockScroll';

import { Presence } from '../Presence';
import { Backdrop, DialogContainter, DialogContent } from './Dialog.styles';
import { DialogProps } from './types';

const Dialog: FC<DialogProps> = ({
  open,
  as,
  size = 'm',
  bgColor,
  onDismiss,
  onFadeOut,
  children,
  className,
  ignoreClickAway,
  ignoreLockScroll,
  'data-testid': datatestId,
  hideBackdrop,
}) => {
  const dialogRef = useRef(null);

  useLockScroll({ lockWhen: !!open && !ignoreLockScroll });
  useClickAway({
    mountListenersWhen: !!open && !ignoreClickAway,
    onClickAway: onDismiss,
    ref: dialogRef,
  });

  return ReactDOM.createPortal(
    <Presence
      mounted={!!open}
      onClose={onFadeOut}
      baseStyles={{ opacity: 0 }}
      mountedStyles={{ opacity: 1 }}
      unmountedStyles={{ opacity: 0 }}
    >
      <DialogContainter role="dialog" tabIndex={-1} data-testid={datatestId}>
        {!hideBackdrop && (
          <Backdrop
            data-testid={datatestId ? `${datatestId}-backdrop` : undefined}
          />
        )}
        <DialogContent
          size={size}
          bgColor={bgColor}
          ref={dialogRef}
          className={className}
          as={as}
        >
          {children}
        </DialogContent>
      </DialogContainter>
    </Presence>,
    document.body,
  );
};

export default Dialog;
