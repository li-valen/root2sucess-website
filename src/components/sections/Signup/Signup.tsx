import { ScrollReveal } from "../../animations/ScrollReveal";
import { Button } from "../../ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../ui/Card";

export function Signup() {
  return (
    <section id="signup" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Root2Success Community</h2>
            <p className="text-muted-foreground text-lg">
              Whether you’re looking to learn or ready to lead, there’s a place for you here.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ScrollReveal delay={0.1}>
            <Card className="h-full text-center hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle>Become a Student</CardTitle>
                <CardDescription>For students seeking enrichment and support.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-sm text-muted-foreground">
                  Join our weekly sessions, access one-on-one tutoring, and participate in competitions.
                </p>
                <a href="https://forms.gle/L7tg7tMgB7FneBhq6" target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center">
                  <Button className="w-full">
                    Student Signup
                  </Button>
                </a>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Card className="h-full text-center hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle>Join Our Team</CardTitle>
                <CardDescription>Opportunities for tutors, curriculum creators, media makers, and volunteers.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-sm text-muted-foreground">
                  Gain leadership experience, contribute curriculum or media, earn service hours, and help students thrive.
                </p>
                <a href="https://forms.gle/r6HAEFGRyhLw8Ce46" target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center">
                  <Button variant="outline" className="w-full">
                    Join The Team
                  </Button>
                </a>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
