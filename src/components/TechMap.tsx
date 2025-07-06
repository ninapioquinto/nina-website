
'use client'
import React from 'react';
import DottedMap from 'dotted-map';

const map = new DottedMap({ height: 55, grid: 'diagonal' });
const points = map.getPoints();

const svgOptions = {
  backgroundColor: 'transparent',
  color: 'rgb(30, 58, 95)', // navy blue instead of purple
  radius: 0.25,
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
          opacity={1}
          className="animate-pulse drop-shadow-sm"
          style={{
            filter: 'drop-shadow(0 0 2px rgba(30, 58, 95, 0.6))'
          }}
        />
      ))}
    </svg>
  );
};

export default TechMap;
