import { startingPoints } from "../../../../data/home";

import {
  CardsGrid,
  Description,
  Divider,
  Eyebrow,
  PointCard,
  PointId,
  Problem,
  SectionContainer,
  SectionHeader,
  Solution,
  Title,
} from "./styles";

export function StartingPoint() {
  return (
    <SectionContainer id="ponto-de-partida">
      <SectionHeader
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Eyebrow>COORDENADAS // 01</Eyebrow>

        <Title>
          Todo programador começa do zero.
          <br />O que muda é a rota.
        </Title>

        <Description>
          Entrar na tecnologia parece confuso quando você tenta descobrir tudo
          sozinho. O DevClub transforma incerteza em direção.
        </Description>
      </SectionHeader>

      <CardsGrid>
        {startingPoints.map((point, index) => (
          <PointCard
            key={point.id}
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              delay: index * 0.14,
              duration: 0.65,
            }}
          >
            <PointId>{point.id}</PointId>
            <Problem>{point.problem}</Problem>
            <Divider aria-hidden="true" />
            <Solution>{point.solution}</Solution>
          </PointCard>
        ))}
      </CardsGrid>
    </SectionContainer>
  );
}
