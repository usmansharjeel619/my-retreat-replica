import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Clock } from 'lucide-react';

const itinerary = [
  {
    day: 'Day 1',
    title: 'Friday: Arrival & Reconnection',
    activities: [
      { time: '3:00 PM', activity: 'Check-In & Welcome Drinks – Arrive to a breathtaking luxury villa and enjoy welcome refreshments' },
      { time: '3:30 PM', activity: 'Villa Tour & Room Allocation – Get settled into private suites' },
      { time: '4:00 PM', activity: 'Gentle Grounding Session – Breathing exercises, eye-contact reconnection, and intention setting' },
      { time: '5:00 PM', activity: 'Relaxation Time – Explore the villa grounds and relaxation lounges' },
      { time: '7:00 PM', activity: 'Gourmet Welcome Dinner – A delicious 3-course chef-prepared meal' },
      { time: '8:30 PM', activity: 'Group Circle Introduction – Soft sharing, group warm-up, and communication activities' },
      { time: '10:00 PM', activity: 'Private Couple Time – Stargazing or relaxed time in your suite' },
    ],
  },
  {
    day: 'Day 2',
    title: 'Saturday: Communication, Boxing, Adventure & Healing',
    activities: [
      { time: '8:00 AM', activity: 'Breakfast Buffet' },
      { time: '9:00 AM', activity: 'Boxing Training – Morning physical connection training, partner drills, teamwork focus' },
      { time: '10:00 AM', activity: 'Pilates Session – Gentle movement to strengthen mind-body connection' },
      { time: '11:00 AM', activity: 'Group Counseling Session – Understanding Your Partner\'s Needs workshop' },
      { time: '12:30 PM', activity: 'Lunch' },
      { time: '1:30 PM', activity: 'Paint-balling Team Challenge – Couples vs. couples teamwork game designed to build communication' },
      { time: '3:30 PM', activity: 'Relaxation Time & Snacks' },
      { time: '4:30 PM', activity: 'Private 1-to-1 Couples Counseling – Deep emotional re-connection session with therapist' },
      { time: '7:00 PM', activity: 'Romantic Candlelit Dinner' },
      { time: '8:30 PM', activity: 'Appreciation Ritual Session – Gratitude-based couple bonding activity' },
      { time: '10:00 PM', activity: 'Private Couple Time' },
    ],
  },
  {
    day: 'Day 3',
    title: 'Sunday: Healing, Boxing, Kayaking & Deep Bonding',
    activities: [
      { time: '8:00 AM', activity: 'Breakfast' },
      { time: '9:00 AM', activity: 'Boxing Training – Morning partner workout with pads and drills' },
      { time: '10:00 AM', activity: 'Pilates Session' },
      { time: '11:00 AM', activity: 'Kayaking – Tandem kayaking session to strengthen teamwork' },
      { time: '12:30 PM', activity: 'Lunch' },
      { time: '1:30 PM', activity: 'Couples Team-Building Games – Communication challenges and trust activities' },
      { time: '3:00 PM', activity: 'Relaxation Time' },
      { time: '4:00 PM', activity: 'Group Counseling Session – Building a Future Relationship Vision' },
      { time: '7:30 PM', activity: 'Final Celebration Dinner' },
      { time: '9:00 PM', activity: 'Closing Ceremony – Reflections, couple intentions, and guided meditation' },
      { time: '10:00 PM', activity: 'Private Time' },
    ],
  },
  {
    day: 'Day 4',
    title: 'Monday: HIIT Training & Departure',
    activities: [
      { time: '8:00 AM', activity: 'Breakfast' },
      { time: '9:00 AM', activity: 'HIIT Session – A dynamic, energizing partner workout to finish the retreat with strong energy and unity' },
      { time: '10:45 AM', activity: 'Farewell Pack Distribution – Includes a relationship workbook, personalized notes, and wellness treats' },
      { time: '11:00 AM', activity: 'Check-Out – Wishing couples continued growth and connection' },
    ],
  },
];

const ItinerarySection = () => {
  return (
    <section id="itinerary" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium uppercase tracking-wider mb-3">Your Journey</p>
          <h2 className="heading-lg">
            Day-by-Day <span className="text-gradient">Itinerary</span>
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {itinerary.map((day, dayIndex) => (
            <AccordionItem
              key={day.day}
              value={`day-${dayIndex}`}
              className="card-luxury border-none data-[state=open]:shadow-glow transition-shadow duration-300"
            >
              <AccordionTrigger className="hover:no-underline py-6 px-6">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-serif font-bold text-lg">{day.day}</span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-serif font-semibold">{day.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{day.activities.length} activities planned</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4 border-l-2 border-primary/20 ml-8 pl-6">
                  {day.activities.map((item, index) => (
                    <div
                      key={index}
                      className="relative before:absolute before:-left-[31px] before:top-2 before:w-4 before:h-4 before:rounded-full before:bg-primary/20 before:border-2 before:border-primary"
                    >
                      <div className="flex items-start gap-3">
                        <Clock className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <div>
                          <span className="font-semibold text-primary">{item.time}</span>
                          <span className="mx-2 text-muted-foreground">–</span>
                          <span className="text-foreground">{item.activity}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ItinerarySection;
