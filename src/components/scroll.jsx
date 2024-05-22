// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 w-14 h-14 right-5 z-50 p-2 bg-primary text-white rounded-full text-sm hover:bg-green_bg transition duration-300 ease-in-out focus:outline-none shadow-lg"
                    aria-label="Scroll to top"
                >
                    ↑
                </button>
            )}
        </>
    );
};

export default ScrollToTopButton;