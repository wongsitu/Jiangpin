import styled, { keyframes } from 'styled-components';

export const fade = keyframes`
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
  img {
    -webkit-animation-name: ${fade};
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-duration: 7.5s;
    animation-name: ${fade};
    animation-iteration-count: infinite;
    animation-duration: 7.5s;
  }

  .image1 {
    animation-delay: -7.5s;
    -webkit-animation-delay: -7.5s;
  }

  .image2 {
    animation-delay: -5s;
    -webkit-animation-delay: -5s;
  }
  .image3 {
    animation-delay: -2.5s;
    -webkit-animation-delay: -2.5s;
  }
`;
