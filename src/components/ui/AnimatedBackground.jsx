import React, { useEffect, useRef } from 'react';

const AnimatedBackground = ({ children, className = "" }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const dots = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize dots to match original effect exactly
    const initDots = () => {
      dots.current = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        positions: [
          {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 2 + 1
          },
          {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 2 + 1
          },
          {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 2 + 1
          }
        ],
        currentPosition: 0,
        duration: Math.random() * 10 + 20,
        startTime: null,
        currentScale: Math.random() * 2 + 1
      }));
    };

    initDots();

    // Animation loop
    const animate = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.current.forEach(dot => {
        if (!dot.startTime) dot.startTime = timestamp;

        const elapsed = (timestamp - dot.startTime) / 1000;
        const progress = elapsed / dot.duration;

        if (progress >= 1) {
          // Move to next position in the sequence
          dot.startTime = timestamp;
          dot.currentPosition = (dot.currentPosition + 1) % 3;
        } else {
          // Draw dot at current position
          const fromPos = dot.positions[dot.currentPosition];
          const toPos = dot.positions[(dot.currentPosition + 1) % 3];

          const x = fromPos.x + (toPos.x - fromPos.x) * progress;
          const y = fromPos.y + (toPos.y - fromPos.y) * progress;
          const scale = fromPos.scale + (toPos.scale - fromPos.scale) * progress;

          ctx.beginPath();
          ctx.arc(x, y, scale, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className={`min-h-screen bg-black text-white relative overflow-hidden ${className}`}>
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;