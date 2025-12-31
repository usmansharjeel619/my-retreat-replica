import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingTiers = [
  {
    name: "Double Bed Room",
    description: "En-suite",
    price: "£2,000",
    priceNote: "per couple",
    features: [
      "All retreat activities included",
      "Full meal plan",
      "Private 1-to-1 counselling",
      "En-suite bathroom",
      "Transport included",
    ],
    popular: false,
  },
  {
    name: "Sea View Double Bed Room",
    description: "Premium en-suite with stunning views",
    price: "£2,500",
    priceNote: "per couple",
    features: [
      "All retreat activities included",
      "Full meal plan",
      "Private 1-to-1 counselling",
      "Beautiful sea views",
      "En-suite bathroom",
      "Transport included",
      "Priority booking",
    ],
    popular: true,
  },
  {
    name: "Private Room",
    description: "Based on availability and request",
    price: "Enquire",
    features: [
      "All retreat activities included",
      "Full meal plan",
      "Private 1-to-1 counselling",
      "Complete privacy",
      "Transport included",
      "VIP treatment",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium uppercase tracking-wider mb-3">
            Investment
          </p>
          <h2 className="heading-lg mb-4">
            Choose Your <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground body-lg">
            Payment plans available, please enquire
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 ${
                tier.popular
                  ? "bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-glow scale-105"
                  : "bg-card border border-border shadow-warm"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="w-4 h-4" fill="currentColor" />
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3
                  className={`text-xl font-serif font-semibold mb-2 ${
                    tier.popular ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    tier.popular
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {tier.description}
                </p>
                <div
                  className={`text-4xl md:text-5xl font-serif font-bold ${
                    tier.popular ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {tier.price}
                </div>
                <p
                  className={`text-sm mt-1 ${
                    tier.popular
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {tier.priceNote}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 shrink-0 mt-0.5 ${
                        tier.popular
                          ? "text-primary-foreground"
                          : "text-primary"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        tier.popular
                          ? "text-primary-foreground/90"
                          : "text-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-full ${
                  tier.popular
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    : ""
                }`}
                variant={tier.popular ? "secondary" : "default"}
                size="lg"
                asChild
              >
                <a
                  href="https://docs.google.com/forms/d/1iSSU5UVtOaGbo1M-B8g3T1QcVCZkkGxJ8mgt308SFgk/edit?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reserve Your Space
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
