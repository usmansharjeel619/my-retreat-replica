import { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#itinerary', label: 'Itinerary' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#accommodation', label: 'Accommodation' },
  { href: '#faq', label: 'FAQ' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-wide flex items-center justify-between px-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Heart
            className={`w-6 h-6 transition-colors ${
              isScrolled ? 'text-primary' : 'text-primary'
            } group-hover:scale-110 transition-transform`}
            fill="currentColor"
          />
          <span
            className={`text-lg font-serif font-semibold transition-colors ${
              isScrolled ? 'text-foreground' : 'text-foreground'
            }`}
          >
            Luxe Retreats
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground/80' : 'text-foreground/80'
              }`}
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
          className="md:hidden p-2"
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 text-foreground/80 hover:text-primary transition-colors border-b border-border/50 last:border-0"
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
