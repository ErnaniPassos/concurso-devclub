import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: relative;

  border-top: 1px solid rgba(56, 189, 248, 0.16);

  background: rgba(2, 6, 17, 0.96);
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1.4fr repeat(3, 0.65fr);
  gap: 64px;

  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 88px ${({ theme }) => theme.layout.pagePadding} 72px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 44px;

    padding-top: 64px;
    padding-bottom: 56px;
  }
`;

export const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Brand = styled.a`
  color: ${({ theme }) => theme.colors.accent};
  text-shadow: ${({ theme }) => theme.shadows.greenGlow};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.4rem;
  font-weight: 700;
`;

export const Tagline = styled.p`
  max-width: 360px;
  margin-top: 22px;

  color: ${({ theme }) => theme.colors.textMuted};

  line-height: 1.7;
`;

export const StartLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 48px;
  margin-top: 28px;
  padding: 0 22px;
  border-radius: ${({ theme }) => theme.radii.pill};

  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.greenGlow};

  font-size: 0.875rem;
  font-weight: 700;

  transition:
    box-shadow ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    box-shadow: 0 0 48px rgba(183, 255, 60, 0.36);
    transform: translateY(-3px);
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.875rem;
`;

export const LinkList = styled.ul`
  display: grid;
  gap: 14px;

  margin-top: 24px;

  list-style: none;
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.textMuted};

  font-size: 0.875rem;

  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.glow};
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 26px ${({ theme }) => theme.layout.pagePadding};
  border-top: 1px solid rgba(56, 189, 248, 0.12);

  color: ${({ theme }) => theme.colors.textMuted};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.7rem;
  letter-spacing: 0.06em;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
