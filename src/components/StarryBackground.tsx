
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";

const StarryBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Starry background with enhanced luxury feel */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08)_0%,rgba(0,0,0,0)_70%)]" />
        
        {/* Subtle animated gradient overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent-blue/5 animate-pulse-glow" style={{ animationDuration: '15s' }}></div>
        </div>
      </div>

      {/* Multiple shooting star layers with different colors and speeds */}
      <ShootingStars
        starColor="#8B5CF6"
        trailColor="#38BDF8"
        minSpeed={15}
        maxSpeed={30}
        minDelay={3000}
        maxDelay={7000}
      />
      <ShootingStars
        starColor="#D4AF37" 
        trailColor="#E8C866"
        minSpeed={10}
        maxSpeed={25}
        minDelay={5000}
        maxDelay={10000}
      />
      <ShootingStars
        starColor="#38BDF8"
        trailColor="#6B21A8"
        minSpeed={20}
        maxSpeed={35}
        minDelay={4000}
        maxDelay={8000}
      />
      
      {/* Luxury dust particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-primary/10"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            animationDelay: `${Math.random() * 5}s`,
            animation: 'twinkle 5s ease-in-out infinite'
          }}
        />
      ))}
      
      {/* Golden dust particles for luxury feel */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`gold-${i}`}
          className="absolute rounded-full bg-[#D4AF37]/20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            animationDelay: `${Math.random() * 7}s`,
            animation: 'twinkle 7s ease-in-out infinite'
          }}
        />
      ))}
    </div>
  );
};

export default StarryBackground;
