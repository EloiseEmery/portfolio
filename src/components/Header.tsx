import { useState } from 'react';
import lightMode from '../assets/lightMode.svg';
import menu from '../assets/menu.svg';
import menuHover from '../assets/menuHover.svg';
import menuOpen from '../assets/menuOpen.svg';

function Header() {
  const [menuSrc, setMenuSrc] = useState(menu);

    return (
      <div className="bg-[#0D1115] flex items-center justify-between h-[80px] px-4 md:px-10 xl:px-[125px]">
        {/* Left section */}
        <div className="cursor-pointer">
          {/* Logo */}
          <p className="text-white text-lg font-sans font-medium">ELOEMERY~</p>
        </div>
        {/* Right section */}
        <div className="flex items-center gap-8">
          {/* Language */}
          <div className="cursor-pointer">
            <p className="text-white text-sm font-sans">EN</p>
          </div>
          {/* Light/Dark Mode */}
          <div className="cursor-pointer">
            <img src={lightMode} alt="Light Mode" />
          </div>
          {/* Menu */}
          <div className="cursor-pointer min-w-[35px]">
            <img
              src={menuSrc}
              alt="Menu closed"
              onMouseEnter={() => setMenuSrc(menuHover)}
              onMouseLeave={() => setMenuSrc(menu)}
            />
          </div>
        </div>
      </div>
    );
}

export default Header;
