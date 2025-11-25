import { ScrollReveal } from "../../animations/ScrollReveal";
import { ParallaxWrapper } from "../../animations/ParallaxWrapper";
import whoWeAreImg from "../../../assets/images/competitions/IMG_6984.jpg";

export function WhoWeAre() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Empowering Students Through Precision, Patience, and Practice
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Root2Success isn’t just tutoring. It’s structured support grounded in mentorship and clear strategies.
                Students come to us frustrated or uncertain; they leave confident, organized, and intellectually curious.
              </p>
              <p>
                We combine deep subject expertise with individualized guidance, focusing on the habits and techniques that drive long-term academic growth.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative h-[400px] rounded-2xl overflow-hidden bg-muted shadow-xl">
             <ParallaxWrapper className="h-full w-full">
                <img 
                  src={whoWeAreImg} 
                  alt="Tutors working with students" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
             </ParallaxWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
