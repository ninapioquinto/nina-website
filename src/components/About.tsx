
import { useRef, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Play } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="about" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Luxury background with elegant overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/10 to-violet-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08)_0%,transparent_70%)]"></div>
      </div>

      {/* Sophisticated decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/10 to-violet-600/5 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-tl from-indigo-500/10 to-purple-600/5 blur-xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Elegant header with luxury gradient */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal">
              About <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent">Nina</span>
            </h2>
            
            {/* Sophisticated divider */}
            <div className="flex items-center justify-center mb-8 reveal">
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
              <div className="mx-4 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-violet-500"></div>
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
            </div>

            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed reveal">
              Systems Engineer with 8+ years of experience crafting intelligent automation solutions 
              that transform business operations and elevate customer experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Premium video card */}
            <div className="reveal">
              <Card className="luxury-card group relative overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900/50 via-purple-900/20 to-indigo-900/30 backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="aspect-video bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl overflow-hidden border border-white/5 flex items-center justify-center relative group-hover:border-purple-400/20 transition-colors duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative z-10 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-violet-600/20 flex items-center justify-center backdrop-blur-sm border border-purple-400/20 group-hover:scale-110 transition-transform duration-500">
                        <Play className="w-8 h-8 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white/60 text-sm font-medium">
                      Introduction Video
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Luxury content card */}
            <div className="space-y-8 reveal">
              <Card className="luxury-card group border border-white/10 bg-gradient-to-br from-slate-900/40 via-purple-900/20 to-indigo-900/20 backdrop-blur-xl hover:border-purple-400/30 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-300 via-violet-300 to-indigo-300 bg-clip-text text-transparent">
                    My Expertise
                  </h3>
                  <div className="space-y-4">
                    {[
                      "AI-Powered Automation Systems",
                      "Advanced CRM Optimization", 
                      "Business Process Engineering",
                      "System Integration & APIs"
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center space-x-3 group/item">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-violet-500 group-hover/item:scale-125 transition-transform duration-300"></div>
                        <span className="text-white/90 group-hover/item:text-white transition-colors duration-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="luxury-card group border border-white/10 bg-gradient-to-br from-slate-900/40 via-purple-900/20 to-indigo-900/20 backdrop-blur-xl hover:border-purple-400/30 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-300 via-violet-300 to-indigo-300 bg-clip-text text-transparent">
                    Impact & Results
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { metric: "80%", label: "Task Automation" },
                      { metric: "65%", label: "Time Reduction" },
                      { metric: "50+", label: "Projects Completed" },
                      { metric: "99%", label: "Client Satisfaction" }
                    ].map((stat, index) => (
                      <div key={index} className="text-center group/stat">
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent group-hover/stat:from-purple-300 group-hover/stat:to-violet-300 transition-all duration-300">
                          {stat.metric}
                        </div>
                        <div className="text-white/70 text-sm group-hover/stat:text-white/90 transition-colors duration-300">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
