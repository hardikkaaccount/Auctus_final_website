import { Instagram, Linkedin, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <h3 className="text-2xl sm:text-3xl font-bold gradient-text">
            AUCTUS 2K25
          </h3>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/ieee_pesce_mandya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  ieee_pesce_mandya
                </span>
              </a>
              <a
                href="https://www.linkedin.com/company/IEEEPESCEMandya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  IEEEPESCEMandya
                </span>
              </a>
              <a
                href="https://www.ieeepesce.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
                aria-label="Website"
              >
                <Globe className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-all duration-300 group-hover:scale-110" />
                <span className="text-xs text-muted-foreground group-hover:text-accent transition-colors">
                  ieeepesce.com
                </span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-primary opacity-20" />

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © {currentYear} IEEE PESCE SB, Mandya. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/70">
              Designed by{" "}
              <a
                href="https://www.linkedin.com/in/ashwin-s-5184a3298/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors underline"
              >
                Ashwin S
              </a>
              {" "}and{" "}
              <a
                href="https://www.linkedin.com/in/phalguni-m-h/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors underline"
              >
                Phalghuni M H
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
