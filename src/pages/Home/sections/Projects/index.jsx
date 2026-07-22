import { projectItems } from "../../../../data/home";

import {
  Description,
  Eyebrow,
  PreviewLabel,
  ProjectCard,
  ProjectCategory,
  ProjectContent,
  ProjectDescription,
  ProjectId,
  ProjectPreview,
  ProjectsGrid,
  ProjectTitle,
  SectionContainer,
  SectionHeader,
  Technology,
  TechnologyList,
  Title,
  WindowBar,
} from "./styles";

export function Projects() {
  return (
    <SectionContainer id="projetos">
      <SectionHeader
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Eyebrow>PROJETOS REAIS // 04</Eyebrow>

        <Title>Aprenda construindo. Evolua entregando.</Title>

        <Description>
          Cada projeto transforma teoria em experiência e experiência em
          portfólio.
        </Description>
      </SectionHeader>

      <ProjectsGrid>
        {projectItems.map((project, index) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: index * 0.12,
              duration: 0.65,
            }}
          >
            <ProjectPreview aria-hidden="true">
              <WindowBar>
                <span />
                <span />
                <span />
              </WindowBar>

              <PreviewLabel>{project.category}</PreviewLabel>
            </ProjectPreview>

            <ProjectContent>
              <ProjectId>{project.id}</ProjectId>
              <ProjectCategory>{project.category}</ProjectCategory>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>

              <TechnologyList>
                {project.technologies.map((technology) => (
                  <Technology key={technology}>{technology}</Technology>
                ))}
              </TechnologyList>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </SectionContainer>
  );
}
