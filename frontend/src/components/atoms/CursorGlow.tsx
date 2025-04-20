import React, { useEffect } from 'react';

const CursorGlow: React.FC = () => {
  useEffect(() => {
    const cursorGlow = document.createElement('div');
    const cursorGlowTrail = document.createElement('div');
    cursorGlow.classList.add('cursor-glow');
    cursorGlowTrail.classList.add('cursor-glow-trail');
    document.body.appendChild(cursorGlow);
    document.body.appendChild(cursorGlowTrail);

    const moveCursor = (e: MouseEvent) => {
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
      
      // Add a slight delay to the trail for a smooth effect
      setTimeout(() => {
        cursorGlowTrail.style.left = `${e.clientX}px`;
        cursorGlowTrail.style.top = `${e.clientY}px`;
      }, 100);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursorGlow);
      document.body.removeChild(cursorGlowTrail);
    };
  }, []);

  return null;
};

export default CursorGlow;
