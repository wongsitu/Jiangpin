import { ReactNode } from 'react';
import { CSSProperties } from 'styled-components';

export type PresenceProps = {
  mounted?: boolean;
  onClose?: () => void;
  mountedStyles?: CSSProperties;
  unmountedStyles?: CSSProperties;
  children: ReactNode;
  'data-testid'?: string;
  baseStyles?: CSSProperties;
};
