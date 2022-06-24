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
  /* align-items: center; */
  padding-top: auto;
  padding-bottom: auto;

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
  background-color: ${({ bgColor, theme }) => bgColor || theme.colors.white};
  border-radius: ${({ size }) => (size !== 'full' ? '4px' : '0px')};
  z-index: 16000;
  margin-top: auto;
  margin-bottom: auto;
  ${({ size }) =>
    ({
      xs: css`
        max-width: 35vw;
      `,
      s: css`
        max-width: 45vw;
      `,
      m: css`
        max-width: 60vw;
      `,
      l: css`
        max-width: 80vw;
      `,
      full: css`
        height: 100vh;
        width: 100vw;
      `,
    }[size])};
`;
