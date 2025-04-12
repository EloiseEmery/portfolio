import { useState, useEffect } from 'react';

function ToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Only show button when user has scrolled 300px
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    };

    // Add event listener for scroll
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-5 md:bottom-20 right-4 z-50">
            {isVisible && (
                <button onClick={scrollToTop} className="cursor-pointer dark:bg-colorWhite/15 bg-colorBlack/25 text-white py-2 px-6 rounded-full border dark:border-colorWhite/20 border-colorMain/10 hover:bg-colorTertiary/50 dark:hover:bg-colorQuaternary/50 transition-all" aria-label="Scroll to top">
                    ↑
                </button>
            )}
        </div>
    );
}

export default ToTop;