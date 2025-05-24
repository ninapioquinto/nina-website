import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { ArrowUpRight, Play } from 'lucide-react';

// AI Automation projects
const aiAutomationProjects = [
  {
    id: 1,
    title: "Client Onboarding Automation",
    description: "Reduced onboarding time from 2 weeks to 2 days with zero manual data entry",
    tech: ["Zapier", "Airtable", "Make"],
    link: "#"
  },
  {
    id: 3,
    title: "AI-Powered Support System",
    description: "Cut support ticket resolution time by 65% using intelligent automation",
    tech: ["OpenAI", "Make", "Zendesk"],
    link: "#"
  },
  {
    id: 6,
    title: "Document Processing System",
    description: "Automated document management saving 30+ hours per week for accounting team",
    tech: ["Make", "OpenAI", "Google Workspace"],
    link: "#"
  }
];

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

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

  const handleMouseEnter = (id: number) => {
    setActiveCard(id);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  return (
    <section id="portfolio" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background with better contrast */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-purple-900/80 to-indigo-900/95"></div>
        <div className="absolute inset-0 bg-grid opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Elegant header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal text-white">
              Featured <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            
            {/* Sophisticated divider */}
            <div className="flex items-center justify-center mb-8 reveal">
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
              <div className="mx-4 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-violet-500"></div>
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
            </div>

            <p className="text-xl text-white/90 mb-16 max-w-3xl mx-auto leading-relaxed reveal">
              A curated selection of my recent work in automation and system design
            </p>
          </div>
          
          {/* AI Automation Section */}
          <div className="mb-20">
            {/* Luxury section header */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent reveal">
                AI Automation
              </h3>
              
              {/* Sophisticated divider */}
              <div className="flex items-center justify-center mb-8 reveal">
                <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></div>
                <div className="mx-3 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-violet-500"></div>
                <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></div>
              </div>
            </div>
            
            {/* Video section */}
            <div className="mb-12 reveal">
              <Card className="luxury-card group relative overflow-hidden border border-white/20 bg-gradient-to-br from-slate-800/80 via-purple-900/60 to-indigo-900/80 backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="aspect-video bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl overflow-hidden border border-white/10 group-hover:border-purple-400/30 transition-colors duration-500">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/ay772nwAHt8"
                      title="AI Automation - Demo Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Improved projects grid with better visibility */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
              {aiAutomationProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="reveal luxury-card-wrapper" 
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onMouseEnter={() => handleMouseEnter(project.id)} 
                  onMouseLeave={handleMouseLeave}
                >
                  <Card className={`h-full border border-white/20 bg-gradient-to-br from-slate-800/90 via-purple-900/70 to-indigo-900/80 backdrop-blur-xl transition-all duration-700 group relative overflow-hidden ${
                    activeCard === project.id 
                      ? 'border-purple-400/60 scale-[1.02] shadow-[0_20px_40px_-12px_rgba(139,92,246,0.5)]' 
                      : 'hover:border-purple-400/40 hover:shadow-[0_8px_25px_-8px_rgba(139,92,246,0.4)]'
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <CardHeader className="relative z-10">
                      <CardTitle className="text-xl text-white group-hover:text-purple-100 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-white/80 group-hover:text-white/95 transition-colors duration-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="relative z-10">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1.5 text-xs rounded-full bg-gradient-to-r from-purple-500/30 to-violet-500/30 text-purple-200 border border-purple-400/30 group-hover:border-purple-400/50 transition-colors duration-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    
                    <CardFooter className="relative z-10">
                      <a 
                        href={project.link} 
                        className={`text-sm flex items-center transition-all duration-300 ${
                          activeCard === project.id 
                            ? 'text-purple-300' 
                            : 'text-purple-400/90 hover:text-purple-300'
                        }`}
                      >
                        <ArrowUpRight className={`h-5 w-5 transition-transform duration-300 ${
                          activeCard === project.id ? 'translate-x-1 -translate-y-1 scale-110' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                        }`} />
                      </a>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
