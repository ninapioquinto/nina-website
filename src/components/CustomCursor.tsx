
import React, { useEffect, useState, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  life: number;
  maxLife: number;
}

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [prevMousePos, setPrevMousePos] = useState({ x: -100, y: -100 });
  const animationFrameRef = useRef<number | null>(null);
  const lastUpdateTime = useRef<number>(Date.now());
  
  // Splash effect color - can be easily customized
  const splashColor = "rgba(139, 92, 246, 0.7)"; // Primary color (purple)

  // Initialize cursor and add event listeners
  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    if (!cursor || !follower) return;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Update the current mouse position
      setMousePos({ x: clientX, y: clientY });
      
      // Generate particles based on mouse speed
      const now = Date.now();
      const dt = now - lastUpdateTime.current;
      
      if (dt > 30) { // Limit particle generation rate
        const dx = clientX - prevMousePos.x;
        const dy = clientY - prevMousePos.y;
        const speed = Math.sqrt(dx * dx + dy * dy);
        
        // Only generate particles if the mouse is moving fast enough
        if (speed > 5) {
          // Generate 1-3 particles based on speed
          const particlesToAdd = Math.min(Math.floor(speed / 10) + 1, 3);
          
          for (let i = 0; i < particlesToAdd; i++) {
            createParticle(clientX, clientY);
          }
        }
        
        setPrevMousePos({ x: clientX, y: clientY });
        lastUpdateTime.current = now;
      }
      
      // Check if mouse is over a clickable element
      const target = e.target as HTMLElement;
      const isHoverable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.tagName === 'INPUT' || 
        target.closest('button') || 
        target.closest('a') || 
        target.closest('input');
      
      setIsHovering(!!isHoverable);
    };
    
    // Handle mouse leave
    const handleMouseLeave = () => {
      setMousePos({ x: -100, y: -100 });
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      // Cancel any ongoing animation frame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Update cursor position
  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    if (!cursor || !follower) return;
    
    cursor.style.transform = `translate(${mousePos.x}px, ${mousePos.y}px)`;
    follower.style.transform = `translate(${mousePos.x}px, ${mousePos.y}px)`;
  }, [mousePos]);

  // Create a new particle
  const createParticle = (x: number, y: number) => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 2 + 1;
    
    const newParticle: Particle = {
      x,
      y,
      size: Math.random() * 10 + 5,
      speedX: Math.cos(angle) * speed,
      speedY: Math.sin(angle) * speed,
      life: 0,
      maxLife: Math.random() * 20 + 20
    };
    
    setParticles(prev => [...prev, newParticle]);
  };

  // Animate particles
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles
          .map(p => ({
            ...p,
            x: p.x + p.speedX,
            y: p.y + p.speedY,
            size: p.size * 0.95,
            life: p.life + 1
          }))
          .filter(p => p.life < p.maxLife && p.size > 0.5)
      );
      
      animationFrameRef.current = requestAnimationFrame(animateParticles);
    };
    
    animationFrameRef.current = requestAnimationFrame(animateParticles);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      />
      <div 
        ref={followerRef}
        className="custom-cursor-follower"
      />
      
      {/* Render particles */}
      {particles.map((particle, index) => {
        const opacity = 1 - (particle.life / particle.maxLife);
        
        return (
          <div
            key={index}
            className="custom-cursor-particle"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity,
              background: splashColor,
              boxShadow: `0 0 ${particle.size * 2}px ${splashColor}`
            }}
          />
        );
      })}
    </>
  );
};

export default CustomCursor;
