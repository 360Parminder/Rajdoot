import React, { useRef, useEffect, useState } from 'react';

const Lines = ({ children, className = "" }) => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const animationRef = useRef();
    const gridRef = useRef({
        lines: [],
        beams: []
    });
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Detect dark mode
    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => setIsDarkMode(e.matches || document.documentElement.classList.contains('dark'));
        
        // Check for initial dark mode
        setIsDarkMode(darkModeMediaQuery.matches || document.documentElement.classList.contains('dark'));
        
        // Listen for changes
        darkModeMediaQuery.addEventListener('change', handleChange);
        
        // Observer for class changes on html element (for manual dark mode toggles)
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    setIsDarkMode(document.documentElement.classList.contains('dark'));
                }
            });
        });
        
        observer.observe(document.documentElement, { attributes: true });
        
        return () => {
            darkModeMediaQuery.removeEventListener('change', handleChange);
            observer.disconnect();
        };
    }, []);

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

        const resizeObserver = new ResizeObserver(handleResize);
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }
        
        handleResize();

        return () => resizeObserver.disconnect();
    }, []);

    useEffect(() => {
        if (canvasRef.current && canvasRef.current.width > 0 && canvasRef.current.height > 0) {
            // Regenerate beams with appropriate colors when theme changes
            updateBeamColors();
            startAnimation();
        }

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isDarkMode]);

    const updateBeamColors = () => {
        const { beams } = gridRef.current;
        beams.forEach(beam => {
            // Different color schemes for light and dark mode
            if (isDarkMode) {
                beam.color = `hsla(${200 + Math.random() * 40}, 80%, 60%, 0.8)`;
            } else {
                beam.color = `hsla(${220 + Math.random() * 40}, 80%, 40%, 0.6)`;
            }
        });
    };

    const initializeGrid = (width, height) => {
        const gridSize = Math.min(width, height) / 15;
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
        
        // Create beams
        const beams = [];
        for (let i = 1; i < verticalLines; i++) {
            beams.push({
                x: i * gridSize,
                y: Math.random() * height * 0.3,
                length: 30 + Math.random() * 70,
                speed: 0.5 + Math.random() * 1.5,
                color: isDarkMode 
                    ? `hsla(${200 + Math.random() * 40}, 80%, 60%, 0.8)`
                    : `hsla(${220 + Math.random() * 40}, 80%, 40%, 0.6)`
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
            ctx.strokeStyle = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
            ctx.lineWidth = 1;
            
            gridRef.current.lines.forEach(line => {
                ctx.beginPath();
                ctx.moveTo(line.x1, line.y1);
                ctx.lineTo(line.x2, line.y2);
                ctx.stroke();
            });
            
            // Draw grid intersections (squares)
            ctx.fillStyle = isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)';
            gridRef.current.lines.forEach(line1 => {
                gridRef.current.lines.forEach(line2 => {
                    if ((line1.x1 === line1.x2 && line2.y1 === line2.y2) || 
                            (line1.y1 === line1.y2 && line2.x1 === line2.x2)) {
                        let x, y;
                        if (line1.x1 === line1.x2) {
                            x = line1.x1;
                            y = line2.y1;
                        } else {
                            x = line2.x1;
                            y = line1.y1;
                        }
                        
                        const squareSize = 4;
                        ctx.fillRect(x - squareSize/2, y - squareSize/2, squareSize, squareSize);
                    }
                });
            });
            
            // Update and draw beams
            gridRef.current.beams.forEach(beam => {
                beam.y += beam.speed;
                if (beam.y - beam.length > height) {
                    beam.y = -beam.length;
                }
                
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
            className={`w-full relative overflow-hidden ${className} bg-neutral-100 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-100`}
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
