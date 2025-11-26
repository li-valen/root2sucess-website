import { ScrollReveal } from "../../animations/ScrollReveal";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground mb-6">Have questions or want to get involved? Reach out — we’d love to hear from you.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="text-sm">
              <div className="font-medium">Instagram</div>
              <div className="text-muted-foreground">
                <a href="https://www.instagram.com/root2successphilly/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  @root2successphilly
                </a>
              </div>
            </div>
            <div className="text-sm">
              <div className="font-medium">Email</div>
              <div className="text-muted-foreground">info@root2success.org</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
