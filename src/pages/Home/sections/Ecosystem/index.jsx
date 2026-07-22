import { ecosystemItems } from "../../../../data/home";

import {
  CardCode,
  CardDescription,
  CardId,
  CardTitle,
  CareerPath,
  CareerPulse,
  CareerStage,
  CareerConnection,
  CommunityVisual,
  CommunitySymbol,
  CommunityMembers,
  Description,
  EcosystemCard,
  EcosystemGrid,
  Eyebrow,
  NetworkConnection,
  NetworkCore,
  NetworkLine,
  NetworkNode,
  NetworkPulse,
  NetworkVisual,
  ProgressVisual,
  ProgressLabel,
  ProgressChart,
  ProjectCodeVisual,
  ProjectCodeBrace,
  ProjectCodeLines,
  SectionContainer,
  SectionHeader,
  SupportSignalVisual,
  SupportSignalLabel,
  SupportSignalWaves,
  Title,
} from "./styles";

const ecosystemNetworkNodes = [
  "Formação",
  "Projetos",
  "Suporte",
  "Comunidade",
  "Carreira",
];

export function Ecosystem() {
  return (
    <SectionContainer id="ecossistema">
      <SectionHeader
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Eyebrow>ECOSSISTEMA // 03</Eyebrow>

        <Title>Tudo o que você precisa para continuar evoluindo.</Title>

        <Description>
          Formação, prática, suporte e comunidade conectados em uma única
          jornada.
        </Description>
      </SectionHeader>

      <EcosystemGrid>
        {ecosystemItems.map((item, index) => (
          <EcosystemCard
            key={item.id}
            $featured={item.featured}
            $wide={item.id === "06"}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: index * 0.08,
              duration: 0.6,
            }}
          >
            {item.id === "01" ? (
              <NetworkVisual
                role="img"
                aria-label="DevClub conectado a Formação, Projetos, Suporte, Comunidade e Carreira"
              >
                <NetworkCore>
                  <span>DEV</span>
                  <strong>CLUB</strong>
                </NetworkCore>

                {ecosystemNetworkNodes.map((node, nodeIndex) => (
                  <NetworkConnection data-position={nodeIndex + 1} key={node}>
                    <NetworkLine>
                      <NetworkPulse />
                    </NetworkLine>

                    <NetworkNode>{node}</NetworkNode>
                  </NetworkConnection>
                ))}
              </NetworkVisual>
            ) : (
              <>
                <CardId>{item.id}</CardId>

                {item.id === "02" && (
                  <ProjectCodeVisual
                    role="img"
                    aria-label="Código de um projeto sendo construído"
                  >
                    <ProjectCodeBrace>{"{"}</ProjectCodeBrace>

                    <ProjectCodeLines>
                      <span data-line="1" />
                      <span data-line="2" />
                      <span data-line="3" />
                    </ProjectCodeLines>

                    <ProjectCodeBrace>{"}"}</ProjectCodeBrace>
                  </ProjectCodeVisual>
                )}

                {item.id === "03" && (
                  <SupportSignalVisual
                    role="img"
                    aria-label="Sinal de suporte técnico ativo"
                  >
                    <SupportSignalLabel>HELP</SupportSignalLabel>

                    <SupportSignalWaves>
                      <span data-wave="1" />
                      <span data-wave="2" />
                      <span data-wave="3" />
                    </SupportSignalWaves>
                  </SupportSignalVisual>
                )}

                {item.id === "04" && (
                  <CommunityVisual
                    role="img"
                    aria-label="Comunidade de pessoas conectadas"
                  >
                    <CommunitySymbol>#</CommunitySymbol>

                    <CommunityMembers>
                      <span data-member="1" />
                      <span data-member="2" />
                      <span data-member="3" />
                    </CommunityMembers>
                  </CommunityVisual>
                )}

                {item.id === "05" && (
                  <ProgressVisual
                    role="img"
                    aria-label="Gráfico de evolução constante"
                  >
                    <ProgressLabel>UP</ProgressLabel>

                    <ProgressChart>
                      <span data-step="1" />
                      <span data-step="2" />
                      <span data-step="3" />
                      <span data-step="4" />
                    </ProgressChart>
                  </ProgressVisual>
                )}

                {!["02", "03", "04", "05"].includes(item.id) && (
                  <CardCode>{item.code}</CardCode>
                )}

                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                {item.id === "06" && (
                  <CareerPath
                    role="img"
                    aria-label="Trilha profissional: Portfólio, Entrevista e Contratação"
                  >
                    <CareerStage data-stage="1">Portfólio</CareerStage>

                    <CareerConnection data-connection="1">
                      <CareerPulse />
                    </CareerConnection>

                    <CareerStage data-stage="2">Entrevista</CareerStage>

                    <CareerConnection data-connection="2">
                      <CareerPulse />
                    </CareerConnection>

                    <CareerStage data-stage="3">Contratação</CareerStage>
                  </CareerPath>
                )}
              </>
            )}
          </EcosystemCard>
        ))}
      </EcosystemGrid>
    </SectionContainer>
  );
}
