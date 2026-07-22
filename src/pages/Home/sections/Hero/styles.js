import styled, { css, keyframes } from "styled-components";
import { motion } from "motion/react";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const reverseRotate = keyframes`
  to {
    transform: rotate(-360deg);
  }
`;

const float = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-12px);
  }
`;
const activateOrbitLabel = keyframes`
  0%,
  8% {
    border-color: rgba(183, 255, 60, 0.85);
    background: rgba(183, 255, 60, 0.12);
    box-shadow:
      0 0 12px rgba(183, 255, 60, 0.4),
      0 0 28px rgba(183, 255, 60, 0.18);
    color: ${({ theme }) => theme.colors.text};
    text-shadow: 0 0 10px rgba(183, 255, 60, 0.75);
  }

  12.35%,
  100% {
    border-color: rgba(56, 189, 248, 0.22);
    background: rgba(3, 7, 18, 0.76);
    box-shadow: none;
    color: ${({ theme }) => theme.colors.textMuted};
    text-shadow: none;
  }
`;
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
  align-items: center;
  justify-content: center;

  min-width: 0;
`;

export const CareerOrbit = styled.div`
  position: relative;

  width: min(34vw, 460px);
  aspect-ratio: 1;
  border-radius: 50%;

  animation: ${float} 6s ease-in-out infinite;

  &::before {
    position: absolute;
    inset: 15%;

    border-radius: 50%;
    background: rgba(37, 99, 235, 0.18);
    box-shadow:
      0 0 80px rgba(37, 99, 235, 0.34),
      inset 0 0 50px rgba(56, 189, 248, 0.12);
    content: "";
    filter: blur(4px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: min(76vw, 420px);
  }
`;

export const OrbitRing = styled.div`
  position: absolute;
  inset: 8%;

  border: 1px solid rgba(56, 189, 248, 0.45);
  border-radius: 50%;

  animation: ${rotate} 24s linear infinite;

  &::before {
    position: absolute;
    top: 8%;
    left: 18%;

    width: 10px;
    height: 10px;
    border-radius: 50%;

    background: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.greenGlow};
    content: "";
  }

  ${({ $secondary }) =>
    $secondary &&
    css`
      inset: 20%;
      border-style: dashed;
      border-color: rgba(37, 99, 235, 0.55);
      animation: ${reverseRotate} 18s linear infinite;

      &::before {
        top: auto;
        right: 8%;
        bottom: 18%;
        left: auto;

        width: 7px;
        height: 7px;

        background: ${({ theme }) => theme.colors.glow};
        box-shadow: ${({ theme }) => theme.shadows.blueGlow};
      }
    `}
`;

export const OrbitCore = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 34%;
  aspect-ratio: 1;
  border: 1px solid rgba(56, 189, 248, 0.5);
  border-radius: 50%;

  background: rgba(3, 7, 18, 0.82);
  box-shadow:
    0 0 60px rgba(56, 189, 248, 0.2),
    inset 0 0 30px rgba(56, 189, 248, 0.1);
  transform: translate(-50%, -50%);

  span {
    color: ${({ theme }) => theme.colors.glow};

    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: clamp(1rem, 2vw, 1.5rem);
  }

  strong {
    margin-top: 4px;

    color: ${({ theme }) => theme.colors.text};

    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: clamp(0.75rem, 1.5vw, 1rem);
    letter-spacing: 0.18em;
  }
`;

export const OrbitLabel = styled.span`
  position: absolute;

  padding: 8px 12px;
  border: 1px solid rgba(56, 189, 248, 0.22);
  border-radius: ${({ theme }) => theme.radii.pill};

  background: rgba(3, 7, 18, 0.76);
  color: ${({ theme }) => theme.colors.textMuted};
  backdrop-filter: blur(10px);

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: clamp(0.6rem, 1vw, 0.72rem);
  letter-spacing: 0.08em;
  animation: ${activateOrbitLabel} 24s linear infinite;

  ${({ $position }) =>
    $position === "top" &&
    css`
      top: 2%;
      left: 50%;
      transform: translateX(-50%);
      animation-delay: 1.6s;
    `}

  ${({ $position }) =>
    $position === "right" &&
    css`
      top: 50%;
      right: -3%;
      transform: translateY(-50%);
      animation-delay: 7.6s;
    `}

  ${({ $position }) =>
    $position === "bottom" &&
    css`
      bottom: 2%;
      left: 50%;
      transform: translateX(-50%);
      animation-delay: 13.6s;
    `}

  ${({ $position }) =>
    $position === "left" &&
    css`
      top: 50%;
      left: -5%;
      transform: translateY(-50%);
      animation-delay: 19.6s;
    `}
`;
