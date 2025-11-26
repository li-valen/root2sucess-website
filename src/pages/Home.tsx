import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero/Hero";
import { WhoWeAre } from "../components/sections/WhoWeAre/WhoWeAre";
import { Offerings } from "../components/sections/Offerings/Offerings";
import { Schedule } from "../components/sections/Schedule/Schedule";
import { Results } from "../components/sections/Results/Results";
import { Team } from "../components/sections/Team/Team";
import { Schools } from "../components/sections/Schools/Schools";
import { Contact } from "../components/sections/Contact/Contact";
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
        <Schedule />
        <Results />
        <Team />
        <Schools />
        <Gallery />
        <Signup />
        <Contact />
      </main>
      <Footer />
    </AnimatedPageContainer>
  );
}
