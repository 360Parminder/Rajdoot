
import React from 'react';
import { motion } from 'framer-motion';

// Beam component for animated background
const Beam = ({ delay, duration, startX }) => (
  <motion.div
    className="absolute top-0 w-px bg-gradient-to-b from-white to-transparent"
    initial={{ height: 0, opacity: 0, x: startX }}
    animate={{ 
      height: '100vh', 
      opacity: [0, 0.5, 0],
      x: startX,
    }}
    transition={{ 
      duration: duration, 
      repeat: Infinity, 
      delay,
      repeatDelay: Math.random() * 2
    }}
  />
);

const BeamBackground = ({ beamCount = 15 }) => {
  // Generate beams for the background
  const generateBeams = (count) => {
    const beams = [];
    for (let i = 0; i < count; i++) {
      beams.push({
        startX: `${Math.random() * 100}%`,
        duration: 4 + Math.random() * 8,
        delay: Math.random() * 10
      });
    }
    return beams;
  };

  const beams = generateBeams(beamCount);

  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      {beams.map((beam, index) => (
        <Beam 
          key={index}
          startX={beam.startX}
          duration={beam.duration}
          delay={beam.delay}
        />
      ))}
    </div>
  );
};

export default BeamBackground;