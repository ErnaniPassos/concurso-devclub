import nebulaSupernova from "../../../../assets/images/nebula-supernova.png";
import { motion } from "motion/react";
import styled, { css, keyframes } from "styled-components";

const rotateEnergy = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const reverseEnergy = keyframes`
  to {
    transform: rotate(-360deg);
  }
`;

const particleBurst = keyframes`
  0%,
  10% {
    opacity: 0;
    transform:
      translate(-50%, -50%)
      rotate(var(--angle))
      translateX(28px)
      scale(0.2);
  }

  30% {
    opacity: 1;
    transform:
      translate(-50%, -50%)
      rotate(var(--angle))
      translateX(calc(var(--distance) * 0.4))
      scale(1.6);
  }

  65% {
    opacity: 0.9;
    transform:
      translate(-50%, -50%)
      rotate(var(--angle))
      translateX(calc(var(--distance) * 0.75))
      scale(1);
  }

  100% {
    opacity: 0;
    transform:
      translate(-50%, -50%)
      rotate(var(--angle))
      translateX(var(--distance))
      scale(0.1);
  }
`;

const flamePulse = keyframes`
  0%,
  100% {
    opacity: 0.72;
    transform: rotate(0deg) scale(0.94);
  }

  35% {
    opacity: 1;
    transform: rotate(8deg) scale(1.08);
  }

  70% {
    opacity: 0.82;
    transform: rotate(-5deg) scale(1.02);
  }
`;

const flameCounterPulse = keyframes`
  0%,
  100% {
    opacity: 0.58;
    transform: rotate(0deg) scale(1.04);
  }

  50% {
    opacity: 0.9;
    transform: rotate(-12deg) scale(1.16);
  }
`;

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

export const EnergySvg = styled.svg`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;
  overflow: visible;
`;

export const EnergyRing = styled.circle`
  fill: none;
  stroke: ${({ theme }) => theme.colors.glow};
  stroke-width: 1.6;
  stroke-dasharray: 8 14;
  opacity: 0.68;
  transform-origin: center;
  animation: ${rotateEnergy} 24s linear infinite;

  ${({ $secondary }) =>
    $secondary &&
    css`
      stroke: ${({ theme }) => theme.colors.primary};
      stroke-dasharray: 4 10;
      opacity: 0.72;
      animation: ${reverseEnergy} 18s linear infinite;
    `}

  ${({ $tertiary }) =>
    $tertiary &&
    css`
      stroke: ${({ theme }) => theme.colors.accent};
      stroke-dasharray: 2 8;
      opacity: 0.76;
      animation: ${rotateEnergy} 12s linear infinite;
    `}
`;

export const Particles = styled.div`
  position: absolute;
  inset: 0;
`;

export const Particle = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;

  width: ${({ $index }) => 4 + ($index % 3) * 2}px;
  height: ${({ $index }) => 4 + ($index % 3) * 2}px;
  border-radius: 50%;

  background: ${({ $index, theme }) =>
    $index % 3 === 0 ? theme.colors.accent : theme.colors.glow};
  box-shadow: ${({ $index, theme }) =>
    $index % 3 === 0 ? theme.shadows.greenGlow : theme.shadows.blueGlow};

  --angle: ${({ $index }) => ($index / 20) * 360}deg;
  --distance: ${({ $index }) => 180 + ($index % 4) * 38}px;

  animation: ${particleBurst} 3.6s ease-out infinite;
  animation-delay: ${({ $index }) => $index * 0.07}s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    --distance: ${({ $index }) => 135 + ($index % 4) * 28}px;
  }
`;

export const SupernovaCore = styled.div`
  position: absolute;
  z-index: 2;
  isolation: isolate;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 34%;
  aspect-ratio: 1;
  border: 1px solid rgba(248, 250, 252, 0.42);
  border-radius: 50%;

  background: radial-gradient(
    circle at 38% 32%,
    rgba(248, 250, 252, 0.9),
    rgba(56, 189, 248, 0.76) 14%,
    rgba(37, 99, 235, 0.5) 38%,
    rgba(3, 7, 18, 0.94) 72%
  );

  box-shadow:
    0 0 40px rgba(248, 250, 252, 0.28),
    0 0 90px rgba(56, 189, 248, 0.38),
    0 0 160px rgba(37, 99, 235, 0.24);

  transform: translate(-50%, -50%);

  &::before,
  &::after {
    position: absolute;
    z-index: -1;

    border-radius: 50%;

    content: "";
    pointer-events: none;

    mask-image: radial-gradient(
      circle,
      transparent 0 47%,
      #000 56%,
      rgba(0, 0, 0, 0.82) 66%,
      transparent 79%
    );
  }

  &::before {
    inset: -32%;

    background: repeating-conic-gradient(
      from 12deg,
      rgba(56, 189, 248, 0) 0deg 8deg,
      rgba(56, 189, 248, 0.95) 12deg 18deg,
      rgba(37, 99, 235, 0.28) 23deg 29deg,
      rgba(163, 255, 18, 0.78) 33deg 37deg,
      transparent 41deg 52deg
    );

    filter: blur(8px);
    animation: ${flamePulse} 2.4s ease-in-out infinite;
  }

  &::after {
    inset: -43%;

    background: repeating-conic-gradient(
      from -18deg,
      transparent 0deg 14deg,
      rgba(14, 165, 233, 0.7) 18deg 24deg,
      transparent 29deg 38deg,
      rgba(163, 255, 18, 0.46) 42deg 46deg,
      transparent 50deg 64deg
    );

    filter: blur(13px);
    animation: ${flameCounterPulse} 3.1s ease-in-out infinite;
  }

  span {
    color: ${({ theme }) => theme.colors.text};

    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: clamp(0.5rem, 1vw, 0.7rem);
    letter-spacing: 0.18em;
  }

  strong {
    margin-top: 4px;

    color: ${({ theme }) => theme.colors.accent};
    text-shadow: ${({ theme }) => theme.shadows.greenGlow};

    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: clamp(1.5rem, 4vw, 3rem);
    line-height: 1;
  }
`;
