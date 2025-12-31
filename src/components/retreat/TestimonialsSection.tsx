import { Star, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    name: 'Jordan Schofield',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    quote: "I'd say Luxe Counselling Retreat literally 'saved the day' and because of that I am still in contact with individuals now. I respect what they are doing and will recommend others to reach out whether you're struggling with mental health or going through a hard time dealing with a difficult personal situation. 10/10. Keep it up!",
  },
  {
    name: 'Grace Boyabenyathi',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    quote: "I've attended several retreats in the past, but Luxe Retreats is on a whole different level. Rabi and his team bring unmatched creativity and intention to every detail, making the experience truly unique. Their care and dedication are second to none. If you're on the fence about going – take the leap. You won't regret it.",
  },
  {
    name: 'Andrew',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    quote: "After dealing with some really hard issues throughout my life, the team at Luxe Retreat helped me on my path to resolving them and got me on my way to getting back to myself. Highly recommended for anyone in need of help.",
  },
  {
    name: 'Shannah Jongstra',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    quote: "I went through a challenging time a while back and Rabi really helped me through this time. We had several online sessions. I felt heard, but more importantly, Rabi helped me better understand my partner. I started to see that a simple change in our way of communicating together could really help us, now and also later on.",
  },
];

const reviewVideos = [
  '/videos/review1.mp4',
  '/videos/review2.mp4',
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-warm-gradient overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium uppercase tracking-wider mb-3">Success Stories</p>
          <h2 className="heading-lg">
            What Couples <span className="text-gradient">Are Saying</span>
          </h2>
        </div>

        {/* Video Reviews */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
          {reviewVideos.map((video, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden shadow-luxury max-w-[280px] mx-auto md:mx-0">
              <video
                src={video}
                controls
                playsInline
                className="w-full h-auto aspect-[9/16] object-cover bg-black"
                poster=""
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="card-luxury h-full flex flex-col">
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />
                  
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>

                  <blockquote className="text-foreground/90 leading-relaxed flex-grow mb-6">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Retreat Guest</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 bg-card border-primary/20 hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="static translate-y-0 bg-card border-primary/20 hover:bg-primary hover:text-primary-foreground" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
