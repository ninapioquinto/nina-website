
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
        <div className="max-w-6xl mx-auto">
          {/* Header section */}
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-300/60 to-transparent"></div>
              <div className="mx-4 px-4 py-1 rounded-full bg-purple-500/20 border border-purple-300/30">
                <span className="text-sm font-medium text-purple-100">About Nina</span>
              </div>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-300/60 to-transparent"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-indigo-100 bg-clip-text text-transparent leading-tight">
              Strategic Partner in Automation Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I build custom no-code automation systems that simplify operations and drive sustainable growth for service-based businesses.
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left side - Video */}
            <div className="reveal">
              <div className="relative group">
                <div className="aspect-video bg-gradient-to-br from-slate-700/20 to-purple-800/20 rounded-2xl overflow-hidden border border-white/10 group-hover:border-purple-300/30 transition-colors duration-500 shadow-2xl">
                  <iframe
                    className="w-full h-full"
                    src="https://drive.google.com/file/d/1Lez8yjnIjR6x64QNXC1ekf_W_QRIKkFn/preview"
                    title="About Nina - Introduction Video"
                    frameBorder="0"
                    allow="autoplay"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Right side - About content */}
            <div className="reveal space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Nina Pioquinto
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full mb-6"></div>
                <p className="text-lg text-gray-200 leading-relaxed mb-6">
                  Your strategic partner in building sustainable growth through intelligent automation systems.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">My Approach</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Leveraging AI, data intelligence, and CRM optimization</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Creating tailored solutions aligned with your unique goals</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Building scalable systems that deliver measurable outcomes</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">Strategic Process</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Deep understanding of your current workflows</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Seamless integration into existing operations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Foundation for growth without chaos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Impact metrics */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { metric: "50-80%", label: "Reduction in Manual Work", color: "from-purple-400 to-violet-400" },
              { metric: "Days", label: "Rapid Implementation", color: "from-violet-400 to-indigo-400" },
              { metric: "100%", label: "Custom Solutions", color: "from-indigo-400 to-purple-400" }
            ].map((stat, index) => (
              <div key={index} className="text-center reveal group">
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-300`}>
                  {stat.metric}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Client impact section */}
          <div className="reveal mb-16">
            <Card className="border border-white/10 bg-gradient-to-br from-slate-800/40 via-purple-900/30 to-indigo-900/40 backdrop-blur-xl transition-all duration-700 group relative overflow-hidden hover:border-purple-400/30">
              <CardContent className="p-10">
                <h3 className="text-2xl font-bold mb-6 text-white text-center">
                  Client Impact
                </h3>
                <div className="grid md:grid-cols-2 gap-8 text-gray-200">
                  <div>
                    <h4 className="text-lg font-semibold text-purple-300 mb-3">What Clients Experience</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Streamlined operations and reduced costs</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Elevated day-to-day efficiency</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Improved team coordination</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-300 mb-3">Results Timeline</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Noticeable boost in clarity within days</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Faster execution and smoother workflows</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Sustainable long-term growth foundation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to action */}
          <div className="text-center reveal">
            <Card className="border border-white/10 bg-gradient-to-br from-slate-800/40 via-purple-900/30 to-indigo-900/40 backdrop-blur-xl transition-all duration-700 group relative overflow-hidden max-w-4xl mx-auto hover:border-purple-400/30">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold mb-6 text-white">
                  Ready to Transform Your Operations?
                </h3>
                <div className="space-y-6 text-gray-200 leading-relaxed">
                  <p className="text-lg">
                    If you're ready to go beyond short-term fixes and invest in purposeful automation that actually moves the needle, let's build your custom system.
                  </p>
                  <p className="text-xl font-semibold bg-gradient-to-r from-purple-200 via-violet-200 to-indigo-200 bg-clip-text text-transparent">
                    Let's begin with a personalized discovery call.
                  </p>
                  <p>
                    We'll explore your business, identify key opportunities, and craft a plan to streamline operations and accelerate growth intelligently.
                  </p>
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
