
import { useEffect, useRef } from 'react';
import { Badge } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './ui/hover-card';

const certifications = [
  {
    id: 1,
    title: "AWS Solutions Architect",
    organization: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-123456"
  },
  {
    id: 2,
    title: "Google Cloud Professional",
    organization: "Google Cloud",
    date: "2024",
    credentialId: "GCP-789012"
  },
  {
    id: 3,
    title: "Azure Developer Associate",
    organization: "Microsoft",
    date: "2023",
    credentialId: "AZ-204"
  },
  {
    id: 4,
    title: "Certified Kubernetes Administrator",
    organization: "Cloud Native Computing Foundation",
    date: "2023",
    credentialId: "CKA-345678"
  },
  {
    id: 5,
    title: "HashiCorp Terraform Associate",
    organization: "HashiCorp",
    date: "2023",
    credentialId: "HC-901234"
  },
  {
    id: 6,
    title: "Docker Certified Associate",
    organization: "Docker",
    date: "2023",
    credentialId: "DCA-567890"
  },
  {
    id: 7,
    title: "Certified Jenkins Engineer",
    organization: "CloudBees",
    date: "2023",
    credentialId: "CJE-123456"
  },
  {
    id: 8,
    title: "GitLab Certified Associate",
    organization: "GitLab",
    date: "2023",
    credentialId: "GCA-789012"
  },
  {
    id: 9,
    title: "MongoDB Certified Developer",
    organization: "MongoDB",
    date: "2023",
    credentialId: "MCD-345678"
  }
];

const Certifications = () => {
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
      { threshold: 0.1 }
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
    <section id="certifications" ref={sectionRef} className="py-24 bg-accent/5 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center reveal">
            My <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-center text-lg text-white/70 mb-16 max-w-2xl mx-auto reveal">
            Professional certifications and achievements in technology
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert.id} 
                className="reveal" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <HoverCard>
                  <HoverCardTrigger>
                    <Card className="group relative h-full border border-white/10 bg-accent/30 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-[1px] bg-accent/40 rounded-lg z-10" />
                      
                      <CardHeader className="relative z-20">
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl text-zinc-50">
                            {cert.title}
                          </CardTitle>
                          <Badge className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-sm text-white/70">{cert.organization}</p>
                      </CardHeader>
                      
                      <CardContent className="relative z-20">
                        <p className="text-xs text-white/50">
                          Issued {cert.date} • ID: {cert.credentialId}
                        </p>
                      </CardContent>

                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent-purple/20 animate-pulse-glow" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
                      </div>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-accent/80 backdrop-blur-xl border-white/10">
                    <div className="flex justify-between space-x-4">
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">{cert.title}</h4>
                        <p className="text-sm text-white/70">
                          Click to verify this certification and view more details about the skills and knowledge demonstrated.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
