import { motion } from "motion/react";
import styled from "styled-components";

export const SectionContainer = styled.section`
  position: relative;

  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 120px ${({ theme }) => theme.layout.pagePadding};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 88px;
    padding-bottom: 88px;
  }
`;

export const SectionHeader = styled(motion.header)`
  position: relative;
  z-index: 1;

  max-width: 920px;
`;

export const Eyebrow = styled.p`
  color: ${({ theme }) => theme.colors.glow};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.16em;
`;

export const Title = styled.h2`
  margin-top: 20px;

  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.6rem, 5vw, 4.75rem);
  letter-spacing: -0.055em;
  line-height: 1;
`;

export const Description = styled.p`
  max-width: 720px;
  margin-top: 28px;

  color: ${({ theme }) => theme.colors.textMuted};

  font-size: clamp(1rem, 1.4vw, 1.125rem);
  line-height: 1.7;
`;

export const FormationsGrid = styled.div`
  position: relative;
  z-index: 1;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;

  margin-top: 72px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    margin-top: 52px;
  }
`;

export const FormationCard = styled(motion.article)`
  position: relative;

  display: flex;
  grid-column: span 6;
  flex-direction: column;

  min-height: 310px;
  overflow: hidden;
  padding: 36px;
  border: 1px solid rgba(56, 189, 248, 0.2);
  border-radius: ${({ theme }) => theme.radii.large};

  background:
    linear-gradient(145deg, rgba(7, 20, 38, 0.96), rgba(37, 99, 235, 0.13)),
    radial-gradient(
      circle at 90% 10%,
      rgba(56, 189, 248, 0.14),
      transparent 36%
    );

  transition:
    border-color ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  &::before {
    position: absolute;
    top: 0;
    left: 36px;

    width: 72px;
    height: 2px;

    background: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.greenGlow};
    content: "";
  }

  &:first-child {
    grid-column: span 8;

    background:
      linear-gradient(135deg, rgba(7, 20, 38, 0.98), rgba(37, 99, 235, 0.24)),
      radial-gradient(
        circle at 85% 20%,
        rgba(56, 189, 248, 0.2),
        transparent 42%
      );
  }

  &:nth-child(2) {
    grid-column: span 4;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.glow};
    box-shadow: ${({ theme }) => theme.shadows.blueGlow};
    transform: translateY(-7px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: span 6;

    &:first-child,
    &:nth-child(2) {
      grid-column: span 6;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-column: 1;

    min-height: 280px;
    padding: 28px;

    &:first-child,
    &:nth-child(2) {
      grid-column: 1;
    }
  }
`;

export const CardId = styled.span`
  color: ${({ theme }) => theme.colors.glow};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  letter-spacing: 0.14em;
`;

export const CardTitle = styled.h3`
  max-width: 520px;
  margin-top: 52px;

  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.5rem, 2.5vw, 2.25rem);
  letter-spacing: -0.035em;
  line-height: 1.1;
`;

export const CardDescription = styled.p`
  max-width: 620px;
  margin-top: 20px;

  color: ${({ theme }) => theme.colors.textMuted};

  line-height: 1.65;
`;

export const TechnologyList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  margin-top: auto;
  padding-top: 30px;

  list-style: none;
`;

export const Technology = styled.li`
  padding: 7px 12px;
  border: 1px solid rgba(56, 189, 248, 0.2);
  border-radius: ${({ theme }) => theme.radii.pill};

  color: ${({ theme }) => theme.colors.textMuted};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.7rem;
`;
