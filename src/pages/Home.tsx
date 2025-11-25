import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero/Hero";
import { WhoWeAre } from "../components/sections/WhoWeAre/WhoWeAre";
import { Offerings } from "../components/sections/Offerings/Offerings";
import { Results } from "../components/sections/Results/Results";
import { Schools } from "../components/sections/Schools/Schools";
import { Gallery } from "../components/sections/Gallery/Gallery";
import { Signup } from "../components/sections/Signup/Signup";
import { AnimatedPageContainer } from "../components/layout/AnimatedPageContainer";

export function Home() {
  return (
    <AnimatedPageContainer>
      <Header />
      <main>
        <Hero />
        <WhoWeAre />
        <Offerings />
        <Results />
        <Schools />
        <Gallery />
        <Signup />
      </main>
      <Footer />
    </AnimatedPageContainer>
  );
}
