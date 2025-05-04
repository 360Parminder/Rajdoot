import React, { useEffect, useRef } from 'react';

const AnimatedBackground = ({ children, className = "" }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const dots = useRef([]);

  // Color palette for the particles
  const colors = [
    'rgba(43, 90, 251, 1)',  // Blue  
    'rgba(150, 23, 250, 1)', // Purple 
    'rgba(115, 66, 250, 1)', // Indigo
       
  ];

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
      const particleCount = Math.max(100, Math.floor((canvas.width * canvas.height) / 1000));
      
      dots.current = Array.from({ length: particleCount }, (_, i) => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        return {
          id: i,
          color,
          positions: [
            {
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              scale: Math.random() * 2 + 0  // Smaller particles (1-3px)
            },
            {
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              scale: Math.random() * 2 + 1
            },
            {
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              scale: Math.random() * 2 + 1
            }
          ],
          currentPosition: 0,
          duration: Math.random() * 15 + 25, // Faster movement
          startTime: null,
          currentScale: Math.random() * 2 + 1
        };
      });
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
          ctx.fillStyle = dot.color;
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
      className={`w-full relative overflow-hidden ${className}`}
      style={{ background: 'black', color: 'white' }}
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
      <div className=" w-full relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;