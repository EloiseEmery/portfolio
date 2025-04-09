import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  toggleMenu: () => void;
  menuSrc: string;
  toggleColorMode: () => void;
  colorModeSrc: string;
  toggleLanguage: () => void;
  language: string;
}

function Header({ toggleMenu, menuSrc,toggleColorMode, colorModeSrc, toggleLanguage, language }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll for header height change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <div className={`w-full backdrop-blur-md flex items-center justify-between px-4 md:px-10 transition-all duration-300 ease-in-out fixed top-0 z-50 ${isScrolled ? 'h-[50px] shadow-md bg-gradient-to-tl from-colorBlack to-colorSecondary dark:from-[#dbe2ff] dark:via-colorWhite/100 dark:to-colorWhite dark:sm:from-colorTertiary/0 dark:sm:to-colorWhite/0 sm:from-colorMain/0 sm:to-colorSecondary/0' : 'h-[80px]' }`}>
        {/* Left section header */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <p className={`text-colorWhite dark:text-colorBlack transition-all duration-300 ease-in-out text-md ${isScrolled ? 'text-sm' : 'text-md'} font-sans font-medium`}>
            <Link to="/">eloemery~</Link>
          </p>
          {/* Sidebar icone Desktop */}
          <div className="hidden md:block cursor-pointer min-w-[35px] hover:opacity-70 transition-all duration-300 ease-in-out" onClick={toggleMenu}>
            <img
              className="h-[16px] dark:filter-brightness-0 dark:invert"
              src={menuSrc}
              alt="Menu"
            />
          </div>
        </div>
        {/* Right section header */}
        <div className="flex items-center gap-8">
          {/* Language */}
          <div className="cursor-pointer">
            <p className="text-colorWhite dark:text-colorBlack text-sm font-sans hover:opacity-70 transition-all duration-300 ease-in-out" onClick={() => {
              toggleLanguage();
            }}>{language === 'fr' ? 'EN' : 'FR'}</p>
          </div>
          {/* Color mode */}
          <div className="cursor-pointer hover:opacity-70 transition-all duration-300 ease-in-out" onClick={() => {
            toggleColorMode();
          }}>
            <img src={colorModeSrc} alt="Light/Dark Mode" className="h-[18px] dark:filter-brightness-0 dark:invert" />
          </div>
          {/* Sidebar icone Mobile */}
          <div className="md:hidden cursor-pointer min-w-[35px] hover:opacity-70 transition-all duration-300 ease-in-out" onClick={toggleMenu}>
            <img
              className="h-[16px] dark:filter-brightness-0 dark:invert"
              src={menuSrc}
              alt="Menu"
            />
          </div>
        </div>
      </div>
  );
}

export default Header;
