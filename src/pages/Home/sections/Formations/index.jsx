import { formations } from "../../../../data/home";
import {
  CardDescription,
  CardId,
  CardTitle,
  Description,
  Eyebrow,
  FormationCard,
  FormationsGrid,
  SectionContainer,
  SectionHeader,
  Technology,
  TechnologyList,
  Title,
} from "./styles";

export function Formations() {
  return (
    <SectionContainer id="formacoes" aria-labelledby="formations-title">
      <SectionHeader
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <Eyebrow>FORMAÇÕES // DEVCLUB</Eyebrow>

        <Title id="formations-title">
          Escolha uma direção. Construa o próximo nível.
        </Title>

        <Description>
          Trilhas práticas para começar do zero, especializar-se e acompanhar as
          transformações do mercado de tecnologia.
        </Description>
      </SectionHeader>

      <FormationsGrid>
        {formations.map((formation, index) => (
          <FormationCard
            key={formation.id}
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.65,
              delay: index * 0.08,
            }}
          >
            <CardId>{formation.id}</CardId>

            <CardTitle>{formation.title}</CardTitle>

            <CardDescription>{formation.description}</CardDescription>

            <TechnologyList
              aria-label={`Tecnologias da formação ${formation.title}`}
            >
              {formation.technologies.map((technology) => (
                <Technology key={technology}>{technology}</Technology>
              ))}
            </TechnologyList>
          </FormationCard>
        ))}
      </FormationsGrid>
    </SectionContainer>
  );
}
