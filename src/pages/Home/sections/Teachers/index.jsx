import { useEffect, useMemo, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import andreRocha from "../../../../assets/images/teachers/andre-rocha.webp";
import beatrizLima from "../../../../assets/images/teachers/beatriz-lima.webp";
import caioMartins from "../../../../assets/images/teachers/caio-martins.webp";
import diegoNunes from "../../../../assets/images/teachers/diego-nunes.webp";
import helenaDuarte from "../../../../assets/images/teachers/helena-duarte.webp";
import mayaTorres from "../../../../assets/images/teachers/maya-torres.webp";

import {
  CarouselTrack,
  CarouselViewport,
  Description,
  Eyebrow,
  SectionContainer,
  SectionHeader,
  TeacherCard,
  TeacherCode,
  TeacherIdentity,
  TeacherName,
  TeacherControls,
  TeacherPosition,
  TeacherRole,
  TeacherTechnologies,
  TechnologyTag,
  TeacherId,
  Title,
} from "./styles";
import { teachers } from "../../../../data/home";

const teacherImages = {
  "01": helenaDuarte,
  "02": caioMartins,
  "03": beatrizLima,
  "04": andreRocha,
  "05": mayaTorres,
  "06": diegoNunes,
};

export function Teachers() {
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 5500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    [],
  );

  const [carouselRef, carouselApi] = useEmblaCarousel(
    {
      align: "center",
      loop: true,
    },
    [autoplay],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return undefined;
    }

    const updateSelectedIndex = () => {
      setSelectedIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", updateSelectedIndex);

    return () => {
      carouselApi.off("select", updateSelectedIndex);
    };
  }, [carouselApi]);

  return (
    <SectionContainer id="professores" aria-labelledby="teachers-title">
      <SectionHeader>
        <Eyebrow>QUEM GUIA A JORNADA // 07</Eyebrow>

        <Title id="teachers-title">
          Experiência que transforma código em caminho.
        </Title>

        <Description>
          Mentores que ensinam tecnologia, compartilham decisões reais e ajudam
          você a evoluir com direção.
        </Description>
      </SectionHeader>

      <CarouselViewport ref={carouselRef}>
        <CarouselTrack>
          {teachers.map((teacher, index) => (
            <TeacherCard key={teacher.id} $active={index === selectedIndex}>
              <TeacherId>ID // {teacher.id}</TeacherId>

              <TeacherIdentity data-teacher-id={teacher.id}>
                <TeacherCode>{teacher.code}</TeacherCode>

                <img
                  className="teacher-photo"
                  src={teacherImages[teacher.id]}
                  alt={`Mentor fictício ${teacher.name}`}
                  loading="lazy"
                  decoding="async"
                />
              </TeacherIdentity>

              <TeacherName>{teacher.name}</TeacherName>
              <TeacherRole>{teacher.role}</TeacherRole>

              <TeacherTechnologies>
                {teacher.technologies.map((technology) => (
                  <TechnologyTag key={technology}>{technology}</TechnologyTag>
                ))}
              </TeacherTechnologies>
            </TeacherCard>
          ))}
        </CarouselTrack>
      </CarouselViewport>
      <TeacherControls aria-label="Controles dos professores">
        <button
          type="button"
          className="teachers-controls__button"
          aria-label="Professor anterior"
          onClick={() => carouselApi?.scrollPrev()}
        >
          ←
        </button>

        <TeacherPosition>
          {teachers.map((teacher, index) => (
            <button
              type="button"
              key={teacher.id}
              className={index === selectedIndex ? "is-active" : ""}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Ir para o professor ${teacher.name}`}
              aria-current={index === selectedIndex ? "true" : undefined}
            />
          ))}
        </TeacherPosition>

        <button
          type="button"
          className="teachers-controls__button"
          aria-label="Próximo professor"
          onClick={() => carouselApi?.scrollNext()}
        >
          →
        </button>
      </TeacherControls>
    </SectionContainer>
  );
}
