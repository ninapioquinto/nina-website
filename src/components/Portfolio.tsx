
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
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 reveal">
          {title}
        </h3>
        
        {/* Video placeholder with luxury style */}
        <div className="mb-8 reveal">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-primary/20 flex items-center justify-center bg-gradient-to-br from-black/40 to-black/80">
            <div className="absolute inset-0 bg-grid opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm border border-white/10 transition-transform duration-300 hover:scale-110 cursor-pointer group">
                <Play className="h-10 w-10 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </div>
            <p className="text-white/50 text-sm absolute bottom-4 right-4">Coming Soon</p>
          </div>
        </div>
        
        {/* Projects grid with luxury cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="reveal" 
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => handleMouseEnter(project.id)} 
              onMouseLeave={handleMouseLeave}
            >
              <Card className={`h-full luxury-card transition-all duration-500 ${
                activeCard === project.id 
                  ? 'border-primary/50 scale-[1.03] shadow-lg shadow-primary/20' 
                  : 'hover:border-primary/30'
              }`}>
                <CardHeader>
                  <CardTitle className={`text-xl ${activeCard === project.id ? 'text-gradient' : 'text-zinc-50'}`}>
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-white/70">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <a 
                    href={project.link} 
                    className={`text-sm flex items-center transition-colors ${
                      activeCard === project.id ? 'text-primary' : 'text-primary/80'
                    }`}
                  >
                    View Project <ArrowUpRight className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                      activeCard === project.id ? 'translate-x-1 -translate-y-1' : ''
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
    <section id="portfolio" ref={sectionRef} className="py-24 bg-accent/5 relative bg-grid">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center reveal">
            Featured <span className="text-gradient glow-text">Projects</span>
          </h2>
          <p className="text-center text-lg text-white/70 mb-6 max-w-2xl mx-auto reveal">
            A selection of my recent work in automation and system design
          </p>
          
          {/* Luxury divider */}
          <div className="luxury-divider mx-auto w-32 mb-16"></div>
          
          {/* AI Automation Projects */}
          {renderProjectSection("AI Automation", aiAutomationProjects)}
          
          {/* CRM Projects */}
          {renderProjectSection("CRM Solutions", crmProjects)}
        </div>
      </div>
      
      {/* Luxury background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-accent-blue/5 to-transparent rounded-full blur-3xl opacity-30"></div>
    </section>
  );
};

export default Portfolio;
