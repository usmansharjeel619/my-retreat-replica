import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

interface PricingSectionProps {
  isCouplesMode: boolean;
}

type PricingTier = {
  name: string;
  description: string;
  price: string;
  priceNote: string;
  paymentLink: string;
  features: string[];
  popular: boolean;
  images?: string[];
};

const PricingSection = ({ isCouplesMode }: PricingSectionProps) => {
  const [imageIndexes, setImageIndexes] = useState<Record<number, number>>({});

  const couplesPricingTiers: PricingTier[] = [
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
      images: [
        "/images/room4/_DSC9171-HDR-Modifier.jpg",
        "/images/room4/_DSC9174-HDR-Modifier.jpg",
        "/images/room4/_DSC9178-HDR-Modifier.jpg",
        "/images/room4/_DSC9180-HDR.jpg",
        "/images/room4/_DSC9183-HDR.jpg",
        "/images/room4/_DSC9186-HDR-Pano-Modifier.jpg",
        "/images/room4/_DSC9201-HDR-Pano-Modifier-Modifier.jpg",
      ],
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

  const menPricingTiers: PricingTier[] = [
    {
      name: "6 Nights Shared Room",
      description: "En-suite, shared accommodation",
      price: "£1,300",
      priceNote: "per person",
      paymentLink: "https://buy.stripe.com/cNifZi1wEeaseu35zmfjG0v",
      features: [
        "All retreat activities included",
        "Full meal plan",
        "Private 1-to-1 counselling",
        "En-suite bathroom",
        "Transport included",
      ],
      popular: true,
      images: [
        "/images/room1/_DSC9027-HDR-Modifier.jpg",
        "/images/room1/_DSC9033-HDR-Pano-Modifier-Modifier.jpg",
        "/images/room1/_DSC9042-HDR-Pano-Modifier-Modifier.jpg",
        "/images/room1/_DSC9051-HDR.jpg",
        "/images/room1/_DSC9056-HDR.jpg",
      ],
    },
    {
      name: "6 Days Private Room",
      description: "Private en-suite room",
      price: "£1,800",
      priceNote: "per person",
      paymentLink: "https://buy.stripe.com/6oUdRafnufewfy74vifjG0u",
      features: [
        "All retreat activities included",
        "Full meal plan",
        "Private 1-to-1 counselling",
        "Complete privacy",
        "Transport included",
        "VIP treatment",
      ],
      popular: false,
      images: [
        "/images/room5/_DSC9207-HDR.jpg",
        "/images/room5/_DSC9212-HDR.jpg",
        "/images/room5/_DSC9213-HDR-Pano-Modifier.jpg",
        "/images/room5/_DSC9222-HDR.jpg",
        "/images/room5/_DSC9225-HDR.jpg",
        "/images/room5/_DSC9228-HDR.jpg",
      ],
    },
  ];

  const pricingTiers = isCouplesMode ? couplesPricingTiers : menPricingTiers;

  return (
    <section id="pricing" className="section-padding bg-secondary/20">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">
            Investment in Your <span className="text-gradient">Future</span>
          </h2>
          <p className="body-lg text-muted-foreground">
            Choose the package that's right for you. All prices are
            all-inclusive with no hidden fees.
          </p>
        </div>

        <div
          className={`grid gap-8 max-w-6xl mx-auto ${
            isCouplesMode ? "md:grid-cols-3" : "md:grid-cols-2"
          }`}
        >
          {pricingTiers.map((tier, index) => {
            const currentImageIndex = imageIndexes[index] ?? 0;
            const hasGallery = Boolean(tier.images?.length);

            return (
              <div
                key={tier.name}
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

                {hasGallery && (
                  <div className="mb-6 relative">
                    <div className="relative overflow-hidden rounded-2xl bg-muted group">
                      <img
                        src={tier.images?.[currentImageIndex]}
                        alt={`${tier.name} room view`}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {tier.images && tier.images.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={() =>
                              setImageIndexes((current) => ({
                                ...current,
                                [index]:
                                  ((current[index] ?? 0) - 1 +
                                    tier.images!.length) %
                                  tier.images!.length,
                              }))
                            }
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                            aria-label="Previous image"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setImageIndexes((current) => ({
                                ...current,
                                [index]:
                                  ((current[index] ?? 0) + 1) % tier.images!.length,
                              }))
                            }
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                            aria-label="Next image"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>

                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                            {tier.images.map((_, imageIndex) => (
                              <button
                                type="button"
                                key={imageIndex}
                                onClick={() =>
                                  setImageIndexes((current) => ({
                                    ...current,
                                    [index]: imageIndex,
                                  }))
                                }
                                className={`h-2 rounded-full transition-all ${
                                  currentImageIndex === imageIndex
                                    ? "bg-white w-6"
                                    : "bg-white/50 w-2"
                                }`}
                                aria-label={`Go to image ${imageIndex + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
