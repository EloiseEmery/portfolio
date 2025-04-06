import React from 'react';

interface SidebarProps {
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ closeSidebar }) => {
  const handleLinkClick = () => {
    // if (window.innerWidth < 768) {
    // closeSidebar();
    // }  
  };

  return (
    <div className="sidebar fixed top-20 left-0 w-[250px] h-full z-50 overflow-y-auto">
      {/* Sidebar content goes here */}
      <div className="flex flex-col font-sans text-colorWhite text-xl space-y-8 px-4 md:px-10 pt-10">
        <a href="#ask-me-something" onClick={handleLinkClick} className="cursor-pointer hover:text-colorQuaternary transition-all duration-300 ease-in-out whitespace-nowrap">Ask me something</a>
        <a href="#my-skillset" onClick={handleLinkClick} className="cursor-pointer hover:text-colorQuaternary transition-all duration-300 ease-in-out whitespace-nowrap">My skillset</a>
        <a href="#my-projects" onClick={handleLinkClick} className="cursor-pointer hover:text-colorQuaternary transition-all duration-300 ease-in-out whitespace-nowrap">My projects</a>
        <a href="#contact-me" onClick={handleLinkClick} className="cursor-pointer hover:text-colorQuaternary transition-all duration-300 ease-in-out whitespace-nowrap">Contact me</a>
      </div>
    </div>
  );
};

export default Sidebar;
