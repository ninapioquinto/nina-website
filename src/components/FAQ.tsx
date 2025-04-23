
import { useEffect, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqData = [
  {
    question: "What tools do you specialize in?",
    answer: "I primarily work with Make (formerly Integromat), Zapier, OpenAI, GoHighLevel, ClickUp, Airtable, and various CRMs. I'm tool-agnostic and learn new systems quickly based on your existing tech stack and needs."
  },
  {
    question: "What kind of businesses do you work with?",
    answer: "I work with service businesses, agencies, and consultancies that have grown to the point where manual operations are causing bottlenecks. My clients typically have 5-50 team members and have outgrown their initial systems but aren't ready for enterprise solutions."
  },
  {
    question: "What does your process look like?",
    answer: "My process starts with a thorough systems audit to understand your current workflows, pain points, and goals. Then, I design a custom automation roadmap, build and integrate solutions in phases, and provide training to your team. Every project includes documentation and 30 days of support."
  },
  {
    question: "Do you offer maintenance/support?",
    answer: "Yes. After implementation, I offer flexible monthly maintenance packages to ensure your automations remain optimized as your business evolves. I also provide emergency support for critical issues and quarterly system reviews to identify new automation opportunities."
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
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-center text-lg text-white/70 mb-16 max-w-2xl mx-auto reveal">
            Common questions about working with me and my approach to automation
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
