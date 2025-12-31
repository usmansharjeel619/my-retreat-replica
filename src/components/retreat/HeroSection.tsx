import { Heart, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  const retreatDate = new Date("2026-04-24T15:00:00");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6b00' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 container-wide section-padding text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in">
          <Heart className="w-4 h-4" />
          <span className="text-sm font-medium">Luxury Couples Experience</span>
        </div>

        {/* Main Heading */}
        <h1
          className="heading-xl mb-4 text-foreground animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Luxury Couples
          <br />
          <span className="text-gradient">Reconnection Retreat</span>
        </h1>

        {/* Subheading */}
        <p
          className="body-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          3 Nights, 4 Days of Restoration
          <br />
          <span className="font-medium text-foreground">
            All-Inclusive Experience
          </span>
        </p>

        {/* Info Pills */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border shadow-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">North Wales</span>
          </div>
          <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border shadow-sm">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">24–27 April 2026</span>
          </div>
          <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border shadow-sm">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Limited Spaces</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div
          className="mb-10 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            Retreat Begins In
          </p>
          <CountdownTimer targetDate={retreatDate} />
        </div>

        {/* Price & CTA */}
        <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <p className="text-muted-foreground mb-2">From</p>
          <p className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            £2,000{" "}
            <span className="text-lg font-normal text-muted-foreground">
              per couple
            </span>
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 rounded-full shadow-warm hover:shadow-glow transition-all duration-300 animate-pulse-glow"
            asChild
          >
            <a href="https://docs.google.com/forms/d/1iSSU5UVtOaGbo1M-B8g3T1QcVCZkkGxJ8mgt308SFgk/edit?usp=drivesdk" target="_blank" rel="noopener noreferrer">Book Your Space</a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
