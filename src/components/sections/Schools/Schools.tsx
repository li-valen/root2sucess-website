import { ScrollReveal } from "../../animations/ScrollReveal";

const schools = [
  "Anne Frank Elementary School",
  "C.C.A. Baldi Middle School",
  "Chester A. Arthur School",
  "Dr. Ethel Allen School",
  "Fairwold Academy",
  "Horatio B. Hackett School",
  "Independence Charter School",
  "Independence Charter School West",
  "James G. Blaine Academics Plus School",
  "James Logan Elementary School",
  "John H. Taggart School",
  "Joseph J. Greenberg Elementary School",
  "Julia R. Masterman School",
  "Lewis C. Cassidy Academics Plus School",
  "MaST Community Charter School",
  "Overbrook Educational Center",
  "Pan American Academy Charter School",
  "Penn Alexander School",
  "Penrose Elementary School",
  "Shawmont School",
  "Southwest Leadership Academy",
  "Thomas K. Finletter School",
  "Tinicum Elementary School",
  "W.C. Longstreth Elementary School",
  "Wissahickon Charter School",
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
