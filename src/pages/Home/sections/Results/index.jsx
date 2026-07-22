import { resultItems } from "../../../../data/home";

import {
  Description,
  Eyebrow,
  ResultCard,
  ResultId,
  ResultLabel,
  ResultsGrid,
  ResultValue,
  SectionContainer,
  SectionHeader,
  Title,
} from "./styles";

export function Results() {
  return (
    <SectionContainer id="resultados">
      <SectionHeader
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Eyebrow>IMPACTO REAL // 05</Eyebrow>

        <Title>
          Quando o conhecimento encontra direção, o resultado aparece.
        </Title>

        <Description>
          Um ecossistema construído para transformar estudo em evolução
          profissional.
        </Description>
      </SectionHeader>

      <ResultsGrid>
        {resultItems.map((result, index) => (
          <ResultCard
            key={result.id}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.015 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              delay: index * 0.1,
              duration: 0.65,
            }}
          >
            <ResultId>{result.id}</ResultId>
            <ResultValue>{result.value}</ResultValue>
            <ResultLabel>{result.label}</ResultLabel>
          </ResultCard>
        ))}
      </ResultsGrid>
    </SectionContainer>
  );
}
