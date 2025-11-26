import { useState } from "react";
import { ScrollReveal } from "../../animations/ScrollReveal";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../ui/Card";
import { Modal } from "../../ui/Modal";

export function Signup() {
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [isTutorModalOpen, setIsTutorModalOpen] = useState(false);

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
                <Button className="w-full" onClick={() => setIsStudentModalOpen(true)}>
                  Student Signup
                </Button>
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
                <Button variant="outline" className="w-full" onClick={() => setIsTutorModalOpen(true)}>
                  Join The Team
                </Button>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>

      <Modal isOpen={isStudentModalOpen} onClose={() => setIsStudentModalOpen(false)} title="Student Registration">
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">First Name</label>
              <Input placeholder="Jane" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Last Name</label>
              <Input placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input type="email" placeholder="jane@example.com" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Grade Level</label>
            <Input placeholder="e.g. 7th Grade" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Subjects of Interest</label>
            <Input placeholder="e.g. Algebra, Geometry" />
          </div>
          <Button type="submit" className="w-full">Submit Application</Button>
        </form>
      </Modal>

      <Modal isOpen={isTutorModalOpen} onClose={() => setIsTutorModalOpen(false)} title="Join Our Team">
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">First Name</label>
              <Input placeholder="John" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Last Name</label>
              <Input placeholder="Smith" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input type="email" placeholder="john@example.com" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Role You're Interested In</label>
            <select className="w-full rounded-md border p-2 text-sm">
              <option>Tutor</option>
              <option>Curriculum Creator</option>
              <option>Media / Design</option>
              <option>Volunteer Coordinator</option>
              <option>Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Relevant Experience / Portfolio Link</label>
            <Input placeholder="Optional: link to portfolio or brief summary" />
          </div>
          <Button type="submit" className="w-full">Submit Application</Button>
        </form>
      </Modal>
    </section>
  );
}
