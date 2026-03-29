import { Button } from "@/components/ui/button";
import { Heart, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

const WA_GROUP = "https://chat.whatsapp.com/LaKgkOtuEBLGbQwIco5410";
const INSTA_INDIA =
  "https://www.instagram.com/public_ekta_party?igsh=MTYwM250N2RxdXFmcg==";
const INSTA_ASSAM =
  "https://www.instagram.com/public_ekta_party_assam?utm_source=qr&igsh=ZDlpazdhb3JpYWtv";
const RAHUL_WA = "https://wa.me/916001885969";
const DAYAL_WA = "https://wa.me/918822997191";

export function JoinUsSection() {
  return (
    <section id="join" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[oklch(0.97_0.01_264)] rounded-3xl shadow-party overflow-hidden"
        >
          <div className="h-2 tricolor-bar w-full" />

          <div className="p-8 sm:p-12 text-center">
            <div className="w-20 h-20 rounded-full orange-gradient flex items-center justify-center mx-auto mb-6">
              <Heart size={36} className="text-white" fill="white" />
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-black text-[oklch(0.31_0.15_264)] mb-4">
              Join Public Ekta Party
            </h2>
            <p className="text-[oklch(0.68_0.18_55)] font-bold text-xl mb-6 tracking-wide">
              Free Election Tickets for Every Area!
            </p>

            <div className="h-1 tricolor-bar w-36 mx-auto rounded-full mb-8" />

            <p className="text-[oklch(0.35_0.05_264)] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Jinko election khelna hai humare juriye — hum sabhi ko free
              tickets har area se denge. Join our WhatsApp group and follow us
              on Instagram to stay updated!
            </p>

            {/* Join buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center mb-10">
              <Button
                asChild
                size="lg"
                data-ocid="join.primary_button"
                className="bg-[oklch(0.46_0.18_145)] hover:bg-[oklch(0.4_0.15_145)] text-white font-bold text-base px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-3"
              >
                <a href={WA_GROUP} target="_blank" rel="noopener noreferrer">
                  <SiWhatsapp size={22} />
                  <span>Join Us in WhatsApp Group</span>
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                data-ocid="join.insta_india_button"
                className="border-[#E1306C] text-[#E1306C] hover:bg-[#E1306C] hover:text-white font-bold text-base px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-3"
              >
                <a href={INSTA_INDIA} target="_blank" rel="noopener noreferrer">
                  <SiInstagram size={22} />
                  <span>Follow on Instagram – PEP India</span>
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                data-ocid="join.insta_assam_button"
                className="border-[#E1306C] text-[#E1306C] hover:bg-[#E1306C] hover:text-white font-bold text-base px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-3"
              >
                <a href={INSTA_ASSAM} target="_blank" rel="noopener noreferrer">
                  <SiInstagram size={22} />
                  <span>Follow on Instagram – PEP Assam</span>
                </a>
              </Button>
            </div>

            {/* Contact Us */}
            <div className="border-t border-[oklch(0.88_0.02_264)] pt-8">
              <h3 className="font-display text-2xl font-black text-[oklch(0.31_0.15_264)] mb-5">
                Contact Us
              </h3>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {/* Rahul Gupta - WhatsApp only, no number displayed */}
                <a
                  href={RAHUL_WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[oklch(0.46_0.18_145)] hover:bg-[oklch(0.4_0.15_145)] text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-105 shadow-md"
                >
                  <SiWhatsapp size={18} />
                  <div className="text-left">
                    <p className="text-xs opacity-80">
                      Rahul Gupta (Central Head)
                    </p>
                    <p className="text-sm font-bold">WhatsApp</p>
                  </div>
                </a>
                {/* Dayal Sarkar - clickable WhatsApp with number displayed */}
                <a
                  href={DAYAL_WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[oklch(0.46_0.18_145)] hover:bg-[oklch(0.4_0.15_145)] text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-105 shadow-md"
                >
                  <SiWhatsapp size={18} />
                  <div className="text-left">
                    <p className="text-xs opacity-80">
                      Dayal Sarkar (State Head)
                    </p>
                    <p className="text-sm font-bold">+91 8822997191</p>
                  </div>
                </a>
                <div className="flex items-center gap-2 text-[oklch(0.35_0.05_264)]">
                  <MapPin size={18} className="text-[oklch(0.31_0.15_264)]" />
                  <span className="font-semibold">Assam &amp; All India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-2 tricolor-bar w-full" />
        </motion.div>
      </div>
    </section>
  );
}
