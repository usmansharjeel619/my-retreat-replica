import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Are payment plans available?',
    answer: 'Yes! We understand this is an investment in your relationship. We offer flexible payment plans to help make the retreat accessible. Please enquire with Counsellor Rabi to discuss options that work for you.',
  },
  {
    question: 'What about flights and travel?',
    answer: 'Flights are not included in the package. You will need to arrange your own travel to North Wales. However, we provide transport pick-up on arrival and drop-off on departure from an agreed meeting point.',
  },
  {
    question: 'What meals are included?',
    answer: 'All meals are included! You\'ll enjoy wholesome, homemade breakfast, lunch, and dinner prepared by our chef Charlotte. We also provide snacks throughout the day. Please let us know of any dietary requirements.',
  },
  {
    question: 'Do we need travel insurance?',
    answer: 'We strongly recommend that all guests arrange comprehensive travel insurance before attending the retreat, covering cancellation, medical expenses, and personal belongings.',
  },
  {
    question: 'Is there free time during the retreat?',
    answer: 'Yes! While we have a structured program, we\'ve built in relaxation time throughout each day. You can explore the villa grounds, use the hot tub, or simply enjoy private couple time in your suite.',
  },
  {
    question: 'What should we bring?',
    answer: 'Comfortable clothing for activities (including boxing and pilates), swimwear for the hot tub and water activities, warm layers for evenings, and an open heart ready for transformation.',
  },
  {
    question: 'Is this retreat suitable for all couples?',
    answer: 'This retreat is designed for couples at any stage of their relationship who want to deepen their connection. Whether you\'re looking to strengthen a good relationship or work through challenges, our experienced counsellors are here to guide you.',
  },
  {
    question: 'What if we need to cancel?',
    answer: 'We understand that circumstances can change. Please refer to our cancellation policy when booking. We recommend travel insurance that covers cancellation for unexpected events.',
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-warm-gradient">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium uppercase tracking-wider mb-3">Got Questions?</p>
          <h2 className="heading-lg">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="bg-card rounded-2xl border border-border/50 px-6 data-[state=open]:shadow-warm transition-shadow duration-300"
            >
              <AccordionTrigger className="hover:no-underline py-5 text-left">
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
