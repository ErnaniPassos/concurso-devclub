import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;

  width: 100%;

  border-bottom: 1px solid rgba(56, 189, 248, 0.12);
  background: rgba(3, 7, 18, 0.72);
  backdrop-filter: blur(18px);
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  height: 80px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.pagePadding};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 72px;
  }
`;

export const Brand = styled.a`
  flex-shrink: 0;

  color: ${({ theme }) => theme.colors.accent};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.04em;
`;

export const Navigation = styled.nav`
  margin-left: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;

  list-style: none;
`;

export const NavigationLink = styled.a`
  position: relative;

  color: ${({ theme }) => theme.colors.textMuted};

  font-size: 0.875rem;
  font-weight: 500;

  transition: color ${({ theme }) => theme.transitions.fast};

  &::after {
    position: absolute;
    right: 0;
    bottom: -8px;
    left: 0;

    height: 2px;

    background: ${({ theme }) => theme.colors.glow};
    content: "";
    transform: scaleX(0);
    transform-origin: center;
    transition: transform ${({ theme }) => theme.transitions.fast};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const StartLink = styled.a`
  flex-shrink: 0;

  padding: 12px 20px;
  border-radius: ${({ theme }) => theme.radii.pill};

  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.greenGlow};

  font-size: 0.875rem;
  font-weight: 700;

  transition:
    transform ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};

  &:hover {
    box-shadow: 0 0 42px rgba(183, 255, 60, 0.32);
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px 14px;
    font-size: 0.8125rem;
  }
`;
