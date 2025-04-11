import React, { useEffect, useState } from 'react';
import { Language, getTranslation } from '../../utils/translations';
import projectData from '../../datas/datasProjects.json';
import { handleAnchorLinkNavigation } from '../../utils/navigation';

interface SidebarProps {
  closeSidebar: () => void;
  language: Language;
}

const Sidebar: React.FC<SidebarProps> = ({ closeSidebar, language }) => {
  const sidebarLink1 = getTranslation('sidebarLink1', language);
  const sidebarLink2 = getTranslation('sidebarLink2', language);
  const sidebarLink3 = getTranslation('sidebarLink3', language);
  const sidebarLink4 = getTranslation('sidebarLink4', language);

  const [previousWindowWidth, setPreviousWindowWidth] = useState<number | null>(null);

  // Handle link clicks and close sidebar on mobile
  const handleLinkClick = (hash: string) => (e: React.MouseEvent) => {
    handleAnchorLinkNavigation(hash)(e);
    
    // Close sidebar on mobile when clicking a link
    if (window.innerWidth < 768) {
      closeSidebar();
    }
  };

  // Handle sidebar when resizing the window from desktop to mobile
  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      
      // Check if we've transitioned from desktop to mobile
      if (previousWindowWidth !== null && 
          previousWindowWidth >= 768 && 
          currentWidth < 768) {
        closeSidebar();
      }
      
      // Always update the previous width
      setPreviousWindowWidth(currentWidth);
    };

    // Set initial window width
    setPreviousWindowWidth(window.innerWidth);

    // Add resize event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [closeSidebar, previousWindowWidth]);

  return (
    <div className="z-50 sidebar fixed top-10 left-0 w-full md:w-[300px] h-full overflow-y-auto dark:bg-colorMain/25 bg-transparent dark:md:bg-transparent">
      <div className="flex flex-col font-sans text-xl md:text-base font-medium text-colorBlack dark:text-colorWhite space-y-8 px-4 md:px-10 pt-[100px]">
        <a href="/#ask-me-something" onClick={handleLinkClick('#ask-me-something')} className="cursor-pointer transition-all duration-300 ease-in-out leading-[1.2] dark:hover:text-colorQuaternary hover:text-colorTertiary">{sidebarLink1}</a>
        <a href="/#my-skillset" onClick={handleLinkClick('#my-skillset')} className="cursor-pointer transition-all duration-300 ease-in-out whitespace-nowrap">{sidebarLink2}</a>
        
        <div>
          <a 
            href="/#my-projects" 
            onClick={handleLinkClick('#my-projects')} 
            className="cursor-pointer transition-all duration-300 ease-in-out whitespace-nowrap hover:text-colorTertiary dark:hover:text-colorQuaternary"
          >
            {sidebarLink3}
          </a>
          <div className="mt-4 space-y-4 pt-2">
            {projectData.projects.map((project) => (
              <a 
                key={project.id} 
                href={`/project/${project.id}`} 
                className="block text-base text-colorBlack/80 dark:text-colorWhite/80 md:text-xs hover:text-colorTertiary dark:hover:text-colorQuaternary transition-all duration-300 ease-in-out relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-colorTertiary dark:before:text-colorQuaternary"
              >
                {project.title}
              </a>
            ))}
          </div>
        </div>
        
        <a href="/#get-in-touch" onClick={handleLinkClick('#get-in-touch')} className="cursor-pointer hover:text-colorTertiary dark:hover:text-colorQuaternary transition-all duration-300 ease-in-out whitespace-nowrap">{sidebarLink4}</a>
      </div>
    </div>
  );
};

export default Sidebar;
