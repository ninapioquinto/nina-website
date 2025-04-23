
import { useEffect, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqData = [
  {
    question: "What types of AI automation projects do you specialize in?",
    answer: "I specialize in document processing automation, conversational AI systems, predictive analytics implementations, and custom workflow automation. My expertise is particularly strong in systems that bridge the gap between complex AI capabilities and practical business needs."
  },
  {
    question: "How long does a typical automation project take to implement?",
    answer: "Project timelines vary based on complexity and scope. A focused solution might take 4-6 weeks, while enterprise-wide implementations typically require 3-6 months. I provide detailed timeline estimates during the initial consultation and discovery phase."
  },
  {
    question: "What technologies and programming languages do you use?",
    answer: "I work primarily with Python for AI and machine learning, utilizing frameworks like TensorFlow, PyTorch, and scikit-learn. For backend systems, I use a combination of Python, Node.js, and occasionally Go. My solutions integrate with major cloud platforms (AWS, Azure, GCP) and CRM systems like Salesforce."
  },
  {
    question: "Do your solutions require ongoing maintenance?",
    answer: "Most AI systems benefit from ongoing monitoring, updates, and occasional retraining as data patterns change. I offer flexible maintenance packages to ensure your systems continue performing optimally. Each solution includes documentation and knowledge transfer to your team."
  },
  {
    question: "How do you approach data privacy and security?",
    answer: "Data privacy is fundamental to my approach. I design systems with privacy-by-design principles, implement industry-standard security practices, and ensure compliance with relevant regulations like GDPR and CCPA. All projects include data handling agreements and clear documentation of security measures."
  },
  {
    question: "What does your pricing structure look like?",
    answer: "I offer project-based pricing for defined scope work and retainer arrangements for ongoing development. Pricing reflects project complexity, timeline requirements, and long-term value generation. I provide transparent quotes after initial consultation and discovery sessions."
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
            Common questions about working with me and my approach to AI automation
          </p>
          
          <div className="reveal">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border border-white/10 rounded-lg overflow-hidden bg-accent/20 px-6"
                >
                  <AccordionTrigger className="text-left py-5 hover:no-underline">
                    <span className="text-lg font-medium">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 pb-5">
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
