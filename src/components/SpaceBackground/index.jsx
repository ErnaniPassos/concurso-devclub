import { BackgroundContainer, BlueGlow, CyanGlow, Grid, Stars } from "./styles";

export function SpaceBackground() {
  return (
    <BackgroundContainer aria-hidden="true">
      <BlueGlow />
      <CyanGlow />
      <Grid />
      <Stars />
    </BackgroundContainer>
  );
}
