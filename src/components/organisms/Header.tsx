import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoHeader from '../atoms/logoHeader';

interface HeaderProps {
  toggleMenu: () => void;
  menuSrc: string;
  toggleColorMode: () => void;
  colorModeSrc: string;
  toggleLanguage: () => void;
  language: string;
}

function Header({ toggleMenu, menuSrc, toggleColorMode, colorModeSrc, toggleLanguage, language }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll for header height change
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 z-50 w-full flex items-center justify-between px-4 md:px-10 transition-all duration-300 ease-in-out ${isScrolled ? 'h-[50px] shadow-md backdrop-blur-md bg-gradient-to-bl from-[#e6eaf1] to-[#bbc2cf] dark:from-[#171d28] dark:to-[#18181e] sm:from-colorTertiary/0 sm:to-colorWhite/0 dark:sm:from-colorMain/0 dark:sm:to-colorSecondary/0' : 'h-[80px]' }`}>
      {/* Left section header */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <LogoHeader isScrolled={isScrolled} />
        {/* Sidebar icone Desktop */}
        <div className="hidden md:block cursor-pointer min-w-[35px] hover:opacity-70 transition-all duration-300 ease-in-out" onClick={toggleMenu}>
          <img
            className="h-[16px] opacity-70 filter-brightness-0 invert dark:filter-none"
            src={menuSrc}
            alt="Menu"
          />
        </div>
      </div>
      {/* Right section header */}
      <div className="flex items-center">
        {/* Language */}
        <p className="p-4 cursor-pointer text-colorBlack dark:text-colorWhite text-sm font-sans hover:opacity-70 transition-all duration-300 ease-in-out" onClick={() => {
          toggleLanguage();
        }}>{language === 'fr' ? 'EN' : 'FR'}</p>
        {/* Color mode */}
        <div className="p-4 cursor-pointer hover:opacity-70 transition-all duration-300 ease-in-out" onClick={() => {
          toggleColorMode();
        }}>
          <img src={colorModeSrc} alt="Light/Dark Mode" className="h-[18px] filter-brightness-0 invert dark:filter-none" />
        </div>
        {/* Sidebar icone Mobile */}
        <div className="p-4 md:hidden cursor-pointer min-w-[35px] hover:opacity-70 transition-all duration-300 ease-in-out" onClick={toggleMenu}>
          <img
            className="h-[16px] filter-brightness-0 invert dark:filter-none"
            src={menuSrc}
            alt="Menu"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
