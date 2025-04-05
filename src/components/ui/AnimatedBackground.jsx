import React, { useEffect, useRef } from 'react';

const AnimatedBackground = ({ children, className = "" }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const dots = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const container = containerRef.current;

    // Set canvas size based on container
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      
      // Reinitialize dots when resized
      initDots();
    };

    // Initialize dots with proper container dimensions
    const initDots = () => {
      dots.current = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        positions: [
          {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            scale: Math.random() * 6 + 4
          },
          {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            scale: Math.random() * 6 + 4
          },
          {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            scale: Math.random() * 6 + 4
          }
        ],
        currentPosition: 0,
        duration: Math.random() * 10 + 20,
        startTime: null,
        currentScale: Math.random() * 70 + 30
      }));
    };

    // Start with initial resize
    resizeCanvas();
    
    // Use ResizeObserver for better performance than window resize
    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(container);

    // Animation loop
    const animate = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Use scaling to maintain dot shape
      ctx.save();
      const scale = Math.min(
        canvas.width / window.innerWidth,
        canvas.height / window.innerHeight
      );
      ctx.scale(scale, scale);

      dots.current.forEach(dot => {
        if (!dot.startTime) dot.startTime = timestamp;

        const elapsed = (timestamp - dot.startTime) / 1000;
        const progress = elapsed / dot.duration;

        if (progress >= 1) {
          dot.startTime = timestamp;
          dot.currentPosition = (dot.currentPosition + 1) % 3;
        } else {
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

      ctx.restore();
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ background: 'black', color: 'white' }}
    >
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