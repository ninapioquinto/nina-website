
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
    <section id="about" ref={sectionRef} className="py-32 relative overflow-hidden bg-gradient-to-br from-purple-900/30 via-slate-900/90 to-indigo-900/30">
      {/* Enhanced background with better contrast for text readability */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-purple-900/50 to-indigo-900/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-grid opacity-5"></div>
      </div>

      {/* Sophisticated decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/8 to-violet-600/4 blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-tl from-indigo-500/8 to-purple-600/4 blur-xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced header with much better contrast */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal text-white">
              About <span className="bg-gradient-to-r from-purple-200 via-violet-100 to-indigo-200 bg-clip-text text-transparent glow-text">Nina</span>
            </h2>
            
            {/* Sophisticated divider */}
            <div className="flex items-center justify-center mb-8 reveal">
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-purple-200/80 to-transparent"></div>
              <div className="mx-4 w-3 h-3 rounded-full bg-gradient-to-r from-purple-200 to-violet-300 animate-pulse-glow"></div>
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-purple-200/80 to-transparent"></div>
            </div>

            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed reveal font-semibold">
              Systems Engineer with 8+ years of experience crafting intelligent automation solutions 
              that transform business operations and elevate customer experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Enhanced video card */}
            <div className="reveal luxury-card-wrapper">
              <Card className="luxury-card group relative overflow-hidden border border-purple-200/60 bg-gradient-to-br from-slate-800/90 via-purple-900/50 to-indigo-900/60 backdrop-blur-xl hover:border-purple-100/80 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 via-transparent to-violet-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="aspect-video bg-gradient-to-br from-slate-700/90 to-purple-800/70 rounded-xl overflow-hidden border border-purple-200/50 flex items-center justify-center relative group-hover:border-purple-100/70 transition-colors duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/12 via-transparent to-indigo-600/12 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative z-10 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-300/60 to-violet-400/60 flex items-center justify-center backdrop-blur-sm border border-purple-200/60 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-purple-200/70 group-hover:to-violet-300/70 transition-all duration-500">
                        <Play className="w-10 h-10 text-white group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white font-semibold text-sm bg-black/70 px-3 py-1 rounded-lg backdrop-blur-sm border border-purple-200/30">
                      Introduction Video
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced content cards with much better text visibility */}
            <div className="space-y-8">
              <div className="reveal luxury-card-wrapper">
                <Card className="luxury-card group border border-purple-200/60 bg-gradient-to-br from-slate-800/85 via-purple-900/40 to-indigo-900/50 backdrop-blur-xl hover:border-purple-100/80 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 via-transparent to-violet-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <CardContent className="p-8 relative z-10">
                    <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-100 via-violet-100 to-indigo-100 bg-clip-text text-transparent">
                      My Expertise
                    </h3>
                    <div className="space-y-4">
                      {[
                        "AI-Powered Automation Systems",
                        "Advanced CRM Optimization", 
                        "Business Process Engineering",
                        "System Integration & APIs"
                      ].map((skill, index) => (
                        <div key={index} className="flex items-center space-x-4 group/item">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-200 to-violet-300 group-hover/item:scale-125 group-hover/item:shadow-[0_0_15px_rgba(139,92,246,0.8)] transition-all duration-300"></div>
                          <span className="text-white group-hover/item:text-white group-hover/item:translate-x-1 transition-all duration-300 text-lg font-semibold">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="reveal luxury-card-wrapper">
                <Card className="luxury-card group border border-purple-200/60 bg-gradient-to-br from-slate-800/85 via-purple-900/40 to-indigo-900/50 backdrop-blur-xl hover:border-purple-100/80 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 via-transparent to-violet-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <CardContent className="p-8 relative z-10">
                    <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-100 via-violet-100 to-indigo-100 bg-clip-text text-transparent">
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
                          <div className="text-3xl font-bold bg-gradient-to-r from-purple-200 to-violet-200 bg-clip-text text-transparent group-hover/stat:from-purple-100 group-hover/stat:to-violet-100 group-hover/stat:scale-110 transition-all duration-300 mb-2">
                            {stat.metric}
                          </div>
                          <div className="text-white text-sm group-hover/stat:text-white transition-colors duration-300 font-semibold">
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
      </div>
    </section>
  );
};

export default About;
