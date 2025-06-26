import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import PortfolioCard from './PortfolioCard';
import { portfolioItems } from '../data/portfolioData';

const PortfolioShowcase = () => {
  const navigate = useNavigate();
  
  // Show first 6 items for the showcase
  const showcaseItems = portfolioItems.slice(0, 6);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background with advanced effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-purple-900/50 to-indigo-900/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-grid opacity-[0.03]"></div>
      </div>

      {/* Elegant floating elements */}
      <div className="absolute top-20 right-20 w-20 h-20 rounded-full bg-gradient-to-br from-violet-500/15 to-purple-600/10 blur-xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-28 h-28 rounded-full bg-gradient-to-tl from-indigo-500/15 to-violet-600/10 blur-xl animate-float" style={{
        animationDelay: '3s'
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-200 border border-purple-400/30">
              ✨ Project Showcase
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Business Solutions That{' '}
            <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent">
              Drive Results
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Explore real-world automation projects that have transformed businesses, 
            saved countless hours, and delivered measurable ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {showcaseItems.map((item, index) => (
            <div key={item.id} className="reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <PortfolioCard {...item} />
            </div>
          ))}
        </div>

        <div className="text-center reveal">
          <Button 
            onClick={() => navigate('/portfolio')}
            className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-0 px-8 py-3 text-lg font-medium shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
