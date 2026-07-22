import styled, { keyframes } from "styled-components";

const drift = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-40px, 30px, 0);
  }
`;

const pulse = keyframes`
  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.08);
  }
`;

export const BackgroundContainer = styled.div`
  position: fixed;
  z-index: 0;
  inset: 0;

  overflow: hidden;
  pointer-events: none;
`;

export const BlueGlow = styled.div`
  position: absolute;
  top: -30%;
  left: -15%;

  width: 70vw;
  height: 70vw;
  border-radius: 50%;

  background: ${({ theme }) => theme.colors.primary};
  opacity: 0.12;
  filter: blur(160px);

  animation: ${pulse} 12s ease-in-out infinite;
`;

export const CyanGlow = styled.div`
  position: absolute;
  right: -20%;
  bottom: -35%;

  width: 65vw;
  height: 65vw;
  border-radius: 50%;

  background: ${({ theme }) => theme.colors.glow};
  opacity: 0.08;
  filter: blur(180px);

  animation: ${pulse} 16s ease-in-out infinite reverse;
`;

export const Grid = styled.div`
  position: absolute;
  inset: 0;

  background-image:
    linear-gradient(rgba(56, 189, 248, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(56, 189, 248, 0.06) 1px, transparent 1px);
  background-size: 72px 72px;

  mask-image: linear-gradient(
    to bottom,
    transparent,
    black 25%,
    transparent 90%
  );
`;

export const Stars = styled.div`
  position: absolute;
  inset: -60px;

  background-image:
    radial-gradient(circle, rgba(248, 250, 252, 0.8) 1px, transparent 1.5px),
    radial-gradient(circle, rgba(56, 189, 248, 0.7) 1px, transparent 1.5px);
  background-position:
    0 0,
    35px 45px;
  background-size:
    110px 110px,
    160px 160px;

  opacity: 0.35;
  animation: ${drift} 30s linear infinite alternate;
`;
