import styled from "styled-components";

export const LayoutContainer = styled.div`
  position: relative;
  isolation: isolate;

  min-height: 100vh;
  overflow: hidden;

  background: ${({ theme }) => theme.colors.background};
`;

export const MainContent = styled.main`
  position: relative;
  z-index: 1;

  min-height: 100vh;
`;
