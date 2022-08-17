import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(
    rgba(24, 27, 50, 0.2) 0%,
    rgba(28, 28, 35, 0.5) 100%
  );
`;

export const DataContainer = styled.div`
  margin: 16px;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 0 16px 16px ${({ theme }) => theme.colors.background};
`;
