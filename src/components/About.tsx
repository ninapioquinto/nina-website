
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
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center reveal">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="relative rounded-xl overflow-hidden glow-border group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent-blue/20 opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="aspect-square bg-accent rounded-xl flex items-center justify-center p-4">
                  {/* Avatar placeholder - replace with actual image */}
                  <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-primary to-accent-blue/70 overflow-hidden flex items-center justify-center">
                    <div className="text-5xl font-bold text-white">L</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-lg mb-6 reveal">
                I'm a versatile AI Systems Engineer with over 6 years of experience designing and implementing intelligent automation solutions for businesses. My expertise lies at the intersection of AI technology and practical business applications, with a focus on creating systems that feel intuitive and human-centered.
              </p>
              
              <p className="text-lg mb-6 reveal">
                My approach combines technical precision with clear communication, ensuring that complex systems remain accessible to everyone who interacts with them. I believe that the best AI solutions enhance human capabilities rather than replace them.
              </p>
              
              <p className="text-lg reveal">
                When I'm not crafting automation systems, you'll find me exploring new technologies, contributing to open-source projects, or mentoring the next generation of AI engineers through community workshops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
