
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
            How a Local HVAC Company Increased Bookings by 25 Per Month After a CRM Rebuild
          </p>
          
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 reveal">
              <div className="sticky top-32">
                <h3 className="text-2xl font-bold mb-4">The Client</h3>
                <p className="text-white/70 mb-6">
                  This local HVAC company was growing, but their backend tools were falling behind. With five field technicians and two office staff, they were doing their best to manage demand. But their outdated CRM created more problems than solutions.
                </p>
                <p className="text-white/70 mb-6">
                  The business was ready for the next stage, but their system was holding them back. They didn't need more tools. They needed one system that supported the entire team and made their day-to-day smoother.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-accent/20 border border-white/10 rounded-lg p-6">
                    <div className="text-4xl font-bold text-primary mb-2">30+</div>
                    <div className="text-sm text-white/70">Monthly bookings (from 20)</div>
                  </div>
                  
                  <div className="bg-accent/20 border border-white/10 rounded-lg p-6">
                    <div className="text-4xl font-bold text-accent-blue mb-2">80%</div>
                    <div className="text-sm text-white/70">Reduction in admin hours</div>
                  </div>
                  
                  <div className="bg-accent/20 border border-white/10 rounded-lg p-6">
                    <div className="text-4xl font-bold text-accent-pink mb-2">100%</div>
                    <div className="text-sm text-white/70">Real-time field team visibility</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="space-y-12">
                <div className="reveal">
                  <h4 className="text-xl font-semibold mb-3 text-accent-blue">The Problem</h4>
                  <p className="text-lg mb-4">
                    The office staff spent hours manually confirming bookings and tracking jobs through spreadsheets and group chats. It was messy and time-consuming.
                  </p>
                  <p className="text-lg mb-4">
                    Follow-ups were often missed. Annual maintenance clients were being forgotten. And there was no clear pipeline to track leads, jobs, or customer activity.
                  </p>
                  <p className="text-lg mb-4">
                    Technicians in the field had no access to real-time job information. They often relied on messages or printed notes, which led to delays and inconsistent service.
                  </p>
                  <p className="text-lg">
                    The team was working hard, but the lack of structure made everything feel reactive.
                  </p>
                </div>
                
                <div className="reveal">
                  <h4 className="text-xl font-semibold mb-3 text-primary">The Solution</h4>
                  <p className="text-lg mb-4">
                    I led a complete rebuild of their CRM by first migrating all client, job, and quote data. Once their records were cleaned and organized, I created a streamlined system tailored to how their team actually operated.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-accent/10 rounded-lg p-6 border border-white/5">
                      <h5 className="text-lg font-medium mb-3 text-primary">For the office team</h5>
                      <p className="text-white/80">
                        They now have a clean visual pipeline that shows where every job stands. Bookings and assignments are handled in just a few clicks. All client records, notes, and status updates are in one centralized space.
                      </p>
                    </div>
                    
                    <div className="bg-accent/10 rounded-lg p-6 border border-white/5">
                      <h5 className="text-lg font-medium mb-3 text-accent-blue">For the technicians</h5>
                      <p className="text-white/80">
                        I built a mobile-friendly interface where they can view job details, update progress, upload photos, and add notes right from their phones. Everyone stays aligned in real time.
                      </p>
                    </div>
                    
                    <div className="bg-accent/10 rounded-lg p-6 border border-white/5">
                      <h5 className="text-lg font-medium mb-3 text-accent-pink">For the customers</h5>
                      <p className="text-white/80">
                        Automated confirmations, reminders, and follow-ups are now sent without anyone on the team lifting a finger. I also added recurring service alerts for annual maintenance clients to increase repeat business and retention.
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg mt-6">
                    The new system was built using GoHighLevel, Make, and Airtable. Each piece was customized to fit the team's workflow with zero fluff.
                  </p>
                </div>
                
                <div className="reveal">
                  <h4 className="text-xl font-semibold mb-3 text-accent-pink">The Results</h4>
                  <p className="text-lg mb-6">
                    In just a few weeks, the company saw a complete shift in how they operated. They booked more jobs, reduced admin hours, and improved communication across the board.
                  </p>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse border border-white/20 rounded-lg">
                      <thead>
                        <tr className="bg-accent/20">
                          <th className="border border-white/10 p-3 text-left text-white font-semibold">Key Area</th>
                          <th className="border border-white/10 p-3 text-left text-white font-semibold">Before</th>
                          <th className="border border-white/10 p-3 text-left text-white font-semibold">After</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-white/10 p-3 text-white/80">Monthly bookings</td>
                          <td className="border border-white/10 p-3 text-white/70">Around 20</td>
                          <td className="border border-white/10 p-3 text-primary font-semibold">Over 30</td>
                        </tr>
                        <tr className="bg-accent/5">
                          <td className="border border-white/10 p-3 text-white/80">Admin hours per week</td>
                          <td className="border border-white/10 p-3 text-white/70">More than 20</td>
                          <td className="border border-white/10 p-3 text-primary font-semibold">Under 4</td>
                        </tr>
                        <tr>
                          <td className="border border-white/10 p-3 text-white/80">Booking confirmations</td>
                          <td className="border border-white/10 p-3 text-white/70">Often delayed</td>
                          <td className="border border-white/10 p-3 text-primary font-semibold">Instantly sent through automation</td>
                        </tr>
                        <tr className="bg-accent/5">
                          <td className="border border-white/10 p-3 text-white/80">Field team visibility</td>
                          <td className="border border-white/10 p-3 text-white/70">Unclear and fragmented</td>
                          <td className="border border-white/10 p-3 text-primary font-semibold">Real-time access with mobile tools</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="bg-accent/20 border border-white/10 rounded-lg p-6 mb-6">
                    <blockquote className="text-lg italic">
                      "This changed everything. Our team finally feels organized. We're saving time and booking more work without any extra stress."
                    </blockquote>
                    <div className="mt-3 text-sm text-white/70">— HVAC Business Owner</div>
                  </div>
                </div>
                
                <div className="reveal">
                  <h4 className="text-xl font-semibold mb-3 text-accent-blue">Why It Worked</h4>
                  <p className="text-lg mb-4">
                    This was not a one-size-fits-all system. It was a thoughtfully designed CRM tailored to the business's real operations.
                  </p>
                  <p className="text-lg mb-4">
                    The office team now has structure and visibility. The field team has clarity and tools that work on the go. And the owner finally has a full picture of what is happening in the business.
                  </p>
                  <p className="text-lg font-semibold">
                    There were no new hires. Just smarter systems that actually work.
                  </p>
                </div>
                
                <div className="reveal">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Ready for a System That Grows with You</h4>
                  <p className="text-lg mb-6">
                    If your service business is expanding and your backend cannot keep up, I can help you build a custom CRM that reduces the chaos and brings your team together.
                  </p>
                  <div className="text-center">
                    <p className="text-lg font-semibold mb-4">Let's build your custom system.</p>
                    <a 
                      href="#contact" 
                      className="inline-block bg-gradient-to-r from-purple-500 to-violet-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-violet-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
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
