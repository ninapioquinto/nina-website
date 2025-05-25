
import { useRef, useEffect } from 'react';
import { Card, CardContent } from './ui/card';

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
          {/* Enhanced header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal text-white">
              About <span className="bg-gradient-to-r from-purple-200 via-violet-100 to-indigo-200 bg-clip-text text-transparent glow-text">Nina</span>
            </h2>
            
            {/* Sophisticated divider */}
            <div className="flex items-center justify-center mb-12 reveal">
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-purple-200/80 to-transparent"></div>
              <div className="mx-4 w-3 h-3 rounded-full bg-gradient-to-r from-purple-200 to-violet-300 animate-pulse-glow"></div>
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-purple-200/80 to-transparent"></div>
            </div>

            {/* Redesigned intro with better structure */}
            <div className="max-w-4xl mx-auto reveal">
              <p className="text-xl text-white leading-relaxed mb-8 font-medium">
                I'm Nina Pioquinto, your strategic partner in building sustainable growth through 
                <span className="bg-gradient-to-r from-purple-200 to-violet-200 bg-clip-text text-transparent font-semibold"> custom no-code automation systems</span>.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                I simplify complex operations and craft streamlined workflows so you can focus on what truly drives your business forward.
              </p>
            </div>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left column - What I Do */}
            <div className="space-y-8">
              <div className="reveal luxury-card-wrapper">
                <Card className="luxury-card group border border-purple-200/60 bg-gradient-to-br from-slate-800/85 via-purple-900/40 to-indigo-900/50 backdrop-blur-xl hover:border-purple-100/80 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 via-transparent to-violet-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <CardContent className="p-8 relative z-10">
                    <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-100 via-violet-100 to-indigo-100 bg-clip-text text-transparent">
                      What I Do
                    </h3>
                    <p className="text-white/90 leading-relaxed mb-4">
                      Using AI, data intelligence, and CRM optimization, I create tailored automation solutions aligned with your unique goals and operational challenges.
                    </p>
                    <p className="text-white/90 leading-relaxed">
                      These are not off-the-shelf fixes but scalable systems built to boost productivity and deliver real, measurable outcomes.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="reveal luxury-card-wrapper">
                <Card className="luxury-card group border border-purple-200/60 bg-gradient-to-br from-slate-800/85 via-purple-900/40 to-indigo-900/50 backdrop-blur-xl hover:border-purple-100/80 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 via-transparent to-violet-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <CardContent className="p-8 relative z-10">
                    <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-100 via-violet-100 to-indigo-100 bg-clip-text text-transparent">
                      My Process
                    </h3>
                    <p className="text-white/90 leading-relaxed mb-4">
                      My process begins with a deep understanding of your current workflows and strategic goals.
                    </p>
                    <p className="text-white/90 leading-relaxed">
                      From there, I design intelligent systems that integrate seamlessly into your operations, bringing clarity, control, and a foundation for growth without the chaos.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right column - Video and Results */}
            <div className="space-y-8">
              <div className="reveal luxury-card-wrapper">
                <Card className="luxury-card group relative overflow-hidden border border-purple-200/60 bg-gradient-to-br from-slate-800/90 via-purple-900/50 to-indigo-900/60 backdrop-blur-xl hover:border-purple-100/80 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 via-transparent to-violet-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className="aspect-video bg-gradient-to-br from-slate-700/90 to-purple-800/70 rounded-xl overflow-hidden border border-purple-200/50 group-hover:border-purple-100/70 transition-colors duration-500">
                      <iframe
                        className="w-full h-full"
                        src="https://drive.google.com/file/d/1Lez8yjnIjR6x64QNXC1ekf_W_QRIKkFn/preview"
                        title="About Nina - Introduction Video"
                        frameBorder="0"
                        allow="autoplay"
                        allowFullScreen
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="reveal luxury-card-wrapper">
                <Card className="luxury-card group border border-purple-200/60 bg-gradient-to-br from-slate-800/85 via-purple-900/40 to-indigo-900/50 backdrop-blur-xl hover:border-purple-100/80 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 via-transparent to-violet-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <CardContent className="p-8 relative z-10">
                    <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-100 via-violet-100 to-indigo-100 bg-clip-text text-transparent">
                      Client Results
                    </h3>
                    <p className="text-white/90 leading-relaxed mb-6">
                      Service-based businesses integrate my solutions to streamline operations, cut unnecessary costs, and elevate day-to-day efficiency.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { metric: "50-80%", label: "Less Manual Work" },
                        { metric: "Days", label: "Implementation" },
                        { metric: "100%", label: "Custom Built" },
                        { metric: "24/7", label: "System Reliability" }
                      ].map((stat, index) => (
                        <div key={index} className="text-center group/stat">
                          <div className="text-2xl font-bold bg-gradient-to-r from-purple-200 to-violet-200 bg-clip-text text-transparent group-hover/stat:from-purple-100 group-hover/stat:to-violet-100 transition-all duration-300 mb-1">
                            {stat.metric}
                          </div>
                          <div className="text-white/80 text-sm font-medium">
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

          {/* Call to action */}
          <div className="text-center reveal">
            <Card className="luxury-card group border border-purple-200/60 bg-gradient-to-br from-slate-800/85 via-purple-900/40 to-indigo-900/50 backdrop-blur-xl hover:border-purple-100/80 transition-all duration-700 max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 via-transparent to-violet-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-100 via-violet-100 to-indigo-100 bg-clip-text text-transparent">
                  Ready to Transform Your Operations?
                </h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  If you are ready to go beyond short-term fixes and invest in purposeful automation that actually moves the needle, let us build your custom system. With my insight and strategic approach, you will gain systems that work so you can lead with confidence.
                </p>
                <p className="text-lg font-semibold bg-gradient-to-r from-purple-200 via-violet-100 to-indigo-200 bg-clip-text text-transparent">
                  Book your discovery call today and take the first step toward greater clarity, control, and momentum.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
