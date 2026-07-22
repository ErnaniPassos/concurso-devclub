import { companies } from "../../../../data/home";
import {
  CompanyItem,
  CompanyList,
  Content,
  Description,
  Eyebrow,
  Marquee,
  SectionContainer,
  Title,
  Track,
} from "./styles";

export function Companies() {
  return (
    <SectionContainer id="empresas" aria-labelledby="companies-title">
      <Content>
        <Eyebrow>CONEXÕES REAIS // MERCADO</Eyebrow>

        <Title id="companies-title">
          Talentos DevClub já chegaram onde a tecnologia acontece.
        </Title>

        <Description>
          Empresas que contam com alunos e alunas formados pelo ecossistema
          DevClub.
        </Description>
      </Content>

      <Marquee>
        <Track>
          <CompanyList aria-label="Empresas com talentos formados pelo DevClub">
            {companies.map((company) => (
              <CompanyItem key={company}>{company}</CompanyItem>
            ))}
          </CompanyList>

          <CompanyList aria-hidden="true">
            {companies.map((company) => (
              <CompanyItem key={`duplicate-${company}`}>{company}</CompanyItem>
            ))}
          </CompanyList>
        </Track>
      </Marquee>
    </SectionContainer>
  );
}
