import { Hero } from "./sections/Hero";
import { StartingPoint } from "./sections/StartingPoint";
import { Journey } from "./sections/Journey";
import { Ecosystem } from "./sections/Ecosystem";
import { Projects } from "./sections/Projects";
import { Results } from "./sections/Results";
import { FirstYes } from "./sections/FirstYes";
import { Companies } from "./sections/Companies";
import { Testimonials } from "./sections/Testimonials";
import { Formations } from "./sections/Formations";
import { About } from "./sections/About";
import { Teachers } from "./sections/Teachers";
export function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <Formations />
      <About />
      <Teachers />
      <StartingPoint />
      <Journey />
      <Ecosystem />
      <Projects />
      <Results />
      <Testimonials />
      <FirstYes />
    </>
  );
}
