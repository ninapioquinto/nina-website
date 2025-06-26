import { useEffect, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqData = [
  {
    question: "What services do you offer?",
    answer: "I specialize in AI automation, custom application development, and CRM system design. My work focuses on improving operational efficiency, minimizing manual processes, and building systems that support sustainable business growth."
  },
  {
    question: "How do you ensure the systems you build align with my business needs?",
    answer: "Every solution begins with a deep understanding of your workflows, goals, and pain points. I don't just automate tasks; I design systems that reflect how your business operates. This ensures the outcome is purposeful, scalable, and aligned with your long-term objectives."
  },
  {
    question: "Can you improve or integrate with our existing systems?",
    answer: "Yes. I can audit, optimize, or expand your current systems. Whether you're using Airtable, Zoho, GoHighLevel, Make, n8n, Zapier, or other platforms, I ensure everything works together smoothly and reliably, whether you need a full rebuild or improved integration."
  },
  {
    question: "What is your process for new clients?",
    answer: "We begin with a discovery consultation to understand your operations, challenges, and goals. I then map out a recommended solution and send a clear proposal outlining the scope, structure, and investment. Once approved, I move into build, testing, and delivery with full transparency at every stage."
  },
  {
    question: "What types of businesses do you work with?",
    answer: "I primarily work with service-based businesses such as consultants, coaches, wellness providers, credit repair and funding. If your business relies on structured workflows, lead handling, or client management, I can help you build systems that improve efficiency and drive results."
  },
  {
    question: "What's the next step if I'm interested in working with you?",
    answer: "You can book a discovery call to discuss your goals, current systems, and what you'd like to improve or automate. This conversation helps identify the best solution for your business and ensures we're aligned on strategy, scope, and direction before moving forward."
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
    <section id="faq" ref={sectionRef} className="py-16 sm:py-24 bg-accent/5 relative bg-grid">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="relative inline-block">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-3 sm:mb-4">
                Frequently Asked{' '}
                <span className="bg-gradient-to-r from-purple-300 via-violet-200 to-indigo-300 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"></div>
            </div>
          </div>
          
          <p className="text-center text-base sm:text-lg text-white/70 mb-12 sm:mb-16 max-w-2xl mx-auto reveal">
            Get answers to the most common questions about automation services and working with me
          </p>
          
          <div className="reveal">
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {faqData.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border border-white/10 rounded-lg overflow-hidden bg-accent/20 px-4 sm:px-6 group"
                >
                  <AccordionTrigger className="text-left py-4 sm:py-5 hover:no-underline">
                    <span className="text-base sm:text-lg font-medium group-data-[state=open]:text-primary transition-colors pr-4">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 pb-4 sm:pb-5 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up text-sm sm:text-base leading-relaxed">
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
