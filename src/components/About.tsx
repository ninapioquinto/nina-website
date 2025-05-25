
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
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Enhanced background with sophisticated gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/98 via-purple-900/60 to-indigo-900/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.15)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.12)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>
      </div>

      {/* Elegant floating elements */}
      <div className="absolute top-32 left-16 w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/10 to-violet-600/5 blur-2xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 rounded-full bg-gradient-to-tl from-indigo-500/10 to-purple-600/5 blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Refined header section */}
          <div className="text-center mb-20 reveal">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-300/60 to-transparent"></div>
              <div className="mx-4 px-4 py-1 rounded-full bg-purple-500/10 border border-purple-300/20">
                <span className="text-sm font-medium text-purple-200">About Nina</span>
              </div>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-300/60 to-transparent"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-purple-100 to-indigo-100 bg-clip-text text-transparent leading-tight">
              Strategic Partner in 
              <span className="block bg-gradient-to-r from-purple-200 via-violet-200 to-indigo-200 bg-clip-text text-transparent">
                Automation Excellence
              </span>
            </h2>
          </div>

          {/* Main content with improved layout */}
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            {/* Left column - Introduction */}
            <div className="lg:col-span-5 space-y-6">
              <div className="reveal luxury-card-wrapper">
                <Card className="luxury-card group h-full border border-purple-200/40 bg-gradient-to-br from-slate-800/90 via-purple-900/30 to-indigo-900/40 backdrop-blur-2xl hover:border-purple-200/60 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-4 text-white">
                        Nina Pioquinto
                      </h3>
                      <div className="h-1 w-16 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full mb-6"></div>
                    </div>
                    
                    <div className="space-y-5 text-white/90 leading-relaxed">
                      <p className="text-lg">
                        Your strategic partner in building sustainable growth through 
                        <span className="text-purple-200 font-medium"> custom no-code automation systems</span>.
                      </p>
                      <p>
                        I simplify complex operations and craft streamlined workflows so you can focus on what truly drives your business forward.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right column - Video */}
            <div className="lg:col-span-7">
              <div className="reveal luxury-card-wrapper">
                <Card className="luxury-card group border border-purple-200/40 bg-gradient-to-br from-slate-800/90 via-purple-900/30 to-indigo-900/40 backdrop-blur-2xl hover:border-purple-200/60 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg"></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="aspect-video bg-gradient-to-br from-slate-700/80 to-purple-800/60 rounded-xl overflow-hidden border border-purple-200/30 group-hover:border-purple-200/50 transition-colors duration-500 shadow-2xl">
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
            </div>
          </div>

          {/* Approach and Solutions section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="reveal luxury-card-wrapper">
              <Card className="luxury-card group h-full border border-purple-200/40 bg-gradient-to-br from-slate-800/90 via-purple-900/30 to-indigo-900/40 backdrop-blur-2xl hover:border-purple-200/60 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg"></div>
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    My Approach
                  </h3>
                  <div className="space-y-4 text-white/90 leading-relaxed">
                    <p>
                      Using AI, data intelligence, and CRM optimization, I create tailored automation solutions aligned with your unique goals and operational challenges.
                    </p>
                    <p>
                      These are not off-the-shelf fixes but scalable systems built to boost productivity and deliver real, measurable outcomes.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="reveal luxury-card-wrapper">
              <Card className="luxury-card group h-full border border-purple-200/40 bg-gradient-to-br from-slate-800/90 via-purple-900/30 to-indigo-900/40 backdrop-blur-2xl hover:border-purple-200/60 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg"></div>
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    Strategic Process
                  </h3>
                  <div className="space-y-4 text-white/90 leading-relaxed">
                    <p>
                      My process begins with a deep understanding of your current workflows and strategic goals.
                    </p>
                    <p>
                      From there, I design intelligent systems that integrate seamlessly into your operations, bringing clarity, control, and a foundation for growth without the chaos.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Results and Impact section */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <div className="reveal luxury-card-wrapper">
                <Card className="luxury-card group h-full border border-purple-200/40 bg-gradient-to-br from-slate-800/90 via-purple-900/30 to-indigo-900/40 backdrop-blur-2xl hover:border-purple-200/60 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg"></div>
                  <CardContent className="p-8 relative z-10">
                    <h3 className="text-2xl font-bold mb-6 text-white">
                      Client Impact
                    </h3>
                    <div className="space-y-4 text-white/90 leading-relaxed">
                      <p>
                        Service-based businesses integrate my solutions to streamline operations, cut unnecessary costs, and elevate day-to-day efficiency.
                      </p>
                      <p>
                        Many report a noticeable boost in clarity, smoother team coordination, and faster execution often within days of implementation.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="reveal luxury-card-wrapper">
              <Card className="luxury-card group h-full border border-purple-200/40 bg-gradient-to-br from-slate-800/90 via-purple-900/30 to-indigo-900/40 backdrop-blur-2xl hover:border-purple-200/60 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg"></div>
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-xl font-bold mb-6 text-white text-center">
                    Key Metrics
                  </h3>
                  <div className="space-y-6">
                    {[
                      { metric: "50-80%", label: "Reduction in Manual Work", color: "from-purple-400 to-violet-400" },
                      { metric: "Days", label: "Rapid Implementation", color: "from-violet-400 to-indigo-400" },
                      { metric: "100%", label: "Custom Solutions", color: "from-indigo-400 to-purple-400" }
                    ].map((stat, index) => (
                      <div key={index} className="text-center group/stat">
                        <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover/stat:scale-105 transition-transform duration-300`}>
                          {stat.metric}
                        </div>
                        <div className="text-white/80 text-sm font-medium leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to action with refined design */}
          <div className="text-center reveal">
            <Card className="luxury-card group border border-purple-200/40 bg-gradient-to-br from-slate-800/90 via-purple-900/30 to-indigo-900/40 backdrop-blur-2xl hover:border-purple-200/60 transition-all duration-700 max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 via-transparent to-violet-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg"></div>
              <CardContent className="p-10 relative z-10">
                <h3 className="text-3xl font-bold mb-6 text-white">
                  Ready to Transform Your Operations?
                </h3>
                <div className="space-y-6 text-white/90 leading-relaxed max-w-3xl mx-auto">
                  <p className="text-lg">
                    If you are ready to go beyond short-term fixes and invest in purposeful automation that actually moves the needle, let us build your custom system.
                  </p>
                  <p>
                    With my insight and strategic approach, you will gain systems that work so you can lead with confidence.
                  </p>
                  <div className="pt-6">
                    <p className="text-xl font-semibold bg-gradient-to-r from-purple-200 via-violet-200 to-indigo-200 bg-clip-text text-transparent mb-4">
                      Let us begin with a personalized discovery call.
                    </p>
                    <p className="text-white/80">
                      We will explore your business, identify key opportunities, and craft a plan to streamline operations and accelerate growth intentionally and intelligently.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
