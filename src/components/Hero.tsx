
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useRotatingText } from '../hooks/useRotatingText';
const Hero = () => {
  const rotatingWords = ["custom", "bespoke", "tailored", "scalable", "AI-powered", "optimized", "done-for-you"];
  const {
    currentWord,
    isAnimating
  } = useRotatingText(rotatingWords, 3000);
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="min-h-screen flex items-center pt-16 sm:pt-20 relative overflow-hidden px-4 sm:px-0">
      {/* Luxury navy background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/40 via-navy-800/30 to-navy-950/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,58,95,0.2)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(212,175,55,0.03)_49%,rgba(212,175,55,0.03)_51%,transparent_52%)]"></div>
      </div>

      {/* Sophisticated floating elements with navy theme */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-navy-600/20 to-navy-700/10 blur-xl animate-float" style={{
      animationDelay: '0s'
    }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-navy-500/20 to-navy-800/10 blur-xl animate-float" style={{
      animationDelay: '1s'
    }}></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-accent-gold/10 to-navy-600/10 blur-xl animate-float" style={{
      animationDelay: '2s'
    }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Updated hero headline with navy luxury styling */}
          <div className="relative inline-block mb-4 sm:mb-6">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-accent-gold/60 to-transparent"></div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tighter text-white">
              Hi! I'm <span className="bg-gradient-to-r from-slate-200 via-navy-200 to-slate-300 bg-clip-text text-transparent">Nina</span>, and I build{' '}
              <span className="inline-block mx-2">
                <span className={`inline-block transition-all duration-500 ease-in-out bg-gradient-to-r from-navy-300 via-slate-300 to-navy-400 bg-clip-text text-transparent ${isAnimating ? 'opacity-0 -translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100'}`} style={{
                textShadow: '0 0 30px rgba(30, 58, 95, 0.6)'
              }}>
                  {currentWord}
                </span>
              </span>{' '}
              apps, automation and CRM systems for service-based businesses.
            </h1>
            
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent"></div>
          </div>
          
          {/* Elegant subtitle with refined navy styling */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">App Development • AI Automation • CRM Systems</p>
          
          {/* Updated CTA button with navy luxury theme */}
          <Button onClick={handleScrollToContact} size="lg" className="luxury-button text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 bg-gradient-to-r from-navy-700/30 via-navy-600/30 to-navy-800/30 
                     border border-navy-400/50 text-white backdrop-blur-sm
                     hover:from-navy-600/40 hover:via-navy-500/40 hover:to-navy-700/40 
                     hover:border-accent-gold/60 hover:shadow-[0_0_40px_rgba(30,58,95,0.5)]
                     transition-all duration-700 group relative overflow-hidden w-full sm:w-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-navy-600/0 via-accent-gold/10 to-navy-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <span className="relative z-10 flex items-center justify-center">
              Let's build your custom system
              <ArrowRight className="ml-2 transition-transform duration-500 group-hover:translate-x-2 group-hover:scale-110" />
            </span>
          </Button>
          
          {/* Elegant scroll indicator with navy theme */}
          <div className="mt-12 sm:mt-20 flex justify-center">
            <div className="luxury-scroll-indicator w-6 h-12 border-2 border-navy-400/40 rounded-full flex justify-center backdrop-blur-sm">
              <div className="w-1 h-3 bg-gradient-to-b from-accent-gold to-navy-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
