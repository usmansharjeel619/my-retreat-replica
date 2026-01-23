import { useState } from "react";
import Navigation from "@/components/retreat/Navigation";
import HeroSection from "@/components/retreat/HeroSection";
import WhySection from "@/components/retreat/WhySection";
import TeamSection from "@/components/retreat/TeamSection";
import ItinerarySection from "@/components/retreat/ItinerarySection";
import IncludedSection from "@/components/retreat/IncludedSection";
import PricingSection from "@/components/retreat/PricingSection";
import TestimonialsSection from "@/components/retreat/TestimonialsSection";
import AccommodationSection from "@/components/retreat/AccommodationSection";
import FAQSection from "@/components/retreat/FAQSection";
import CTASection from "@/components/retreat/CTASection";
import Footer from "@/components/retreat/Footer";
import { Button } from "@/components/ui/button";
import { Users, User } from "lucide-react";

const Index = () => {
  const [isCouplesMode, setIsCouplesMode] = useState(true);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Toggle Button - Centered at top */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-card/95 backdrop-blur-sm border border-border rounded-full p-1 shadow-warm">
          <div className="flex gap-1">
            <button
              onClick={() => setIsCouplesMode(false)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                !isCouplesMode
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Men's Retreat
            </button>
            <button
              onClick={() => setIsCouplesMode(true)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                isCouplesMode
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Couples Retreat
            </button>
          </div>
        </div>
      </div>

      <main>
        <HeroSection isCouplesMode={isCouplesMode} />
        <WhySection isCouplesMode={isCouplesMode} />
        <TeamSection />
        <ItinerarySection isCouplesMode={isCouplesMode} />
        <IncludedSection />
        <TestimonialsSection />
        <AccommodationSection />
        <PricingSection isCouplesMode={isCouplesMode} />
        <FAQSection />
        <CTASection isCouplesMode={isCouplesMode} />
      </main>
      <Footer isCouplesMode={isCouplesMode} />
    </div>
  );
};

export default Index;
