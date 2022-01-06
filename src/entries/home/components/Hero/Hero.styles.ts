import styled, { keyframes } from 'styled-components';

export const HeroContainer = styled.div`
  background: linear-gradient(
    rgba(24, 27, 50, 0.2) 0%,
    rgba(28, 28, 35, 0.5) 100%
  );
`;

const slideIn = keyframes`
  from {
    transform: translateX(-10%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const StyledIntroCard = styled.div`
  animation: ${slideIn} 700ms ease-in-out;
`;
