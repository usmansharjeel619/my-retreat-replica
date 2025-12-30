import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#itinerary", label: "Itinerary" },
  { href: "#pricing", label: "Pricing" },
  { href: "#accommodation", label: "Accommodation" },
  { href: "#faq", label: "FAQ" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-foreground/95 backdrop-blur-md shadow-lg py-3"
          : "bg-foreground/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container-wide flex items-center justify-between px-4">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <img
            src="/images/logo.png"
            alt="Luxe Retreats"
            className="h-10 w-auto transition-transform group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-background/80 hover:text-background transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" className="rounded-full">
            <a href="#booking">Book Now</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-background"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-foreground border-b border-background/20 shadow-lg">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 text-background/80 hover:text-background transition-colors border-b border-background/20 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-4 rounded-full">
              <a href="#booking" onClick={() => setIsMobileMenuOpen(false)}>
                Book Now
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
