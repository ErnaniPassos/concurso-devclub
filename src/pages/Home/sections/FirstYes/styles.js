import nebulaSupernova from "../../../../assets/images/nebula-supernova.png";
import { motion } from "motion/react";
import styled from "styled-components";

export const SectionContainer = styled.section`
  position: relative;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 64px;

  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  min-height: 100svh;
  margin: 0 auto;
  padding: 140px ${({ theme }) => theme.layout.pagePadding} 120px;

  &::before {
    position: absolute;
    top: 50%;
    right: -25%;

    width: 80%;
    aspect-ratio: 1;
    border-radius: 50%;

    background: radial-gradient(
      circle,
      rgba(56, 189, 248, 0.16),
      rgba(37, 99, 235, 0.06) 38%,
      transparent 68%
    );
    content: "";
    filter: blur(30px);
    transform: translateY(-50%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 72px;

    min-height: auto;
    padding-top: 120px;

    text-align: center;
  }
`;

export const Content = styled(motion.div)`
  position: relative;
  z-index: 2;
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
  font-size: clamp(3rem, 5vw, 5rem);
  font-weight: 700;
  letter-spacing: -0.055em;
  line-height: 0.98;
`;

export const Accent = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  text-shadow: ${({ theme }) => theme.shadows.greenGlow};
`;

export const Description = styled.p`
  max-width: 600px;
  margin-top: 32px;

  color: ${({ theme }) => theme.colors.textMuted};

  font-size: clamp(1rem, 1.4vw, 1.125rem);
  line-height: 1.75;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-right: auto;
    margin-left: auto;
  }
`;

export const PrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 54px;
  margin-top: 40px;
  padding: 0 26px;
  border-radius: ${({ theme }) => theme.radii.pill};

  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.greenGlow};

  font-size: 0.9375rem;
  font-weight: 700;

  transition:
    box-shadow ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    box-shadow: 0 0 52px rgba(183, 255, 60, 0.4);
    transform: translateY(-3px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const Visual = styled(motion.div)`
  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 0;
`;

export const Supernova = styled.div`
  position: relative;

  width: min(38vw, 520px);
  aspect-ratio: 1;
  border-radius: 50%;

  background: transparent;

  &::before {
    position: absolute;
    z-index: 0;
    inset: -18%;

    border-radius: 50%;

    background: url(${nebulaSupernova}) center / cover no-repeat;
    content: "";

    opacity: 0.78;
    filter: saturate(1.12) brightness(0.82) contrast(1.08);

    mix-blend-mode: screen;

    -webkit-mask-image: radial-gradient(
      circle,
      #000 0 48%,
      rgba(0, 0, 0, 0.94) 60%,
      rgba(0, 0, 0, 0.68) 72%,
      rgba(0, 0, 0, 0.28) 84%,
      transparent 98%
    );

    mask-image: radial-gradient(
      circle,
      #000 0 48%,
      rgba(0, 0, 0, 0.94) 60%,
      rgba(0, 0, 0, 0.68) 72%,
      rgba(0, 0, 0, 0.28) 84%,
      transparent 98%
    );

    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: min(94vw, 480px);
  }
`;
