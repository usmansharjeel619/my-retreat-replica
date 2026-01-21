import { Heart, MessageCircle, Shield, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Emotional Connect to self ",
    description:
      "Reconnect with your inner self and rebuild the confidence of the great man you’re meant to be.",
  },
  {
    icon: MessageCircle,
    title: "Stronger Communication",
    description: "Learn tools to understand and express yourself better",
  },
  {
    icon: Shield,
    title: "Build Trust",
    description:
      "Create a foundation of trust and security in your relationship",
  },
  {
    icon: Sparkles,
    title: "Reborn a New You",
    description: "Leave with clarity and tools for long-term success",
  },
];

const WhySection = () => {
  return (
    <section className="section-padding bg-warm-gradient">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">
            A transformational retreat helping men{" "}
            <span className="text-gradient">
              break free from childhood trauma and grow into better fathers,
              husbands, and men.
            </span>
          </h2>
          <p className="body-lg text-muted-foreground">
            This isn’t just a getaway it’s a journey of healing, self-discovery,
            and growth. Designed for men dealing with stress, mental health
            challenges, or emotional pain, this retreat combines professional
            counselling, open conversations, and support to help you express
            yourself and heal from the past.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="card-luxury text-center group hover:-translate-y-1 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-serif font-semibold mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <blockquote className="text-xl md:text-2xl font-serif italic text-foreground/80">
            "Many couples leave with a renewed sense of partnership, clarity,
            and the tools to create long-term relationship success."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
