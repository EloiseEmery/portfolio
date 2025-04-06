import { useState, useEffect } from 'react';
import lightMode from '../../assets/lightMode.svg';

interface HeaderProps {
  toggleMenu: () => void;
  menuSrc: string;
  isScrolled: boolean;
}

function Header({ toggleMenu, menuSrc, isScrolled }: HeaderProps) {
  return (
    <div className="flex">
      <div className={`w-full bg-transparent backdrop-blur-xl flex items-center justify-between h-[80px] px-4 md:px-10 transition-all duration-300 ease-in-out ${isScrolled ? 'h-[60px]' : 'h-[80px]'}`}>
        {/* Left section */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <p className={`text-colorWhite transition-all duration-300 ease-in-out text-md ${isScrolled ? 'text-sm' : 'text-md'} font-sans font-medium`}>ELOEMERY~</p>
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
            <p className="text-colorWhite text-sm font-sans hover:opacity-70 transition-all duration-300 ease-in-out">FR</p>
          </div>
          {/* Light/Dark Mode */}
          <div className="cursor-pointer hover:opacity-70 transition-all duration-300 ease-in-out">
            <img src={lightMode} alt="Light Mode" className="h-[18px]" />
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
    </div>
  );
}

export default Header;
