import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Luxe Retreats"
              className="h-10 w-auto brightness-0 invert"
            />
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-background/70">
            <a
              href="#itinerary"
              className="hover:text-primary transition-colors"
            >
              Itinerary
            </a>
            <a href="#pricing" className="hover:text-primary transition-colors">
              Pricing
            </a>
            <a
              href="#accommodation"
              className="hover:text-primary transition-colors"
            >
              Accommodation
            </a>
            <a href="#faq" className="hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="#booking" className="hover:text-primary transition-colors">
              Book Now
            </a>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@luxeretreat.com"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center text-sm text-background/50">
          <p>
            © {currentYear} Luxe Couples Reconnection Retreat. All rights
            reserved.
          </p>
          <p className="mt-2">North Wales, UK • 24–27 April 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
