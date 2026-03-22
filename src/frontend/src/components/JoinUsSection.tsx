import { Button } from "@/components/ui/button";
import { Heart, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";

export function JoinUsSection() {
  return (
    <section id="join" className="py-20 bg-[oklch(0.97_0.01_264)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl shadow-party overflow-hidden"
        >
          {/* Top accent */}
          <div className="h-2 tricolor-bar w-full" />

          <div className="p-8 sm:p-12 text-center">
            <div className="w-20 h-20 rounded-full orange-gradient flex items-center justify-center mx-auto mb-6">
              <Heart size={36} className="text-white" fill="white" />
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-black text-[oklch(0.31_0.15_264)] mb-4">
              Join Public Ekta Party
            </h2>
            <p className="text-[oklch(0.68_0.18_55)] font-bold text-xl mb-6 tracking-wide">
              Be the Change!
            </p>

            <div className="h-1 tricolor-bar w-36 mx-auto rounded-full mb-8" />

            <p className="text-[oklch(0.35_0.05_264)] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Your voice matters. Join thousands of citizens who believe in a
              united, developed, and just India. Together, we can make the
              change we want to see.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
              <div className="flex items-center gap-2 text-[oklch(0.35_0.05_264)]">
                <Phone size={18} className="text-[oklch(0.68_0.18_55)]" />
                <span className="font-semibold">+91 6001885969</span>
              </div>
              <div className="flex items-center gap-2 text-[oklch(0.35_0.05_264)]">
                <MapPin size={18} className="text-[oklch(0.31_0.15_264)]" />
                <span className="font-semibold">India</span>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              data-ocid="join.primary_button"
              className="bg-[oklch(0.46_0.18_145)] hover:bg-[oklch(0.4_0.15_145)] text-white font-bold text-lg px-12 py-7 rounded-full shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-3"
            >
              <a
                href="https://wa.me/916001885969"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiWhatsapp size={24} />
                <span>Join on WhatsApp</span>
              </a>
            </Button>

            <p className="mt-6 text-[oklch(0.55_0.04_264)] text-sm">
              Click to join our WhatsApp community. It's free, fast, and the
              first step toward change.
            </p>
          </div>

          {/* Bottom accent */}
          <div className="h-2 tricolor-bar w-full" />
        </motion.div>
      </div>
    </section>
  );
}
