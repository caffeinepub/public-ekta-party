import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/uploads/IMG-20260305-WA0023-1--3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Tricolor accent at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 tricolor-bar" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <img
            src="/assets/uploads/IMG-20260305-WA0013-1--2.jpg"
            alt="Public Ekta Party Logo"
            className="h-24 w-24 rounded-full object-cover mx-auto border-4 border-[oklch(0.68_0.18_55)] shadow-orange"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[oklch(0.68_0.18_55)] font-bold tracking-[0.3em] text-sm sm:text-base uppercase mb-3"
        >
          P.E.P. – For The People
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight mb-4"
        >
          PUBLIC EKTA
          <span className="block text-[oklch(0.68_0.18_55)]">PARTY</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="h-1 tricolor-bar w-48 mx-auto mb-6 rounded-full"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-display italic text-2xl sm:text-3xl md:text-4xl text-white/90 mb-10"
        >
          "नेता अपना, विकास सपना"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            size="lg"
            data-ocid="hero.primary_button"
            className="bg-[oklch(0.68_0.18_55)] hover:bg-[oklch(0.75_0.19_60)] text-white font-bold text-lg px-10 py-6 rounded-full shadow-orange transition-transform hover:scale-105"
          >
            <a
              href="https://wa.me/916001885969"
              target="_blank"
              rel="noopener noreferrer"
            >
              🤝 Join Us Now
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            data-ocid="hero.secondary_button"
            className="border-2 border-white text-white bg-transparent hover:bg-white/10 font-bold text-lg px-10 py-6 rounded-full"
          >
            <a href="#manifesto">Our Manifesto</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
