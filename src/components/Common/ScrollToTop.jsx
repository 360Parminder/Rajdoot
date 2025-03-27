import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set up scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="scroll-to-top"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp />
                </button>
            )}

            <style jsx>{`
                .scroll-to-top {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    background-color: #ff5a5f;
                    color: white;
                    border: none;
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                    font-size: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                    transition: all 0.3s ease;
                    z-index: 1000;
                }

                .scroll-to-top:hover {
                    transform: translateY(-3px);
                    background-color: #e74c3c;
                }
            `}</style>
        </>
    );
};

export default ScrollToTop;