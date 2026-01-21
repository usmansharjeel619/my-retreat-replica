import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock } from "lucide-react";

const itinerary = [
  {
    day: "Day 1",
    title: "Arrival & Welcome",
    activities: [
      { time: "3:00 PM", activity: "Airport Pick-Up" },
      {
        time: "4:30 PM",
        activity: "Welcome to our Moroccan-Style Villa with Refreshments",
      },
      { time: "5:30 PM", activity: "First evening  Welcome Group Dinner" },
      {
        time: "7:30 PM",
        activity: "Traditional Moroccan Fire Dancing Show at the Villa",
      },
      { time: "9:00 PM", activity: "Wind Down and Rest" },
    ],
  },
  {
    day: "Day 2",
    title: "Morning Fitness & Desert Adventure",
    activities: [
      { time: "8:00 AM", activity: "Morning Jog" },
      { time: "9:00 AM", activity: "Boxing Training" },
      { time: "10:30 AM", activity: "Breakfast" },
      {
        time: "12:00 PM",
        activity: "Group Counselling Workshop",
      },
      { time: "1:00 PM", activity: "Self Relfection time" },
      {
        time: "3:30 PM",
        activity: "Magical Dinner Show & Camel Ride in Agafay Desert at sunset",
      },
      { time: "10:00 PM", activity: "Relaxation time" },
    ],
  },
  {
    day: "Day 3",
    title: "Pilates, Nutrition & Emotional Honesty",
    activities: [
      { time: "8:00 AM", activity: "Pilates" },
      { time: "9:00 AM", activity: "Breakfast" },
      { time: "10:30 AM", activity: "Outdoor Walk" },
      {
        time: "12:00 PM",
        activity: "Nutrition Workshop (Mindful Eating & Shared Wellness)",
      },
      { time: "2:30 PM", activity: "Lunch" },
      {
        time: "3:30 PM",
        activity: "Poolside Relaxation & Connection Activities",
      },
      {
        time: "5:00 PM",
        activity: "Mental Health Workshop",
      },
      { time: "6:00 PM", activity: "Partner HIIT Training" },
      { time: "7:30 PM", activity: "Dinner" },
      { time: "9:00 PM", activity: "Games Night" },
    ],
  },
  {
    day: "Day 4",
    title: "Training, Counselling & Massage",
    activities: [
      { time: "8:00 AM", activity: "Pilates" },
      { time: "8:30 AM", activity: "Circuit Training" },
      { time: "9:30 AM", activity: "Swimming" },
      { time: "9:45 AM", activity: "Breakfast" },
      { time: "11:00 AM", activity: "Journal time of Self Reflection" },
      { time: "1:00 PM", activity: "Group/1-1 Counselling Session" },
      { time: "5:00 PM", activity: "Go Karting" },
      { time: "7:00 PM", activity: "Dinner" },
      { time: "8:30 PM", activity: "Moroccan Massage" },
    ],
  },
  {
    day: "Day 5",
    title: "Ouzoud Waterfall Excursion",
    activities: [
      { time: "8:00 AM", activity: "Morning Jog" },
      { time: "8:30 AM", activity: "Boxing Training" },
      { time: "9:30 AM", activity: "Breakfast" },
      { time: "11:00 AM", activity: "Pick Up for Ouzoud Waterfall" },
      { time: "8:00 PM", activity: "Snacks and Chill out time" },
    ],
  },
  {
    day: "Day 6",
    title: "Training, Water Park & Rebuilding Trust",
    activities: [
      { time: "8:30 AM", activity: "Circuit Training" },
      { time: "9:00 AM", activity: "Swimming" },
      { time: "10:00 AM", activity: "Breakfast" },
      { time: "11:30 AM", activity: "Bike Ride" },
      { time: "12:30 PM", activity: "Rest & Digest" },
      {
        time: "1:30 PM",
        activity: 'Topic of the Day "Rebuilding Trust After Pain"',
      },
      { time: "3:00 PM", activity: "Water Park" },
      { time: "6:00 PM", activity: "Pool Party with Live DJ" },
      { time: "9:00 PM", activity: "Couples Games Night" },
    ],
  },
  {
    day: "Day 7",
    title: "Reflection & Departure",
    activities: [
      { time: "8:00 AM", activity: "Swimming" },
      {
        time: "9:00 AM",
        activity: 'Reflection Workshop "Our Healing Journey & Future Together"',
      },
      { time: "10:30 AM", activity: "Breakfast" },
      { time: "12:00 PM", activity: "Departure" },
    ],
  },
];

const ItinerarySection = () => {
  return (
    <section id="itinerary" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium uppercase tracking-wider mb-3">
            Your Journey
          </p>
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
                    <span className="text-primary font-serif font-bold text-lg">
                      {day.day}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-serif font-semibold">
                      {day.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {day.activities.length} activities planned
                    </p>
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
                          <span className="font-semibold text-primary">
                            {item.time}
                          </span>
                          <span className="mx-2 text-muted-foreground">–</span>
                          <span className="text-foreground">
                            {item.activity}
                          </span>
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
