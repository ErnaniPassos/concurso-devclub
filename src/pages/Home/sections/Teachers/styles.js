import styled from "styled-components";

export const SectionContainer = styled.section`
  position: relative;

  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 120px ${({ theme }) => theme.layout.pagePadding} 160px;
`;

export const SectionHeader = styled.header`
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
  margin-top: 24px;

  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.4rem, 5vw, 4.5rem);
  font-weight: 700;
  letter-spacing: -0.045em;
  line-height: 1.05;
`;

export const Description = styled.p`
  max-width: 720px;
  margin: 28px auto 0;

  color: ${({ theme }) => theme.colors.textMuted};

  font-size: clamp(1rem, 1.4vw, 1.125rem);
  line-height: 1.75;
`;

export const CarouselViewport = styled.div`
  position: relative;
  z-index: 1;

  overflow: hidden;

  margin-top: 72px;
`;

export const TeacherControls = styled.div`
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

export const TeacherPosition = styled.span`
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

export const CarouselTrack = styled.div`
  display: flex;
  align-items: stretch;
  gap: 28px;

  touch-action: pan-y pinch-zoom;
`;

export const TeacherCard = styled.article`
  position: relative;

  display: flex;
  flex: 0 0 42%;
  flex-direction: column;

  min-width: 0;
  min-height: 500px;
  overflow: hidden;
  padding: 30px;
  border: 1px solid rgba(56, 189, 248, 0.26);
  border-radius: ${({ theme }) => theme.radii.large};

  background: linear-gradient(
    145deg,
    rgba(7, 20, 38, 0.98),
    rgba(37, 99, 235, 0.14)
  );

  transition:
    border-color ${({ theme }) => theme.transitions.default},
    box-shadow ${({ theme }) => theme.transitions.default},
    filter ${({ theme }) => theme.transitions.default};

  &::after {
    position: absolute;
    top: 0;
    right: 0;

    width: 58px;
    height: 58px;

    background: linear-gradient(
      225deg,
      rgba(56, 189, 248, 0.22) 0 48%,
      transparent 49%
    );
    content: "";
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-basis: 68%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-basis: 88%;

    min-height: 460px;
    padding: 24px;
  }
`;

export const TeacherId = styled.span`
  position: relative;
  z-index: 3;

  color: ${({ theme }) => theme.colors.glow};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
`;

export const TeacherIdentity = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: clamp(280px, 31vw, 420px);
  margin-top: 20px;
  overflow: hidden;
  border: 1px solid rgba(56, 189, 248, 0.16);
  border-radius: ${({ theme }) => theme.radii.medium};

  background: rgba(3, 7, 18, 0.48);

  .teacher-photo {
    display: block;

    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center top;

    transition:
      filter ${({ theme }) => theme.transitions.default},
      transform ${({ theme }) => theme.transitions.default};
  }

  &[data-teacher-id="01"] .teacher-photo {
    transform: scale(1.05);
  }

  &[data-teacher-id="03"] .teacher-photo {
    transform: scale(1.14);
  }

  &[data-teacher-id="05"] .teacher-photo {
    transform: scale(1.06);
  }

  &[data-teacher-id="06"] .teacher-photo {
    transform: scale(1.04);
  }
`;

export const TeacherCode = styled.span`
  position: absolute;
  top: 18px;
  left: 18px;
  z-index: 2;

  color: ${({ theme }) => theme.colors.accent};
  text-shadow: ${({ theme }) => theme.shadows.greenGlow};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.08em;
`;

export const TeacherName = styled.h3`
  margin-top: 24px;

  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  line-height: 1.1;
`;

export const TeacherRole = styled.p`
  margin-top: 8px;

  color: ${({ theme }) => theme.colors.glow};

  font-size: 0.95rem;
`;

export const TeacherTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  margin-top: auto;
  padding-top: 24px;
`;

export const TechnologyTag = styled.span`
  padding: 7px 10px;
  border: 1px solid rgba(56, 189, 248, 0.24);
  border-radius: 999px;

  background: rgba(3, 7, 18, 0.56);
  color: ${({ theme }) => theme.colors.textMuted};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.65rem;
`;
