
import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Set up the canvas to match the window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initial color matching the "Luna" text gradient
    const primaryColor = {
      r: 0.545, // 139 / 255 (from #8B5CF6)
      g: 0.361, // 92 / 255
      b: 0.965  // 246 / 255
    };

    // Initialize WebGL context
    const gl = canvas.getContext('webgl2', {
      alpha: true,
      preserveDrawingBuffer: false
    });
    
    if (!gl) {
      console.error('WebGL 2 not supported');
      return;
    }

    let mousePos = { x: 0, y: 0 };
    let lastMousePos = { x: 0, y: 0 };
    
    // Mouse event handlers
    const handleMouseMove = (e: MouseEvent) => {
      mousePos = {
        x: e.clientX / window.innerWidth,
        y: 1.0 - (e.clientY / window.innerHeight)
      };
    };

    // Set up event listeners
    window.addEventListener('mousemove', handleMouseMove);

    // Animation frame
    let animationFrameId: number;

    // Render loop
    const render = () => {
      // Calculate velocity based on mouse movement
      const dx = (mousePos.x - lastMousePos.x) * 10;
      const dy = (mousePos.y - lastMousePos.y) * 10;
      
      lastMousePos = { ...mousePos };
      
      // Update cursor position
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      // We would implement fluid simulation here
      // For now we'll just draw a simple gradient circle
      const centerX = mousePos.x;
      const centerY = mousePos.y;

      // Request next frame
      animationFrameId = requestAnimationFrame(render);
    };

    // Start animation
    render();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Hide default cursor and render our canvas
  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none z-50"
      style={{ cursor: 'none' }}
    />
  );
};

export default CustomCursor;
