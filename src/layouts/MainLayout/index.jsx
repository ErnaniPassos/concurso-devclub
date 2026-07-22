import { Header } from "../../components/Header";
import { SpaceBackground } from "../../components/SpaceBackground";
import { LayoutContainer, MainContent } from "./styles";
import { Footer } from "../../components/Footer";

export function MainLayout({ children }) {
  return (
    <LayoutContainer>
      <SpaceBackground />
      <Header />

      <MainContent>{children}</MainContent>
      <Footer />
    </LayoutContainer>
  );
}
