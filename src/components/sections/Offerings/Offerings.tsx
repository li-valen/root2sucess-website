import { ScrollReveal } from "../../animations/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../ui/Card";
import { BookOpen, Trophy, GraduationCap, Brain, Calculator, Users } from "lucide-react";

const offerings = [
  {
    title: "Elementary & Middle School Support",
    description: "Building strong foundations in math and reading.",
    icon: BookOpen,
  },
  {
    title: "High School Coursework",
    description: "Algebra, Geometry, Calculus, and more.",
    icon: Calculator,
  },
  {
    title: "Standardized Test Prep",
    description: "SAT, ACT, and entrance exam preparation.",
    icon: GraduationCap,
  },
  {
    title: "Competition Math Training",
    description: "AMC 8/10/12, MathCounts, and logic puzzles.",
    icon: Trophy,
  },
  {
    title: "Study Strategies",
    description: "Organization, time management, and effective learning habits.",
    icon: Brain,
  },
  {
    title: "Personalized Mentorship",
    description: "One-on-one guidance from high school mentors who care.",
    icon: Users,
  },
];

export function Offerings() {
  return (
    <section id="offerings" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Support That Works</h2>
            <p className="text-muted-foreground text-lg">
              Our tutoring programs emphasize clarity, structured explanations, and step-by-step problem-solving.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <offering.icon className="w-6 h-6" />
                  </div>
                  <CardTitle>{offering.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{offering.description}</CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
