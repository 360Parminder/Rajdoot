import React, { useRef, useEffect } from 'react';

const FloatingCapsule = () => {
    const canvasRef = useRef(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let capsules = [];
        
        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            // Re-initialize capsules when canvas is resized
            initCapsules();
        };
        
        // Initialize capsules
        const initCapsules = () => {
            capsules = [];
            for (let i = 0; i < 150; i++) {
                capsules.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    width: 0.5,
                    height: Math.random() * 35 + 10,
                    speed: Math.random() * 0.7 + 0.2,
                    opacity: Math.random() * 1,
                    angle: Math.random() * Math.PI * 3
                });
            }
        };
        
        // Animate capsules
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Draw gradient background
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw capsules
            capsules.forEach(capsule => {
                ctx.save();
                ctx.globalAlpha = capsule.opacity;
                ctx.fillStyle = `rgba(255, 255, 255, ${capsule.opacity})`;
                
                // Move capsule position (changed from -= to += to move downward)
                capsule.y += capsule.speed;
                
                // Reset position if it goes out of bounds
                if (capsule.y > canvas.height) {
                    capsule.y = -capsule.height;
                    capsule.x = Math.random() * canvas.width;
                }
                
                // Draw rounded rectangle (capsule)
                roundedRect(
                    ctx, 
                    capsule.x, 
                    capsule.y, 
                    capsule.width, 
                    capsule.height, 
                    Math.min(capsule.width, capsule.height) / 2
                );
                
                ctx.restore();
            });
            
            requestAnimationFrame(animate);
        };
        
        // Helper function to draw rounded rectangle
        const roundedRect = (ctx, x, y, width, height, radius) => {
            ctx.beginPath();
            ctx.moveTo(x + radius, y);
            ctx.arcTo(x + width, y, x + width, y + height, radius);
            ctx.arcTo(x + width, y + height, x, y + height, radius);
            ctx.arcTo(x, y + height, x, y, radius);
            ctx.arcTo(x, y, x + width, y, radius);
            ctx.closePath();
            ctx.fill();
        };
        
        // Set up resizing
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        
        // Start animation
        animate();
        
        // Clean up
        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);
    
    return (
        <canvas 
            ref={canvasRef} 
            className="absolute inset-0 -z-10 bg-black"
        />
    );
};

export default FloatingCapsule;