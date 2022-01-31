import styled, { keyframes } from 'styled-components';

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

export const AlbumContainer = styled.div`
  cursor: pointer;

  background: linear-gradient(
    rgba(24, 27, 50, 0.2) 0%,
    rgba(28, 28, 35, 0.5) 100%
  );

  img {
    -webkit-animation-name: ${fade};
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-duration: 9s;
    animation-name: ${fade};
    animation-iteration-count: infinite;
    animation-duration: 9s;
  }

  .image1 {
    animation-delay: -9s;
    -webkit-animation-delay: -9s;
  }

  .image2 {
    animation-delay: -6s;
    -webkit-animation-delay: -6s;
  }
  .image3 {
    animation-delay: -3s;
    -webkit-animation-delay: -3s;
  }

  .album-text {
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    -moz-transition: opacity 300ms ease-in-out;
    -webkit-transition: opacity 300ms ease-in-out;
  }

  &:hover {
    .album-text {
      opacity: 1;
    }
  }
`;
