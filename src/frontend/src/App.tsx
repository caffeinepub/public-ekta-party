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
