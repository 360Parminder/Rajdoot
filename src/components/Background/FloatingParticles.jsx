import React, { useRef, useEffect, useState } from 'react';

const FloatingParticles = () => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const particlesRef = useRef([]);
  const animationRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        setDimensions({ width, height });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 150 }, () => ({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
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

    if (dimensions.width && dimensions.height) {
      particlesRef.current = generateParticles();
      startAnimation();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

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
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default FloatingParticles;