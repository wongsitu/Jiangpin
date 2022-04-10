import { ElementType } from 'react';

export type SizeType = 'xs' | 's' | 'm' | 'l' | 'full';

export type Size = SizeType;

export type DialogProps = {
  /**
   * Optional value: Changes the html tag of the component
   */
  as?: ElementType;
  /**
   * Optional value: allows toggling the dialog
   */
  open?: boolean;
  /**
   * Optional value: Takes a function that changes the state of open prop. For example:
   * ```tsx
   *
   * const [open, setOpen] = useState(false);
   *
   * <Dialog open={open} onDismiss={() => setOpen(false)}/>
   *
   * ```
   */
  onDismiss?: () => void;
  /**
   * Optional value: Function that will run after dialog fades out
   */
  onFadeOut?: () => void;
  className?: string;
  /**
   * Optional value: Prevents from closing if user clicks outside
   */
  ignoreClickAway?: boolean;
  /**
   * Optional value: Ignores lock scrolling when component mounts
   */
  ignoreLockScroll?: boolean;
  /**
   * Optional value: Allows to reference the component for testing purposes
   */
  'data-testid'?: string;
  /**
   * Optional value: Hides backdrop
   */
  hideBackdrop?: boolean;
  /**
   * Optional value: Specifies the size of the dialog component
   */
  size?: Size;
  bgColor?: string;
};
