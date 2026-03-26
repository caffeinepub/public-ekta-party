import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { JoinUsSection } from "./components/JoinUsSection";
import { LeadershipSection } from "./components/LeadershipSection";
import { ManifestoSection } from "./components/ManifestoSection";
import { Navbar } from "./components/Navbar";
import { SocialTeamSection } from "./components/SocialTeamSection";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen font-body">
        <Navbar />
        {/* Disclaimer Bar */}
        <div className="bg-amber-50 border-b border-amber-200 py-2 px-4 text-center">
          <p className="text-amber-800 text-xs sm:text-sm font-medium">
            <strong>Legal Disclaimer:</strong> Public Ekta Party is currently an
            independent political movement, not yet registered with the Election
            Commission of India. We are building our community and gathering
            members.
          </p>
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
