
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useRotatingText } from '../hooks/useRotatingText';

const Hero = () => {
  const rotatingWords = ["intelligent", "scalable", "secure", "efficient"];
  const { currentWord, isAnimating } = useRotatingText(rotatingWords, 2000);

  const handleExplore = () => {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center pt-20 bg-grid relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tighter">
            Hi, I'm <span className="text-gradient">Nina</span> — I build
            <span className="relative inline-block mx-2 min-w-[180px] h-[60px]">
              <span 
                className={`absolute left-0 transition-all duration-300 ease-in-out ${
                  isAnimating ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
                }`}
                style={{
                  textShadow: '0 0 30px rgba(139, 92, 246, 0.5)'
                }}
              >
                {currentWord}
              </span>
            </span>
            systems that make business operations easier.
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Systems Engineer • AI Automation Developer • CRM Architect
          </p>
          
          <Button 
            onClick={handleExplore}
            size="lg" 
            className="text-lg px-8 py-6 bg-primary/10 border border-primary/50 text-white 
                     hover:bg-primary/20 hover:border-primary transition-all duration-500 group
                     shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
          >
            Explore My Work 
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          
          <div className="mt-16 flex justify-center">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-primary/5 animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-24 h-24 rounded-full bg-accent-blue/5 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-accent-pink/5 animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;
