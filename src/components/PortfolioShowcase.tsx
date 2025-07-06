
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import PortfolioCard from './PortfolioCard';
import { portfolioItems } from '../data/portfolioData';

const PortfolioShowcase = () => {
  const navigate = useNavigate();
  
  // Show first 9 items for the showcase
  const showcaseItems = portfolioItems.slice(0, 9);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background with advanced effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/95 via-navy-800/50 to-navy-950/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,58,95,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-grid opacity-[0.03]"></div>
      </div>

      {/* Elegant floating elements */}
      <div className="absolute top-20 right-20 w-20 h-20 rounded-full bg-gradient-to-br from-navy-500/15 to-navy-600/10 blur-xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-28 h-28 rounded-full bg-gradient-to-tl from-navy-500/15 to-accent-light/10 blur-xl animate-float" style={{
        animationDelay: '3s'
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-navy-500/20 to-navy-600/20 text-navy-200 border border-navy-400/30">
              ✨ Project Showcase
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Business Solutions That{' '}
            <span className="bg-gradient-to-r from-navy-400 via-accent-light to-navy-500 bg-clip-text text-transparent">
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
            className="bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white border-0 px-8 py-3 text-lg font-medium shadow-2xl hover:shadow-navy-500/25 transition-all duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
