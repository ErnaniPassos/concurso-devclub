import {
  Brand,
  HeaderContainer,
  HeaderContent,
  Navigation,
  NavigationLink,
  NavigationList,
  StartLink,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Brand href="#inicio" aria-label="DevClub — início">
          &lt;DevClub/&gt;
        </Brand>

        <Navigation aria-label="Navegação principal">
          <NavigationList>
            <li>
              <NavigationLink href="#formacoes">Formações</NavigationLink>
            </li>

            <li>
              <NavigationLink href="#jornada">Jornada</NavigationLink>
            </li>

            <li>
              <NavigationLink href="#ecossistema">Ecossistema</NavigationLink>
            </li>

            <li>
              <NavigationLink href="#projetos">Projetos</NavigationLink>
            </li>

            <li>
              <NavigationLink href="#resultados">Resultados</NavigationLink>
            </li>

            <li>
              <NavigationLink
                href="https://aulas.devclub.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                Área do aluno
              </NavigationLink>
            </li>
          </NavigationList>
        </Navigation>

        <StartLink
          href="https://api.whatsapp.com/send/?phone=5516990482444&text=quero%20me%20matricular&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer"
        >
          Quero ser aluno
        </StartLink>
      </HeaderContent>
    </HeaderContainer>
  );
}
