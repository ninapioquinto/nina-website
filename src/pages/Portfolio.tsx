
import StarryBackground from '../components/StarryBackground';
import Particles from '../components/Particles';
import PortfolioCard from '../components/PortfolioCard';
import { portfolioItems } from '../data/portfolioData';

const Portfolio = () => {
  return (
    <div className="min-h-screen relative">
      <StarryBackground />
      <Particles />
      
      <div className="relative z-10 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-200 border border-purple-400/30">
                ✨ Complete Portfolio
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Automation Solutions Portfolio
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Discover how AI and automation have transformed businesses across different industries, 
              delivering measurable results and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={item.id} className="reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <PortfolioCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
