import { ScrollReveal } from "../animations/ScrollReveal";

export function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/30 py-12 border-t">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Root2Success</h3>
              <p className="text-sm text-muted-foreground">
                Empowering students through precision, patience, and practice.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Program</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" onClick={(e) => scrollToSection(e, "#about")} className="hover:text-primary">About Us</a></li>
                <li><a href="#offerings" onClick={(e) => scrollToSection(e, "#offerings")} className="hover:text-primary">Offerings</a></li>
                <li><a href="#results" onClick={(e) => scrollToSection(e, "#results")} className="hover:text-primary">Impact</a></li>
                <li><a href="#schools" onClick={(e) => scrollToSection(e, "#schools")} className="hover:text-primary">Schools</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#signup" onClick={(e) => scrollToSection(e, "#signup")} className="hover:text-primary">Student Signup</a></li>
                <li><a href="#signup" onClick={(e) => scrollToSection(e, "#signup")} className="hover:text-primary">Tutor Signup</a></li>
                <li><a href="#" className="hover:text-primary">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:info@root2success.org" className="hover:text-primary">info@root2success.org</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/root2successphilly/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">@root2successphilly</a>
                </li>
                <li>Philadelphia, PA</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Root2Success. All rights reserved.
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
