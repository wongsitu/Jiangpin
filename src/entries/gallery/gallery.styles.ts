import styled, { keyframes, css } from 'styled-components';

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

const animationDuration = 3;

function createCSS(images: number) {
  let styles = '';

  for (let i = 1; i < images; i += 1) {
    styles += `
      .image${i} {
        animation-delay: ${`-${i * animationDuration}s`};
        -webkit-animation-delay: ${`-${i * animationDuration}s`};
      }
    `;
  }

  return css`
    ${styles}
  `;
}

export const ImageContainer = styled.div<{ images: number }>`
  img {
    -webkit-animation-name: ${fade};
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-duration: ${({ images }) =>
      `${images * animationDuration}s`};
    animation-name: ${fade};
    animation-iteration-count: infinite;
    animation-duration: ${({ images }) => `${images * animationDuration}s`};
  }

  ${({ images }) => createCSS(images)}

  height: 100%;
  width: 100%;
`;

export const AlbumContainer = styled.div`
  cursor: pointer;
`;

export const Background = styled.div`
  background: linear-gradient(
    rgba(24, 27, 50, 0.3) 0%,
    rgba(28, 28, 35, 0.5) 100%
  );

  .album-text {
    opacity: 0;
    transition: all 0.25s ease-in-out;
    -moz-transition: all 0.25s ease-in-out;
    -webkit-transition: all 0.25s ease-in-out;
  }

  &:hover {
    .album-text {
      opacity: 1;
    }
  }
`;
