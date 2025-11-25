import { ScrollReveal } from "../../animations/ScrollReveal";
import { motion } from "framer-motion";

const stats = [
  { label: "Enrollments", value: "250+" },
  { label: "Schools Represented", value: "25+" },
  { label: "Student Leaders", value: "80+" },
];

export function Results() {
  return (
    <section id="results" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Real Progress. Real Confidence.</h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Grades improve. Confidence rises. Students find excitement in their own growth.
              Over the years, Root2Success has had the privilege of guiding students from many backgrounds,
              skill levels, and school environments.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <div className="text-center p-6 bg-primary-foreground/10 rounded-xl backdrop-blur-sm">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.2 + index * 0.1 }}
                    className="text-4xl font-bold mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm font-medium opacity-80">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
