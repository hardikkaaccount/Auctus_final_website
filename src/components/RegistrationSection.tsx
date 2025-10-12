import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const RegistrationSection = () => {
  return (
    <section id="register" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-radial from-primary/20 via-accent/10 to-transparent blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="p-4 bg-gradient-primary rounded-full animate-glow-pulse">
              <Sparkles className="w-8 h-8 text-background" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text">
            Get Your Pass
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 leading-relaxed">
            Don't miss out on the action. Register now to secure your spot and be part of 
            an unforgettable week of innovation, learning, and collaboration.
          </p>


          {/* Additional info */}
          <p className="text-sm sm:text-base text-muted-foreground pt-4">
            Limited spots available • Early bird benefits • Network with industry experts
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
