import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useRotatingText } from '../hooks/useRotatingText';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const rotatingWords = ["custom", "bespoke", "tailored", "scalable", "AI-powered", "optimized", "done-for-you"];
  const {
    currentWord,
    isAnimating
  } = useRotatingText(rotatingWords, 3000);

  const handleWatchVideo = () => {
    navigate('/watch-my-video');
  };

  return (
    <section className="min-h-screen flex items-center pt-16 sm:pt-20 relative overflow-hidden px-4 sm:px-0">
      {/* Luxury background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-indigo-900/20 to-violet-900/30"></div>
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15)_0%,transparent_70%)]"></div>
      </div>

      {/* Sophisticated floating elements */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-purple-500/20 to-violet-600/10 blur-xl animate-float" style={{
        animationDelay: '0s'
      }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-600/10 blur-xl animate-float" style={{
        animationDelay: '1s'
      }}></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-600/10 blur-xl animate-float" style={{
        animationDelay: '2s'
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Luxury typography with elegant gradients */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight tracking-tighter">
            Hi! I'm <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent glow-text">Nina</span>, and I build{' '}
            <span className="inline-block mx-2">
              <span className={`inline-block transition-all duration-500 ease-in-out bg-gradient-to-r from-purple-300 via-violet-400 to-indigo-300 bg-clip-text text-transparent ${isAnimating ? 'opacity-0 -translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100'}`} style={{
                textShadow: '0 0 30px rgba(139, 92, 246, 0.6)'
              }}>
                {currentWord}
              </span>
            </span>{' '}
            CRM and automation systems for service-based businesses.
          </h1>
          
          {/* Elegant subtitle with refined spacing */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">Systems Engineer • AI Automation • CRM Optimization</p>
          
          {/* Updated CTA button */}
          <Button onClick={handleWatchVideo} size="lg" className="luxury-button text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-indigo-600/20 
                     border border-purple-400/40 text-white backdrop-blur-sm
                     hover:from-purple-600/30 hover:via-violet-600/30 hover:to-indigo-600/30 
                     hover:border-purple-300/60 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]
                     transition-all duration-700 group relative overflow-hidden w-full sm:w-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-violet-600/20 to-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <span className="relative z-10 flex items-center justify-center">
              Watch My Video 
              <ArrowRight className="ml-2 transition-transform duration-500 group-hover:translate-x-2 group-hover:scale-110" />
            </span>
          </Button>
          
          {/* Elegant scroll indicator */}
          <div className="mt-12 sm:mt-20 flex justify-center">
            <div className="luxury-scroll-indicator w-6 h-12 border-2 border-purple-400/40 rounded-full flex justify-center backdrop-blur-sm">
              <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-violet-500 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
