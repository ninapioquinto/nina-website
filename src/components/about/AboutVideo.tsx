
import React from 'react';

const AboutVideo = () => {
  return (
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
  );
};

export default AboutVideo;
