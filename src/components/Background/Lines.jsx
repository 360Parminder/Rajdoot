import React, { useRef, useEffect } from 'react';

const Lines = ({ children, className = "" }) => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const animationRef = useRef();
    const gridRef = useRef({
        lines: [],
        beams: []
    });

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current && containerRef.current) {
                const canvas = canvasRef.current;
                const container = containerRef.current;
                const rect = container.getBoundingClientRect();
                canvas.width = rect.width;
                canvas.height = rect.height;
                
                // Generate new grid when size changes
                initializeGrid(canvas.width, canvas.height);
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

    const initializeGrid = (width, height) => {
        // Create grid lines
        const gridSize = Math.min(width, height) / 15; // Adjust for grid density
        const horizontalLines = Math.floor(height / gridSize);
        const verticalLines = Math.floor(width / gridSize);
        
        const lines = [];
        
        // Horizontal lines
        for (let i = 1; i < horizontalLines; i++) {
            lines.push({
                x1: 0,
                y1: i * gridSize,
                x2: width,
                y2: i * gridSize
            });
        }
        
        // Vertical lines
        for (let i = 1; i < verticalLines; i++) {
            lines.push({
                x1: i * gridSize,
                y1: 0,
                x2: i * gridSize,
                y2: height
            });
        }
        
        // Create beams (only vertical movement, top to bottom)
        const beams = [];
        for (let i = 1; i < verticalLines; i++) {
            // Only creating beams for vertical lines
            beams.push({
                x: i * gridSize, // Fixed x position at the vertical line
                y: Math.random() * height * 0.3, // Random start position near the top
                length: 30 + Math.random() * 70, // Random beam length
                speed: 0.5 + Math.random() * 1.5,
                color: `hsla(${200 + Math.random() * 40}, 80%, 60%, 0.8)`
            });
        }
        
        gridRef.current = { lines, beams };
    };

    const startAnimation = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const { width, height } = canvas;

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            
            // Draw grid lines
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.lineWidth = 1;
            
            gridRef.current.lines.forEach(line => {
                ctx.beginPath();
                ctx.moveTo(line.x1, line.y1);
                ctx.lineTo(line.x2, line.y2);
                ctx.stroke();
            });
            
            // Draw grid intersections (squares)
            ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
            gridRef.current.lines.forEach(line1 => {
                gridRef.current.lines.forEach(line2 => {
                    // Only process if one is horizontal and one is vertical
                    if ((line1.x1 === line1.x2 && line2.y1 === line2.y2) || 
                            (line1.y1 === line1.y2 && line2.x1 === line2.x2)) {
                        // Find intersection
                        let x, y;
                        if (line1.x1 === line1.x2) { // line1 is vertical
                            x = line1.x1;
                            y = line2.y1;
                        } else { // line1 is horizontal
                            x = line2.x1;
                            y = line1.y1;
                        }
                        
                        // Draw small square at intersection
                        const squareSize = 4;
                        ctx.fillRect(x - squareSize/2, y - squareSize/2, squareSize, squareSize);
                    }
                });
            });
            
            // Update and draw beams
            gridRef.current.beams.forEach(beam => {
                // Update position (only moving top to bottom)
                beam.y += beam.speed;
                if (beam.y - beam.length > height) {
                    // Reset beam to top when it goes off screen
                    beam.y = -beam.length;
                }
                
                // Draw beam
                const gradient = ctx.createLinearGradient(beam.x, beam.y - beam.length, beam.x, beam.y);
                gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
                gradient.addColorStop(0.3, beam.color);
                gradient.addColorStop(1, beam.color);
                
                ctx.beginPath();
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2;
                ctx.moveTo(beam.x, beam.y - beam.length);
                ctx.lineTo(beam.x, beam.y);
                ctx.stroke();
                
                // Add glow effect
                ctx.strokeStyle = beam.color;
                ctx.lineWidth = 1;
                ctx.globalAlpha = 0.3;
                ctx.beginPath();
                ctx.moveTo(beam.x, beam.y - beam.length * 0.7);
                ctx.lineTo(beam.x, beam.y);
                ctx.stroke();
                ctx.globalAlpha = 1;
            });
            
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();
    };

    return (
        <div 
            ref={containerRef}
            className={`w-full relative overflow-hidden ${className}`}
            style={{ background: 'linear-gradient(to bottom, #000205, #00071a)' }}
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

export default Lines;
