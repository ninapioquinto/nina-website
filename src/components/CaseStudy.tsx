
import { useEffect, useRef } from 'react';

const CaseStudy = () => {
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

  return (
    <section id="case-study" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center reveal">
            Case <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent">Study</span>
          </h2>
          <p className="text-center text-lg text-white/70 mb-16 max-w-2xl mx-auto reveal">
            Streamlining Operations and Scaling Growth for a Credit Repair & Funding Business
          </p>
          
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 reveal">
              <div className="sticky top-32">
                <h3 className="text-2xl font-bold mb-4">The Client</h3>
                <p className="text-white/70 mb-6">
                  This growing credit repair and funding business was in the early stages of expansion, eager to scale. But their fragmented setup was slowing them down. Managing operations across a basic website, SuiteDash CRM, Typeform, and manual processes created unnecessary friction.
                </p>
                <p className="text-white/70 mb-6">
                  As new leads increased and client needs evolved, the lack of a streamlined system led to missed opportunities, inconsistent follow-ups, and administrative overwhelm.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/20 border border-purple-400/30 rounded-lg p-6 backdrop-blur-sm">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-2">45%</div>
                    <div className="text-sm text-white/70">Faster client onboarding</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/20 border border-purple-400/30 rounded-lg p-6 backdrop-blur-sm">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-2">60%</div>
                    <div className="text-sm text-white/70">Reduction in manual admin work</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/20 border border-purple-400/30 rounded-lg p-6 backdrop-blur-sm">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-2">30%</div>
                    <div className="text-sm text-white/70">Increase in lead response time</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="space-y-12">
                <div className="reveal">
                  <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">The Challenge</h4>
                  <p className="text-lg mb-4">
                    The business was ready to grow, but their systems were not. Their lead capture process required juggling multiple tools that didn't speak to each other. Onboarding was inconsistent, client communication was delayed, and tracking funding stages was difficult.
                  </p>
                  <p className="text-lg">
                    They needed more than just a CRM. They needed a centralized, intelligent system to run their operations, manage leads, track funding, and deliver a better experience for their clients from start to finish.
                  </p>
                </div>
                
                <div className="reveal">
                  <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">My Solution</h4>
                  <p className="text-lg mb-4">
                    I migrated their entire system into GoHighLevel and designed a custom CRM tailored to the real flow of a credit repair and funding business. Every feature was purpose-built to reduce bottlenecks, automate repetitive tasks, and centralize all activity in one place.
                  </p>
                  <p className="text-lg mb-6">
                    Using Make, I integrated backend logic to connect tools and create seamless data flow. The system was intuitive for the team and professional for the client, creating a smooth, scalable infrastructure from day one.
                  </p>
                  
                  <h5 className="text-lg font-medium mb-4 bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">Custom Systems Built</h5>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20">
                      <h6 className="text-lg font-medium mb-3 text-white">Centralized CRM Dashboard</h6>
                      <p className="text-white/80">
                        Every lead, client, and stage of the funding journey is visible in one place. The dashboard provides a clear overview of all activity, updated in real-time.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20">
                      <h6 className="text-lg font-medium mb-3 text-white">Automated Lead Capture & Nurture</h6>
                      <p className="text-white/80">
                        When a new lead comes in, the system automatically qualifies and tags them. They receive an email and SMS sequence designed to educate and convert, while the team is instantly notified to follow up.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20">
                      <h6 className="text-lg font-medium mb-3 text-white">Smart Client Portal</h6>
                      <p className="text-white/80">
                        Clients can securely access their portal to track credit repair progress, view funding milestones, and complete onboarding steps with ease.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20">
                      <h6 className="text-lg font-medium mb-3 text-white">Course Delivery System</h6>
                      <p className="text-white/80">
                        An integrated course hub allows clients to access learning material at their own pace, reducing support requests and increasing self-serve value.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20">
                      <h6 className="text-lg font-medium mb-3 text-white">Pipeline & Task Automation</h6>
                      <p className="text-white/80">
                        Each stage of the client journey is automated with smart triggers, from application to funding. Tasks are assigned to team members automatically, ensuring nothing falls through the cracks.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20">
                      <h6 className="text-lg font-medium mb-3 text-white">Funding Tracker</h6>
                      <p className="text-white/80">
                        A live dashboard tracks the stages of funding for each client, giving both the team and the client complete transparency on the progress.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="reveal">
                  <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">Revenue Results Unlocked</h4>
                  <p className="text-lg mb-6">
                    In just 30 days of using the new system:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20 text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-2">$112,000</div>
                      <p className="text-white/80 font-medium mb-2">Opportunity Value Captured</p>
                      <p className="text-white/60 text-sm">Through improved visibility and timely follow-ups</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20 text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-2">$53,000</div>
                      <p className="text-white/80 font-medium mb-2">Revenue Generated</p>
                      <p className="text-white/60 text-sm">From newly closed deals</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20 text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-2">45%</div>
                      <p className="text-white/80 font-medium mb-2">Win Rate</p>
                      <p className="text-white/60 text-sm">Across qualified leads—enabled by faster onboarding, consistent nurturing, and smarter tracking</p>
                    </div>
                  </div>
                </div>
                
                <div className="reveal">
                  <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">Outcomes in 30 Days</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-2">45%</div>
                      <p className="text-white/80 font-medium mb-2">Faster client onboarding</p>
                      <p className="text-white/60 text-sm">New clients complete setup and begin their journey almost twice as fast as before.</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-2">60%</div>
                      <p className="text-white/80 font-medium mb-2">Reduction in manual admin work</p>
                      <p className="text-white/60 text-sm">Automated workflows replaced repetitive tasks and form handoffs, freeing up valuable team hours.</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-2">30%</div>
                      <p className="text-white/80 font-medium mb-2">Increase in lead response time</p>
                      <p className="text-white/60 text-sm">Faster responses led to more conversions and a smoother first impression for potential clients.</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-2">Streamlined</div>
                      <p className="text-white/80 font-medium mb-2">Communication</p>
                      <p className="text-white/60 text-sm">All client messages, updates, and documents now flow through a single system, eliminating scattered inboxes and lost threads.</p>
                    </div>
                  </div>
                </div>
                
                <div className="reveal">
                  <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">Final Thoughts</h4>
                  <p className="text-lg mb-4">
                    This project gave the client more than automation—it gave them control.
                  </p>
                  <p className="text-lg mb-4">
                    By thoughtfully designing a tailored GoHighLevel CRM, I helped this credit repair and funding team eliminate overwhelm, centralize their operations, and build a business model that scales without chaos.
                  </p>
                  <p className="text-lg font-semibold">
                    They now operate with clarity, confidence, and a system that supports both their growth goals and their clients' journey—every step of the way.
                  </p>
                </div>
                
                <div className="reveal">
                  <div className="text-center">
                    <p className="text-lg font-semibold mb-4">Ready to transform your business operations?</p>
                    <a href="#contact" className="inline-block bg-gradient-to-r from-purple-500 to-violet-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-violet-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                      Book a Discovery Call
                    </a>
                  </div>
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
