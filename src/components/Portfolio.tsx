
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { ArrowUpRight, Play } from 'lucide-react';

// Split the project data into two categories
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

const crmProjects = [
  {
    id: 2,
    title: "Service Agency Task Management",
    description: "Automated 80% of manual tasks for a service agency of 50+ employees",
    tech: ["ClickUp", "GoHighLevel", "Zapier"],
    link: "#"
  },
  {
    id: 4,
    title: "Sales Pipeline Automation",
    description: "Increased sales team capacity by 40% through workflow optimization",
    tech: ["GoHighLevel", "Salesforce", "Make"],
    link: "#"
  },
  {
    id: 5,
    title: "Client Reporting Dashboard",
    description: "Eliminated 15 hours of weekly manual reporting with real-time dashboards",
    tech: ["Airtable", "Google Data Studio", "Zapier"],
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

  const renderProjectSection = (title: string, projects: typeof aiAutomationProjects) => {
    return (
      <div className="mb-20">
        {/* Luxury section header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent reveal">
            {title}
          </h3>
          
          {/* Sophisticated divider */}
          <div className="flex items-center justify-center mb-8 reveal">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></div>
            <div className="mx-3 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-violet-500"></div>
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></div>
          </div>
        </div>
        
        {/* Premium video placeholder */}
        <div className="mb-12 reveal">
          <Card className="luxury-card group relative overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900/50 via-purple-900/20 to-indigo-900/30 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <CardContent className="p-8 relative z-10">
              <div className="aspect-video bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl overflow-hidden border border-white/5 flex items-center justify-center relative group-hover:border-purple-400/20 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10 flex flex-col items-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-violet-600/20 flex items-center justify-center backdrop-blur-sm border border-purple-400/20 group-hover:scale-110 transition-transform duration-500">
                    <Play className="w-10 h-10 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" />
                  </div>
                  <p className="text-white/60 text-sm font-medium">Demo Video Coming Soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Luxury projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="reveal luxury-card-wrapper" 
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => handleMouseEnter(project.id)} 
              onMouseLeave={handleMouseLeave}
            >
              <Card className={`h-full border border-white/10 bg-gradient-to-br from-slate-900/40 via-purple-900/20 to-indigo-900/20 backdrop-blur-xl transition-all duration-700 group relative overflow-hidden ${
                activeCard === project.id 
                  ? 'border-purple-400/50 scale-[1.02] shadow-[0_20px_40px_-12px_rgba(139,92,246,0.4)]' 
                  : 'hover:border-purple-400/30 hover:shadow-[0_8px_25px_-8px_rgba(139,92,246,0.3)]'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl text-zinc-50 group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 text-xs rounded-full bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-300 border border-purple-400/20 group-hover:border-purple-400/40 transition-colors duration-300">
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
                        : 'text-purple-400/80 hover:text-purple-300'
                    }`}
                  >
                    View Project 
                    <ArrowUpRight className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                      activeCard === project.id ? 'translate-x-1 -translate-y-1 scale-110' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                    }`} />
                  </a>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Luxury background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900/40 to-indigo-900/20"></div>
        <div className="absolute inset-0 bg-grid opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Elegant header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal">
              Featured <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            
            {/* Sophisticated divider */}
            <div className="flex items-center justify-center mb-8 reveal">
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
              <div className="mx-4 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-violet-500"></div>
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
            </div>

            <p className="text-xl text-white/80 mb-16 max-w-3xl mx-auto leading-relaxed reveal">
              A curated selection of my recent work in automation and system design
            </p>
          </div>
          
          {/* Project sections */}
          {renderProjectSection("AI Automation", aiAutomationProjects)}
          {renderProjectSection("CRM Solutions", crmProjects)}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
