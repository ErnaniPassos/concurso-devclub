import { FireballScene } from "./FireballScene";
import {
  Accent,
  Content,
  Description,
  Eyebrow,
  PrimaryLink,
  SectionContainer,
  Supernova,
  Title,
  Visual,
} from "./styles";

export function FirstYes() {
  return (
    <SectionContainer id="primeiro-sim">
      <Content>
        <Eyebrow>DESTINO FINAL // 07</Eyebrow>

        <Title>
          O próximo <Accent>SIM</Accent>
          <br />
          pode ser o seu.
        </Title>

        <Description>
          Toda grande transformação começa com uma decisão. Dê o primeiro passo
          e transforme aprendizado em uma nova possibilidade profissional.
        </Description>

        <PrimaryLink
          href="https://www.devclub.com.br/"
          target="_blank"
          rel="noreferrer"
        >
          Começar minha jornada
        </PrimaryLink>
      </Content>

      <Visual
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.55, rotate: -12 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Supernova>
          <FireballScene />
        </Supernova>
      </Visual>
    </SectionContainer>
  );
}
