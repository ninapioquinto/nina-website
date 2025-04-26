
import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Globe from './Globe';

const Scene: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!canvasRef.current) return;
      
      const rect = canvasRef.current.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      
      setMousePosition({ x, y });
    };

    const currentCanvasRef = canvasRef.current;
    if (currentCanvasRef) {
      currentCanvasRef.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (currentCanvasRef) {
        currentCanvasRef.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full" ref={canvasRef}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {/* Main globe */}
        <Globe position={[0, 0, 0]} scale={1.3} mousePosition={mousePosition} />
        
        {/* Subtle particles in background */}
        <Stars 
          radius={50} 
          depth={50} 
          count={1000} 
          factor={4} 
          saturation={0.5} 
          fade 
          speed={0.5} 
        />
        
        {/* Disable orbit controls for production, but useful for development */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false} 
        />
      </Canvas>
    </div>
  );
};

export default Scene;
