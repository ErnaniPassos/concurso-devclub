import { useEffect, useMemo, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import { testimonials } from "../../../../data/home";
import {
  Author,
  AuthorCopy,
  AuthorName,
  AuthorRole,
  CardId,
  Description,
  Eyebrow,
  Quote,
  Rating,
  SectionContainer,
  SectionHeader,
  TestimonialAvatar,
  TestimonialCard,
  TestimonialControls,
  TestimonialsGrid,
  TestimonialIndicators,
  Title,
} from "./styles";

export function Testimonials() {
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 5000,
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
    <SectionContainer id="depoimentos" aria-labelledby="testimonials-title">
      <SectionHeader
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <Eyebrow>VOZES DA JORNADA // 06</Eyebrow>

        <Title id="testimonials-title">
          Histórias de quem transformou direção em resultado.
        </Title>

        <Description>
          Pessoas diferentes, o mesmo ponto de virada: decidir começar e
          continuar evoluindo.
        </Description>
      </SectionHeader>

      <TestimonialsGrid ref={carouselRef}>
        <div className="testimonials-track">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              $active={index === selectedIndex}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
            >
              <CardId>{testimonial.id}</CardId>

              <Rating aria-label="Avaliação: 5 de 5 estrelas">★★★★★</Rating>

              <Quote>
                <p>“{testimonial.quote}”</p>

                <Author>
                  <TestimonialAvatar aria-hidden="true">
                    {testimonial.name
                      .split(" ")
                      .map((word) => word[0])
                      .slice(0, 2)
                      .join("")}
                  </TestimonialAvatar>

                  <AuthorCopy>
                    <AuthorName>{testimonial.name}</AuthorName>
                    <AuthorRole>{testimonial.role}</AuthorRole>
                  </AuthorCopy>
                </Author>
              </Quote>
            </TestimonialCard>
          ))}
        </div>
      </TestimonialsGrid>

      <TestimonialControls aria-label="Controles dos depoimentos">
        <button
          type="button"
          onClick={() => carouselApi?.scrollPrev()}
          aria-label="Depoimento anterior"
        >
          ←
        </button>

        <TestimonialIndicators>
          {testimonials.map((testimonial, index) => (
            <button
              type="button"
              key={testimonial.id}
              className={index === selectedIndex ? "is-active" : ""}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Ir para o depoimento ${index + 1}`}
              aria-current={index === selectedIndex ? "true" : undefined}
            />
          ))}
        </TestimonialIndicators>

        <button
          type="button"
          onClick={() => carouselApi?.scrollNext()}
          aria-label="Próximo depoimento"
        >
          →
        </button>
      </TestimonialControls>
    </SectionContainer>
  );
}
