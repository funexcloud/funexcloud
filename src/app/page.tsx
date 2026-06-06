import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import AxSection from "@/components/AxSection";
import CareSection from "@/components/CareSection";
import BlogStudioSection from "@/components/BlogStudioSection";
import ConsoleMockup from "@/components/ConsoleMockup";
import Pricing from "@/components/Pricing";
import PhilosophySection from "@/components/PhilosophySection";
import TraditionalThesisSection from "@/components/TraditionalThesisSection";
import MainnetSection from "@/components/MainnetSection";
import Footer from "@/components/Footer";

/** Existing Funex Cloud landing. */
export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[#050505] text-white">
      <Header />
      <HeroSection />
      <SocialProof />
      <Features />
      <AxSection />
      <CareSection />
      <BlogStudioSection />
      <ConsoleMockup />
      <Pricing />
      <PhilosophySection />
      <TraditionalThesisSection />
      <MainnetSection variant="landing" />
      <Footer />
    </div>
  );
}
