import styled, { css } from "styled-components";
import { motion } from "motion/react";

export const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  align-items: center;
  gap: 64px;

  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  min-height: 100svh;
  margin: 0 auto;
  padding: 140px ${({ theme }) => theme.layout.pagePadding} 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 72px;

    min-height: auto;
    padding-top: 136px;
    text-align: center;
  }
`;

export const Content = styled(motion.div)`
  position: relative;
  z-index: 2;
`;

export const Eyebrow = styled.p`
  margin-bottom: 24px;

  color: ${({ theme }) => theme.colors.glow};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: clamp(0.7rem, 1vw, 0.8rem);
  font-weight: 600;
  letter-spacing: 0.16em;
`;

export const HeroTitle = styled.h1`
  max-width: 760px;

  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.75rem, 5vw, 5rem);
  font-weight: 700;
  letter-spacing: -0.055em;
  line-height: 0.98;
`;

export const Accent = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  text-shadow: ${({ theme }) => theme.shadows.greenGlow};
`;

export const HeroDescription = styled.p`
  max-width: 620px;
  margin-top: 32px;

  color: ${({ theme }) => theme.colors.textMuted};

  font-size: clamp(1rem, 1.4vw, 1.125rem);
  line-height: 1.75;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-right: auto;
    margin-left: auto;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  margin-top: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const actionLink = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 52px;
  padding: 0 24px;
  border-radius: ${({ theme }) => theme.radii.pill};

  font-size: 0.9375rem;
  font-weight: 700;

  transition:
    border-color ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-3px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const PrimaryLink = styled.a`
  ${actionLink};

  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.greenGlow};

  &:hover {
    box-shadow: 0 0 48px rgba(183, 255, 60, 0.35);
  }
`;

export const SecondaryLink = styled.a`
  ${actionLink};

  border: 1px solid rgba(56, 189, 248, 0.3);
  background: rgba(7, 20, 38, 0.5);
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    border-color: ${({ theme }) => theme.colors.glow};
    box-shadow: ${({ theme }) => theme.shadows.blueGlow};
    color: ${({ theme }) => theme.colors.glow};
  }
`;

export const Visual = styled(motion.div)`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-width: 0;
`;
