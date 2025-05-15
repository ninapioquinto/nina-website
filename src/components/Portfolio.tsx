
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
        
        {/* Video placeholder */}
        <div className="mb-8 reveal">
          <div className="relative aspect-video bg-accent/50 rounded-lg overflow-hidden border border-white/10 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm border border-white/10">
                <Play className="h-8 w-8 text-white" />
              </div>
            </div>
            <p className="text-white/50 text-sm">Video will be added here</p>
          </div>
        </div>
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="reveal" 
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => handleMouseEnter(project.id)} 
              onMouseLeave={handleMouseLeave}
            >
              <Card className={`h-full border border-white/10 bg-accent/30 backdrop-blur-sm transition-all duration-500 ${
                activeCard === project.id 
                  ? 'border-primary/50 scale-[1.02] shadow-lg shadow-primary/20' 
                  : 'hover:border-primary/30'
              }`}>
                <CardHeader>
                  <CardTitle className="text-xl text-zinc-50">{project.title}</CardTitle>
                  <CardDescription className="text-white/70">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
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
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-center text-lg text-white/70 mb-16 max-w-2xl mx-auto reveal">
            A selection of my recent work in automation and system design
          </p>
          
          {/* AI Automation Projects */}
          {renderProjectSection("AI Automation", aiAutomationProjects)}
          
          {/* CRM Projects */}
          {renderProjectSection("CRM Solutions", crmProjects)}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
