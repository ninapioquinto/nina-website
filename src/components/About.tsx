
import { useRef, useEffect } from 'react';
import AboutHeader from './about/AboutHeader';
import AboutContent from './about/AboutContent';
import ClientImpactSection from './about/ClientImpactSection';
import CallToActionSection from './about/CallToActionSection';

const About = () => {
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
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Enhanced background with navy and gold gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/98 via-navy-900/60 to-navy-800/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,58,95,0.15)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,175,55,0.12)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>
      </div>

      {/* Elegant floating elements with navy theme */}
      <div className="absolute top-32 left-16 w-24 h-24 rounded-full bg-gradient-to-br from-navy-500/10 to-navy-600/5 blur-2xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 rounded-full bg-gradient-to-tl from-accent-gold/10 to-navy-600/5 blur-2xl animate-float" style={{
        animationDelay: '2s'
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AboutHeader />

          {/* Main content grid */}
          <div className="grid lg:grid-cols-1 gap-12 mb-16">
            <AboutContent />
          </div>

          <ClientImpactSection />
          <CallToActionSection />
        </div>
      </div>
    </section>
  );
};

export default About;
