
'use client'
import React from 'react';
import DottedMap from 'dotted-map';

const map = new DottedMap({ height: 55, grid: 'diagonal' });
const points = map.getPoints();

const svgOptions = {
  backgroundColor: 'transparent',
  color: 'rgb(168, 85, 247)', // brighter purple-500
  radius: 0.2,
};

const TechMap = () => {
  const viewBox = `0 0 120 60`;
  return (
    <svg viewBox={viewBox} style={{ background: svgOptions.backgroundColor }} className="w-full h-full">
      {points.map((point, index) => (
        <circle 
          key={index} 
          cx={point.x} 
          cy={point.y} 
          r={svgOptions.radius} 
          fill={svgOptions.color}
          opacity={0.8}
          className="animate-pulse"
        />
      ))}
    </svg>
  );
};

export default TechMap;
