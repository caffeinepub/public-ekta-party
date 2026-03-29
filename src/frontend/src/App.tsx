import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SiInstagram, SiWhatsapp } from "react-icons/si";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { JoinUsSection } from "./components/JoinUsSection";
import { LeadershipSection } from "./components/LeadershipSection";
import { ManifestoSection } from "./components/ManifestoSection";
import { Navbar } from "./components/Navbar";
import { SocialTeamSection } from "./components/SocialTeamSection";

const queryClient = new QueryClient();

const WA_GROUP = "https://chat.whatsapp.com/LaKgkOtuEBLGbQwIco5410";
const RAHUL_WA = "https://wa.me/916001885969";
const INSTA_INDIA =
  "https://www.instagram.com/public_ekta_party?igsh=MTYwM250N2RxdXFmcg==";
const INSTA_ASSAM =
  "https://www.instagram.com/public_ekta_party_assam?utm_source=qr&igsh=ZDlpazdhb3JpYWtv";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen font-body">
        <Navbar />
        {/* Spacer for fixed WhatsApp bar (36px) + fixed navbar (~68px) */}
        <div className="pt-[104px]">
          {/* Disclaimer Bar */}
          <div className="bg-amber-50 border-b border-amber-200 py-3 px-4 text-center">
            <p className="text-amber-800 text-xs sm:text-sm font-medium">
              <strong>Legal Disclaimer:</strong> Public Ekta Party is currently
              an independent political movement, not yet registered with the
              Election Commission of India. We are building our community and
              gathering members.
            </p>
          </div>

          {/* Quick Contact / Social Links Bar */}
          <div className="bg-[oklch(0.28_0.12_264)] border-b border-white/10 py-2.5 px-4">
            <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              <span className="text-white/60 text-xs font-semibold uppercase tracking-wider hidden sm:inline">
                Contact & Follow:
              </span>
              <a
                href={RAHUL_WA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-[oklch(0.46_0.18_145)] hover:bg-[oklch(0.4_0.15_145)] text-white text-xs font-bold px-3 py-1.5 rounded-full transition-all hover:scale-105"
              >
                <SiWhatsapp size={13} />
                Rahul Gupta WhatsApp
              </a>
              <a
                href={INSTA_INDIA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-[oklch(0.55_0.22_0)] hover:bg-[oklch(0.48_0.22_0)] text-white text-xs font-bold px-3 py-1.5 rounded-full transition-all hover:scale-105"
              >
                <SiInstagram size={13} />
                Instagram – PEP India
              </a>
              <a
                href={INSTA_ASSAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-[oklch(0.55_0.22_0)] hover:bg-[oklch(0.48_0.22_0)] text-white text-xs font-bold px-3 py-1.5 rounded-full transition-all hover:scale-105"
              >
                <SiInstagram size={13} />
                Instagram – PEP Assam
              </a>
              <a
                href={WA_GROUP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-[oklch(0.46_0.18_145)] hover:bg-[oklch(0.4_0.15_145)] text-white text-xs font-bold px-3 py-1.5 rounded-full transition-all hover:scale-105"
              >
                <SiWhatsapp size={13} />
                Join Us in WhatsApp Group
              </a>
            </div>
          </div>
        </div>
        <main>
          <HeroSection />
          <AboutSection />
          <LeadershipSection />
          <ManifestoSection />
          <SocialTeamSection />
          <JoinUsSection />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
