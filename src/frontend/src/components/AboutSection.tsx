import { Shield, Star, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";

const pillars = [
  {
    icon: Users,
    title: "Unity",
    desc: "Bringing all communities together under one voice — the people's voice.",
  },
  {
    icon: TrendingUp,
    title: "Development",
    desc: "Sustainable growth, jobs, and infrastructure for every citizen.",
  },
  {
    icon: Shield,
    title: "Representation",
    desc: "Fair representation in every tier of government for the common man.",
  },
  {
    icon: Star,
    title: "Integrity",
    desc: "Zero tolerance for corruption. Transparent, accountable leadership.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[oklch(0.97_0.01_264)]">
      {/* Tricolor bar */}
      <div className="h-1 tricolor-bar w-full mb-12" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <img
            src="/assets/uploads/IMG-20260305-WA0013-1-4-1.jpg"
            alt="Public Ekta Party Logo"
            className="h-28 w-28 rounded-full object-cover mx-auto mb-6 border-4 border-[oklch(0.31_0.15_264)] shadow-party"
          />
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[oklch(0.31_0.15_264)] mb-4">
            About Public Ekta Party
          </h2>
          <div className="h-1 tricolor-bar w-36 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-[oklch(0.35_0.05_264)] max-w-3xl mx-auto leading-relaxed">
            Public Ekta Party (P.E.P.) is a people's movement born from the
            aspirations of ordinary Indians. We believe that true democracy
            means giving power back to the people — through unity, honest
            leadership, and relentless focus on grassroots development.
          </p>
          <p className="text-lg text-[oklch(0.35_0.05_264)] max-w-3xl mx-auto leading-relaxed mt-4">
            Founded on the principles of <strong>Ekta (Unity)</strong>, we stand
            for every farmer, worker, student, and family who deserves a voice
            in shaping India's future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl p-6 shadow-party party-card-hover text-center border-t-4 border-[oklch(0.68_0.18_55)]"
              data-ocid={`about.item.${i + 1}`}
            >
              <div className="w-14 h-14 rounded-full blue-gradient flex items-center justify-center mx-auto mb-4">
                <pillar.icon size={26} className="text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-[oklch(0.31_0.15_264)] mb-2">
                {pillar.title}
              </h3>
              <p className="text-[oklch(0.45_0.04_264)] text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
