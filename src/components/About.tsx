
import { useEffect, useRef } from 'react';

const About = () => {
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
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center reveal">
            I design <span className="text-gradient">smart systems</span> that make your business run better.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <p className="text-lg mb-6">
                I'm Nina, a Systems Engineer and Certified AI Automation Developer. I've spent the last 6+ years helping teams fix messy operations, automate repetitive tasks, and build custom systems that support real growth.
              </p>
              
              <p className="text-lg mb-6">
                My focus is simple: Build reliable systems that save time, cut errors, and help you deliver faster — without adding more people or complexity.
              </p>
              
              <p className="text-lg mb-8">
                I work with tools like Make, GoHighLevel, Zapier, OpenAI, ClickUp, and Airtable — and I make sure the tech fits your workflow, not the other way around.
              </p>
              
              <div className="bg-accent/20 border border-primary/20 px-6 py-4 rounded-lg">
                <p className="text-lg italic text-white/90">
                  "If you're spending too much time on what should be automated, I can help."
                </p>
              </div>
            </div>
            
            <div className="reveal">
              <div className="relative rounded-xl overflow-hidden glow-border group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent-blue/20 opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                {/* Video element replacing the image placeholder */}
                <div className="aspect-square bg-accent rounded-xl flex items-center justify-center p-4">
                  <video 
                    className="w-full h-full rounded-xl object-cover"
                    controls
                    playsInline
                    muted
                    loop
                  >
                    <source src="/your-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
