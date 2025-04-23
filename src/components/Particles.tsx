
import React, { useEffect, useState, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  opacity: number;
}

const Particles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  
  useEffect(() => {
    // Generate random particles with better colors for lemni.com style
    const colors = [
      'rgba(139, 92, 246, 0.12)', // Purple
      'rgba(56, 189, 248, 0.12)', // Blue
      'rgba(232, 121, 249, 0.12)', // Pink
      'rgba(167, 139, 250, 0.12)', // Lavender
    ];
    
    const newParticles: Particle[] = [];
    
    // Create more particles for a denser effect
    for (let i = 0; i < 24; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 180 + 70, // Larger particles
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 5,
        duration: 25 + Math.random() * 30, // Slower movement
        opacity: 0.1 + Math.random() * 0.25 // Variable opacity
      });
    }
    
    setParticles(newParticles);

    // Create animation loop
    const animate = (time: number) => {
      if (previousTimeRef.current !== undefined) {
        // Animation logic could go here if needed
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current as number);
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
            filter: 'blur(80px)',
            opacity: particle.opacity,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
