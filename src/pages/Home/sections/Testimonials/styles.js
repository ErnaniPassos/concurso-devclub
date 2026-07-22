import { motion } from "motion/react";
import styled from "styled-components";

export const SectionContainer = styled.section`
  position: relative;

  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 120px ${({ theme }) => theme.layout.pagePadding};

  &::before {
    position: absolute;
    top: 20%;
    left: 50%;

    width: 70%;
    height: 60%;

    background: radial-gradient(
      circle,
      rgba(37, 99, 235, 0.14),
      transparent 68%
    );
    content: "";
    filter: blur(50px);
    pointer-events: none;
    transform: translateX(-50%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 88px;
    padding-bottom: 88px;
  }
`;

export const SectionHeader = styled(motion.header)`
  position: relative;
  z-index: 1;

  max-width: 900px;
  margin: 0 auto;

  text-align: center;
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
  font-size: clamp(2.4rem, 5vw, 4.5rem);
  letter-spacing: -0.05em;
  line-height: 1.02;
`;

export const Description = styled.p`
  max-width: 680px;
  margin: 28px auto 0;

  color: ${({ theme }) => theme.colors.textMuted};

  font-size: clamp(1rem, 1.4vw, 1.125rem);
  line-height: 1.7;
`;

export const TestimonialsGrid = styled.div`
  position: relative;
  z-index: 1;

  overflow: hidden;

  margin-top: 72px;

  .testimonials-track {
    display: flex;
    gap: 24px;

    touch-action: pan-y pinch-zoom;
  }
`;

export const TestimonialControls = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;

  margin-top: 28px;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 42px;
    height: 42px;
    border: 1px solid rgba(56, 189, 248, 0.34);
    border-radius: 50%;

    background: rgba(7, 20, 38, 0.9);
    color: ${({ theme }) => theme.colors.glow};

    font-size: 1.15rem;

    cursor: pointer;

    transition:
      border-color ${({ theme }) => theme.transitions.fast},
      box-shadow ${({ theme }) => theme.transitions.fast},
      color ${({ theme }) => theme.transitions.fast};
  }

  > button:hover,
  > button:focus-visible {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.greenGlow};
    color: ${({ theme }) => theme.colors.accent};
    outline: none;
  }
`;

export const TestimonialIndicators = styled.span`
  display: flex;
  align-items: center;
  gap: 7px;

  button {
    width: 8px;
    height: 8px;
    padding: 0;
    border: 0;
    border-radius: 999px;

    background: rgba(56, 189, 248, 0.3);

    cursor: pointer;

    transition:
      width ${({ theme }) => theme.transitions.fast},
      background ${({ theme }) => theme.transitions.fast},
      box-shadow ${({ theme }) => theme.transitions.fast};
  }

  button.is-active {
    width: 24px;

    background: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.greenGlow};
  }

  button:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.glow};
    outline-offset: 4px;
  }
`;

export const TestimonialCard = styled(motion.article)`
  position: relative;

  display: flex;
  flex-direction: column;
  flex: 0 0 calc((100% - 48px) / 3);

  min-width: 0;

  min-height: 390px;
  padding: 36px;
  border: 1px solid rgba(56, 189, 248, 0.22);
  border-radius: ${({ theme }) => theme.radii.large};

  background: linear-gradient(
    145deg,
    rgba(7, 20, 38, 0.96),
    rgba(37, 99, 235, 0.14)
  );

  border-color: ${({ $active, theme }) =>
    $active ? theme.colors.glow : "rgba(56, 189, 248, 0.22)"};

  box-shadow: ${({ $active, theme }) =>
    $active ? theme.shadows.blueGlow : "none"};

  filter: ${({ $active }) =>
    $active ? "brightness(1) saturate(1)" : "brightness(0.58) saturate(0.55)"};

  transition:
    border-color ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast},
    filter ${({ theme }) => theme.transitions.default},
    transform ${({ theme }) => theme.transitions.fast};

  &::before {
    position: absolute;
    top: -22px;
    right: 28px;

    color: rgba(56, 189, 248, 0.16);

    content: "“";

    font-family: Georgia, serif;
    font-size: 8rem;
    line-height: 1;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.glow};
    box-shadow: ${({ theme }) => theme.shadows.blueGlow};
    transform: translateY(-8px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-basis: 72%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-basis: 88%;

    min-height: 350px;
    padding: 28px;
  }
`;

export const CardId = styled.span`
  color: ${({ theme }) => theme.colors.glow};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  letter-spacing: 0.14em;
`;

export const Rating = styled.span`
  margin-top: 36px;

  color: ${({ theme }) => theme.colors.accent};
  text-shadow: ${({ theme }) => theme.shadows.greenGlow};

  font-size: 0.875rem;
  letter-spacing: 0.2em;
`;

export const Quote = styled.blockquote`
  display: flex;
  flex: 1;
  flex-direction: column;

  p {
    margin-top: 24px;

    color: ${({ theme }) => theme.colors.text};

    font-size: clamp(1.05rem, 1.5vw, 1.25rem);
    line-height: 1.65;
  }
`;

export const Author = styled.footer`
  display: flex;
  align-items: center;
  gap: 14px;

  margin-top: auto;
  padding-top: 28px;
  border-top: 1px solid rgba(56, 189, 248, 0.16);
`;

export const TestimonialAvatar = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border: 1px solid rgba(183, 255, 60, 0.65);
  border-radius: 50%;

  background:
    radial-gradient(
      circle at 35% 30%,
      rgba(183, 255, 60, 0.2),
      transparent 48%
    ),
    rgba(7, 20, 38, 0.96);
  box-shadow:
    0 0 14px rgba(183, 255, 60, 0.18),
    inset 0 0 12px rgba(56, 189, 248, 0.12);

  color: ${({ theme }) => theme.colors.accent};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
`;

export const AuthorCopy = styled.span`
  display: flex;
  flex-direction: column;
  gap: 5px;

  min-width: 0;
`;

export const AuthorName = styled.strong`
  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1rem;
`;

export const AuthorRole = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};

  font-size: 0.875rem;
`;
