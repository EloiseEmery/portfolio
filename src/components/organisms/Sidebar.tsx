import React from 'react';
import { Language } from '../../translations';
import { getTranslation } from '../../translations';

interface SidebarProps {
  closeSidebar: () => void;
  language: Language;
}

const Sidebar: React.FC<SidebarProps> = ({ closeSidebar, language }) => {
  const sidebarLink1 = getTranslation('sidebarLink1', language);
  const sidebarLink2 = getTranslation('sidebarLink2', language);
  const sidebarLink3 = getTranslation('sidebarLink3', language);
  const sidebarLink4 = getTranslation('sidebarLink4', language);
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      closeSidebar();
    }  
  };

  return (
    <div className="sidebar fixed top-10 left-0 w-full md:w-[300px] h-full z-50 overflow-y-auto bg-colorMain/25 md:bg-transparent">
      <div className="flex flex-col font-sans text-colorWhite text-lg space-y-8 px-4 md:px-10 pt-[100px]">
        <a href="#ask-me-something" onClick={handleLinkClick} className="cursor-pointer hover:text-colorQuaternary transition-all duration-300 ease-in-out whitespace-nowrap">{sidebarLink1}</a>
        <a href="#my-skillset" onClick={handleLinkClick} className="cursor-pointer hover:text-colorQuaternary transition-all duration-300 ease-in-out whitespace-nowrap">{sidebarLink2}</a>
        <a href="#my-projects" onClick={handleLinkClick} className="cursor-pointer hover:text-colorQuaternary transition-all duration-300 ease-in-out whitespace-nowrap">{sidebarLink3}</a>
        <a href="#get-in-touch" onClick={handleLinkClick} className="cursor-pointer hover:text-colorQuaternary transition-all duration-300 ease-in-out whitespace-nowrap">{sidebarLink4}</a>
      </div>
    </div>
  );
};

export default Sidebar;
