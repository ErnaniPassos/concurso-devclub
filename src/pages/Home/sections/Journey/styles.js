import { motion } from "motion/react";
import styled, { css } from "styled-components";

export const SectionContainer = styled.section`
  position: relative;

  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 120px ${({ theme }) => theme.layout.pagePadding} 160px;
`;

export const SectionHeader = styled(motion.div)`
  max-width: 780px;
  margin: 0 auto;

  text-align: center;
`;

export const Eyebrow = styled.p`
  margin-bottom: 20px;

  color: ${({ theme }) => theme.colors.glow};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.16em;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.25rem, 4.5vw, 4rem);
  font-weight: 700;
  letter-spacing: -0.045em;
  line-height: 1.05;
`;

export const Description = styled.p`
  max-width: 650px;
  margin: 28px auto 0;

  color: ${({ theme }) => theme.colors.textMuted};

  font-size: clamp(1rem, 1.4vw, 1.125rem);
  line-height: 1.75;
`;

export const Timeline = styled.ol`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 56px;

  margin-top: 96px;

  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 32px;
    margin-top: 64px;
  }
`;

export const TimelineLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;

  width: 2px;

  background: rgba(56, 189, 248, 0.1);
  transform: translateX(-50%);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    left: 12px;
    transform: none;
  }
`;

export const TimelineProgress = styled(motion.div)`
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 50%;

  width: 2px;

  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.glow},
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.accent}
  );
  box-shadow: 0 0 24px rgba(56, 189, 248, 0.36);
  transform-origin: top;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    left: 12px;
  }
`;

export const StepCard = styled(motion.li)`
  position: relative;

  width: 50%;

  ${({ $side }) =>
    $side === "left"
      ? css`
          align-self: flex-start;
          padding-right: 64px;
          text-align: right;
        `
      : css`
          align-self: flex-end;
          padding-left: 64px;
          text-align: left;
        `}

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-self: stretch;

    width: 100%;
    padding-right: 0;
    padding-left: 52px;

    text-align: left;
  }
`;

export const StepMarker = styled.span`
  position: absolute;
  top: 36px;

  width: 18px;
  height: 18px;
  border: 4px solid ${({ theme }) => theme.colors.background};
  border-radius: 50%;

  background: ${({ theme }) => theme.colors.accent};
  box-shadow:
    0 0 0 1px rgba(183, 255, 60, 0.5),
    ${({ theme }) => theme.shadows.greenGlow};

  ${StepCard}[data-side='left'] & {
    right: -9px;
  }

  ${StepCard}[data-side='right'] & {
    left: -9px;
  }

  ${({ theme }) => `
    @media (max-width: ${theme.breakpoints.tablet}) {
      top: 32px;
      left: 4px;
    }
  `}
`;

export const StepContent = styled.div`
  padding: 28px;
  border: 1px solid rgba(56, 189, 248, 0.16);
  border-radius: ${({ theme }) => theme.radii.large};

  background: rgba(7, 20, 38, 0.72);
  box-shadow: inset 0 1px 0 rgba(248, 250, 252, 0.04);
  backdrop-filter: blur(14px);

  transition:
    border-color ${({ theme }) => theme.transitions.default},
    box-shadow ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: rgba(56, 189, 248, 0.4);
    box-shadow: ${({ theme }) => theme.shadows.blueGlow};
  }
`;

export const StepId = styled.span`
  color: ${({ theme }) => theme.colors.glow};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
`;

export const StepStage = styled.p`
  margin-top: 16px;

  color: ${({ theme }) => theme.colors.accent};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const StepTitle = styled.h3`
  margin-top: 10px;

  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.35rem, 2vw, 1.65rem);
  line-height: 1.2;
`;

export const StepDescription = styled.p`
  margin-top: 16px;

  color: ${({ theme }) => theme.colors.textMuted};

  font-size: 0.9375rem;
  line-height: 1.7;
`;
