import { motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";

const leaders = [
  {
    name: "Rahul Gupta",
    role: "Central Head",
    party: "Public Ekta Party (PEP)",
    image: "/assets/uploads/IMG-20260307-WA0023-1-2-1.jpg",
    phone: "+91 6001885969",
    whatsapp: "https://wa.me/916001885969",
  },
  {
    name: "Dayal Sarkar",
    role: "State Head",
    party: "Public Ekta Party (PEP) – Assam",
    image: "/assets/uploads/IMG-20260305-WA0023-1-2-1.jpg",
    phone: null,
    whatsapp: null,
  },
];

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[oklch(0.68_0.18_55)] font-bold tracking-widest text-sm uppercase mb-3">
            Our Leaders
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[oklch(0.31_0.15_264)] mb-4">
            Party Leadership
          </h2>
          <div className="h-1 tricolor-bar w-36 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-[oklch(0.97_0.01_264)] rounded-3xl shadow-party overflow-hidden text-center border-t-4 border-[oklch(0.68_0.18_55)]"
              data-ocid={`leadership.card.${i + 1}`}
            >
              <div className="relative">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-72 object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-black text-[oklch(0.31_0.15_264)] mb-1">
                  {leader.name}
                </h3>
                <p className="text-[oklch(0.68_0.18_55)] font-bold text-sm tracking-widest uppercase mb-1">
                  {leader.role}
                </p>
                <p className="text-[oklch(0.45_0.04_264)] text-sm mb-4">
                  {leader.party}
                </p>
                {leader.phone && (
                  <p className="text-[oklch(0.35_0.05_264)] font-semibold text-sm mb-4">
                    📞 {leader.phone}
                  </p>
                )}
                {leader.whatsapp && (
                  <a
                    href={leader.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[oklch(0.46_0.18_145)] hover:bg-[oklch(0.4_0.15_145)] text-white font-bold px-5 py-2.5 rounded-full text-sm transition-all hover:scale-105"
                  >
                    <SiWhatsapp size={16} />
                    Contact on WhatsApp
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
