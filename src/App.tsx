import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Sidebar from './components/organisms/Sidebar';
import ToTop from './components/atoms/ToTop';
import NotFound from './components/pages/NotFound';
import TemplateProject from './components/pages/TemplateProject'; 
import menuSidebarClosed from './assets/svg/menuSidebar.svg'; 
import menuSidebarOpen from './assets/svg/menuSidebarOpen.svg'; 
import lightMode from './assets/svg/lightMode.svg';
import darkMode from './assets/svg/darkMode.svg';
import './index.css';
import { Language } from './utils/translations';
import { setupHashChangeListener } from './utils/urlUtils';
import AppRoutes from './routes';



const App: React.FC = () => {
  const [colorModeSrc, setColorModeSrc] = useState(darkMode);
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage ? (savedLanguage as Language) : 'en';
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    // Only open sidebar by default on desktop (md breakpoint and above)
    return window.innerWidth >= 768;
  });
  const [menuSrc, setMenuSrc] = useState(isSidebarOpen ? menuSidebarOpen : menuSidebarClosed);

  // Manage color mode when page is loaded
  useEffect(() => {
    // Check saved color mode
    const savedColorMode = localStorage.getItem('colorMode');
    const isDarkMode = savedColorMode === 'dark';
    
    // Set color mode source based on saved mode
    setColorModeSrc(isDarkMode ? lightMode : darkMode);

    // Setup hash change listener for scrolling
    const cleanup = setupHashChangeListener();
    return cleanup;
  }, []);

  // Manage sidebar
  const toggleMenu = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setMenuSrc(isSidebarOpen ? menuSidebarClosed : menuSidebarOpen);
  };
  // Close sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setMenuSrc(menuSidebarClosed);
  };

  // Manage color mode
  const toggleColorMode = () => {
    const newColorMode = colorModeSrc === lightMode ? darkMode : lightMode;
    
    // Toggle dark class on html element
    const isDarkModeActive = document.documentElement.classList.toggle('dark');
    
    // Set localStorage based on the current state of dark class
    localStorage.setItem('colorMode', isDarkModeActive ? 'dark' : 'light');
    
    // Update color mode source
    setColorModeSrc(newColorMode);
  };

  // Manage language
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <Router>
      <div className="flex app-container bg-gradient-main-secondary-light-mode dark:bg-gradient-main-secondary-main">
        {/* Sidebar */}
        {isSidebarOpen && <Sidebar closeSidebar={closeSidebar} language={language} />}
        {/* To top button */}
        <ToTop />
        {/* App content */}
        <div className="flex w-full overflow-x-hidden">
          <div className="flex-1 transition-all duration-300 ease-in-out">
            {/* Header */}
            <header className="">
              <Header toggleMenu={toggleMenu} menuSrc={menuSrc} colorModeSrc={colorModeSrc} toggleColorMode={toggleColorMode} toggleLanguage={toggleLanguage} language={language} />
            </header>
            {/* Main content */}
            <div className={`app-main-content relative z-10 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'md:ml-[250px] xl:ml-[150px] blur-xl md:blur-0 ' : ''}`}>
              <Routes>
                <Route path="/*" element={<AppRoutes language={language} />} />
                <Route path="/project/:projectId" element={<TemplateProject language={language} />} />
                <Route path="*" element={<NotFound language={language} />} />
              </Routes>
            </div>
            <footer>
              <Footer language={language} />
            </footer>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
