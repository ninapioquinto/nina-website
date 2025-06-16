
import { useEffect, useRef } from 'react';
import CaseStudyHeader from './case-study/CaseStudyHeader';
import ClientOverview from './case-study/ClientOverview';
import ChallengeSection from './case-study/ChallengeSection';
import SolutionSection from './case-study/SolutionSection';
import ResultsSection from './case-study/ResultsSection';
import FinalThoughts from './case-study/FinalThoughts';

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
          {/* Updated case study header with elegant typography */}
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-3 sm:mb-4 reveal">
                Case{' '}
                <span className="bg-gradient-to-r from-purple-300 via-violet-200 to-indigo-300 bg-clip-text text-transparent">
                  Study
                </span>
              </h2>
              
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"></div>
            </div>
            
            <p className="text-center text-base sm:text-lg text-white/70 mb-12 sm:mb-16 max-w-2xl mx-auto reveal">
              A real-world transformation showcasing the power of intelligent automation
            </p>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-8">
            <ClientOverview />
            
            <div className="lg:col-span-7">
              <div className="space-y-12">
                <ChallengeSection />
                <SolutionSection />
                <ResultsSection />
                <FinalThoughts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
