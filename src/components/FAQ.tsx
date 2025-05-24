
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
    question: "How much time will automation actually save my team?",
    answer: "Most clients see 15-25 hours saved per week within the first month. One client reduced their lead processing time from 4 hours to 15 minutes. The time savings compound as your business grows - what takes your team hours today could be done in minutes automatically."
  },
  {
    question: "What's the typical ROI and how quickly will I see results?",
    answer: "Most clients see a 300-500% ROI within 6 months. You'll start seeing time savings within the first week of implementation. The financial impact becomes clear within 30-60 days as your team focuses on revenue-generating activities instead of manual tasks."
  },
  {
    question: "What does your process look like?",
    answer: "My process starts with a thorough systems audit to understand your current workflows, pain points, and goals. Then, I design a custom automation roadmap, build and integrate solutions in phases, and provide training to your team. Every project includes documentation and 30 days of support."
  },
  {
    question: "How long does implementation typically take?",
    answer: "Simple automations can be implemented in 1-2 weeks, while comprehensive system overhauls take 4-8 weeks. I work in phases so you start seeing benefits immediately while we build more complex workflows. Most clients are fully operational with their new systems within 6 weeks."
  },
  {
    question: "Will my team be able to manage the automations after you're done?",
    answer: "Absolutely. I provide comprehensive training and documentation for your team. The systems I build are designed to be manageable by non-technical users. I also offer ongoing support packages and quarterly reviews to ensure continued success."
  },
  {
    question: "What if my current systems are too complex or outdated?",
    answer: "I've worked with businesses using everything from spreadsheets to legacy software. Part of my process involves assessing what to keep, what to upgrade, and what to replace. I can work with your existing systems or recommend modern alternatives that integrate better."
  },
  {
    question: "How do you ensure data security and compliance?",
    answer: "I follow enterprise-grade security practices and work within your existing compliance requirements. All automations are built with proper access controls, data encryption, and audit trails. I can work with your IT team to ensure everything meets your security standards."
  },
  {
    question: "What happens if something breaks or needs updating?",
    answer: "Every client receives detailed documentation and 30 days of included support. I offer flexible monthly maintenance packages for ongoing optimization and updates. For urgent issues, I provide priority support with response times under 4 hours during business days."
  },
  {
    question: "Do you offer maintenance/support?",
    answer: "Yes. After implementation, I offer flexible monthly maintenance packages to ensure your automations remain optimized as your business evolves. I also provide emergency support for critical issues and quarterly system reviews to identify new automation opportunities."
  },
  {
    question: "How much does automation cost and is it worth the investment?",
    answer: "Investment varies based on complexity, typically ranging from $3,000-$15,000 for most projects. When you consider that automating just one full-time equivalent role saves $50,000+ annually, plus the time savings for your existing team, the ROI is compelling. I provide detailed cost-benefit analysis for every proposal."
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
