import { Skeleton } from "@/components/ui/skeleton";
import { useManifestoPoints } from "@/hooks/useQueries";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const fallbackPoints = [
  "Free quality education for every child — from village to city.",
  "Healthcare as a right: accessible hospitals in every district.",
  "Employment generation through local industry and skill development.",
  "Farmers\u2019 welfare: fair MSP, loan relief, and irrigation support.",
  "Women\u2019s empowerment: 33% reservation and safety measures.",
  "Anti-corruption drive: transparent governance and RTI strengthening.",
  "Digital India for all: affordable internet and digital literacy.",
  "Environmental protection: clean rivers, green energy, sustainable growth.",
];

export function ManifestoSection() {
  const { data: points, isLoading } = useManifestoPoints();
  const displayPoints = points && points.length > 0 ? points : fallbackPoints;

  return (
    <section id="manifesto" className="py-20 blue-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[oklch(0.68_0.18_55)] font-bold tracking-widest text-sm uppercase mb-3">
            Our Promise
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-4">
            Party Manifesto
          </h2>
          <div className="h-1 tricolor-bar w-36 mx-auto rounded-full" />
        </motion.div>

        {isLoading ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            data-ocid="manifesto.loading_state"
          >
            {["s1", "s2", "s3", "s4", "s5", "s6"].map((k) => (
              <Skeleton key={k} className="h-28 rounded-2xl bg-white/10" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayPoints.map((point, i) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 party-card-hover"
                data-ocid={`manifesto.item.${i + 1}`}
              >
                <div className="flex gap-3 items-start">
                  <CheckCircle2
                    size={22}
                    className="text-[oklch(0.68_0.18_55)] mt-0.5 shrink-0"
                  />
                  <p className="text-white/90 text-sm leading-relaxed font-medium">
                    {point}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
