import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Wifi, Car, Waves, Mountain, Coffee, Sparkles } from 'lucide-react';

const villaImages = Array.from({ length: 15 }, (_, i) => ({
  src: `/images/Villa/villa${i + 1}.jpeg`,
  alt: `Villa image ${i + 1}`,
}));

const activityImages = Array.from({ length: 9 }, (_, i) => ({
  src: `/images/Activity/${i + 1}.jpeg`,
  alt: `Activity ${i + 1}`,
}));

const amenities = [
  { icon: Wifi, label: 'Free WiFi' },
  { icon: Car, label: 'Free Parking' },
  { icon: Waves, label: 'Hot Tub' },
  { icon: Mountain, label: 'Scenic Views' },
  { icon: Coffee, label: 'Chef Service' },
  { icon: Sparkles, label: 'Daily Housekeeping' },
];

const AccommodationSection = () => {
  return (
    <section id="accommodation" className="section-padding bg-background">
      <div className="container-wide">
        {/* Villa Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Gallery */}
          <div>
            <Carousel opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {villaImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="overflow-hidden rounded-3xl">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-card/80 backdrop-blur-sm border-primary/20" />
              <CarouselNext className="right-4 bg-card/80 backdrop-blur-sm border-primary/20" />
            </Carousel>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-medium uppercase tracking-wider mb-3">Your Home</p>
            <h2 className="heading-lg mb-6">
              Luxury Villa <span className="text-gradient">Retreat</span>
            </h2>
            <p className="body-lg text-muted-foreground mb-8">
              Nestled in the beautiful Welsh countryside, our handpicked luxury villa offers the perfect 
              sanctuary for your reconnection journey. With stunning views, spacious private suites, and 
              world-class amenities, you'll have everything you need to relax and focus on your relationship.
            </p>

            {/* Amenities */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {amenities.map((amenity) => (
                <div
                  key={amenity.label}
                  className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors"
                >
                  <amenity.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div className="text-center mb-10">
          <p className="text-primary font-medium uppercase tracking-wider mb-3">Experience</p>
          <h2 className="heading-lg mb-6">
            Retreat <span className="text-gradient">Activities</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {activityImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-2xl group">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[200px] md:h-[250px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
