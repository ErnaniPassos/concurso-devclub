import styled from "styled-components";

export const SceneContainer = styled.div`
  position: relative;
  isolation: isolate;

  width: 100%;
  height: clamp(440px, 32vw, 500px);
  min-height: 0;
  overflow: visible;

  cursor: grab;

  &::before {
    position: absolute;
    z-index: 0;
    inset: 5%;

    border-radius: 50%;

    background: radial-gradient(
      circle,
      rgba(56, 189, 248, 0.2) 0%,
      rgba(8, 124, 255, 0.1) 38%,
      transparent 72%
    );

    filter: blur(36px);
    content: "";
    pointer-events: none;
  }

  &:active {
    cursor: grabbing;
  }

  canvas {
    position: relative;
    z-index: 1;

    display: block;

    width: 100% !important;
    height: 100% !important;

    -webkit-mask-image: radial-gradient(
      ellipse 52% 56% at center,
      #000 42%,
      rgba(0, 0, 0, 0.88) 58%,
      rgba(0, 0, 0, 0.42) 78%,
      transparent 100%
    );

    mask-image: radial-gradient(
      ellipse 52% 56% at center,
      #000 42%,
      rgba(0, 0, 0, 0.88) 58%,
      rgba(0, 0, 0, 0.42) 78%,
      transparent 100%
    );
  }

  @media (max-width: 768px) {
    height: 460px;
    min-height: 460px;
  }
`;

export const InteractionHint = styled.span`
  position: absolute;
  z-index: 2;
  bottom: 20px;
  left: 50%;

  color: rgba(163, 255, 18, 0.88);

  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  white-space: nowrap;

  text-shadow:
    0 0 10px rgba(163, 255, 18, 0.7),
    0 0 24px rgba(56, 189, 248, 0.55);

  transform: translateX(-50%);
  pointer-events: none;

  @media (max-width: 768px) {
    bottom: 12px;

    font-size: 9px;
    letter-spacing: 0.11em;
  }
`;
