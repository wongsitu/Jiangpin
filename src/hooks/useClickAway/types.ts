import { MutableRefObject } from 'react';

export type useClickAwayProps = {
  onClickAway?: (event?: Event) => void;
  mountListenersWhen: boolean;
  ref: MutableRefObject<Element | null>;
};
