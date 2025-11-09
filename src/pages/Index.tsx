import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ForTalentSection from "@/components/ForTalentSection";
import ForStartupsSection from "@/components/ForStartupsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FoundersSection from "@/components/FoundersSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <ForTalentSection />
      <ForStartupsSection />
      <WhyChooseSection />
      <FoundersSection />
      <JoinSection />
      <Footer />
    </div>
  );
};

export default Index;
