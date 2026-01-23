import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingSectionProps {
  isCouplesMode: boolean;
}

const PricingSection = ({ isCouplesMode }: PricingSectionProps) => {
  const couplesPricingTiers = [
    {
      name: "Double Bed Room",
      description: "En-suite",
      price: "£3,000",
      priceNote: "per couple",
      paymentLink: "https://buy.stripe.com/9B65kEgryeasadN3refjG0s",
      features: [
        "Majority of retreat activities included",
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
      price: "£3,500",
      priceNote: "per couple",
      paymentLink: "https://buy.stripe.com/9B65kEgryeasadN3refjG0s",
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
      priceNote: "",
      paymentLink: "https://buy.stripe.com/9B65kEgryeasadN3refjG0s",
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

  const menPricingTiers = [
    {
      name: "Shared Room",
      description: "En-suite",
      price: "£1,600",
      priceNote: "per person",
      paymentLink: "https://buy.stripe.com/dRmaEY5MU5DW3Pp3refjG0r",
      features: [
        "Majority of retreat activities included",
        "Full meal plan",
        "Private 1-to-1 counselling",
        "En-suite bathroom",
        "Transport included",
      ],
      popular: false,
    },
    {
      name: "Double Bed Room",
      description: "Premium en-suite with stunning views",
      price: "£2,000",
      priceNote: "per person",
      paymentLink: "https://buy.stripe.com/dRmaEY5MU5DW3Pp3refjG0r",
      features: [
        "All retreat activities included",
        "Full meal plan",
        "Private 1-to-1 counselling",
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
      priceNote: "",
      paymentLink: "https://buy.stripe.com/dRmaEY5MU5DW3Pp3refjG0r",
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

  const pricingTiers = isCouplesMode ? couplesPricingTiers : menPricingTiers;

  return (
    <section id="pricing" className="section-padding bg-secondary/20">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">
            Investment in Your <span className="text-gradient">Future</span>
          </h2>
          <p className="body-lg text-muted-foreground">
            Choose the package that's right for you. All prices are
            all-inclusive with no hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 border-2 transition-all duration-300 ${
                tier.popular
                  ? "border-primary bg-card shadow-glow scale-105"
                  : "border-border bg-card hover:border-primary/30 hover:shadow-warm"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-serif font-bold mb-2">
                  {tier.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {tier.description}
                </p>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-primary">
                    {tier.price}
                  </span>
                </div>
                {tier.priceNote && (
                  <p className="text-sm text-muted-foreground">
                    {tier.priceNote}
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                variant={tier.popular ? "default" : "outline"}
                className={`w-full rounded-full ${
                  tier.popular
                    ? "shadow-warm hover:shadow-glow"
                    : "border-primary/30 hover:bg-primary/10"
                }`}
                asChild
              >
                <a
                  href={tier.paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book This Package
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
