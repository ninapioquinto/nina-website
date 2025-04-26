
import React from 'react';
import ErrorBoundary from './3D/ErrorBoundary';
import Scene from './3D/Scene';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#16023C] via-[#3D0E75] to-[#551B99] z-0" />
      
      {/* Star-like particles background */}
      <div className="absolute inset-0 z-10">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animation: `pulse-glow ${Math.random() * 3 + 2}s infinite ease-in-out ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 h-screen relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-center h-full">
          {/* Text content container */}
          <div className="lg:w-1/2 z-30 text-center lg:text-left mb-10 lg:mb-0 mt-20 lg:mt-0">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-white">
              <span className="block">Custom Systems.</span>
              <span className="block bg-gradient-to-r from-[#8731EC] to-[#BE9FFE] bg-clip-text text-transparent">
                Designed with Intelligence and Care.
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-white/80 mb-8 max-w-xl">
              I help businesses scale with thoughtful automation, AI, and CRM systems.
            </p>
            <Button 
              className="px-8 py-6 bg-[#8731EC]/20 text-white border border-[#8731EC]/50 hover:bg-[#8731EC]/30
                       hover:border-[#8731EC] transition-all duration-500 group
                       shadow-[0_0_15px_rgba(135,49,236,0.3)] hover:shadow-[0_0_30px_rgba(135,49,236,0.6)]"
            >
              Let's build your custom system
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
          
          {/* 3D Globe container */}
          <div className="lg:w-1/2 h-[50vh] lg:h-[70vh] z-20">
            <ErrorBoundary>
              <Scene />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
