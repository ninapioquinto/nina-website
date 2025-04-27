
import React, { useEffect, useRef } from 'react';

const FluidCursor = () => {
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

    // Luna purple color
    const primaryColor = {
      r: 139/255, // #8B5CF6
      g: 92/255,
      b: 246/255
    };

    // WebGL setup
    const gl = canvas.getContext('webgl2', {
      alpha: true,
      preserveDrawingBuffer: false
    });
    
    if (!gl) {
      console.error('WebGL 2 not supported');
      return;
    }

    // Create vertex shader
    const vertexShaderSource = `#version 300 es
      in vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;
    
    // Create fragment shader with fluid simulation
    const fragmentShaderSource = `#version 300 es
      precision highp float;
      uniform vec2 resolution;
      uniform vec2 mouse;
      uniform vec2 prevMouse;
      uniform float time;
      out vec4 fragColor;
      
      // Fluid simulation parameters
      const float viscosity = 0.98;
      const float mouseFactor = 0.15;
      
      void main() {
        vec2 uv = gl_FragCoord.xy / resolution;
        
        // Calculate distance to current and previous mouse positions
        float distToMouse = length(uv - mouse);
        float distToPrevMouse = length(uv - prevMouse);
        
        // Calculate movement vector
        vec2 mouseDir = normalize(mouse - prevMouse) * 0.05;
        
        // Create fluid effect
        float trailStrength = exp(-distToMouse * 10.0);
        float wakeStrength = smoothstep(0.05, 0.0, distToPrevMouse) * length(mouse - prevMouse) * 5.0;
        
        // Combine effects
        float strength = max(trailStrength, wakeStrength * mouseFactor);
        
        // Luna purple color from the website
        vec3 color = vec3(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b});
        
        // Adjust alpha based on strength
        float alpha = strength * 0.7;
        
        // Output final color
        fragColor = vec4(color, alpha);
      }
    `;
    
    // Create shader program
    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      
      return shader;
    };
    
    const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    
    if (!vertexShader || !fragmentShader) {
      console.error('Could not create shaders');
      return;
    }
    
    const program = gl.createProgram();
    if (!program) {
      console.error('Could not create program');
      return;
    }
    
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program linking error:', gl.getProgramInfoLog(program));
      return;
    }
    
    gl.useProgram(program);
    
    // Create geometry (a quad covering the entire canvas)
    const positions = new Float32Array([
      -1.0, -1.0,
       1.0, -1.0,
      -1.0,  1.0,
       1.0,  1.0
    ]);
    
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    
    // Set up attributes
    const positionAttributeLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);
    
    // Set up uniforms
    const resolutionLocation = gl.getUniformLocation(program, 'resolution');
    const mouseLocation = gl.getUniformLocation(program, 'mouse');
    const prevMouseLocation = gl.getUniformLocation(program, 'prevMouse');
    const timeLocation = gl.getUniformLocation(program, 'time');
    
    // Mouse tracking variables
    let mousePos = { x: 0.5, y: 0.5 };
    let prevMousePos = { x: 0.5, y: 0.5 };
    let startTime = Date.now();
    
    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      prevMousePos = { ...mousePos };
      mousePos = {
        x: e.clientX / window.innerWidth,
        y: 1.0 - (e.clientY / window.innerHeight) // Flip Y for WebGL
      };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Render loop
    const render = () => {
      const time = (Date.now() - startTime) / 1000; // seconds
      
      // Update uniforms
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform2f(mouseLocation, mousePos.x, mousePos.y);
      gl.uniform2f(prevMouseLocation, prevMousePos.x, prevMousePos.y);
      gl.uniform1f(timeLocation, time);
      
      // Enable blending for transparency
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      
      // Clear the canvas
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      
      // Draw the quad
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      
      // Request next frame
      requestAnimationFrame(render);
    };
    
    // Start rendering
    render();
    
    // Cleanup on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      
      if (gl) {
        gl.deleteProgram(program);
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
        gl.deleteBuffer(positionBuffer);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-50"
      style={{ 
        cursor: 'none',
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default FluidCursor;
