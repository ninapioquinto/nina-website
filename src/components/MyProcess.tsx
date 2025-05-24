
import { useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { CheckCircle } from 'lucide-react';

const MyProcess = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1
    });
    
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

  const steps = [
    {
      number: "01",
      title: "Discovery and Operational Review",
      description: "We begin with a focused strategy session. I take a clear look at how your business runs across sales, fulfillment, and internal workflows. The goal is to find what's slowing you down, where time is leaking, and where automation can create better flow. This step gives us a real foundation to build on.",
      testimonial: "She spotted the bottlenecks in our process almost immediately. It made everything feel sharper."
    },
    {
      number: "02",
      title: "CRM and Automation Blueprint",
      description: "After the review, I map out a clear and customized plan. This includes the structure of your CRM, the roles of each stage, and where automation and AI can remove manual effort. The blueprint is designed to fit how your business actually runs so every part of it makes sense to you and your team.",
      testimonial: "It wasn't a cookie-cutter CRM. It was shaped around how we work and what we needed to grow."
    },
    {
      number: "03",
      title: "Custom System Build with AI and Automation",
      description: "Once approved, I build the full system using tools like GoHighLevel, ClickUp, or Airtable. This includes custom fields, smart pipelines, and automated actions that reduce repetitive work. I also embed AI where it makes real impact — whether it's routing leads, handling follow-ups, or streamlining internal tasks.",
      testimonial: "The system runs like a quiet operator in the background. Our team now spends more time closing and less time clicking."
    },
    {
      number: "04",
      title: "Testing, Final Walkthrough, and Handoff",
      description: "Before anything goes live, I test every step and walk through the logic to make sure it runs smoothly. I remove any clutter and simplify where needed. You get a complete walkthrough so you and your team can use the system confidently without confusion or overwhelm.",
      testimonial: "We didn't need hours of training. It just made sense. And it works."
    }
  ];

  const benefits = [
    "A system tailored to your business operations",
    "Automation that reduces workload and increases speed",
    "Better data visibility and cleaner handoffs",
    "Full ownership and a clean setup your team will actually use"
  ];

  return (
    <section id="my-process" ref={sectionRef} className="py-20 relative">
      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal text-white">
              <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent">
                MyProcessBuild™
              </span>
            </h2>
            
            {/* Sophisticated divider */}
            <div className="flex items-center justify-center mb-8 reveal">
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></div>
              <div className="mx-4 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-violet-400"></div>
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></div>
            </div>

            <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed reveal">
              A clear and proven system to streamline operations, reduce manual work, and help you scale with custom CRMs and AI-powered automation.
            </p>
            
            <p className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed reveal">
              Most businesses waste time jumping between tools, chasing follow-ups, or fixing tasks that should already be done. This process replaces that with a smarter way to operate. I build custom systems that work quietly in the background, supporting your team and giving you control of your operations without adding complexity.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-12 mb-16">
            {steps.map((step, index) => (
              <div key={step.number} className="reveal" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="border border-white/20 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:bg-white/10 hover:border-purple-400/30 group relative overflow-hidden">
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      {/* Step Number */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/30 to-violet-500/30 border border-purple-400/40 flex items-center justify-center backdrop-blur-sm">
                          <span className="text-2xl font-bold text-white">
                            {step.number}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
                          Step {step.number}: {step.title}
                        </h3>
                        <p className="text-white/85 mb-6 leading-relaxed text-base">
                          {step.description}
                        </p>
                        
                        {/* Testimonial */}
                        <div className="bg-gradient-to-r from-purple-500/20 to-violet-500/20 border border-purple-400/30 rounded-lg p-4 backdrop-blur-sm">
                          <p className="text-purple-200 italic font-medium">
                            "{step.testimonial}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* What You Get Section */}
          <div className="reveal">
            <Card className="border border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-purple-400/30 group relative overflow-hidden transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4 text-white">
                    <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                      What You Get
                    </span>
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/85 text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <p className="text-lg text-white/90 font-medium">
                    This is not just software. This is your business infrastructure — built to support growth, reduce errors, and free up your team's time.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProcess;
