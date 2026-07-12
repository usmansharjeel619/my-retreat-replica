import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, Clock } from "lucide-react";

interface ItinerarySectionProps {
  isCouplesMode: boolean;
}

const ItinerarySection = ({ isCouplesMode }: ItinerarySectionProps) => {
  const couplesItinerary = [
    {
      day: "Day 1",
      title: "Arrival & Welcome",
      activities: [
        { time: "3:00 PM", activity: "Airport Pick-Up" },
        {
          time: "4:30 PM",
          activity: "Welcome to our Moroccan-Style Villa with Refreshments",
        },
        {
          time: "5:30 PM",
          activity: "First Evening Welcome Dinner for Couples",
        },
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
        { time: "8:00 AM", activity: "Morning Jog (Partner Edition)" },
        { time: "9:00 AM", activity: "Boxing Training" },
        { time: "10:30 AM", activity: "Breakfast" },
        {
          time: "12:00 PM",
          activity: 'Group Counselling Workshop "Healing Together"',
        },
        { time: "1:00 PM", activity: "Reflection time for couples" },
        {
          time: "3:30 PM",
          activity:
            "Magical Dinner Show & Camel Ride in Agafay Desert at sunset",
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
        { time: "10:30 AM", activity: "Outdoor Walk for Two" },
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
          activity: 'Couples Counselling Topic "The Art of Emotional Honesty"',
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
      title: "Beach Club Day Out",
      activities: [
        { time: "8:00 AM", activity: "Morning Jog" },
        { time: "8:30 AM", activity: "Boxing Circuit" },
        { time: "9:30 AM", activity: "Breakfast" },
        { time: "10:00 AM", activity: "Group Walk" },
        { time: "11:00 AM", activity: "Shower and Get Ready" },
        { time: "12:00 PM", activity: "Couples Group Counselling" },
        { time: "2:00 PM", activity: "Lunch" },
        { time: "2:30 PM", activity: "Self Reflection" },
        { time: "3:30 PM", activity: "Beach Club" },
        { time: "8:00 PM", activity: "Dinner" },
        { time: "9:00 PM", activity: "Games Night" },
      ],
    },
    {
      day: "Day 7",
      title: "Reflection & Departure",
      activities: [
        { time: "8:00 AM", activity: "Swimming" },
        {
          time: "9:00 AM",
          activity:
            'Reflection Workshop "Our Healing Journey & Future Together"',
        },
        { time: "10:30 AM", activity: "Breakfast" },
        { time: "12:00 PM", activity: "Departure" },
      ],
    },
  ];

  const menItinerary = [
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
          activity:
            "Magical Dinner Show & Camel Ride in Agafay Desert at sunset",
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
      title: "Fun Day Out",
      activities: [
        { time: "8:00 AM", activity: "Morning Jog" },
        { time: "8:30 AM", activity: "Boxing Circuit" },
        { time: "9:30 AM", activity: "Breakfast" },
        { time: "10:00 AM", activity: "Group Walk" },
        { time: "11:00 AM", activity: "Shower and Get Ready" },
        { time: "12:00 PM", activity: "Group Counselling" },
        { time: "2:00 PM", activity: "Lunch" },
        { time: "2:30 PM", activity: "Self Reflection" },
        { time: "3:30 PM", activity: "Aqua Kart + Go Karting" },
        { time: "8:00 PM", activity: "Dinner" },
        { time: "9:00 PM", activity: "Games Night" },
      ],
    },
    {
      day: "Day 7",
      title: "Reflection & Departure",
      activities: [
        { time: "8:00 AM", activity: "Swimming" },
        {
          time: "9:00 AM",
          activity:
            'Reflection Workshop "Our Healing Journey & changes of the future you"',
        },
        { time: "10:30 AM", activity: "Breakfast" },
        { time: "12:00 PM", activity: "Departure" },
      ],
    },
  ];

  const itinerary = isCouplesMode ? couplesItinerary : menItinerary;

  return (
    <section id="itinerary" className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">
            Your <span className="text-gradient">7-Day Journey</span>
          </h2>
          <p className="body-lg text-muted-foreground">
            Every day is carefully designed to balance healing, adventure, and
            connection
          </p>
        </div>

        {/* Accordion Timeline */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {itinerary.map((dayItem, index) => (
              <AccordionItem
                key={index}
                value={`day-${index}`}
                className="border border-border rounded-2xl overflow-hidden bg-card"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-primary/5 transition-colors">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-primary uppercase tracking-wider block">
                        {dayItem.day}
                      </span>
                      <h3 className="text-lg font-serif font-semibold">
                        {dayItem.title}
                      </h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-3 pt-4">
                    {dayItem.activities.map((activity, activityIndex) => (
                      <div
                        key={activityIndex}
                        className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                      >
                        <div className="flex items-center gap-2 min-w-[80px]">
                          <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-primary font-medium text-sm">
                            {activity.time}
                          </span>
                        </div>
                        <span className="text-foreground text-sm">
                          {activity.activity}
                        </span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;
