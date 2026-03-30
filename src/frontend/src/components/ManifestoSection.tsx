import { CheckCircle2, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const PARTY_LOGO = "/assets/uploads/IMG-20260305-WA0013-1-4-1.jpg";

type SubCategory = {
  title: string;
  icon: string;
  image: string;
  points: string[];
};

type ManifestoCategory = {
  title: string;
  icon: string;
  image: string;
  points: string[];
  subCategories?: SubCategory[];
};

const manifestoCategories: ManifestoCategory[] = [
  {
    title: "Youth & Employment",
    icon: "💼",
    image: "/assets/generated/manifesto-youth-employment.dim_800x500.jpg",
    points: [
      "Startup support with easy business loans and incubation centers.",
      "Skill development training in digital technology, coding, and e-commerce.",
      "Government jobs to be provided across departments.",
    ],
  },
  {
    title: "Stadiums & Sports Facilities",
    icon: "🏟️",
    image: "/assets/generated/manifesto-stadiums-overview.dim_800x500.jpg",
    points: [
      "World-class sports infrastructure to be developed across Assam.",
      "Promotion of sports culture among youth at the grassroots level.",
      "Government support and investment in sports development.",
    ],
    subCategories: [
      {
        title: "Cricket Stadium",
        icon: "🏏",
        image: "/assets/generated/manifesto-cricket-stadium.dim_800x500.jpg",
        points: [
          "Build modern cricket stadiums in key locations to promote cricket talent.",
          "Provide proper pitches, practice nets, and coaching facilities for youth players.",
          "Floodlit cricket grounds in major towns to allow evening training and matches.",
        ],
      },
      {
        title: "Football Stadium",
        icon: "⚽",
        image: "/assets/generated/manifesto-football-stadium.dim_800x500.jpg",
        points: [
          "Construct dedicated football stadiums with proper grass turf in key cities.",
          "Develop football academies in Assam to nurture grassroots talent.",
          "Build futsal courts and mini football arenas in towns and villages.",
        ],
      },
      {
        title: "Hockey Stadium",
        icon: "🏑",
        image: "/assets/generated/manifesto-hockey-stadium.dim_800x500.jpg",
        points: [
          "Build synthetic turf hockey stadiums to revive India's national game.",
          "Dedicated hockey academies with professional coaching and fitness support.",
          "Floodlit hockey pitches for evening training and practice sessions.",
        ],
      },
      {
        title: "Kabaddi Arena",
        icon: "🤼",
        image: "/assets/generated/manifesto-kabaddi-arena.dim_800x500.jpg",
        points: [
          "Build dedicated kabaddi arenas to promote this traditional Indian sport.",
          "Indoor kabaddi halls for year-round training and competitions.",
          "Recognition for outstanding kabaddi players representing the region.",
        ],
      },
      {
        title: "Swimming Pool & Aquatic Centre",
        icon: "🏊",
        image: "/assets/generated/manifesto-swimming-stadium.dim_800x500.jpg",
        points: [
          "Build standard swimming pools at suitable locations for competitive and recreational swimming.",
          "Train lifeguards and promote water safety awareness across Assam.",
          "Host state-level aquatic sports championships including swimming, diving, and water polo.",
        ],
      },
      {
        title: "Multi-Sport Indoor Arena",
        icon: "🏸",
        image: "/assets/generated/manifesto-multisport-stadium.dim_800x500.jpg",
        points: [
          "Build indoor multi-sport arenas supporting badminton, basketball, boxing, and wrestling.",
          "Dedicated facilities for table tennis, gymnastics, and traditional sports.",
          "Year-round sports events and tournaments at state level.",
        ],
      },
      {
        title: "Athletics & Running Track",
        icon: "🏃",
        image: "/assets/generated/manifesto-athletics-stadium.dim_800x500.jpg",
        points: [
          "Synthetic athletics tracks in major towns to train runners and athletes.",
          "Training programs for javelin, shot put, long jump, and high jump.",
          "Annual state athletics championship to identify talent for national competitions.",
          "Dedicated girls' athletics programs to boost female participation in sports.",
        ],
      },
      {
        title: "& More Sports (etc.)",
        icon: "🏅",
        image: "/assets/generated/manifesto-other-sports.dim_800x500.jpg",
        points: [
          "Facilities for additional sports such as Wrestling, Tennis, Volleyball, Boxing, Badminton, and more.",
          "Dedicated courts, arenas, and training centers for all recognized sports disciplines.",
          "Government support for athletes in any sport not separately listed.",
          "All sporting needs of the youth will be addressed — no sport will be left behind.",
        ],
      },
    ],
  },
  {
    title: "Education Reforms",
    icon: "🎓",
    image: "/assets/generated/manifesto-education.dim_800x500.jpg",
    points: [
      "At least one professional institute (BBA, BCA, B.Tech, MBBS etc.) in every district.",
      "Arts, Science, and Commerce streams available across Assam.",
      "More government schools and colleges in rural and village areas.",
      "Free government coaching centers for competitive exams: SSC (CGL, CHSL, CPO, MTS), ADRE, APSC, UPSC, JEE, NEET, CAT, and other major examinations.",
      "Government-supported Spoken English and communication training centers.",
      "Smart classrooms, digital boards, computer labs and internet in government schools.",
      "Expanded scholarships for economically weaker but talented students.",
      "Semester exam fees will be removed in government colleges.",
      "Free admission in government colleges for economically weaker students.",
    ],
  },
  {
    title: "Student Welfare",
    icon: "🎒",
    image: "/assets/generated/manifesto-student-welfare.dim_800x500.jpg",
    points: [
      "Expanded scholarships for economically weaker but talented students.",
      "Digital devices and internet access for students in government schools.",
      "Safe and clean hostel facilities for outstation students at affordable rates.",
    ],
  },
  {
    title: "Student Transport",
    icon: "🚌",
    image: "/assets/generated/manifesto-student-transport.dim_800x500.jpg",
    points: [
      "Mandatory 50% bus fare concession for students; complaints portal for conductor violations.",
      "Free or subsidized train travel for students traveling to school or college.",
      "More bus routes added to connect remote schools and colleges.",
      "Safe and dedicated student buses with security during school hours.",
    ],
  },
  {
    title: "Health Infrastructure",
    icon: "🏥",
    image: "/assets/generated/manifesto-health.dim_800x500.jpg",
    points: [
      "Modern, well-equipped hospitals in every district for emergency care.",
      "Proper treatment for heart attack, kidney failure, stroke, and critical conditions.",
      "More ambulances with oxygen facilities deployed across all areas.",
      "Expansion of Jan Aushadhi centers for affordable medicines.",
      "Healthcare protection for extremely poor families through Ayushman-type coverage.",
    ],
  },
  {
    title: "Women & Child Safety",
    icon: "🛡️",
    image: "/assets/generated/manifesto-women-safety.dim_800x500.jpg",
    points: [
      "Special night safety buses with police security, GPS tracking, and emergency response.",
      "Fast-track courts for cases of violence against women and children.",
      "CCTV surveillance in schools, public transport, and public areas.",
      "24/7 women's helpline and dedicated police response unit.",
    ],
  },
  {
    title: "Roads & Bridges",
    icon: "🌉",
    image: "/assets/generated/manifesto-roads-bridges.dim_800x500.jpg",
    points: [
      "Construction of new pakka roads connecting villages, towns, and cities.",
      "New bridges over rivers and water bodies to improve connectivity.",
      "Repair and maintenance of existing damaged roads and bridges.",
      "Highway widening projects to ease traffic in major corridors.",
    ],
  },
  {
    title: "Rural Development",
    icon: "🏡",
    image: "/assets/generated/manifesto-rural-development.dim_800x500.jpg",
    points: [
      "Safe drinking water and reliable electricity for every household.",
      "Special focus on rural schools, healthcare, and digital connectivity.",
      "Government schemes and funding directly reaching village-level committees.",
      "Sanitation and waste management programs in all rural areas.",
    ],
  },
  {
    title: "Clean & Disciplined Society",
    icon: "🧹",
    image: "/assets/generated/manifesto-clean-society.dim_800x500.jpg",
    points: [
      "Fines for spitting pan/gutka in public; revenue used for local development.",
      "Fines for urinating in public areas.",
      "Gutka and harmful products: sale permitted only to adults (18+); minors are strictly prohibited from buying.",
    ],
  },
  {
    title: "Digital Governance",
    icon: "📲",
    image: "/assets/generated/manifesto-digital-governance.dim_800x500.jpg",
    points: [
      "QR code feedback system in every government office for citizen complaints and suggestions.",
      "CCTV network for 24/7 security in public zones.",
      "Free Public Wi-Fi Hotspots in major markets and public squares.",
      "Regulations to prevent unsafe social media use by minors.",
    ],
  },
  {
    title: "Economy & Small Business",
    icon: "📈",
    image: "/assets/generated/manifesto-economy.dim_800x500.jpg",
    points: [
      "Focus on controlling inflation and responsible government spending.",
      "Easy business loans and financial support for small and micro businesses.",
      "Market infrastructure and digital platforms for local traders.",
      "Tax relief and simplified compliance for small entrepreneurs.",
    ],
  },
  {
    title: "Telecom Reforms",
    icon: "📡",
    image: "/assets/generated/manifesto-telecom.dim_800x500.jpg",
    points: [
      "Outgoing calls possible using talktime balance even without an active plan.",
      "Telecom companies encouraged to provide 30-day and 31-day recharge plans.",
      "4G/5G network expansion to remote and rural areas of Assam.",
      "Affordable internet plans for students and low-income households.",
    ],
  },
  {
    title: "Agriculture & Farmers",
    icon: "🌾",
    image: "/assets/generated/manifesto-agriculture.dim_800x500.jpg",
    points: [
      "Modern farming technology, improved irrigation, and digital crop-selling platforms.",
      "Special schemes and support for extremely poor farmers.",
    ],
  },
  {
    title: "Land Rights (Mati Patta)",
    icon: "📜",
    image: "/assets/generated/manifesto-land-rights.dim_800x500.jpg",
    points: [
      "Direct permanent land title (Patta) for all eligible occupants with valid documents.",
      "Online digital portal for all Patta applications with full transparency.",
      "Simplified and fast verification process to eliminate administrative delays.",
    ],
  },
  {
    title: "Cinema Halls",
    icon: "🎬",
    image: "/assets/generated/manifesto-cinema.dim_800x500.jpg",
    points: [
      "Cinema halls will be built in areas where they are needed and currently unavailable.",
    ],
  },
  {
    title: "Free Election Tickets",
    icon: "🗳️",
    image: "/assets/generated/manifesto-election.dim_800x500.jpg",
    points: [
      "PEP will provide free election tickets to candidates from every area across Assam.",
    ],
  },
];

function SubCategoryCard({ sub }: { sub: SubCategory }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl overflow-hidden border border-white/20 mt-3">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left bg-white/10 hover:bg-white/15 transition-colors duration-200"
      >
        <div className="flex items-center gap-0">
          <div className="w-20 h-16 sm:w-28 sm:h-20 shrink-0 overflow-hidden">
            <img
              src={sub.image}
              alt={sub.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 px-3 py-2 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">{sub.icon}</span>
              <span className="text-white font-semibold text-sm sm:text-base">
                {sub.title}
              </span>
              <span className="hidden sm:inline-flex items-center text-white/50 text-xs bg-white/10 rounded-full px-2 py-0.5">
                {sub.points.length} point{sub.points.length !== 1 ? "s" : ""}
              </span>
            </div>
            <ChevronDown
              size={16}
              className={`text-[oklch(0.68_0.18_55)] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </div>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="subcontent"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="bg-white/5 border-t border-white/10">
              <div className="h-36 sm:h-48 overflow-hidden">
                <img
                  src={sub.image}
                  alt={sub.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <ul className="space-y-2 p-4 sm:p-5">
                {sub.points.map((point) => (
                  <li
                    key={point.slice(0, 40)}
                    className="flex gap-3 items-start"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-[oklch(0.68_0.18_55)] mt-0.5 shrink-0"
                    />
                    <p className="text-white/90 text-sm leading-relaxed">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ManifestoSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="manifesto" className="py-20 blue-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <img
            src={PARTY_LOGO}
            alt="Public Ekta Party Logo"
            className="h-20 w-20 rounded-full object-cover border-4 border-[oklch(0.68_0.18_55)] shadow-lg mx-auto mb-4"
          />
          <p className="text-[oklch(0.68_0.18_55)] font-bold tracking-widest text-sm uppercase mb-3">
            Our Promise to the People
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-4">
            Party Manifesto
          </h2>
          <div className="h-1 tricolor-bar w-36 mx-auto rounded-full mb-6" />

          <p className="text-white/80 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-4">
            Public Ekta Party (PEP) is committed to building a united,
            progressive, and disciplined society where every citizen receives
            equal opportunities and government services without discrimination.
            Initially focused on Assam, PEP aims to contest and serve the people
            of Assam first — with a clear vision of expanding to the national
            level and contributing to the development of every state and every
            citizen of India.
          </p>

          <div className="inline-block bg-[oklch(0.68_0.18_55)]/20 border border-[oklch(0.68_0.18_55)]/50 rounded-xl px-5 py-3 text-sm text-[oklch(0.9_0.12_55)] font-semibold">
            📌 Note: This is an{" "}
            <span className="underline">initial manifesto</span>. Points can be
            added, revised, or updated as the party grows.
          </div>

          <p className="mt-4 text-white/60 text-sm italic">
            👆 Click any category below to read its details
          </p>
        </motion.div>

        {/* Manifesto Categories */}
        <div className="mt-10 space-y-4">
          {manifestoCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: ci * 0.04 }}
              className="rounded-2xl overflow-hidden border border-white/20"
              data-ocid={`manifesto.category.${ci + 1}`}
            >
              {/* Clickable header */}
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === ci ? null : ci)}
                className="w-full text-left bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors duration-200"
              >
                <div className="flex items-center gap-0 relative">
                  <div className="w-24 h-20 sm:w-36 sm:h-24 shrink-0 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 px-4 py-3 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{cat.icon}</span>
                      <span className="text-white font-bold text-base sm:text-lg">
                        {cat.title}
                      </span>
                      {cat.subCategories ? (
                        <span className="hidden sm:inline-flex items-center text-white/50 text-xs bg-white/10 rounded-full px-2 py-0.5">
                          {cat.subCategories.length} sports
                        </span>
                      ) : (
                        <span className="hidden sm:inline-flex items-center text-white/50 text-xs bg-white/10 rounded-full px-2 py-0.5">
                          {cat.points.length} point
                          {cat.points.length !== 1 ? "s" : ""}
                        </span>
                      )}
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-[oklch(0.68_0.18_55)] shrink-0 transition-transform duration-300 ${
                        openIndex === ci ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
              </button>

              {/* Expandable content */}
              <AnimatePresence initial={false}>
                {openIndex === ci && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white/5 border-t border-white/10">
                      {/* Full-width image */}
                      <div className="h-48 sm:h-64 overflow-hidden">
                        <img
                          src={cat.image}
                          alt={cat.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Points */}
                      <ul className="space-y-3 p-5 sm:p-6">
                        {cat.points.map((point) => (
                          <li
                            key={point.slice(0, 40)}
                            className="flex gap-3 items-start"
                          >
                            <CheckCircle2
                              size={18}
                              className="text-[oklch(0.68_0.18_55)] mt-0.5 shrink-0"
                            />
                            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                              {point}
                            </p>
                          </li>
                        ))}
                      </ul>

                      {/* Sub-categories (e.g., individual stadiums) */}
                      {cat.subCategories && (
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                          <p className="text-[oklch(0.68_0.18_55)] text-xs font-bold uppercase tracking-widest mb-2">
                            👇 Click a sport below for details
                          </p>
                          {cat.subCategories.map((sub) => (
                            <SubCategoryCard key={sub.title} sub={sub} />
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Footer credit */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 text-center border-t border-white/20 pt-8"
        >
          <p className="text-white/60 text-sm">
            Prepared by{" "}
            <span className="text-white font-semibold">Dayal Sarkar</span>{" "}
            (State Head) &amp;{" "}
            <span className="text-white font-semibold">Rahul Gupta</span>{" "}
            (Central Head) — Public Ekta Party (PEP)
          </p>
          <p className="text-[oklch(0.68_0.18_55)] text-xs mt-1 font-semibold tracking-widest">
            "Sabka Saath, Sabka Haq, Sabka Vikas"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
