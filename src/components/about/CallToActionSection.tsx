
import React from 'react';

const CallToActionSection = () => {
  return (
    <div className="text-center reveal">
      <div className="relative group max-w-5xl mx-auto">
        {/* Animated background layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-600/20 via-navy-500/20 to-navy-700/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-navy-900/40 to-navy-800/50 rounded-3xl"></div>
        
        {/* Tech border effect */}
        <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-navy-400/40 transition-colors duration-700"></div>
        
        {/* Main content */}
        <div className="relative bg-gradient-to-br from-slate-900/80 via-navy-900/60 to-navy-800/70 backdrop-blur-2xl rounded-3xl overflow-hidden">
          {/* Top accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-navy-400/80 to-transparent"></div>
          
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>
          
          <div className="relative p-12 md:p-16">
            {/* Header */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-1 h-1 bg-navy-400 rounded-full animate-pulse"></div>
                <span className="text-xs uppercase tracking-[0.25em] text-navy-300 font-medium">Future-Ready Systems</span>
                <div className="w-1 h-1 bg-navy-400 rounded-full animate-pulse"></div>
              </div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-navy-100 to-slate-100 bg-clip-text text-transparent mb-6 leading-tight">
                Ready to Transform <br className="hidden md:block" /> Your Operations?
              </h3>
            </div>
            
            {/* Content */}
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-white/80 mb-10">
                If you're ready to go beyond short-term fixes and invest in purposeful automation that actually moves the needle, let's build your custom system.
              </p>
              
              {/* Highlighted box */}
              <div className="bg-gradient-to-r from-navy-500/10 to-navy-600/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 group-hover:border-navy-400/20 transition-colors duration-700 mb-10">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-navy-600/20 to-navy-700/20 backdrop-blur-xl border border-navy-400/30 flex items-center justify-center mb-6">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-navy-400/80 to-accent-gold/80 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold bg-gradient-to-r from-navy-200 via-slate-200 to-navy-100 bg-clip-text text-transparent mb-4">
                    Let's begin with a personalized discovery call
                  </h4>
                  
                  <p className="text-gray-300 text-center">
                    We'll explore your business, identify key opportunities, and craft a plan to streamline operations and accelerate growth intelligently.
                  </p>
                </div>
              </div>
              
              {/* Tech-inspired button - optional call to action */}
              <div className="inline-flex">
                <button className="py-3 px-8 bg-gradient-to-r from-navy-500/20 to-navy-600/20 rounded-full border border-navy-400/30 text-white font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-navy-500/20 transition-all duration-300 group/btn">
                  <span>Schedule a Call</span>
                  <div className="w-6 h-px bg-gradient-to-r from-transparent via-navy-400 to-transparent group-hover/btn:w-10 transition-all duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
