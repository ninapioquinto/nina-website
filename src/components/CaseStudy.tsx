
import { useEffect, useRef } from 'react';

const CaseStudy = () => {
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
    <section id="case-study" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center reveal">
            Case <span className="text-gradient">Study</span>
          </h2>
          <p className="text-center text-lg text-white/70 mb-16 max-w-2xl mx-auto reveal">
            Agency Onboarding Automation: From Chaos to Clarity
          </p>
          
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 reveal">
              <div className="sticky top-32">
                <h3 className="text-2xl font-bold mb-4">Client Challenge</h3>
                <p className="text-white/70 mb-6">
                  A growing digital marketing agency with 35 team members was losing clients due to a chaotic onboarding process that took 3+ weeks and created confusion for both clients and team members.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-accent/20 border border-white/10 rounded-lg p-6">
                    <div className="text-4xl font-bold text-primary mb-2">86%</div>
                    <div className="text-sm text-white/70">Reduction in onboarding time</div>
                  </div>
                  
                  <div className="bg-accent/20 border border-white/10 rounded-lg p-6">
                    <div className="text-4xl font-bold text-accent-blue mb-2">100%</div>
                    <div className="text-sm text-white/70">Client visibility into process</div>
                  </div>
                  
                  <div className="bg-accent/20 border border-white/10 rounded-lg p-6">
                    <div className="text-4xl font-bold text-accent-pink mb-2">24%</div>
                    <div className="text-sm text-white/70">Increase in client retention</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="space-y-12">
                <div className="reveal">
                  <h4 className="text-xl font-semibold mb-3 text-accent-blue">The Problem</h4>
                  <p className="text-lg mb-4">
                    The agency's manual onboarding process was creating major issues:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-white/70">
                    <li>3+ weeks to fully onboard new clients</li>
                    <li>Information trapped in emails and spreadsheets</li>
                    <li>Inconsistent client experience</li>
                    <li>Team confusion about responsibilities</li>
                    <li>No visibility for clients into process status</li>
                  </ul>
                </div>
                
                <div className="reveal">
                  <h4 className="text-xl font-semibold mb-3 text-primary">The Solution</h4>
                  <p className="text-lg mb-4">
                    I designed and implemented an end-to-end automated system:
                  </p>
                  <div className="bg-accent/10 rounded-lg p-6 border border-white/5">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                          <span>Custom GoHighLevel client portal</span>
                        </div>
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                          <span>Automated document collection</span>
                        </div>
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                          <span>Client progress dashboard</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                          <span>Automated team task assignment</span>
                        </div>
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                          <span>Milestone notification system</span>
                        </div>
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                          <span>Custom integration with existing tools</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="reveal">
                  <h4 className="text-xl font-semibold mb-3 text-accent-pink">The Process</h4>
                  <p className="text-lg mb-4">
                    Implementation was completed in 6 weeks:
                  </p>
                  <div className="space-y-6">
                    <div className="relative">
                      <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-primary/30"></div>
                      <div className="relative pl-12">
                        <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                          <span>1</span>
                        </div>
                        <h5 className="text-lg font-medium">Process Mapping & Systems Audit</h5>
                        <p className="text-white/70">Documenting current workflows and identifying bottlenecks</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-primary/30"></div>
                      <div className="relative pl-12">
                        <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                          <span>2</span>
                        </div>
                        <h5 className="text-lg font-medium">Custom Portal Development</h5>
                        <p className="text-white/70">Building client-facing interface and team dashboards</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-primary/30"></div>
                      <div className="relative pl-12">
                        <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                          <span>3</span>
                        </div>
                        <h5 className="text-lg font-medium">Integration & Automation</h5>
                        <p className="text-white/70">Connecting existing systems and building automation flows</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="relative pl-12">
                        <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                          <span>4</span>
                        </div>
                        <h5 className="text-lg font-medium">Training & Optimization</h5>
                        <p className="text-white/70">Team onboarding and iterative improvements</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="reveal">
                  <h4 className="text-xl font-semibold mb-3 text-accent-blue">The Results</h4>
                  <div className="bg-accent/20 border border-white/10 rounded-lg p-6 mb-6">
                    <blockquote className="text-lg italic">
                      "Luna's system completely transformed our client experience. Onboarding that used to take weeks now happens in days, with complete clarity for both our team and clients. It's been a game-changer for our growth."
                    </blockquote>
                    <div className="mt-3 text-sm text-white/70">— Alex Rivera, Agency Founder</div>
                  </div>
                  <p className="text-lg">
                    The agency reduced onboarding time from 3+ weeks to just 4 days. Client satisfaction scores increased by 32% and team confusion was eliminated. The streamlined process allowed the agency to take on 40% more clients without adding staff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
