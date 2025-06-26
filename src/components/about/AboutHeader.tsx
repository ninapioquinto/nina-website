import React from 'react';
const AboutHeader = () => {
  return <div className="text-center mb-16 reveal">
      <div className="inline-flex items-center justify-center mb-6">
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-300/60 to-transparent"></div>
        <div className="mx-4 px-4 py-1 rounded-full bg-purple-500/20 border border-purple-300/30">
          <span className="text-sm font-medium text-purple-100">About Nina</span>
        </div>
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-300/60 to-transparent"></div>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-indigo-100 bg-clip-text text-transparent leading-tight">Automation Systems Engineer 
&amp; App Developer</h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Technical infrastructure designed to enable operational clarity and long-term scalability.</p>
    </div>;
};
export default AboutHeader;