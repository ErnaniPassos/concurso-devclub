import { motion } from "motion/react";
import styled from "styled-components";

export const SectionContainer = styled.section`
  position: relative;

  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 120px ${({ theme }) => theme.layout.pagePadding} 140px;
`;

export const SectionHeader = styled(motion.div)`
  max-width: 800px;
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

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  margin-top: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const PointCard = styled(motion.article)`
  position: relative;

  min-height: 280px;
  padding: 28px;
  border: 1px solid rgba(56, 189, 248, 0.16);
  border-radius: ${({ theme }) => theme.radii.large};

  background: linear-gradient(
    145deg,
    rgba(7, 20, 38, 0.82),
    rgba(3, 7, 18, 0.65)
  );
  box-shadow: inset 0 1px 0 rgba(248, 250, 252, 0.04);
  backdrop-filter: blur(14px);

  transition:
    border-color ${({ theme }) => theme.transitions.default},
    box-shadow ${({ theme }) => theme.transitions.default},
    transform ${({ theme }) => theme.transitions.default};

  &::before {
    position: absolute;
    top: 0;
    left: 28px;

    width: 56px;
    height: 2px;

    background: ${({ theme }) => theme.colors.glow};
    box-shadow: ${({ theme }) => theme.shadows.blueGlow};
    content: "";
  }

  &:hover {
    border-color: rgba(56, 189, 248, 0.42);
    box-shadow: ${({ theme }) => theme.shadows.blueGlow};
    transform: translateY(-8px);
  }
`;

export const PointId = styled.span`
  color: ${({ theme }) => theme.colors.glow};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
`;

export const Problem = styled.h3`
  margin-top: 28px;

  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  line-height: 1.2;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 28px 0;

  background: linear-gradient(to right, rgba(56, 189, 248, 0.45), transparent);
`;

export const Solution = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};

  font-size: 0.9375rem;
  line-height: 1.7;
`;
