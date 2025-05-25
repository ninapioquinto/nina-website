
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
          <div className="grid md:grid-cols-3 gap-8 mb-20">
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

          {/* Modern Client Impact Section */}
          <div className="reveal mb-20">
            <div className="relative group">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-indigo-600/10 to-violet-600/10 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-slate-800/40 via-purple-900/20 to-indigo-900/30 backdrop-blur-2xl rounded-3xl border border-white/10 group-hover:border-purple-400/30 transition-all duration-700 overflow-hidden">
                {/* Tech grid overlay */}
                <div className="absolute inset-0 bg-grid opacity-[0.03]"></div>
                
                {/* Glow effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></div>
                
                <div className="relative p-12">
                  {/* Header with tech accent */}
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-sm uppercase tracking-[0.2em] text-purple-300 font-medium">Client Impact</span>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-purple-100 to-indigo-100 bg-clip-text text-transparent">
                      Transforming Business Operations
                    </h3>
                  </div>

                  {/* Content grid */}
                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left column */}
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-400/30 flex items-center justify-center">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">What Clients Experience</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">Real transformation in daily operations</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4 ml-12">
                        {[
                          "Streamlined operations and reduced costs",
                          "Elevated day-to-day efficiency",
                          "Improved team coordination"
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3 group/item">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                            <span className="text-gray-200 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right column */}
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-400/30 flex items-center justify-center">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Results Timeline</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">Measurable impact within days</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4 ml-12">
                        {[
                          "Noticeable boost in clarity within days",
                          "Faster execution and smoother workflows",
                          "Sustainable long-term growth foundation"
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3 group/item">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                            <span className="text-gray-200 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Call to Action Section */}
          <div className="text-center reveal">
            <div className="relative group max-w-5xl mx-auto">
              {/* Animated background layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-violet-600/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-1000"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-purple-900/40 to-indigo-900/50 rounded-3xl"></div>
              
              {/* Tech border effect */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-purple-400/40 transition-colors duration-700"></div>
              
              {/* Main content */}
              <div className="relative bg-gradient-to-br from-slate-900/80 via-purple-900/60 to-indigo-900/70 backdrop-blur-2xl rounded-3xl overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-purple-400/80 to-transparent"></div>
                
                {/* Grid overlay */}
                <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>
                
                <div className="relative p-12 md:p-16">
                  {/* Header */}
                  <div className="mb-10">
                    <div className="inline-flex items-center gap-2 mb-6">
                      <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-xs uppercase tracking-[0.25em] text-purple-300 font-medium">Future-Ready Systems</span>
                      <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purple-100 to-indigo-100 bg-clip-text text-transparent mb-6 leading-tight">
                      Ready to Transform <br className="hidden md:block" /> Your Operations?
                    </h3>
                  </div>
                  
                  {/* Content */}
                  <div className="max-w-2xl mx-auto">
                    <p className="text-lg text-white/80 mb-10">
                      If you're ready to go beyond short-term fixes and invest in purposeful automation that actually moves the needle, let's build your custom system.
                    </p>
                    
                    {/* Highlighted box */}
                    <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 group-hover:border-purple-400/20 transition-colors duration-700 mb-10">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-xl border border-purple-400/30 flex items-center justify-center mb-6">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400/80 to-indigo-400/80 flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                        </div>
                        
                        <h4 className="text-xl font-bold bg-gradient-to-r from-purple-200 via-violet-200 to-indigo-200 bg-clip-text text-transparent mb-4">
                          Let's begin with a personalized discovery call
                        </h4>
                        
                        <p className="text-gray-300 text-center">
                          We'll explore your business, identify key opportunities, and craft a plan to streamline operations and accelerate growth intelligently.
                        </p>
                      </div>
                    </div>
                    
                    {/* Tech-inspired button - optional call to action */}
                    <div className="inline-flex">
                      <button className="py-3 px-8 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full border border-purple-400/30 text-white font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group/btn">
                        <span>Schedule a Call</span>
                        <div className="w-6 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent group-hover/btn:w-10 transition-all duration-300"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
