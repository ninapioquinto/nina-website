
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
    answer: "I partner with solopreneurs, growing teams, and service-based businesses who are ready to eliminate inefficiencies and scale smarter. If you're stuck doing repetitive tasks or working with scattered systems, I help you reclaim your time and create clarity with custom-built automation and operational systems."
  },
  {
    question: "What industries do you specialize in?",
    answer: "I help service-based businesses in healthcare and pet veterinary streamline their operations with intelligent, client-centered systems. From managing leads to reducing no-shows and automating follow-ups, I design solutions that align with how your business truly operates."
  },
  {
    question: "What tools and platforms do you use?",
    answer: "I specialize in Zapier, Make.com, N8n, GoHighLevel, Airtable, and Click. These platforms allow me to create powerful custom systems quickly, without complex code, so you get results faster and at lower cost."
  },
  {
    question: "What can I expect from your process?",
    answer: "My process is collaborative and results-focused. We start with a discovery call to align on your goals. Then, I design, build, and implement a solution tailored to your business. Everything I build is scalable, streamlined, and thoughtfully designed for long-term use."
  },
  {
    question: "What kind of results do your clients typically see?",
    answer: "Clients often see a 50 to 80 percent reduction in manual work, faster turnaround times, and stronger system reliability within weeks. More importantly, they gain back time to focus on high-value activities, whether that's client relationships, growth, or innovation. My solutions are designed not just to save time but to drive meaningful business outcomes."
  },
  {
    question: "How do you price your services?",
    answer: "I offer flat-rate and phased packages based on your goals and project complexity. No hourly billing, no surprises. You'll get a clear proposal that's focused on ROI, not just tasks."
  },
  {
    question: "How fast can you deliver?",
    answer: "Quick wins and smaller automations are often completed in just a few days. Larger workflows or CRM implementations typically take 1 to 3 weeks. I work efficiently without compromising on quality or long-term reliability."
  },
  {
    question: "Do you offer full CRM buildouts from scratch?",
    answer: "Yes. If you're starting from zero or switching platforms, I can help you design and build a custom CRM from the ground up. This includes everything from lead pipelines and automations to task management and reporting, all tailored entirely to how your business operates."
  },
  {
    question: "Can you help clean up or organize my existing CRM or database?",
    answer: "Yes. Whether your tools are messy, outdated, or underused, I can help you clean, reorganize, and optimize them into streamlined assets that support your goals."
  },
  {
    question: "Do you offer support after the project is done?",
    answer: "Yes. Every project includes post-launch support, clear documentation, and optional training. If you need ongoing support or continuous improvements, I also offer flexible retainers."
  },
  {
    question: "Do you sign NDAs or work with sensitive information?",
    answer: "Yes. I regularly handle confidential data and am happy to sign NDAs. Security, discretion, and integrity are core to how I work."
  },
  {
    question: "Can we work together if I'm based internationally?",
    answer: "Yes. I've worked with clients in the U.S., Canada, Australia, the UK, and more. I schedule around time zones and keep communication smooth no matter where you're located."
  },
  {
    question: "What's the best way to get started?",
    answer: "Book a free discovery call. We'll talk through your current setup, challenges, and goals. Whether you need a quick fix, a full system, or just clarity on your next move, you'll leave the call with a clear direction."
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
