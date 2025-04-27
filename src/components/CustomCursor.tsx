
import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorFollower = cursorFollowerRef.current;
    
    if (!cursorDot || !cursorFollower) return;
    
    const mouseMoveHandler = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;
      
      // Position the dot directly at cursor position
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
      
      // Add slight delay for follower
      setTimeout(() => {
        cursorFollower.style.left = `${posX}px`;
        cursorFollower.style.top = `${posY}px`;
      }, 50);
    };
    
    const mouseDownHandler = () => {
      cursorDot.classList.add('cursor-active');
      cursorFollower.classList.add('cursor-active');
    };
    
    const mouseUpHandler = () => {
      cursorDot.classList.remove('cursor-active');
      cursorFollower.classList.remove('cursor-active');
    };
    
    const handleMouseOver = () => {
      cursorDot.classList.add('cursor-hover');
      cursorFollower.classList.add('cursor-hover');
    };
    
    const handleMouseOut = () => {
      cursorDot.classList.remove('cursor-hover');
      cursorFollower.classList.remove('cursor-hover');
    };
    
    // Add event listeners
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mousedown', mouseDownHandler);
    document.addEventListener('mouseup', mouseUpHandler);
    
    const clickables = document.querySelectorAll('a, button, .cursor-hover-element');
    clickables.forEach(el => {
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('mouseout', handleMouseOut);
    });
    
    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mousedown', mouseDownHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
      
      clickables.forEach(el => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);
  
  // Check if device is mobile or tablet
  const isMobileOrTablet = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };
  
  // Only render custom cursor on desktop
  if (typeof window !== 'undefined' && isMobileOrTablet()) {
    return null;
  }
  
  return (
    <div className="custom-cursor-container">
      <div ref={cursorDotRef} className="cursor-dot"></div>
      <div ref={cursorFollowerRef} className="cursor-follower"></div>
    </div>
  );
};

export default CustomCursor;
