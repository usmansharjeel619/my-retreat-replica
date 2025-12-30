import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Wifi, Car, Waves, Mountain, Coffee, Sparkles } from 'lucide-react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    alt: 'Luxury villa exterior',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    alt: 'Villa living area',
  },
  {
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
    alt: 'Bedroom suite',
  },
  {
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
    alt: 'Pool area',
  },
  {
    src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop',
    alt: 'Outdoor dining',
  },
];

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Gallery */}
          <div>
            <Carousel opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {images.map((image, index) => (
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
      </div>
    </section>
  );
};

export default AccommodationSection;
