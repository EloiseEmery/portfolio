import React, { useState, useEffect } from 'react';
import { Language, getTranslation } from '../../utils/translations';
import projectData from '../../datas/dataProject.json';

interface SidebarProps {
  closeSidebar: () => void;
  language: Language;
}

const Sidebar: React.FC<SidebarProps> = ({ closeSidebar, language }) => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const sidebarLink1 = getTranslation('sidebarLink1', language);
  const sidebarLink2 = getTranslation('sidebarLink2', language);
  const sidebarLink3 = getTranslation('sidebarLink3', language);
  const sidebarLink4 = getTranslation('sidebarLink4', language);

  const handleLinkClick = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    
    // If on a different page, navigate first
    if (window.location.pathname !== '/') {
      window.location.href = `/${hash}`;
    } else {
      // Scroll to the section
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Close sidebar on mobile
    if (window.innerWidth < 768) {
      closeSidebar();
    }
  };

  const toggleProjects = () => {
    setIsProjectsOpen(!isProjectsOpen);
  };

  return (
    <div className="sidebar fixed top-10 left-0 w-full md:w-[300px] h-full z-50 overflow-y-auto bg-colorMain/25 dark:bg-transparent md:bg-transparent dark:md:bg-transparent">
      <div className="flex flex-col font-sans text-colorWhite dark:text-colorBlack text-xl md:text-lg space-y-8 px-4 md:px-10 pt-[100px]">
        <a href="/#ask-me-something" onClick={handleLinkClick('#ask-me-something')} className="cursor-pointer hover:text-colorQuaternary dark:hover:text-colorTertiary transition-all duration-300 ease-in-out leading-[1.2]">{sidebarLink1}</a>
        <a href="/#my-skillset" onClick={handleLinkClick('#my-skillset')} className="cursor-pointer hover:text-colorQuaternary dark:hover:text-colorTertiary transition-all duration-300 ease-in-out whitespace-nowrap">{sidebarLink2}</a>
        
        <div>
          <div 
            onClick={toggleProjects} 
            className="cursor-pointer flex w-[170px] justify-between hover:text-colorQuaternary dark:hover:text-colorTertiary transition-all duration-300 ease-in-out whitespace-nowrap"
          >
            {sidebarLink3}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 mt-1 transform transition-transform duration-300 ${isProjectsOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          {isProjectsOpen && (
            <div className="mt-4 space-y-6  pl-1 pt-4">
              {projectData.projects.map((project) => (
                <a 
                  key={project.id} 
                  href={`/project/${project.id}`} 
                  className="block text-base md:text-sm hover:text-colorQuaternary dark:hover:text-colorTertiary transition-all duration-300 ease-in-out"
                >
                  {project.title}
                </a>
              ))}
            </div>
          )}
        </div>
        
        <a href="/#get-in-touch" onClick={handleLinkClick('#get-in-touch')} className="cursor-pointer hover:text-colorQuaternary dark:hover:text-colorTertiary transition-all duration-300 ease-in-out whitespace-nowrap">{sidebarLink4}</a>
      </div>
    </div>
  );
};

export default Sidebar;
