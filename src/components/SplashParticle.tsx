
import React, { useEffect, useRef } from 'react';

interface SplashParticleProps {
  x: number;
  y: number;
  color?: string;
}

const SplashParticle: React.FC<SplashParticleProps> = ({ x, y, color = '#8B5CF6' }) => {
  const particleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const particle = particleRef.current;
    if (!particle) return;

    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 2 + 1;
    const size = Math.random() * 15 + 5;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    const dx = Math.cos(angle) * velocity;
    const dy = Math.sin(angle) * velocity;
    
    let opacity = 0.6;
    let posX = x;
    let posY = y;
    
    const animate = () => {
      if (opacity <= 0) {
        if (particle && particle.parentElement) {
          particle.parentElement.removeChild(particle);
        }
        return;
      }
      
      opacity -= 0.02;
      posX += dx;
      posY += dy;
      
      if (particle) {
        particle.style.opacity = opacity.toString();
        particle.style.transform = `translate(${posX}px, ${posY}px)`;
      }
      
      requestAnimationFrame(animate);
    };
    
    requestAnimationFrame(animate);
  }, [x, y]);

  return (
    <div
      ref={particleRef}
      className="splash-particle"
      style={{
        position: 'fixed',
        left: -5,
        top: -5,
        backgroundColor: color,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0.6,
        transform: `translate(${x}px, ${y}px)`,
      }}
    />
  );
};

export default SplashParticle;
