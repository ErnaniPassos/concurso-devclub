import rodolfoMori from "../../../../assets/images/rodolfo-mori.png";
import {
  Content,
  Description,
  Eyebrow,
  FounderName,
  FounderRole,
  Pillar,
  PillarContent,
  PillarDescription,
  PillarId,
  Pillars,
  PillarTitle,
  Profile,
  ProfileCaption,
  ProfileImage,
  SectionContainer,
  Title,
} from "./styles";

export function About() {
  return (
    <SectionContainer id="quem-somos" aria-labelledby="about-title">
      <Profile
        initial={{ opacity: 0, x: -56 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.85 }}
      >
        <ProfileImage
          src={rodolfoMori}
          alt="Rodolfo Mori, fundador do DevClub"
          loading="lazy"
          decoding="async"
        />

        <ProfileCaption>
          <FounderName>Rodolfo Mori</FounderName>
          <FounderRole>FUNDADOR DO DEVCLUB</FounderRole>
        </ProfileCaption>
      </Profile>

      <Content
        initial={{ opacity: 0, x: 56 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.85 }}
      >
        <Eyebrow>QUEM SOMOS // DEVCLUB</Eyebrow>

        <Title id="about-title">
          Uma escola criada para transformar aprendizado em oportunidade.
        </Title>

        <Description>
          O DevClub forma programadores preparados para o mercado por meio de
          uma metodologia direta, prática e conectada aos desafios reais da
          profissão.
        </Description>

        <Pillars>
          <Pillar>
            <PillarId>01</PillarId>

            <PillarContent>
              <PillarTitle>Aprender fazendo</PillarTitle>
              <PillarDescription>
                Projetos, desafios e aplicações construídas na prática.
              </PillarDescription>
            </PillarContent>
          </Pillar>

          <Pillar>
            <PillarId>02</PillarId>

            <PillarContent>
              <PillarTitle>Formação conectada ao mercado</PillarTitle>
              <PillarDescription>
                Tecnologias e habilidades exigidas pelas empresas.
              </PillarDescription>
            </PillarContent>
          </Pillar>

          <Pillar>
            <PillarId>03</PillarId>

            <PillarContent>
              <PillarTitle>Acompanhamento contínuo</PillarTitle>
              <PillarDescription>
                Mentorias, suporte humano e uma comunidade ativa.
              </PillarDescription>
            </PillarContent>
          </Pillar>
        </Pillars>
      </Content>
    </SectionContainer>
  );
}
