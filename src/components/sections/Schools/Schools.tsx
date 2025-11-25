import { ScrollReveal } from "../../animations/ScrollReveal";

const schools = [
  "Central High School",
  "Masterman",
  "Carver Engineering",
  "Northeast High School",
  "Bodine",
  "Science Leadership Academy",
  "Franklin Towne",
  "Friends Select",
  "St. Joe’s Prep",
  "Girls High",
];

export function Schools() {
  return (
    <section id="schools" className="py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Students Across Educational Communities</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Root2Success has supported students from a wide variety of institutions.
          </p>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {schools.map((school, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div className="px-6 py-3 bg-muted rounded-full text-sm md:text-base font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                {school}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
