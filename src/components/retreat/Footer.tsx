import { Instagram, Facebook, Mail, Youtube } from "lucide-react";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

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
              href="https://www.instagram.com/mindoraworth/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/share/r/1Cbug7Ms36/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@mindoraworth/video/7590008233184480534"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>
            <a
              href="https://youtube.com/shorts/vZau4LlB7jg?si=6J0n6gNzWRfmPG4s"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
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
