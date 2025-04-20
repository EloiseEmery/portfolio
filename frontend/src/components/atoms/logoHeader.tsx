import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface LogoHeaderProps {
  isScrolled: boolean;
}

function LogoHeader({ isScrolled }: LogoHeaderProps) {
  const [displayText, setDisplayText] = useState('eloemery~');
  const [isErasing, setIsErasing] = useState(false);
  const [isRebuilding, setIsRebuilding] = useState(false);

  // Letter-by-letter erasing effect
  useEffect(() => {
    if (!isScrolled) return;

    const eraseInterval = setInterval(() => {
      setDisplayText(prev => {
        // If already at 'eloe~', stop erasing
        if (prev === 'eloe~') {
          clearInterval(eraseInterval);
          setIsErasing(false);
          return prev;
        }

        // Erase one character at a time
        const newText = prev.slice(0, -1);
        
        // If newText is empty or reaches 'eloe~', stop
        if (newText.length <= 4) {
          clearInterval(eraseInterval);
          setIsErasing(false);
          return 'eloe~';
        }
        
        return newText;
      });
    }, 100);

    return () => clearInterval(eraseInterval);
  }, [isScrolled]);

  // Letter-by-letter rebuilding effect
  useEffect(() => {
    if (isScrolled) return;

    const fullText = 'eloemery~';
    let currentIndex = displayText.length;

    const rebuildInterval = setInterval(() => {
      if (currentIndex >= fullText.length) {
        clearInterval(rebuildInterval);
        setIsRebuilding(false);
        setDisplayText(fullText);
        return;
      }

      setDisplayText(prev => {
        const newText = fullText.slice(0, currentIndex + 1);
        currentIndex++;
        return newText;
      });
    }, 100);

    return () => clearInterval(rebuildInterval);
  }, [isScrolled]);

  return (
    <div>
      {/* Logo */}
      <p className={`text-shadow(10px 10px 10px rgba(0, 0, 0, 1))  text-colorBlack dark:text-colorWhite transition-all duration-300 ease-in-out text-md ${isScrolled ? 'text-sm' : 'text-md'} font-sans font-medium`}>
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          {displayText}
        </Link>
      </p>
    </div>
  );
}

export default LogoHeader;