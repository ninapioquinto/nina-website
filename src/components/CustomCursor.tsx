
import React, { useEffect, useState, useCallback } from 'react';
import SplashParticle from './SplashParticle';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const addParticle = useCallback((x: number, y: number) => {
    const id = Date.now();
    setParticles(prev => [...prev, { id, x, y }]);
    setTimeout(() => {
      setParticles(prev => prev.filter(particle => particle.id !== id));
    }, 1000);
  }, []);

  useEffect(() => {
    let lastX = -100;
    let lastY = -100;
    let particleTimeout: number | null = null;

    const updatePosition = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;
      setPosition({ x: newX, y: newY });

      const distance = Math.hypot(newX - lastX, newY - lastY);
      if (distance > 20 && !particleTimeout) {
        addParticle(newX, newY);
        particleTimeout = window.setTimeout(() => {
          particleTimeout = null;
        }, 50);
      }
      lastX = newX;
      lastY = newY;
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' || 
          target.closest('a') || 
          target.closest('button')) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => setIsHovering(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleHoverStart);
    document.addEventListener('mouseout', handleHoverEnd);
    
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleHoverStart);
      document.removeEventListener('mouseout', handleHoverEnd);
    };
  }, [addParticle]);

  if (typeof window === 'undefined') return null;
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return null;

  return (
    <>
      <div 
        className="custom-cursor"
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)`,
          opacity: isVisible ? 1 : 0,
          width: isHovering ? '50px' : '20px',
          height: isHovering ? '50px' : '20px',
        }}
      />
      {particles.map(particle => (
        <SplashParticle
          key={particle.id}
          x={particle.x}
          y={particle.y}
        />
      ))}
    </>
  );
};

export default CustomCursor;
