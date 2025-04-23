
import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}

const Particles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  
  useEffect(() => {
    // Generate random particles
    const colors = [
      'rgba(139, 92, 246, 0.3)', // Purple
      'rgba(56, 189, 248, 0.3)', // Blue
      'rgba(232, 121, 249, 0.3)', // Pink
    ];
    
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < 15; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 80 + 40,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 5
      });
    }
    
    setParticles(newParticles);
  }, []);
  
  return (
    <div className="particles-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            filter: 'blur(40px)',
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
