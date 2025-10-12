import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import RegistrationSection from "@/components/RegistrationSection";
import InstagramPromotion from "@/components/InstagramPromotion";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <InteractiveBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <EventsSection />
          <RegistrationSection />
        </main>
        <InstagramPromotion />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
