import { motion } from "motion/react";
import styled from "styled-components";

export const SectionContainer = styled.section`
  position: relative;

  display: grid;
  grid-template-columns: minmax(320px, 0.85fr) 1.15fr;
  align-items: center;
  gap: 80px;

  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 120px ${({ theme }) => theme.layout.pagePadding};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 64px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 88px;
    padding-bottom: 88px;
  }
`;

export const Profile = styled(motion.figure)`
  position: relative;

  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid rgba(56, 189, 248, 0.26);
  border-radius: ${({ theme }) => theme.radii.large};

  background: linear-gradient(
    145deg,
    rgba(7, 20, 38, 0.98),
    rgba(37, 99, 235, 0.2)
  );
  box-shadow: ${({ theme }) => theme.shadows.blueGlow};

  &::before {
    position: absolute;
    z-index: 1;
    inset: 0;

    background: linear-gradient(to top, rgba(3, 7, 18, 0.96), transparent 55%);
    content: "";
    pointer-events: none;
  }
`;

export const ProfileImage = styled.img`
  display: block;

  width: 100%;
  aspect-ratio: 4 / 5;

  object-fit: cover;
  object-position: center top;
`;

export const ProfileCaption = styled.figcaption`
  position: absolute;
  z-index: 2;
  right: 32px;
  bottom: 30px;
  left: 32px;

  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FounderName = styled.strong`
  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.5rem, 3vw, 2.25rem);
`;

export const FounderRole = styled.span`
  color: ${({ theme }) => theme.colors.accent};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  letter-spacing: 0.14em;
`;

export const Content = styled(motion.div)`
  position: relative;
  z-index: 1;
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
  font-size: clamp(2.5rem, 4.5vw, 4.5rem);
  letter-spacing: -0.055em;
  line-height: 1;
`;

export const Description = styled.p`
  max-width: 700px;
  margin-top: 28px;

  color: ${({ theme }) => theme.colors.textMuted};

  font-size: clamp(1rem, 1.4vw, 1.125rem);
  line-height: 1.75;
`;

export const Pillars = styled.ul`
  display: grid;
  gap: 14px;

  margin-top: 40px;

  list-style: none;
`;

export const Pillar = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;

  padding: 22px 0;
  border-top: 1px solid rgba(56, 189, 248, 0.16);

  &:last-child {
    border-bottom: 1px solid rgba(56, 189, 248, 0.16);
  }
`;

export const PillarId = styled.span`
  padding-top: 4px;

  color: ${({ theme }) => theme.colors.glow};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
`;

export const PillarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PillarTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.125rem;
`;

export const PillarDescription = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};

  line-height: 1.6;
`;
