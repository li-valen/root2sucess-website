import { Button } from "../../ui/Button";
import { FadeInText } from "../../animations/FadeInText";
import { motion } from "framer-motion";
import heroBg from "../../../assets/images/hero/IMG_1666.jpg";
import logo from "../../../assets/images/logo/IMG_3192.png";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax or Gradient */}
      <div className="absolute inset-0 bg-slate-900 z-0">
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-900/90" />
      </div>

      <div className="container relative z-10 px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          {/* Logo */}
          <div className="w-24 h-24 mx-auto bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-4 border border-white/20 overflow-hidden p-2">
            <img src={logo} alt="R2S Logo" className="w-full h-full object-contain" />
          </div>
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto">
          <FadeInText text="Where students grow, excel, and learn to love the process." />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto"
        >
          One-on-one tutoring, mentorship, and academic coaching designed to unlock potential.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100" onClick={() => document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" })}>
            Get Started
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-current rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
