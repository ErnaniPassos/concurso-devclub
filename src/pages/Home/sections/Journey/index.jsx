import { useRef } from "react";
import { useScroll, useSpring } from "motion/react";
import { journeySteps } from "../../../../data/home";

import {
  Description,
  Eyebrow,
  SectionContainer,
  SectionHeader,
  StepCard,
  StepContent,
  StepDescription,
  StepId,
  StepMarker,
  StepStage,
  StepTitle,
  Timeline,
  TimelineLine,
  TimelineProgress,
  Title,
} from "./styles";

export function Journey() {
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 75%"],
  });

  const progressScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <SectionContainer id="jornada">
      <SectionHeader
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Eyebrow>ROTA DE EVOLUÇÃO // 02</Eyebrow>

        <Title>Uma jornada construída etapa por etapa.</Title>

        <Description>
          Do primeiro contato com o código à preparação para o mercado, cada
          fase aproxima você do seu próximo nível.
        </Description>
      </SectionHeader>

      <Timeline ref={timelineRef}>
        <TimelineLine aria-hidden="true" />
        <TimelineProgress
          aria-hidden="true"
          style={{ scaleY: progressScale }}
        />

        {journeySteps.map((step, index) => (
          <StepCard
            key={step.id}
            $side={index % 2 === 0 ? "left" : "right"}
            data-side={index % 2 === 0 ? "left" : "right"}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -48 : 48,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <StepMarker aria-hidden="true" />

            <StepContent>
              <StepId>{step.id}</StepId>
              <StepStage>{step.stage}</StepStage>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepContent>
          </StepCard>
        ))}
      </Timeline>
    </SectionContainer>
  );
}
