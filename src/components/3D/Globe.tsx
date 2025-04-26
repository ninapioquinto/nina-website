
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useEffect } from 'react';

type GlobeProps = {
  position?: [number, number, number];
  scale?: number;
  mousePosition?: { x: number; y: number } | null;
}

const Globe: React.FC<GlobeProps> = ({ 
  position = [0, 0, 0], 
  scale = 1,
  mousePosition 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  
  // Create points geometry for particles on the globe
  useEffect(() => {
    if (!pointsRef.current) return;
    
    const count = 4500;
    const radius = 2.0;
    
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    const color = new THREE.Color();
    
    for (let i = 0; i < count; i++) {
      // Create random points on sphere surface
      const i3 = i * 3;
      
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI;
      
      positions[i3] = radius * Math.sin(theta) * Math.cos(phi);
      positions[i3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i3 + 2] = radius * Math.cos(theta);
      
      // Randomize colors slightly (mostly white with hints of purple)
      const mixAmount = Math.random() * 0.3;
      color.setHSL(0.75, 0.8, 0.8 + Math.random() * 0.2); // Purple-ish base
      
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
      
      // Randomize point sizes
      sizes[i] = Math.random() * 2.5;
    }
    
    const geometry = pointsRef.current.geometry;
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
  }, []);

  // Rotate the globe gently and respond to mouse movement
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
      
      // Respond to mouse movement
      if (mousePosition) {
        const targetX = (mousePosition.x - 0.5) * 0.3;
        const targetY = (mousePosition.y - 0.5) * 0.3;
        
        meshRef.current.rotation.x += (targetY - meshRef.current.rotation.x) * 0.05;
        meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.05;
      }
    }
  });

  return (
    <group position={position} scale={scale}>
      {/* Glowing core sphere */}
      <Sphere args={[1.97, 64, 64]} ref={meshRef}>
        <meshBasicMaterial color="#ffffff" opacity={0.05} transparent />
      </Sphere>
      
      {/* Outer glow */}
      <Sphere args={[2.15, 64, 64]}>
        <meshBasicMaterial color="#8731EC" opacity={0.03} transparent />
      </Sphere>
      
      {/* Points layer */}
      <points ref={pointsRef}>
        <bufferGeometry />
        <pointsMaterial
          size={0.02}
          sizeAttenuation={true}
          vertexColors
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
};

export default Globe;
