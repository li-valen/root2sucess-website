import { ScrollReveal } from "../../animations/ScrollReveal";

export function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Schedule For the 2023-2024 5/6th Grade Math Pathway</h2>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal>
            <div className="p-6 bg-muted rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-4">Section 1: Welcome!</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><strong>W1 - September 25/26</strong> - Info Session</li>
                <li><strong>W2 - October 2/3</strong> - Welcome Session</li>
                <li><strong>W2 - October 5/6</strong> - Introduction to Math In the Real World (MIRW)</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="p-6 bg-muted rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-4">Section 2: Prerequisites</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>W3 - October 9/10</strong> - Multiplication and PEMDAS</li>
                <li><strong>W3 - October 12/13</strong> - MIRW - Catering Services</li>
                <li><strong>W4 - October 16/17</strong> - Variables</li>
                <li><strong>W4 - October 19/20</strong> - MIRW - Science Experiments</li>
                <li><strong>W5 - October 23/24</strong> - Graphing Functions</li>
                <li><strong>W6 - October 30/31</strong> - Review</li>
                <li><strong>W6 - November 2/3</strong> - MIRW - Supply and Demand</li>
                <li><strong>W7 - November 9/10</strong> - MIRW - Experimental Results</li>
                <li><strong>W8 - November 13/14</strong> - Competition</li>
                <li><strong>W8 - November 16/17</strong> - Fun Session</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="p-6 bg-muted rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-4">Section 3: Exponents</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>W9 - November 20/21</strong> - Exponents</li>
                <li><strong>W9 - November 30/Dec 1</strong> - MIRW - Viral Marketing</li>
                <li><strong>W10 - December 4/5</strong> - Algebraic Expressions Involving Exponents</li>
                <li><strong>W10 - December 7/8</strong> - MIRW - Compound Interests</li>
              </ul>

              <p className="mt-4 text-sm text-muted-foreground">
                At the end of the school year, Root2Success holds a final competition, which covers all material taught in the program and offers cash prizes for the top teams.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
