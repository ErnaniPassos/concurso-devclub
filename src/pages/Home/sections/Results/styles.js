import { motion } from "motion/react";
import styled from "styled-components";

export const SectionContainer = styled.section`
  position: relative;

  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 120px ${({ theme }) => theme.layout.pagePadding} 160px;
`;

export const SectionHeader = styled(motion.header)`
  max-width: 900px;
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
  max-width: 680px;
  margin-top: 28px;

  color: ${({ theme }) => theme.colors.textMuted};

  font-size: clamp(1rem, 1.4vw, 1.125rem);
  line-height: 1.75;
`;

export const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  margin-top: 72px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ResultCard = styled(motion.article)`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 300px;
  overflow: hidden;
  padding: 32px;
  border: 1px solid rgba(56, 189, 248, 0.16);
  border-radius: ${({ theme }) => theme.radii.large};

  background:
    radial-gradient(
      circle at bottom right,
      rgba(37, 99, 235, 0.24),
      transparent 50%
    ),
    rgba(7, 20, 38, 0.72);
  backdrop-filter: blur(14px);

  transition:
    border-color ${({ theme }) => theme.transitions.default},
    box-shadow ${({ theme }) => theme.transitions.default};

  &::before {
    position: absolute;
    top: 0;
    left: 32px;

    width: 72px;
    height: 2px;

    background: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.greenGlow};
    content: "";
  }

  &:hover {
    border-color: rgba(183, 255, 60, 0.35);
    box-shadow: ${({ theme }) => theme.shadows.greenGlow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 250px;
    padding: 28px;
  }
`;

export const ResultId = styled.span`
  color: ${({ theme }) => theme.colors.glow};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
`;

export const ResultValue = styled.strong`
  margin-top: auto;

  color: ${({ theme }) => theme.colors.accent};
  text-shadow: ${({ theme }) => theme.shadows.greenGlow};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.75rem, 6vw, 5.5rem);
  font-weight: 700;
  letter-spacing: -0.055em;
  line-height: 0.95;
`;

export const ResultLabel = styled.p`
  max-width: 420px;
  margin-top: 20px;

  color: ${({ theme }) => theme.colors.textMuted};

  font-size: 1rem;
  line-height: 1.6;
`;
