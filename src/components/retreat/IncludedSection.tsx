import { 
  Bed, 
  UtensilsCrossed, 
  Mountain, 
  Bike,
  Waves,
  Flame,
  Soup,
  Users,
  Sparkles,
  Car,
  Dumbbell,
  Gamepad2
} from 'lucide-react';

const inclusions = [
  { icon: Bed, title: '2 Nights Accommodation', description: 'Luxury villa stay' },
  { icon: UtensilsCrossed, title: 'Daily Nourishment', description: 'Wholesome homemade meals' },
  { icon: Mountain, title: 'Go Karting', description: 'Adventure activity' },
  { icon: Bike, title: 'Camel Riding & Bike Rides', description: 'Outdoor exploration' },
  { icon: Dumbbell, title: 'Quad Bike', description: 'Thrilling experience' },
  { icon: Waves, title: 'Ice Bath', description: 'Wellness recovery' },
  { icon: Flame, title: 'BBQ', description: 'Evening social dining' },
  { icon: Gamepad2, title: 'Games Night', description: 'Fun bonding activities' },
  { icon: Users, title: '1-to-1 Counselling', description: 'Private sessions' },
  { icon: Sparkles, title: 'Rapid Transformational', description: 'Group counselling' },
  { icon: Soup, title: 'Hot Tub', description: 'Relaxation time' },
  { icon: Car, title: 'Transport', description: 'Pick up & drop off' },
];

const extras = [
  'Massage',
  'Mama Beach Day Out',
  'Aqua Kart',
  'Eating Outside',
];

const IncludedSection = () => {
  return (
    <section className="section-padding bg-warm-gradient">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium uppercase tracking-wider mb-3">All-Inclusive</p>
          <h2 className="heading-lg">
            What's <span className="text-gradient">Included</span>
          </h2>
        </div>

        {/* Inclusions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {inclusions.map((item, index) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-4 md:p-6 text-center group hover:-translate-y-1 hover:shadow-warm transition-all duration-300 border border-border/50"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-sm md:text-base mb-1">{item.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Extras */}
        <div className="bg-card rounded-3xl p-8 md:p-10 border border-border/50 shadow-warm">
          <h3 className="text-xl font-serif font-semibold text-center mb-6">Optional Extras</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {extras.map((extra) => (
              <span
                key={extra}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {extra}
              </span>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-6 text-sm">
            * Your own flight reservations required
          </p>
        </div>
      </div>
    </section>
  );
};

export default IncludedSection;
