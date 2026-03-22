import { motion } from "motion/react";
import {
  SiFacebook,
  SiInstagram,
  SiTelegram,
  SiWhatsapp,
  SiX,
} from "react-icons/si";

const socialHandles = [
  {
    icon: SiFacebook,
    label: "Facebook",
    handle: "/PEPSocial",
    href: "https://facebook.com/PEPSocial",
    color: "#1877F2",
  },
  {
    icon: SiInstagram,
    label: "Instagram",
    handle: "/PEPSocial",
    href: "https://instagram.com/PEPSocial",
    color: "#E1306C",
  },
  {
    icon: SiWhatsapp,
    label: "WhatsApp",
    handle: "/PEPSocial",
    href: "https://wa.me/916001885969",
    color: "#25D366",
  },
  {
    icon: SiTelegram,
    label: "Telegram",
    handle: "/PEPSocial",
    href: "https://t.me/PEPSocial",
    color: "#2AABEE",
  },
  {
    icon: SiX,
    label: "Twitter / X",
    handle: "/PEPSocial",
    href: "https://x.com/PEPSocial",
    color: "#000000",
  },
];

export function SocialTeamSection() {
  return (
    <section id="social" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-[oklch(0.68_0.18_55)] font-bold tracking-widest text-sm uppercase mb-3">
            Spread The Voice
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[oklch(0.31_0.15_264)] mb-4">
            Social Media Team
          </h2>
          <div className="h-1 tricolor-bar w-36 mx-auto rounded-full mb-6" />
          <p className="text-[oklch(0.45_0.04_264)] max-w-2xl mx-auto text-lg">
            Be part of the digital revolution. Join our social media team and
            amplify the voice of the people. Together we spread the message of
            unity and development across every platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-party mb-14 max-w-4xl mx-auto"
        >
          <img
            src="/assets/uploads/IMG-20260307-WA0023-1--1.jpg"
            alt="PEP Social Media Team"
            className="w-full object-cover"
          />
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
              className="flex items-center gap-3 bg-[oklch(0.97_0.01_264)] hover:bg-[oklch(0.31_0.15_264)] text-[oklch(0.31_0.15_264)] hover:text-white border border-[oklch(0.88_0.02_264)] hover:border-[oklch(0.31_0.15_264)] rounded-full px-6 py-3 font-semibold transition-all duration-300 shadow-xs hover:shadow-party group"
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
