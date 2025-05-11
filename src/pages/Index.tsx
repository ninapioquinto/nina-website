
import { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PoweredBy from '../components/PoweredBy';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import CaseStudy from '../components/CaseStudy';
import MyServices from '../components/MyServices';
import Certifications from '../components/Certifications';
import FAQ from '../components/FAQ';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Particles from '../components/Particles';
import Loader from '../components/Loader';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mark component as mounted
    setIsMounted(true);
    
    // Simulate loading time and enable smooth scroll when loaded
    const timer = setTimeout(() => {
      setIsLoaded(true);
      
      const handleScroll = () => {
        if (!isMounted) return;
        
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach((reveal) => {
          const windowHeight = window.innerHeight;
          const elementTop = reveal.getBoundingClientRect().top;
          const elementVisible = 150;
          
          if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
          }
        });
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check elements in view on initial load
      
      // Enhanced scroll experience - disable default scrollbar
      document.body.style.overflowX = 'hidden';
      document.documentElement.style.scrollBehavior = 'smooth';
      
      return () => {
        if (isMounted) {
          window.removeEventListener('scroll', handleScroll);
          document.body.style.overflowX = 'auto';
        }
      };
    }, 2000);

    // Cleanup on unmount
    return () => {
      setIsMounted(false);
      clearTimeout(timer);
    };
  }, [isMounted]);

  // Safe check for rendering
  if (!isMounted) {
    return <Loader />;
  }

  return (
    <div 
      ref={scrollRef}
      className="min-h-screen w-full overflow-hidden transition-opacity duration-1000"
      style={{ opacity: isLoaded ? 1 : 0 }}
    >
      <Loader />
      <Particles />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <PoweredBy />
        <About />
        <Portfolio />
        <CaseStudy />
        <MyServices />
        <Certifications />
        <Services />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
