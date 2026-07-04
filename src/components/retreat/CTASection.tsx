import { Heart, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  isCouplesMode: boolean;
}

const CTASection = ({ isCouplesMode }: CTASectionProps) => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 container-wide text-center">
        <Heart className="w-12 h-12 mx-auto mb-6 animate-pulse" />
        <h2 className="heading-lg mb-6 text-primary-foreground">
          {isCouplesMode ? (
            "Ready to Transform Your Relationship?"
          ) : (
            "Ready To Transform Your Life?"
          )}
        </h2>
        <p className="body-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
          {isCouplesMode ? (
            <>
              Limited spaces available for our December retreat in Marrakech.
              Don't wait until it's too late – your relationship deserves this
              investment.
            </>
          ) : (
            <>
              You can't put a price on your mental health. Men, it's time we
              prioritise ourselves.
            </>
          )}
        </p>

        {/* Booking CTA */}
        <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-primary-foreground/20 max-w-xl mx-auto">
          <h3 className="text-2xl font-serif font-semibold mb-4">
            To Reserve Your Space
          </h3>
          <p className="text-primary-foreground/80 mb-6">
            Book a call with Counsellor Rabi to discuss your needs and secure
            your spot
          </p>

          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <a
              href={
                isCouplesMode
                  ? "https://buy.stripe.com/9B65kEgryeasadN3refjG0s"
                  : "https://buy.stripe.com/dRmaEY5MU5DW3Pp3refjG0r"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Reserve Now
            </a>
          </Button>

          <div className="flex items-center justify-center gap-2 mt-6 text-primary-foreground/70">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">
              {isCouplesMode
                ? " 6-11 December 2026 • Marrakech"
                : " 26-31 December 2026 • Marrakech"}
            </span>
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
