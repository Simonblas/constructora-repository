import { HeroText } from "./HeroText";
import { HeroPick } from "./HeroPick";

export const HeroSection = () => {
  return (
    <section id="HeroSectionContainer">
      <HeroText />
      <HeroPick />
      <div className="linea-mobile-hero-izquierda"></div>
      <div className="linea-mobile-hero-derecha"></div>
    </section>
  );
};
