import styled, { css } from 'styled-components';
import { DialogProps, SizeType } from './types';

export const DialogContainter = styled.div`
  position: fixed;
  inset: 0px;

  min-height: 100vh;
  width: 100vw;

  overflow: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 16000;
`;

export const Backdrop = styled.div`
  position: fixed;
  inset: 0px;
  background-color: ${({ theme }) => theme.colors.gray50};
`;

export const DialogContent = styled.div<{
  bgColor: DialogProps['bgColor'];
  size: SizeType;
}>`
  position: relative;
  background-color: ${({ bgColor, theme }) => bgColor || theme.colors.white};
  border-radius: ${({ size }) => (size !== 'full' ? '4px' : '0px')};
  z-index: 16000;
  ${({ size }) =>
    ({
      xs: css`
        width: 25vw;
      `,
      s: css`
        width: 45vw;
      `,
      m: css`
        width: 60vw;
      `,
      l: css`
        width: 80vw;
      `,
      full: css`
        height: 100vh;
        width: 100vw;
      `,
    }[size])};
`;
