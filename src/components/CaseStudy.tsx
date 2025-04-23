
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
            How I transformed a financial services firm with intelligent automation
          </p>
          
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 reveal">
              <div className="sticky top-32">
                <h3 className="text-2xl font-bold mb-4">FinTech Revolution</h3>
                <p className="text-white/70 mb-6">
                  A leading financial services firm struggled with manual data processing, causing delays in customer onboarding and increasing error rates.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-accent/20 border border-white/10 rounded-lg p-6">
                    <div className="text-4xl font-bold text-primary mb-2">85%</div>
                    <div className="text-sm text-white/70">Reduction in processing time</div>
                  </div>
                  
                  <div className="bg-accent/20 border border-white/10 rounded-lg p-6">
                    <div className="text-4xl font-bold text-accent-blue mb-2">94%</div>
                    <div className="text-sm text-white/70">Accuracy improvement</div>
                  </div>
                  
                  <div className="bg-accent/20 border border-white/10 rounded-lg p-6">
                    <div className="text-4xl font-bold text-accent-pink mb-2">$1.2M</div>
                    <div className="text-sm text-white/70">Annual cost savings</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="space-y-12">
                <div className="reveal">
                  <h4 className="text-xl font-semibold mb-3 text-accent-blue">The Challenge</h4>
                  <p className="text-lg mb-4">
                    The client was drowning in paperwork—processing over 10,000 documents monthly with a team of 24 full-time employees. Their manual data entry process was causing:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-white/70">
                    <li>7-10 day customer onboarding delays</li>
                    <li>12% error rate requiring costly corrections</li>
                    <li>Regulatory compliance risks due to inconsistent processing</li>
                    <li>Employee burnout and high turnover</li>
                  </ul>
                </div>
                
                <div className="reveal">
                  <h4 className="text-xl font-semibold mb-3 text-primary">The Approach</h4>
                  <p className="text-lg mb-4">
                    I developed a comprehensive intelligent document processing system that combined several AI technologies:
                  </p>
                  <div className="bg-accent/10 rounded-lg p-6 border border-white/5">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                          <span>Computer vision for document classification</span>
                        </div>
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                          <span>OCR with advanced pre-processing</span>
                        </div>
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                          <span>NLP for entity extraction</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                          <span>Custom validation rules engine</span>
                        </div>
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                          <span>Human-in-the-loop review for edge cases</span>
                        </div>
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                          <span>API integration with existing systems</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="reveal">
                  <h4 className="text-xl font-semibold mb-3 text-accent-pink">The Implementation</h4>
                  <p className="text-lg mb-4">
                    The project was implemented in phases over 4 months:
                  </p>
                  <div className="space-y-6">
                    <div className="relative">
                      <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-primary/30"></div>
                      <div className="relative pl-12">
                        <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                          <span>1</span>
                        </div>
                        <h5 className="text-lg font-medium">Discovery & Analysis</h5>
                        <p className="text-white/70">Document categorization and process mapping</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-primary/30"></div>
                      <div className="relative pl-12">
                        <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                          <span>2</span>
                        </div>
                        <h5 className="text-lg font-medium">Prototype Development</h5>
                        <p className="text-white/70">Core AI models trained on historical data</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-primary/30"></div>
                      <div className="relative pl-12">
                        <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                          <span>3</span>
                        </div>
                        <h5 className="text-lg font-medium">Pilot Program</h5>
                        <p className="text-white/70">Controlled rollout with continuous feedback</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="relative pl-12">
                        <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                          <span>4</span>
                        </div>
                        <h5 className="text-lg font-medium">Full Deployment & Optimization</h5>
                        <p className="text-white/70">Complete system integration with monitoring</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="reveal">
                  <h4 className="text-xl font-semibold mb-3 text-accent-blue">The Results</h4>
                  <div className="bg-accent/20 border border-white/10 rounded-lg p-6 mb-6">
                    <blockquote className="text-lg italic">
                      "Luna's intelligent automation system transformed our operations. What used to take days now happens in minutes, with better accuracy than we ever achieved manually."
                    </blockquote>
                    <div className="mt-3 text-sm text-white/70">— Sarah Chen, COO, Financial Services Firm</div>
                  </div>
                  <p className="text-lg">
                    The new system now processes documents in minutes rather than days, with an accuracy rate of 98%. Staff was reduced from 24 to 4 employees, who now focus on exception handling and customer experience rather than manual data entry.
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
