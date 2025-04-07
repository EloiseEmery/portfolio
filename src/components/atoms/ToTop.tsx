import React from 'react';

function ToTop() {
    const scrollToTop = () => {
        console.log('Button clicked');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-20 right-4 md:left-4 z-50">
        <button onClick={scrollToTop} className="cursor-pointer bg-colorWhite/15 text-white py-2 px-6 rounded-full shadow-lg hover:bg-colorQuaternary/25 transition-all">
                ↑
            </button>
        </div>
    );
}

export default ToTop;