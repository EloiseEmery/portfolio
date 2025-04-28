import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Sidebar from './components/organisms/Sidebar';
import ToTop from './components/atoms/ToTop';
import NotFound from './components/pages/NotFound';
import TemplateProject from './components/pages/TemplateProject'; 
import menuSidebarClosed from './assets/svg/menuSidebar.svg'; 
import menuSidebarOpen from './assets/svg/menuSidebarOpen.svg'; 
import './index.css';
import { Language } from './utils/translations';
import { setupHashChangeListener } from './utils/navigation';
import { getInitialColorMode, toggleColorMode, getInitialLanguage, toggleLanguage } from './utils/appSettings';
import AppRoutes from './routes';

const App: React.FC = () => {
  const [colorModeSrc, setColorModeSrc] = useState(getInitialColorMode());
  const [language, setLanguage] = useState<Language>(getInitialLanguage());
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    // Retrieve sidebar state from localStorage, default to false
    const savedSidebarState = localStorage.getItem('sidebarOpen');
    return savedSidebarState === 'true';
  });
  const [menuSrc, setMenuSrc] = useState(isSidebarOpen ? menuSidebarOpen : menuSidebarClosed);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  //Setup hash change listener for scrolling
  useEffect(() => {
    const cleanup = setupHashChangeListener();
    return cleanup;
  }, []);

  // Manage color mode
  const handleToggleColorMode = () => {
    const newColorMode = toggleColorMode(colorModeSrc);
    setColorModeSrc(newColorMode);
  };
  
  // Manage language
  const handleToggleLanguage = () => {
    const newLanguage = toggleLanguage(language);
    setLanguage(newLanguage);
  };

  // Handle sidebar when size of window resize
  useEffect(() => {
    const handleResize = () => {
      const wasMobile = isMobile;
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Fermer seulement si on passe de desktop à mobile
      if (mobile && !wasMobile && isSidebarOpen) {
        manageSidebar(false);
      } else if (!mobile && isSidebarOpen) {
        // Reset la position sauvegardée quand on passe en desktop
        setScrollPosition(0);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSidebarOpen, isMobile]);
  

  // Manage sidebar
  const manageSidebar = (forceState?: boolean) => {
    const newSidebarState = forceState !== undefined ? forceState : !isSidebarOpen;
    
    if (newSidebarState && isMobile) { 
      // Sauvegarder la position seulement en mobile
      setScrollPosition(window.scrollY);
    }
    
    setIsSidebarOpen(newSidebarState);
    setMenuSrc(newSidebarState ? menuSidebarOpen : menuSidebarClosed);
    
    // Save sidebar state to localStorage
    localStorage.setItem('sidebarOpen', newSidebarState.toString());
  };

  const toggleMenu = () => manageSidebar();
  const closeSidebar = () => manageSidebar(false);

  return (
    <HelmetProvider>
      <Router>
        <div className="relative flex app-container bg-gradient-main-secondary-light-mode dark:bg-gradient-main-secondary-main">
          <div className="absolute top-0 left-0 w-full h-full bg-noise-texture bg-repeat bg-[length:400px_400px] 
            opacity-30 
            dark:opacity-10 dark:brightness-150 dark:contrast-150"></div>
          {/* Sidebar */}
          {isSidebarOpen && <Sidebar closeSidebar={closeSidebar} language={language} />}
          {/* To top button */}
          <ToTop />
          {/* App content */}
          <div className={`flex w-full overflow-x-hidden ${isSidebarOpen ? 'max-md:h-screen max-md:overflow-hidden' : ''}`} style={{ height: isSidebarOpen && isMobile ? '100vh' : 'auto' }}>
              <div className="flex-1 transition-all duration-300 ease-in-out">
                {/* Header */}
                <header className="w-full max-w-[2000px] mx-auto">
                  <Header toggleMenu={toggleMenu} menuSrc={menuSrc} colorModeSrc={colorModeSrc} toggleColorMode={handleToggleColorMode} toggleLanguage={handleToggleLanguage} language={language} />
                </header>
                {/* Main content */}
                <div className={`app-main-content relative z-10 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'md:translate-x-0 md:ml-[250px] xl:ml-[150px]  '  : ''}`}>
                  <Routes>
                    <Route path="/*" element={<AppRoutes language={language} />} />
                    <Route path="/project/:projectId" element={<TemplateProject language={language} />} />
                    <Route path="*" element={<NotFound language={language} />} />
                  </Routes>
                  <footer className="w-full max-w-[2000px] mx-auto">
                    <Footer language={language} />
                  </footer>
                </div>
              </div>
            </div>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
