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

const fade = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  33% {
    opacity: 1;
  }
  53% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const HeroBackgroundContainer = styled.div`
  height: 90vh;
  img {
    position: absolute;
    top: 0;
    -webkit-animation-name: ${fade};
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-duration: 9s;
    animation-name: ${fade};
    animation-iteration-count: infinite;
    animation-duration: 9s;
  }

  #banner2 {
    animation-delay: -6s;
    -webkit-animation-delay: -6s;
    background-color: yellow;
  }
  #banner3 {
    animation-delay: -3s;
    -webkit-animation-delay: -3s;
  }
`;
