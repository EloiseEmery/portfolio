import React from 'react';

interface SidebarProps {
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ closeSidebar }) => {
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      closeSidebar();
    }  
  };

  return (
    <div className="sidebar fixed top-10 left-0 w-full md:w-[250px] h-full z-50 overflow-y-auto bg-colorMain/25 md:bg-transparent">
      <div className="flex flex-col font-sans text-colorWhite text-lg space-y-8 px-4 md:px-10 pt-[100px]">
        <a href="#ask-me-something" onClick={handleLinkClick} className="cursor-pointer hover:text-colorQuaternary transition-all duration-300 ease-in-out whitespace-nowrap">Ask me something</a>
        <a href="#my-skillset" onClick={handleLinkClick} className="cursor-pointer hover:text-colorQuaternary transition-all duration-300 ease-in-out whitespace-nowrap">My skillset</a>
        <a href="#my-projects" onClick={handleLinkClick} className="cursor-pointer hover:text-colorQuaternary transition-all duration-300 ease-in-out whitespace-nowrap">My projects</a>
        <a href="#get-in-touch" onClick={handleLinkClick} className="cursor-pointer hover:text-colorQuaternary transition-all duration-300 ease-in-out whitespace-nowrap">Get in touch</a>
      </div>
    </div>
  );
};

export default Sidebar;
