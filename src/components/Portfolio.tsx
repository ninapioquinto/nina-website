import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { ArrowUpRight, Play, Code, Zap, Bot } from 'lucide-react';

// AI Automation projects
const aiAutomationProjects = [{
  id: 1,
  title: "Client Onboarding Automation",
  description: "Reduced onboarding time from 2 weeks to 2 days with zero manual data entry",
  tech: ["Zapier", "Airtable", "Make"],
  link: "#",
  icon: Code,
  gradient: "from-purple-500/20 to-violet-600/20"
}, {
  id: 3,
  title: "Sales Pipeline Automation",
  description: "Automated lead qualification and follow-up sequences, increasing conversion rates by 40%",
  tech: ["OpenAI", "Make", "GoHighLevel"],
  link: "#",
  icon: Zap,
  gradient: "from-indigo-500/20 to-purple-600/20"
}, {
  id: 6,
  title: "Lead Capture & Nurture System",
  description: "Intelligent lead scoring and automated nurture campaigns that increased qualified leads by 55%",
  tech: ["Make", "OpenAI", "GoHighLevel"],
  link: "#",
  icon: Bot,
  gradient: "from-violet-500/20 to-indigo-600/20"
}];

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
      {/* Modern tech background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-purple-900/85 to-indigo-900/95"></div>
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Updated header design with elegant typography */}
          <div className="text-center mb-20">
            <div className="relative inline-block">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-3 sm:mb-4 reveal">
                Featured{' '}
                <span className="bg-gradient-to-r from-purple-300 via-violet-200 to-indigo-300 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"></div>
            </div>
            
            <p className="text-xl text-white/80 mb-16 max-w-3xl mx-auto leading-relaxed reveal">
              Innovative automation solutions that drive real business transformation
            </p>
          </div>
          
          {/* AI Automation Section */}
          <div className="mb-20">
            {/* Enhanced section header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6 reveal">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-violet-600/20 border border-purple-400/30 flex items-center justify-center backdrop-blur-sm">
                  <Bot className="w-4 h-4 text-purple-300" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent">
                  AI Automation
                </h3>
              </div>
            </div>
            
            {/* Modern video showcase */}
            <div className="mb-16 reveal">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 via-violet-500/30 to-indigo-500/30 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <Card className="relative overflow-hidden border border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-purple-400/30 group transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-slate-800/80 to-purple-900/40 rounded-xl overflow-hidden border border-white/10 relative">
                      <div style={{
                        position: 'relative',
                        width: '100%',
                        height: 0,
                        paddingTop: '56.2500%',
                        paddingBottom: 0,
                        boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                        marginTop: '1.6em',
                        marginBottom: '0.9em',
                        overflow: 'hidden',
                        borderRadius: '8px',
                        willChange: 'transform'
                      }}>
                        <iframe 
                          loading="lazy" 
                          style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            top: 0,
                            left: 0,
                            border: 'none',
                            padding: 0,
                            margin: 0
                          }}
                          src="https://www.canva.com/design/DAGps-6p9LM/gU-wTNM5tXciPEfPJhaYzA/watch?embed" 
                          allowFullScreen 
                          allow="fullscreen"
                          title="Automation Portfolio (Video)"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Enhanced projects grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiAutomationProjects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <div 
                    key={project.id} 
                    className="reveal luxury-card-wrapper" 
                    style={{
                      animationDelay: `${index * 0.15}s`
                    }} 
                    onMouseEnter={() => handleMouseEnter(project.id)} 
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Glow effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-1000`}></div>
                    
                    <Card className={`relative h-full border border-white/20 bg-white/5 backdrop-blur-xl transition-all duration-700 group overflow-hidden hover:bg-white/10 hover:border-purple-400/30 ${activeCard === project.id ? 'border-purple-400/40 scale-[1.02] shadow-[0_20px_40px_-12px_rgba(139,92,246,0.4)]' : 'hover:border-purple-400/30 hover:shadow-[0_8px_25px_-8px_rgba(139,92,246,0.3)]'}`}>
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      {/* Shimmer effect using Tailwind animation */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-[shimmer_2s_ease-in-out_infinite] translate-x-[-100%]"></div>
                      </div>
                      
                      <CardHeader className="relative z-10 pb-4">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} border border-purple-400/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="w-6 h-6 text-purple-300" />
                          </div>
                          
                          <a href={project.link} className={`w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-400/40 ${activeCard === project.id ? 'scale-110' : ''}`}>
                            <ArrowUpRight className="w-4 h-4 text-purple-300" />
                          </a>
                        </div>
                        
                        <CardTitle className="text-xl font-bold text-white group-hover:text-purple-100 transition-colors duration-300 leading-tight">
                          {project.title}
                        </CardTitle>
                        
                        <CardDescription className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="relative z-10 pt-0">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span key={i} className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-200 border border-purple-400/20 group-hover:border-purple-400/40 group-hover:bg-purple-500/30 transition-all duration-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
