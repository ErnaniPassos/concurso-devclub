import { motion } from "motion/react";
import styled, { css, keyframes } from "styled-components";

const travelPulse = keyframes`
  0% {
    left: 0;
    opacity: 0;
  }

  15% {
    opacity: 1;
  }

  85% {
    opacity: 1;
  }

  100% {
    left: calc(100% - 8px);
    opacity: 0;
  }
`;

const buildCodeLine = keyframes`
  0%,
  15% {
    opacity: 0.15;
    transform: scaleX(0);
  }

  35%,
  78% {
    opacity: 1;
    transform: scaleX(1);
  }

  100% {
    opacity: 0.15;
    transform: scaleX(0);
  }
`;

const supportResponse = keyframes`
  0%,
  20%,
  100% {
    opacity: 0.22;
    transform: scale(0.7);
  }

  45%,
  60% {
    opacity: 1;
    transform: scale(1);
  }
`;

const communityActivity = keyframes`
  0%,
  22%,
  100% {
    border-color: rgba(56, 189, 248, 0.28);
    box-shadow: none;
    transform: translateY(0);
  }

  42%,
  58% {
    border-color: rgba(183, 255, 60, 0.85);
    box-shadow:
      0 0 10px rgba(183, 255, 60, 0.42),
      0 0 20px rgba(56, 189, 248, 0.2);
    transform: translateY(-3px);
  }
`;

const progressGrowth = keyframes`
  0%,
  18%,
  100% {
    opacity: 0.28;
    transform: scaleY(0.18);
  }

  42%,
  72% {
    opacity: 1;
    transform: scaleY(1);
  }
`;

const careerTravel = keyframes`
  0% {
    left: 0;
    opacity: 0;
  }

  18%,
  78% {
    opacity: 1;
  }

  100% {
    left: calc(100% - 8px);
    opacity: 0;
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
  max-width: 780px;
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

export const EcosystemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;

  margin-top: 72px;
`;

export const EcosystemCard = styled(motion.article)`
  position: relative;

  display: flex;
  flex-direction: column;

  grid-column: span 3;

  min-height: 250px;
  overflow: hidden;
  padding: 28px;
  border: 1px solid rgba(56, 189, 248, 0.16);
  border-radius: ${({ theme }) => theme.radii.large};

  background:
    radial-gradient(
      circle at top right,
      rgba(37, 99, 235, 0.18),
      transparent 50%
    ),
    rgba(7, 20, 38, 0.72);
  backdrop-filter: blur(14px);

  transition:
    border-color ${({ theme }) => theme.transitions.default},
    box-shadow ${({ theme }) => theme.transitions.default};

  &::after {
    position: absolute;
    right: -60px;
    bottom: -60px;

    width: 150px;
    height: 150px;
    border-radius: 50%;

    background: ${({ theme }) => theme.colors.primary};
    content: "";
    filter: blur(80px);
    opacity: 0.16;
  }

  &:hover {
    border-color: rgba(56, 189, 248, 0.42);
    box-shadow: ${({ theme }) => theme.shadows.blueGlow};
  }

  ${({ $featured }) =>
    $featured &&
    css`
      grid-column: span 6;
      grid-row: span 2;

      min-height: 520px;

      background:
        radial-gradient(
          circle at 70% 20%,
          rgba(56, 189, 248, 0.2),
          transparent 36%
        ),
        radial-gradient(
          circle at 20% 80%,
          rgba(37, 99, 235, 0.24),
          transparent 42%
        ),
        rgba(7, 20, 38, 0.8);
    `}

  ${({ $wide }) =>
    $wide &&
    css`
      grid-column: span 12;
      min-height: 220px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-column: span 6;

    ${({ $featured, $wide }) =>
      ($featured || $wide) &&
      css`
        grid-column: span 12;
        grid-row: auto;

        min-height: 300px;
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: span 12;

    min-height: 240px;
  }
`;

export const CardId = styled.span`
  color: ${({ theme }) => theme.colors.glow};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
`;

export const CardCode = styled.strong`
  margin-top: auto;

  color: ${({ theme }) => theme.colors.accent};
  text-shadow: ${({ theme }) => theme.shadows.greenGlow};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  line-height: 1;
`;

export const ProjectCodeVisual = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  min-height: 52px;
  margin-top: auto;

  color: ${({ theme }) => theme.colors.accent};

  font-family: ${({ theme }) => theme.fonts.mono};
`;

export const ProjectCodeBrace = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  text-shadow: ${({ theme }) => theme.shadows.greenGlow};

  font-size: 2.5rem;
  font-weight: 500;
  line-height: 1;
`;

export const ProjectCodeLines = styled.span`
  display: flex;
  flex-direction: column;
  gap: 7px;

  width: 76px;

  span {
    display: block;

    height: 4px;
    border-radius: 999px;

    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.glow},
      ${({ theme }) => theme.colors.accent}
    );
    box-shadow: 0 0 10px rgba(56, 189, 248, 0.32);

    opacity: 0.15;
    transform: scaleX(0);
    transform-origin: left center;

    animation: ${buildCodeLine} 3s ease-in-out infinite;
  }

  span[data-line="1"] {
    width: 74%;
  }

  span[data-line="2"] {
    width: 100%;
    animation-delay: 0.3s;
  }

  span[data-line="3"] {
    width: 58%;
    animation-delay: 0.6s;
  }
`;

export const SupportSignalVisual = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  min-height: 52px;
  margin-top: auto;

  font-family: ${({ theme }) => theme.fonts.mono};
`;

export const SupportSignalLabel = styled.strong`
  color: ${({ theme }) => theme.colors.accent};
  text-shadow: ${({ theme }) => theme.shadows.greenGlow};

  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.04em;
`;

export const SupportSignalWaves = styled.span`
  display: flex;
  align-items: center;
  gap: 7px;

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;

    background: ${({ theme }) => theme.colors.glow};
    box-shadow: ${({ theme }) => theme.shadows.blueGlow};

    opacity: 0.22;
    transform: scale(0.7);

    animation: ${supportResponse} 1.8s ease-in-out infinite;
  }

  span[data-wave="2"] {
    animation-delay: 0.2s;
  }

  span[data-wave="3"] {
    animation-delay: 0.4s;
  }
`;

export const CommunityVisual = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  min-height: 52px;
  margin-top: auto;

  font-family: ${({ theme }) => theme.fonts.mono};
`;

export const CommunitySymbol = styled.strong`
  color: ${({ theme }) => theme.colors.accent};
  text-shadow: ${({ theme }) => theme.shadows.greenGlow};

  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 500;
  line-height: 1;
`;

export const CommunityMembers = styled.span`
  display: flex;
  align-items: center;

  span {
    position: relative;

    width: 32px;
    height: 32px;
    margin-left: -6px;
    border: 1px solid rgba(56, 189, 248, 0.28);
    border-radius: 50%;

    background: rgba(7, 20, 38, 0.96);

    animation: ${communityActivity} 2.4s ease-in-out infinite;
  }

  span:first-child {
    margin-left: 0;
  }

  span[data-member="2"] {
    animation-delay: 0.35s;
  }

  span[data-member="3"] {
    animation-delay: 0.7s;
  }

  span::before {
    position: absolute;
    top: 6px;
    left: 50%;

    width: 7px;
    height: 7px;
    border-radius: 50%;

    background: ${({ theme }) => theme.colors.glow};
    content: "";
    transform: translateX(-50%);
  }

  span::after {
    position: absolute;
    bottom: 6px;
    left: 50%;

    width: 14px;
    height: 7px;
    border-radius: 8px 8px 4px 4px;

    background: rgba(56, 189, 248, 0.72);
    content: "";
    transform: translateX(-50%);
  }
`;

export const ProgressVisual = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  min-height: 52px;
  margin-top: auto;

  font-family: ${({ theme }) => theme.fonts.mono};
`;

export const ProgressLabel = styled.strong`
  color: ${({ theme }) => theme.colors.accent};
  text-shadow: ${({ theme }) => theme.shadows.greenGlow};

  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 500;
  line-height: 1;
`;

export const ProgressChart = styled.span`
  position: relative;

  display: flex;
  align-items: flex-end;
  gap: 5px;

  height: 38px;
  padding: 0 4px 4px;
  border-bottom: 1px solid rgba(56, 189, 248, 0.3);

  span {
    width: 7px;
    border-radius: 4px 4px 1px 1px;

    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.accent},
      ${({ theme }) => theme.colors.glow}
    );
    box-shadow: 0 0 10px rgba(56, 189, 248, 0.28);

    opacity: 0.28;
    transform: scaleY(0.18);
    transform-origin: bottom center;

    animation: ${progressGrowth} 2.8s ease-in-out infinite;
  }

  span[data-step="1"] {
    height: 34%;
  }

  span[data-step="2"] {
    height: 54%;
    animation-delay: 0.2s;
  }

  span[data-step="3"] {
    height: 76%;
    animation-delay: 0.4s;
  }

  span[data-step="4"] {
    height: 100%;
    animation-delay: 0.6s;
  }
`;

export const CareerPath = styled.div`
  position: absolute;
  top: 50%;
  right: 40px;
  z-index: 2;

  display: flex;
  align-items: center;

  width: 52%;

  transform: translateY(-50%);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: relative;
    top: auto;
    right: auto;

    width: 100%;
    margin-top: 30px;

    transform: none;
  }
`;

export const CareerStage = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  min-width: 104px;
  min-height: 38px;
  padding: 8px 12px;
  border: 1px solid rgba(56, 189, 248, 0.3);
  border-radius: 999px;

  background: rgba(7, 20, 38, 0.94);
  color: ${({ theme }) => theme.colors.textMuted};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  white-space: nowrap;

  @media (max-width: 520px) {
    min-width: auto;
    min-height: 34px;
    padding: 7px 8px;

    font-size: 0.58rem;
  }
`;

export const CareerConnection = styled.span`
  position: relative;

  display: block;
  flex: 1;

  min-width: 32px;
  max-width: 70px;
  height: 1px;

  background: linear-gradient(
    90deg,
    rgba(56, 189, 248, 0.28),
    rgba(56, 189, 248, 0.8)
  );
  box-shadow: 0 0 8px rgba(56, 189, 248, 0.24);

  @media (max-width: 520px) {
    min-width: 14px;
  }
`;

export const CareerPulse = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 2;

  width: 8px;
  height: 8px;
  border-radius: 50%;

  background: ${({ theme }) => theme.colors.accent};
  box-shadow:
    0 0 8px rgba(183, 255, 60, 0.9),
    0 0 18px rgba(183, 255, 60, 0.5);

  opacity: 0;
  transform: translateY(-50%);

  animation: ${careerTravel} 1.8s linear infinite;

  [data-connection="2"] & {
    animation-delay: 0.9s;
  }
`;

export const CardTitle = styled.h3`
  margin-top: 20px;

  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.25rem, 2vw, 1.6rem);
  line-height: 1.2;
`;

export const CardDescription = styled.p`
  max-width: 520px;
  margin-top: 14px;

  color: ${({ theme }) => theme.colors.textMuted};

  font-size: 0.9375rem;
  line-height: 1.7;
`;

export const NetworkVisual = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 460px;
`;

export const NetworkCore = styled.div`
  position: relative;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 138px;
  height: 138px;
  border: 1px solid rgba(56, 189, 248, 0.65);
  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(56, 189, 248, 0.22),
    rgba(7, 20, 38, 0.94) 68%
  );
  box-shadow:
    0 0 24px rgba(56, 189, 248, 0.3),
    inset 0 0 22px rgba(56, 189, 248, 0.14);

  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.mono};
  line-height: 1;

  &::before,
  &::after {
    position: absolute;

    border: 1px solid rgba(56, 189, 248, 0.2);
    border-radius: 50%;

    content: "";
  }

  &::before {
    inset: -13px;
  }

  &::after {
    inset: -27px;

    border-style: dashed;
    opacity: 0.65;
  }

  span {
    font-size: 0.72rem;
    letter-spacing: 0.28em;
  }

  strong {
    margin-top: 7px;

    color: ${({ theme }) => theme.colors.glow};
    text-shadow: ${({ theme }) => theme.shadows.blueGlow};

    font-size: 1.15rem;
    letter-spacing: 0.12em;
  }
`;

export const NetworkConnection = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;

  display: flex;
  align-items: center;

  padding-left: 92px;

  transform-origin: left center;

  &[data-position="1"] {
    transform: rotate(-90deg);
  }

  &[data-position="2"] {
    transform: rotate(-28deg);
  }

  &[data-position="3"] {
    transform: rotate(28deg);
  }

  &[data-position="4"] {
    transform: rotate(152deg);
  }

  &[data-position="5"] {
    transform: rotate(208deg);
  }

  @media (max-width: 520px) {
    padding-left: 74px;
  }
`;
export const NetworkLine = styled.span`
  position: relative;

  display: block;
  flex-shrink: 0;

  width: clamp(58px, 7vw, 88px);
  height: 1px;

  background: linear-gradient(
    90deg,
    rgba(56, 189, 248, 0.18),
    rgba(56, 189, 248, 0.85)
  );
  box-shadow: 0 0 8px rgba(56, 189, 248, 0.35);

  &::before,
  &::after {
    position: absolute;
    top: 50%;

    width: 5px;
    height: 5px;
    border-radius: 50%;

    background: ${({ theme }) => theme.colors.glow};
    box-shadow: ${({ theme }) => theme.shadows.blueGlow};
    content: "";
    transform: translateY(-50%);
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }

  @media (max-width: 520px) {
    width: 34px;
  }
`;

export const NetworkNode = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 104px;
  min-height: 38px;
  margin-left: 14px;
  padding: 9px 14px;
  border: 1px solid rgba(56, 189, 248, 0.32);
  border-radius: 999px;

  background: rgba(7, 20, 38, 0.94);
  box-shadow:
    0 0 18px rgba(37, 99, 235, 0.14),
    inset 0 0 12px rgba(56, 189, 248, 0.06);

  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  white-space: nowrap;

  [data-position="1"] & {
    transform: rotate(90deg);
  }

  [data-position="2"] & {
    transform: rotate(28deg);
  }

  [data-position="3"] & {
    transform: rotate(-28deg);
  }

  [data-position="4"] & {
    transform: rotate(-152deg);
  }

  [data-position="5"] & {
    transform: rotate(-208deg);
  }

  @media (max-width: 520px) {
    min-width: 88px;
    margin-left: -10px;
    padding: 8px 7px;
  }
`;
export const NetworkPulse = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 2;

  width: 8px;
  height: 8px;
  border-radius: 50%;

  background: ${({ theme }) => theme.colors.glow};
  box-shadow:
    0 0 6px rgba(56, 189, 248, 1),
    0 0 14px rgba(56, 189, 248, 0.9),
    0 0 24px rgba(37, 99, 235, 0.75);

  opacity: 0;
  transform: translateY(-50%);

  animation: ${travelPulse} 2.4s linear infinite;

  [data-position="2"] & {
    animation-delay: -0.45s;
  }

  [data-position="3"] & {
    animation-delay: -0.9s;
  }

  [data-position="4"] & {
    animation-delay: -1.35s;
  }

  [data-position="5"] & {
    animation-delay: -1.8s;
  }
`;
