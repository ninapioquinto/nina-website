
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
    
    // Initialize mouse position
    let mousePos = { x: 0, y: 0 };
    let lastMousePos = { ...mousePos };
    
    // Mouse event handlers
    const handleMouseMove = (e: MouseEvent) => {
      mousePos = {
        x: e.clientX / window.innerWidth,
        y: 1.0 - (e.clientY / window.innerHeight)
      };
    };

    // Add event listeners safely
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    // Animation frame reference for proper cleanup
    let animationFrameId: number | null = null;

    // Render loop with safe animation frame handling
    const render = () => {
      if (!canvas) return;
      
      const gl = canvas.getContext('webgl2', {
        alpha: true,
        preserveDrawingBuffer: false
      });
      
      if (!gl) return;
      
      // Calculate velocity based on mouse movement
      const dx = (mousePos.x - lastMousePos.x) * 10;
      const dy = (mousePos.y - lastMousePos.y) * 10;
      
      lastMousePos = { ...mousePos };
      
      // Update cursor position
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      // Request next frame safely
      animationFrameId = requestAnimationFrame(render);
    };

    // Start animation with safe reference
    animationFrameId = requestAnimationFrame(render);

    // Cleanup function
    return () => {
      // Cancel animation frame if it exists
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      
      // Remove event listeners
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Hide default cursor and render our canvas
  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-50"
      style={{ cursor: 'none' }}
    />
  );
};

export default CustomCursor;
