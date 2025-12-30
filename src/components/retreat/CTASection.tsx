import { Button } from '@/components/ui/button';
import { Heart, Phone, Calendar } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="booking" className="section-padding bg-gradient-to-br from-primary to-accent text-primary-foreground overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary-foreground blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container-narrow relative z-10 text-center">
        <Heart className="w-12 h-12 mx-auto mb-6 animate-pulse" />
        
        <h2 className="heading-lg mb-6 text-primary-foreground">
          Ready to Transform Your Relationship?
        </h2>
        
        <p className="body-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
          Limited spaces available for our April 24–27 retreat in North Wales. 
          Don't wait until it's too late – your relationship deserves this investment.
        </p>

        {/* Booking CTA */}
        <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-primary-foreground/20 max-w-xl mx-auto">
          <h3 className="text-2xl font-serif font-semibold mb-4">To Reserve Your Space</h3>
          <p className="text-primary-foreground/80 mb-6">
            Book a call with Counsellor Rabi to discuss your needs and secure your spot
          </p>
          
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <a href="tel:+447000000000" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Book a Call
            </a>
          </Button>

          <div className="flex items-center justify-center gap-2 mt-6 text-primary-foreground/70">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">24–27 April 2025 • North Wales</span>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-primary-foreground/70">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-foreground/50" />
            All-Inclusive Experience
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-foreground/50" />
            Payment Plans Available
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-foreground/50" />
            Expert Counsellors
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
