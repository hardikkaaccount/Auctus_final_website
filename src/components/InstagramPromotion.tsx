import { Instagram } from "lucide-react";
import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import images
import event1 from "@/assets/gallery/event-1.jpg";
import event2 from "@/assets/gallery/event-2.JPG";
import event3 from "@/assets/gallery/event-3.jpg";
import event4 from "@/assets/gallery/event-4.jpg";
import event5 from "@/assets/gallery/event-5.jpg";
import event6 from "@/assets/gallery/event-6.jpg";
import event7 from "@/assets/gallery/event-7.png";
import event8 from "@/assets/gallery/event-8.jpg";

const images = [event1, event2, event3, event4, event5, event6, event7, event8];

const InstagramPromotion = () => {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="w-full bg-gradient-to-br from-card/40 via-card/20 to-background border-t border-border py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Carousel */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl -z-10" />
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border/50 shadow-xl group">
                      <img
                        src={image}
                        alt={`IEEE PESCE Event ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col space-y-6 text-center md:text-left">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                Stay Connected with Us
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Follow us on Instagram for regular updates on upcoming events,
                workshops, scholarships, technical sessions, and exclusive
                behind-the-scenes content from IEEE PESCE Student Branch.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start">
              <a
                href="https://www.instagram.com/ieee_pesce_mandya"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105"
              >
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Instagram className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Follow @ieee_pesce_mandya</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground/60 justify-center md:justify-start">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Live updates • Event announcements • Community highlights</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramPromotion;
