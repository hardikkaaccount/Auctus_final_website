import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const HeroSection = () => {
  const scrollToRegister = () => {
    const element = document.getElementById("events");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-30" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
      <div className="text-center space-y-6 sm:space-y-8 animate-fade-in">
          {/* IEEE Presents */}
          <p className="text-sm sm:text-base text-muted-foreground tracking-wider uppercase">
            IEEE-PESCE Presents
          </p>

          {/* Main Title */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold gradient-text mb-4 tracking-wider" style={{ fontFamily: "'Permanent Marker', cursive" }}>
            AUCTUS 2K25
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light tracking-wide">
            Innovate. Integrate. Inspire.
          </p>

          {/* Dates */}
          <div className="flex items-center justify-center gap-3 text-lg sm:text-xl text-foreground/90">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            <span className="font-medium">October 23rd - 29th</span>
          </div>

          {/* CTA Button */}
          <div className="pt-6 sm:pt-8">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToRegister}
              className="text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 rounded-full shadow-2xl"
            >
              Register Now
            </Button>
          </div>

          {/* Decorative elements */}
          <div className="pt-12 flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse delay-200" />
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
