import Navigation from '@/components/retreat/Navigation';
import HeroSection from '@/components/retreat/HeroSection';
import WhySection from '@/components/retreat/WhySection';
import TeamSection from '@/components/retreat/TeamSection';
import ItinerarySection from '@/components/retreat/ItinerarySection';
import IncludedSection from '@/components/retreat/IncludedSection';
import PricingSection from '@/components/retreat/PricingSection';
import TestimonialsSection from '@/components/retreat/TestimonialsSection';
import AccommodationSection from '@/components/retreat/AccommodationSection';
import FAQSection from '@/components/retreat/FAQSection';
import CTASection from '@/components/retreat/CTASection';
import Footer from '@/components/retreat/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <WhySection />
        <TeamSection />
        <ItinerarySection />
        <IncludedSection />
        <TestimonialsSection />
        <AccommodationSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
