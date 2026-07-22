import {
  Brand,
  BrandColumn,
  ColumnTitle,
  FooterBottom,
  FooterContainer,
  FooterContent,
  FooterLink,
  LinkColumn,
  LinkList,
  StartLink,
  Tagline,
} from "./styles";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <BrandColumn>
          <Brand href="/" aria-label="Voltar ao início">
            {"<DevClub/>"}
          </Brand>

          <Tagline>
            Formação prática para transformar conhecimento em oportunidade.
          </Tagline>

          <StartLink
            href="https://api.whatsapp.com/send/?phone=5516990482444&text=quero%20me%20matricular&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            Quero ser aluno
          </StartLink>
        </BrandColumn>

        <LinkColumn as="nav" aria-label="Navegação do rodapé">
          <ColumnTitle>Navegação</ColumnTitle>

          <LinkList>
            <li>
              <FooterLink href="#quem-somos">Quem somos</FooterLink>
            </li>

            <li>
              <FooterLink href="#formacoes">Formações</FooterLink>
            </li>

            <li>
              <FooterLink href="#projetos">Projetos</FooterLink>
            </li>

            <li>
              <FooterLink href="#depoimentos">Depoimentos</FooterLink>
            </li>
          </LinkList>
        </LinkColumn>

        <LinkColumn>
          <ColumnTitle>Acesso</ColumnTitle>

          <LinkList>
            <li>
              <FooterLink
                href="https://aulas.devclub.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                Área do aluno
              </FooterLink>
            </li>

            <li>
              <FooterLink
                href="https://lp.devclub.com.br/mba"
                target="_blank"
                rel="noreferrer"
              >
                MBA
              </FooterLink>
            </li>

            <li>
              <FooterLink
                href="https://www.devclub.com.br/newsletter"
                target="_blank"
                rel="noreferrer"
              >
                Newsletter
              </FooterLink>
            </li>
          </LinkList>
        </LinkColumn>

        <LinkColumn>
          <ColumnTitle>Acompanhe</ColumnTitle>

          <LinkList>
            <li>
              <FooterLink
                href="https://www.instagram.com/devabordo"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </FooterLink>
            </li>

            <li>
              <FooterLink
                href="https://www.linkedin.com/school/devclub-com-br"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </FooterLink>
            </li>

            <li>
              <FooterLink
                href="https://www.youtube.com/@DevClub-RodolfoMori"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </FooterLink>
            </li>

            <li>
              <FooterLink href="mailto:contato@devclub.com.br">
                Contato
              </FooterLink>
            </li>
          </LinkList>
        </LinkColumn>
      </FooterContent>

      <FooterBottom>
        <p>© {currentYear} DevClub. Todos os direitos reservados.</p>
        <span>Da primeira linha de código ao primeiro SIM.</span>
      </FooterBottom>
    </FooterContainer>
  );
}
