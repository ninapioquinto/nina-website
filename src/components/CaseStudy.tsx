
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
  return <section id="case-study" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center reveal">
            Case <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent">Study</span>
          </h2>
          <p className="text-center text-lg text-white/70 mb-16 max-w-2xl mx-auto reveal">Streamlining Patient Experience and Scaling Operations for a Growing Dental Clinic</p>
          
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 reveal">
              <div className="sticky top-32">
                <h3 className="text-2xl font-bold mb-4">The Client</h3>
                <p className="text-white/70 mb-6">
                  This growing dental clinic was ready to scale but their systems weren't keeping pace. With increasing patient volume and expanding services, manual processes were creating bottlenecks that affected both patient experience and team efficiency.
                </p>
                <p className="text-white/70 mb-6">
                  The team was working harder, not smarter. They needed a solution that would streamline operations while creating a more professional, consistent experience for every patient who walked through their doors.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/20 border border-purple-400/30 rounded-lg p-6 backdrop-blur-sm">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-2">35%</div>
                    <div className="text-sm text-white/70">Reduction in no-shows</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/20 border border-purple-400/30 rounded-lg p-6 backdrop-blur-sm">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-2">50%</div>
                    <div className="text-sm text-white/70">Faster patient onboarding</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/20 border border-purple-400/30 rounded-lg p-6 backdrop-blur-sm">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-2">20%</div>
                    <div className="text-sm text-white/70">Inactive patients rebooked</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="space-y-12">
                <div className="reveal">
                  <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">The Challenge</h4>
                  <p className="text-lg mb-4">
                    As the clinic expanded, their internal systems began to hold them back. Patient onboarding was entirely manual and often led to delays. Appointment reminders were inconsistent, causing a rise in no-shows.
                  </p>
                  <p className="text-lg mb-4">
                    Inactive patients were rarely followed up with, and the front desk team had little visibility into day-to-day performance.
                  </p>
                  <p className="text-lg">
                    They didn't need just another CRM. They needed a fully tailored system that could keep up with their growth, create a more consistent experience for patients, and give the internal team the support to operate with ease and clarity.
                  </p>
                </div>
                
                <div className="reveal">
                  <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">My Solution</h4>
                  <p className="text-lg mb-4">
                    I migrated their entire workflow into GoHighLevel and redesigned their CRM to reflect the real flow of a dental clinic. Each automation was purpose-built to improve efficiency, eliminate missed opportunities, and strengthen patient relationships.
                  </p>
                  <p className="text-lg mb-4">
                    Using Make for backend logic, I connected tools to ensure data flowed where it needed to go. Airtable provided a clean view of daily and weekly performance. Real-time alerts ensured the team could respond to new leads, missed calls, and task updates as they happened.
                  </p>
                  <p className="text-lg mb-6">
                    The entire system was designed to be intuitive for staff and seamless for patients, with the goal of reducing manual workload and increasing consistency at every touchpoint.
                  </p>
                  
                  <h5 className="text-lg font-medium mb-4 bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">Custom Systems Built</h5>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20">
                      <h6 className="text-lg font-medium mb-3 text-white">Smart Patient Onboarding</h6>
                      <p className="text-white/80">
                        New inquiries are automatically identified as new or returning patients. The system sends a personalized intake form and booking link, while notifying the front desk instantly.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20">
                      <h6 className="text-lg font-medium mb-3 text-white">Automated Appointment Reminders</h6>
                      <p className="text-white/80">
                        Integrated with Google Calendar to streamline scheduling. Patients receive reminders 24 hours and one hour before their appointment via SMS and email. Two-way messaging allows them to confirm or reschedule on the spot, with real-time updates for the team.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20">
                      <h6 className="text-lg font-medium mb-3 text-white">No-Show Recovery</h6>
                      <p className="text-white/80">
                        If a patient misses their appointment, they receive an automated follow-up message with a reschedule link. Their status is updated in the CRM for easy tracking.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20">
                      <h6 className="text-lg font-medium mb-3 text-white">Post-Visit Experience</h6>
                      <p className="text-white/80">
                        Patients receive a thank-you message along with care instructions. Review links are sent to encourage testimonials, and custom follow-up offers are delivered when applicable.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20">
                      <h6 className="text-lg font-medium mb-3 text-white">Reactivation Campaigns</h6>
                      <p className="text-white/80">
                        Patients who have not booked in the last six months are identified and sent personalized messages via SMS and email. Those who respond can book directly through the included link.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20">
                      <h6 className="text-lg font-medium mb-3 text-white">Missed Call Response</h6>
                      <p className="text-white/80">
                        If a call is missed, the system immediately sends an SMS to assist and invite the patient to schedule. The missed call is logged, and the team is notified to follow up.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20">
                      <h6 className="text-lg font-medium mb-3 text-white">Daily and Weekly Reporting</h6>
                      <p className="text-white/80">
                        Dashboards display daily summaries of new leads, confirmed appointments, missed calls, and follow-ups. Weekly performance reports track trends and help guide decision-making.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20">
                      <h6 className="text-lg font-medium mb-3 text-white">AI Chat Assistant</h6>
                      <p className="text-white/80">
                        A chatbot trained on common dental questions was added to the website to guide visitors and help them book appointments around the clock.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="reveal">
                  <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">Outcomes Within 90 Days</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-2">35%</div>
                      <p className="text-white/80">No-shows were reduced</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-2">50%</div>
                      <p className="text-white/80">Patient onboarding time was cut</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-2">1 in 5</div>
                      <p className="text-white/80">Inactive patients rebooked</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-2">Significant</div>
                      <p className="text-white/80">Front desk workload decreased</p>
                    </div>
                  </div>
                  
                  <p className="text-lg">
                    Team members gained clearer visibility into tasks and leads, creating a more organized and efficient work environment.
                  </p>
                </div>
                
                <div className="reveal">
                  <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">Final Thoughts</h4>
                  <p className="text-lg mb-4">
                    This project went beyond automation. It was about intentionally designing a patient journey that felt effortless while giving the internal team the systems and visibility they needed to thrive.
                  </p>
                  <p className="text-lg font-semibold">
                    By rethinking and rebuilding their CRM with care, I helped the clinic deliver a more consistent experience to patients while making daily operations lighter and more manageable for the team behind it.
                  </p>
                </div>
                
                <div className="reveal">
                  <div className="text-center">
                    <p className="text-lg font-semibold mb-4">Ready to transform your patient experience?</p>
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
    </section>;
};
export default CaseStudy;
