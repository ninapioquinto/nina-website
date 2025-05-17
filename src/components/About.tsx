
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center reveal">
            I design <span className="bg-gradient-to-r from-[#9b87f5] via-[#7E69AB] to-[#8B5CF6] bg-clip-text text-transparent glow-text">smart systems</span> that make your business run better.
          </h2>
          
          <div className="luxury-divider mx-auto w-32 mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <p className="text-lg mb-6 leading-relaxed text-white/90">
                I'm Nina, a Systems Engineer and Certified AI Automation Developer. I've spent the last 6+ years helping teams fix messy operations, automate repetitive tasks, and build custom systems that support real growth.
              </p>
              
              <p className="text-lg mb-6 leading-relaxed text-white/90">
                My focus is simple: Build reliable systems that save time, cut errors, and help you deliver faster — without adding more people or complexity.
              </p>
              
              <p className="text-lg mb-8 leading-relaxed text-white/90">
                I work with tools like Make, GoHighLevel, Zapier, OpenAI, ClickUp, and Airtable — and I make sure the tech fits your workflow, not the other way around.
              </p>
              
              <div className="luxury-card px-8 py-6 bg-black/40 backdrop-blur-md">
                <p className="text-xl italic text-primary/90 font-light leading-relaxed">
                  "If you're spending too much time on what should be automated, I can help."
                </p>
                <div className="flex items-center mt-4">
                  <div className="h-0.5 w-8 bg-primary/40 mr-3"></div>
                  <p className="text-white/70 text-sm">NINA</p>
                </div>
              </div>
            </div>
            
            <div className="reveal">
              <div className="relative rounded-xl overflow-hidden glow-border group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent-blue/20 opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                {/* Video element replacing the image placeholder */}
                <div className="aspect-square bg-accent/10 rounded-xl flex items-center justify-center p-4 backdrop-blur-sm border border-white/5">
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
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-md border border-white/10 cursor-pointer group transition-transform duration-300 hover:scale-110">
                      <Play className="h-10 w-10 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Luxury background accents */}
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl opacity-30"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-accent-blue/5 to-transparent blur-3xl opacity-30"></div>
    </section>
  );
};

export default About;
