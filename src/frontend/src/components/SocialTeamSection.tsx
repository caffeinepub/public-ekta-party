import { motion } from "motion/react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

const WA_GROUP = "https://chat.whatsapp.com/LaKgkOtuEBLGbQwIco5410";

const socialHandles = [
  {
    icon: SiInstagram,
    label: "Instagram – PEP India",
    handle: "@public_ekta_party",
    href: "https://www.instagram.com/public_ekta_party?igsh=MTYwM250N2RxdXFmcg==",
    color: "#E1306C",
  },
  {
    icon: SiInstagram,
    label: "Instagram – PEP Assam",
    handle: "@public_ekta_party_assam",
    href: "https://www.instagram.com/public_ekta_party_assam?utm_source=qr&igsh=ZDlpazdhb3JpYWtv",
    color: "#E1306C",
  },
  {
    icon: SiWhatsapp,
    label: "WhatsApp Group",
    handle: "Join Community",
    href: WA_GROUP,
    color: "#25D366",
  },
];

export function SocialTeamSection() {
  return (
    <section id="social" className="py-20 bg-[oklch(0.97_0.01_264)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-[oklch(0.68_0.18_55)] font-bold tracking-widest text-sm uppercase mb-3">
            Connect With Us
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[oklch(0.31_0.15_264)] mb-4">
            Follow &amp; Join
          </h2>
          <div className="h-1 tricolor-bar w-36 mx-auto rounded-full mb-6" />
          <p className="text-[oklch(0.45_0.04_264)] max-w-2xl mx-auto text-lg">
            Follow us on social media and join our WhatsApp group to stay
            updated on PEP news, events, and election updates.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-5">
          {socialHandles.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              data-ocid={`social.item.${i + 1}`}
              className="flex items-center gap-3 bg-white hover:bg-[oklch(0.31_0.15_264)] text-[oklch(0.31_0.15_264)] hover:text-white border border-[oklch(0.88_0.02_264)] hover:border-[oklch(0.31_0.15_264)] rounded-full px-6 py-3 font-semibold transition-all duration-300 shadow-sm hover:shadow-party group"
            >
              <s.icon
                size={20}
                style={{ color: s.color }}
                className="group-hover:scale-110 transition-transform"
              />
              <div>
                <p className="text-xs font-medium opacity-70">{s.label}</p>
                <p className="text-sm font-bold">{s.handle}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
