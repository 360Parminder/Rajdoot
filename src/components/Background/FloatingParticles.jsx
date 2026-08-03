import React, { useRef, useEffect, useState } from 'react';

const FloatingParticles = ({ children, className = "" }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && containerRef.current) {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        
        // Generate new particles when size changes
        if (canvas.width > 0 && canvas.height > 0) {
          particlesRef.current = generateParticles(canvas.width, canvas.height);
        }
      }
    };

    // Use ResizeObserver for better performance
    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    
    // Initial sizing
    handleResize();

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    // Start animation if canvas is available
    if (canvasRef.current && canvasRef.current.width > 0 && canvasRef.current.height > 0) {
      startAnimation();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const generateParticles = (width, height) => {
    return Array.from({ length: 150 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 3 + Math.random() * 6,
      speedX: Math.random() * 2 - 1,
      speedY: Math.random() * 2 - 1,
      opacity: 0.3 + Math.random() * 0.5,
      color: `hsla(${220 + Math.random() * 60}, 70%, 60%, `,
      scaleDirection: Math.random() > 0.5 ? 1 : -1,
      scaleSpeed: 0.01 + Math.random() * 0.01,
      scale: 1,
    }));
  };

  const startAnimation = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.speedX *= -1;
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.speedY *= -1;
        }
        
        // Update scale
        particle.scale += particle.scaleSpeed * particle.scaleDirection;
        if (particle.scale > 1.2 || particle.scale < 0.9) {
          particle.scaleDirection *= -1;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.size * particle.scale,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `${particle.color}${particle.opacity})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
  };

  return (
    <div 
      ref={containerRef}
      className={`w-full relative overflow-hidden ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="w-full relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FloatingParticles;