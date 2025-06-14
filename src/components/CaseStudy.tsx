
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
          <CaseStudyHeader />
          
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
