import styled from "styled-components";

export const FireballContainer = styled.div`
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;

  width: 100%;
  aspect-ratio: 1;

  transform: translate(-50%, -50%);
  pointer-events: none;
`;

export const FireballCanvas = styled.div`
  position: absolute;
  inset: 0;

  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    #000 9%,
    #000 91%,
    transparent 100%
  );

  mask-image: linear-gradient(
    to right,
    transparent 0%,
    #000 9%,
    #000 91%,
    transparent 100%
  );

  canvas {
    display: block;

    width: 100% !important;
    height: 100% !important;

    -webkit-mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      #000 9%,
      #000 91%,
      transparent 100%
    );

    mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      #000 9%,
      #000 91%,
      transparent 100%
    );
  }
`;
export const FireballLabel = styled.div`
  position: absolute;
  z-index: 4;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};

  filter: ${({ $visible }) => ($visible ? "blur(0)" : "blur(10px)")};

  transform: translate(-50%, -50%)
    scale(${({ $visible }) => ($visible ? 1 : 0.38)});

  transition:
    opacity 480ms ease-out,
    filter 650ms ease-out,
    transform 700ms cubic-bezier(0.16, 1, 0.3, 1);

  pointer-events: none;
`;

export const FireballSubtitle = styled.span`
  color: rgba(248, 250, 252, 0.94);

  font-family: ${({ theme }) => theme.fonts.mono};

  font-size: clamp(0.48rem, 0.75vw, 0.68rem);

  font-weight: 700;
  letter-spacing: 0.2em;

  text-shadow:
    0 0 8px rgba(56, 189, 248, 0.9),
    0 0 18px rgba(37, 99, 235, 0.65);
`;

export const FireballTitle = styled.strong`
  position: relative;
  z-index: 2;

  margin-top: 5px;

  color: ${({ theme }) => theme.colors.background};
  // #7ca5da;

  font-family: ${({ theme }) => theme.fonts.heading};

  font-size: clamp(2.7rem, 5.2vw, 4.5rem);

  font-weight: 900;
  letter-spacing: -0.06em;
  line-height: 0.86;

  text-shadow:
    0 2px 2px rgba(248, 250, 252, 0.85),
    0 0 8px rgba(117, 221, 255, 0.82),
    0 0 18px rgba(56, 189, 248, 0.48);
`;
