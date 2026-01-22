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

      {/* Toggle Button */}
      <div className="fixed top-20 right-4 z-50">
        <div className="bg-card border border-border rounded-full p-1 shadow-lg flex gap-1">
          <Button
            variant={isCouplesMode ? "default" : "ghost"}
            size="sm"
            onClick={() => setIsCouplesMode(true)}
            className="rounded-full px-4"
          >
            <Users className="w-4 h-4 mr-2" />
            Couples
          </Button>
          <Button
            variant={!isCouplesMode ? "default" : "ghost"}
            size="sm"
            onClick={() => setIsCouplesMode(false)}
            className="rounded-full px-4"
          >
            <User className="w-4 h-4 mr-2" />
            Men
          </Button>
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
