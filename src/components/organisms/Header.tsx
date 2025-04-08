import { useState, useEffect } from 'react';

interface HeaderProps {
  toggleMenu: () => void;
  menuSrc: string;
  darkModeSrc: string;
  toggleDarkMode: () => void;
  toggleLanguage: () => void;
  language: string;
}

function Header({ toggleMenu, menuSrc, darkModeSrc, toggleDarkMode, toggleLanguage, language }: HeaderProps) {
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
      <div className={`w-full backdrop-blur-md flex items-center justify-between px-4 md:px-10 transition-all duration-300 ease-in-out fixed top-0 z-50 ${isScrolled ? 'h-[50px] bg-gradient-to-tl from-colorMain to-colorSecondary sm:from-colorMain/0 sm:to-colorSecondary/0' : 'h-[80px]' }`}>
        {/* Left section */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <p className={`text-colorWhite dark:text-colorBlack transition-all duration-300 ease-in-out text-md ${isScrolled ? 'text-sm' : 'text-md'} font-sans font-medium`}><a href="./" onClick={(e) => {
          e.preventDefault();
            const language = localStorage.getItem('language');
            window.location.href = `./?lang=${language}`;
          }}>eloemery~</a></p>
          {/* Menu mobile */}
          <div className="hidden md:block cursor-pointer min-w-[35px] hover:opacity-70 transition-all duration-300 ease-in-out" onClick={toggleMenu}>
            <img
              className="h-[16px]"
              src={menuSrc}
              alt="Menu"
            />
          </div>
        </div>
        {/* Right section */}
        <div className="flex items-center gap-8">
          {/* Language */}
          <div className="cursor-pointer">
            <p className="text-colorWhite text-sm font-sans hover:opacity-70 transition-all duration-300 ease-in-out" onClick={() => {
              toggleLanguage();
              const newLanguage = language === 'fr' ? 'en' : 'fr';
              const url = new URL(window.location.href);
              url.searchParams.set('lang', newLanguage);
              window.history.replaceState(null, '', url.toString());
            }}>{language === 'fr' ? 'EN' : 'FR'}</p>
          </div>
          {/* Light/Dark Mode */}
          <div className="cursor-pointer hover:opacity-70 transition-all duration-300 ease-in-out" onClick={toggleDarkMode}>
            <img src={darkModeSrc} alt="Light/Dark Mode" className="h-[18px]" />
          </div>
          {/* Menu Tablet/Desktop */}
          <div className="md:hidden cursor-pointer min-w-[35px] hover:opacity-70 transition-all duration-300 ease-in-out" onClick={toggleMenu}>
            <img
              className="h-[16px]"
              src={menuSrc}
              alt="Menu"
            />
          </div>
        </div>
      </div>
  );
}

export default Header;
