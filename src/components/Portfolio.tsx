
import { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { ArrowUpRight } from 'lucide-react';

const projectData = [
  {
    id: 1,
    title: "AI-Powered CRM Integration",
    description: "Automated customer journey mapping with predictive analytics",
    tech: ["Python", "TensorFlow", "Salesforce API"],
    link: "#"
  },
  {
    id: 2,
    title: "Intelligent Document Processing",
    description: "NLP system for extracting and categorizing information from unstructured documents",
    tech: ["PyTorch", "Hugging Face", "MongoDB"],
    link: "#"
  },
  {
    id: 3,
    title: "Conversational Support Bot",
    description: "Customer service automation with context-aware responses",
    tech: ["Node.js", "DialogFlow", "Zendesk"],
    link: "#"
  },
  {
    id: 4,
    title: "Workflow Automation Suite",
    description: "End-to-end business process automation with ML optimization",
    tech: ["Python", "Celery", "Docker", "PostgreSQL"],
    link: "#"
  },
  {
    id: 5,
    title: "Predictive Inventory System",
    description: "Supply chain optimization using time series forecasting",
    tech: ["Python", "Prophet", "AWS"],
    link: "#"
  },
  {
    id: 6,
    title: "Data Integration Platform",
    description: "Multi-source data pipeline with automated cleaning and transformation",
    tech: ["Apache Kafka", "Spark", "Airflow"],
    link: "#"
  }
];

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

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

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 bg-accent/5 relative bg-grid">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center reveal">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-center text-lg text-white/70 mb-16 max-w-2xl mx-auto reveal">
            A selection of my recent work in AI systems engineering and automation
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.map((project, index) => (
              <div 
                key={project.id} 
                className="reveal" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="h-full border border-white/10 bg-accent/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 glow-border">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-white/70">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <a 
                      href={project.link} 
                      className="text-sm text-primary flex items-center hover:text-primary/80 transition-colors"
                    >
                      View Project <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
