import { motion } from "motion/react";
import styled, { keyframes } from "styled-components";

const scan = keyframes`
  0%,
  100% {
    top: 18%;
    opacity: 0;
  }

  20%,
  80% {
    opacity: 0.7;
  }

  50% {
    top: 82%;
  }
`;

const pulse = keyframes`
  0%,
  100% {
    opacity: 0.45;
    transform: translate(-50%, -50%) scale(1);
  }

  50% {
    opacity: 0.9;
    transform: translate(-50%, -50%) scale(1.12);
  }
`;

export const SectionContainer = styled.section`
  position: relative;

  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 120px ${({ theme }) => theme.layout.pagePadding} 160px;
`;

export const SectionHeader = styled(motion.header)`
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
  max-width: 650px;
  margin-top: 28px;

  color: ${({ theme }) => theme.colors.textMuted};

  font-size: clamp(1rem, 1.4vw, 1.125rem);
  line-height: 1.75;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  margin-top: 72px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled(motion.article)`
  overflow: hidden;
  padding: 12px 12px 28px;
  border: 1px solid rgba(56, 189, 248, 0.16);
  border-radius: ${({ theme }) => theme.radii.large};

  background: rgba(7, 20, 38, 0.72);
  backdrop-filter: blur(14px);

  transition:
    border-color ${({ theme }) => theme.transitions.default},
    box-shadow ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: rgba(56, 189, 248, 0.42);
    box-shadow: ${({ theme }) => theme.shadows.blueGlow};
  }
`;

export const ProjectPreview = styled.div`
  position: relative;

  height: 220px;
  overflow: hidden;
  border: 1px solid rgba(56, 189, 248, 0.14);
  border-radius: ${({ theme }) => theme.radii.medium};

  background:
    linear-gradient(rgba(56, 189, 248, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(56, 189, 248, 0.06) 1px, transparent 1px),
    radial-gradient(
      circle at center,
      rgba(37, 99, 235, 0.28),
      rgba(3, 7, 18, 0.9) 65%
    );
  background-size:
    28px 28px,
    28px 28px,
    auto;

  &::before {
    position: absolute;
    z-index: 1;
    right: 0;
    left: 0;

    height: 1px;

    background: linear-gradient(
      to right,
      transparent,
      ${({ theme }) => theme.colors.glow},
      transparent
    );
    box-shadow: ${({ theme }) => theme.shadows.blueGlow};
    content: "";

    animation: ${scan} 4s ease-in-out infinite;
  }

  &::after {
    position: absolute;
    top: 50%;
    left: 50%;

    width: 100px;
    height: 100px;
    border: 1px solid rgba(56, 189, 248, 0.3);
    border-radius: 50%;

    animation: ${pulse} 3s ease-in-out infinite;

    content: "";
    transform: translate(-50%, -50%);
  }
`;

export const WindowBar = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  gap: 6px;

  padding: 14px;

  span {
    width: 7px;
    height: 7px;
    border-radius: 50%;

    background: ${({ theme }) => theme.colors.textMuted};
    opacity: 0.45;
  }

  span:first-child {
    background: ${({ theme }) => theme.colors.accent};
    opacity: 0.9;
  }
`;

export const PreviewLabel = styled.strong`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;

  color: ${({ theme }) => theme.colors.glow};
  text-shadow: ${({ theme }) => theme.shadows.blueGlow};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.875rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  transform: translate(-50%, -50%);
`;

export const ProjectContent = styled.div`
  padding: 26px 16px 0;
`;

export const ProjectId = styled.span`
  color: ${({ theme }) => theme.colors.glow};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
`;

export const ProjectCategory = styled.p`
  margin-top: 20px;

  color: ${({ theme }) => theme.colors.accent};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const ProjectTitle = styled.h3`
  margin-top: 10px;

  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.35rem, 2vw, 1.65rem);
  line-height: 1.2;
`;

export const ProjectDescription = styled.p`
  margin-top: 16px;

  color: ${({ theme }) => theme.colors.textMuted};

  font-size: 0.9375rem;
  line-height: 1.7;
`;

export const TechnologyList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  margin-top: 24px;

  list-style: none;
`;

export const Technology = styled.li`
  padding: 7px 10px;
  border: 1px solid rgba(56, 189, 248, 0.18);
  border-radius: ${({ theme }) => theme.radii.pill};

  background: rgba(3, 7, 18, 0.52);
  color: ${({ theme }) => theme.colors.textMuted};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.6875rem;
`;
