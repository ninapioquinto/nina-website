
import React from 'react';

const ClientImpactSection = () => {
  return (
    <div className="reveal mb-20">
      <div className="relative group">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-600/10 via-navy-500/10 to-navy-700/10 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {/* Main card */}
        <div className="relative bg-gradient-to-br from-slate-800/40 via-navy-900/20 to-navy-800/30 backdrop-blur-2xl rounded-3xl border border-white/10 group-hover:border-navy-400/30 transition-all duration-700 overflow-hidden">
          {/* Tech grid overlay */}
          <div className="absolute inset-0 bg-grid opacity-[0.03]"></div>
          
          {/* Glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-navy-400/60 to-transparent"></div>
          
          <div className="relative p-12">
            {/* Header with tech accent */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-navy-400 rounded-full animate-pulse"></div>
                <span className="text-sm uppercase tracking-[0.2em] text-navy-300 font-medium">Client Impact</span>
                <div className="w-2 h-2 bg-navy-400 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-navy-100 to-slate-100 bg-clip-text text-transparent">
                Transforming Business Operations
              </h3>
            </div>

            {/* Content grid */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left column */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-navy-500/20 to-navy-600/20 border border-navy-400/30 flex items-center justify-center">
                    <div className="w-2 h-2 bg-navy-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">What Clients Experience</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">Real transformation in daily operations</p>
                  </div>
                </div>
                
                <div className="space-y-4 ml-12">
                  {["Streamlined operations and reduced costs", "Elevated day-to-day efficiency", "Improved team coordination"].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 group/item">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-navy-400 to-accent-gold rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-200 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-navy-600/20 to-navy-700/20 border border-navy-400/30 flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Results Timeline</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">Measurable impact within days</p>
                  </div>
                </div>
                
                <div className="space-y-4 ml-12">
                  {["Noticeable boost in clarity within days", "Faster execution and smoother workflows", "Sustainable long-term growth foundation"].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 group/item">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-accent-gold to-navy-400 rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
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
  );
};

export default ClientImpactSection;
