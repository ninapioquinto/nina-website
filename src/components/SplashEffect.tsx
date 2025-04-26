
import React, { useEffect, useRef } from 'react';

interface SplashParticle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  alpha: number;
}

const SplashEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<SplashParticle[]>([]);
  const mousePos = useRef({ x: -100, y: -100 });
  const lastPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (x: number, y: number, dx: number, dy: number) => {
      particles.current.push({
        x,
        y,
        dx: dx * (Math.random() * 2 + 2),
        dy: dy * (Math.random() * 2 + 2),
        size: Math.random() * 3 + 2,
        alpha: 1
      });
    };

    const updateParticles = () => {
      particles.current = particles.current.filter(p => p.alpha > 0.01);
      particles.current.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;
        p.alpha *= 0.96;
        p.size *= 0.97;
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.current.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(270, 76%, 56%, ${p.alpha})`;
        ctx.fill();
      });
    };

    const generateSplashParticles = () => {
      const dx = mousePos.current.x - lastPos.current.x;
      const dy = mousePos.current.y - lastPos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance > 5) {
        const angle = Math.atan2(dy, dx);
        const particleCount = Math.min(Math.floor(distance / 2), 5);
        
        for (let i = 0; i < particleCount; i++) {
          const spread = (Math.random() - 0.5) * Math.PI / 2;
          const velocity = Math.random() * 0.5 + 0.5;
          createParticle(
            mousePos.current.x,
            mousePos.current.y,
            Math.cos(angle + spread) * velocity,
            Math.sin(angle + spread) * velocity
          );
        }
        
        lastPos.current = { ...mousePos.current };
      }
    };

    const animate = () => {
      generateSplashParticles();
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default SplashEffect;
