import {
  Accent,
  Actions,
  CareerOrbit,
  Content,
  Eyebrow,
  HeroContainer,
  HeroDescription,
  HeroTitle,
  OrbitCore,
  OrbitLabel,
  OrbitRing,
  PrimaryLink,
  SecondaryLink,
  Visual,
} from "./styles";

export function Hero() {
  return (
    <HeroContainer id="inicio">
      <Content
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Eyebrow>DEVCLUB // BASE DE LANÇAMENTO</Eyebrow>

        <HeroTitle>
          Da primeira linha de código
          <br />
          ao primeiro <Accent>SIM.</Accent>
        </HeroTitle>

        <HeroDescription>
          Aprenda programação na prática, desenvolva projetos reais e prepare-se
          para conquistar sua vaga na tecnologia.
        </HeroDescription>

        <Actions>
          <PrimaryLink href="#jornada">Começar minha jornada</PrimaryLink>
          <SecondaryLink href="#ecossistema">Explorar a rota</SecondaryLink>
        </Actions>
      </Content>

      <Visual
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.86, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          delay: 0.25,
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <CareerOrbit>
          <OrbitRing />
          <OrbitRing $secondary />

          <OrbitCore>
            <span>&lt;/&gt;</span>
            <strong>DEV</strong>
          </OrbitCore>

          <OrbitLabel $position="top">Código</OrbitLabel>
          <OrbitLabel $position="right">Projetos</OrbitLabel>
          <OrbitLabel $position="bottom">Carreira</OrbitLabel>
          <OrbitLabel $position="left">Comunidade</OrbitLabel>
        </CareerOrbit>
      </Visual>
    </HeroContainer>
  );
}
