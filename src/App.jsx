import { MotionConfig } from "motion/react";
import { ThemeProvider } from "styled-components";

import { MainLayout } from "./layouts/MainLayout";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import { Home } from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MotionConfig reducedMotion="user">
        <GlobalStyles />

        <MainLayout>
          <Home />
        </MainLayout>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
