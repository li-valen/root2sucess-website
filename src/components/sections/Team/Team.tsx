import { ScrollReveal } from "../../animations/ScrollReveal";

export function Team() {
  return (
    <section id="team" className="py-24 bg-muted/5">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Team Roles & Expectations</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-center mb-8">
            Root2Success relies on a diverse team — tutors, curriculum creators, media makers, and volunteers — to deliver our program.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="p-6 bg-background rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-3">Teach</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Teach weekly lessons and work with students one-on-one during office hours.
              </p>

              <div className="mb-3 font-medium">Commitment</div>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                <li>1 weekly mentoring session: Monday, Tuesday, Thursday, or Friday from 5:30–6:30 PM</li>
                <li>1 weekly team session: Time TBD</li>
                <li>1 weekly 30-minute office hour timeslot of your choosing</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="p-6 bg-background rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-3">Curriculum</h3>
              <p className="text-sm text-muted-foreground mb-2 font-medium">Example of topics:</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Trigonometry</li>
                <li>Geometry</li>
                <li>3D Geometry</li>
                <li>Introduction to Proofs</li>
                <li>Polynomial factoring</li>
                <li>Graphing equations</li>
                <li>Determining equations</li>
                <li>Solving for unknowns</li>
                <li>Logical Reasoning</li>
              </ul>

              <div className="mt-4 mb-3 font-medium">Commitment</div>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                <li>1 weekly team session: Time TBD</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="p-6 bg-background rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-3">Competition</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Create weekly problem sets for optional practice; develop final competition questions and grade competition problem sets at the end of the year.
              </p>

              <div className="mb-3 font-medium">Commitment</div>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                <li>1 weekly team session: Monday 8:00 PM</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="p-6 bg-background rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-3">Marketing</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Create outreach materials (Instagram posts, flyers), student certificates, and assist with fundraising activities.
              </p>

              <div className="mb-3 font-medium">Commitment</div>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                <li>1 weekly team session: Time TBD</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-8 p-6 bg-background rounded-lg text-sm text-muted-foreground">
            <p className="mb-4">
              In addition to the above meetings, all team members are expected to complete independent work assigned by managers.
            </p>

            <h4 className="font-semibold mb-2">Application Details</h4>
            <p>
              Team members are required to attend all respective meetings. Please keep this in consideration as you select your team preference. A failure to maintain attendance may result in removal from the program.
            </p>
            <div className="mt-6">
              <a
                href="https://forms.gle/r6HAEFGRyhLw8Ce46"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-95"
              >
                Apply to Join the Team
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
