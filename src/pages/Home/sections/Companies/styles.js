import styled, { keyframes } from "styled-components";

const marquee = keyframes`
  to {
    transform: translateX(calc(-50% - 12px));
  }
`;

export const SectionContainer = styled.section`
  position: relative;

  overflow: hidden;
  padding: 96px 0;

  border-top: 1px solid rgba(56, 189, 248, 0.12);
  border-bottom: 1px solid rgba(56, 189, 248, 0.12);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 64px 0 80px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.pagePadding};

  text-align: center;
`;

export const Eyebrow = styled.p`
  color: ${({ theme }) => theme.colors.glow};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.16em;
`;

export const Title = styled.h2`
  max-width: 820px;
  margin: 20px auto 0;

  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 3.75rem);
  letter-spacing: -0.045em;
  line-height: 1.05;
`;

export const Description = styled.p`
  max-width: 680px;
  margin: 24px auto 0;

  color: ${({ theme }) => theme.colors.textMuted};

  font-size: clamp(1rem, 1.4vw, 1.125rem);
  line-height: 1.7;
`;

export const Marquee = styled.div`
  width: 100%;
  margin-top: 56px;
  overflow: hidden;

  mask-image: linear-gradient(
    to right,
    transparent,
    #000 10%,
    #000 90%,
    transparent
  );

  &:hover > div {
    animation-play-state: paused;
  }
`;

export const Track = styled.div`
  display: flex;
  gap: 24px;

  width: max-content;

  animation: ${marquee} 24s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    flex-wrap: wrap;
    justify-content: center;

    width: auto;

    animation: none;
  }
`;

export const CompanyList = styled.ul`
  display: flex;
  gap: 24px;

  list-style: none;

  @media (prefers-reduced-motion: reduce) {
    flex-wrap: wrap;
    justify-content: center;

    &:last-child {
      display: none;
    }
  }
`;

export const CompanyItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 210px;
  min-height: 88px;
  padding: 20px 32px;
  border: 1px solid rgba(56, 189, 248, 0.2);
  border-radius: ${({ theme }) => theme.radii.large};

  background: linear-gradient(
    135deg,
    rgba(7, 20, 38, 0.9),
    rgba(37, 99, 235, 0.12)
  );
  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.125rem;
  font-weight: 700;
  white-space: nowrap;

  transition:
    border-color ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};

    color: ${({ theme }) => theme.colors.accent};

    transform: translateY(-4px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-width: 170px;
    min-height: 76px;
  }
`;
