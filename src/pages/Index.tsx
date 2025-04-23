
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import CaseStudy from '../components/CaseStudy';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Particles from '../components/Particles';
import Loader from '../components/Loader';
import CustomCursor from '../components/CustomCursor';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time and enable smooth scroll when loaded
    const timer = setTimeout(() => {
      setIsLoaded(true);
      
      const handleScroll = () => {
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
      return () => window.removeEventListener('scroll', handleScroll);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-background overflow-hidden transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Loader />
      <CustomCursor />
      <Particles />
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <CaseStudy />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
