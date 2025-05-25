import { useEffect, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqData = [
  {
    question: "Who do you typically work with?",
    answer: "I work with solopreneurs, lean teams, and small businesses who are ready to eliminate inefficiencies and scale smarter. Whether you're drowning in repetitive tasks or dealing with scattered systems, I help you reclaim time, clarity, and control through custom automation and AI-powered solutions."
  },
  {
    question: "Can we work together if I'm based internationally?",
    answer: "Absolutely. I've worked with clients across the U.S., Canada, Australia, and the UK. I schedule calls with time zone differences in mind and ensure communication is smooth and aligned, no matter where you're located."
  },
  {
    question: "What tools and platforms do you use?",
    answer: "I specialize in Zapier, Make.com, N8n, GoHighLevel, Airtable, and ClickUp. These tools allow me to architect powerful systems quickly, without the overhead of custom code, so you get enterprise-level results at a fraction of the cost."
  },
  {
    question: "What can I expect from your process?",
    answer: "My process is strategic, collaborative, and results-driven. We begin with a consultation to align on goals. Then I design, build, and implement solutions tailored to your operations. Every system I create is scalable, efficient, and built with long-term value in mind."
  },
  {
    question: "Do you offer full CRM buildouts from scratch?",
    answer: "Yes. If you're starting from zero or switching platforms, I can help you design and build a custom CRM from the ground up. This includes everything from lead pipelines and automations to task management and reporting, all tailored entirely to how your business operates."
  },
  {
    question: "Can you help clean up or organize my existing CRM or database?",
    answer: "Yes. Many of my clients come to me with messy, outdated, or underutilized tools. I can help you clean, restructure, and optimize your CRM or database so it becomes an asset, not a headache."
  },
  {
    question: "What kind of results do your clients typically see?",
    answer: "Clients often see a 50 to 80 percent reduction in manual work, faster turnaround times, and stronger system reliability within weeks. More importantly, they gain back time to focus on high-value activities, whether that's client relationships, growth, or innovation. My solutions are designed not just to save time but to drive meaningful business outcomes."
  },
  {
    question: "How do you price your services?",
    answer: "I offer flat-rate and packages based on your goals and complexity. No hourly billing, no surprises. Whether you're looking for a quick win or a full system transformation, you'll receive a tailored proposal focused on ROI, not just deliverables."
  },
  {
    question: "How fast can you deliver?",
    answer: "Most smaller builds and optimizations are completed within a few days. Larger workflows or full CRM implementations typically take 1 to 3 weeks. I move quickly but never at the cost of quality, reliability, or sustainability."
  },
  {
    question: "Do you provide support after the project is done?",
    answer: "Yes. Every project includes post-delivery documentation and, if needed, custom training. For continued optimization or support, I offer flexible retainer options so you always have a trusted systems partner by your side."
  },
  {
    question: "How do I know this will actually work for my business?",
    answer: "Every business is different, which is why I never offer cookie-cutter solutions. I start by understanding your unique processes, pain points, and goals. From there, I create a tailored system that aligns with your operations and adapts as you grow. Results come from strategic alignment, not guesswork."
  }
];

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    const section = sectionRef.current;
    const elements = section?.querySelectorAll('.reveal');

    elements?.forEach(el => {
      observer.observe(el);
    });

    return () => {
      elements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="py-24 bg-accent/5 relative bg-grid">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center reveal">
            Frequently Asked <span className="bg-gradient-to-r from-[#9b87f5] via-[#7E69AB] to-[#8B5CF6] bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-center text-lg text-white/70 mb-16 max-w-2xl mx-auto reveal">
            Get answers to the most common questions about automation services and working with me
          </p>
          
          <div className="reveal">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border border-white/10 rounded-lg overflow-hidden bg-accent/20 px-6 group"
                >
                  <AccordionTrigger className="text-left py-5 hover:no-underline">
                    <span className="text-lg font-medium group-data-[state=open]:text-primary transition-colors">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 pb-5 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
