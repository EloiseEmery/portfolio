import { useState, useEffect } from 'react';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Sidebar from './components/organisms/Sidebar';
import Hero from './components/organisms/sections/Hero';
import AskMeSomething from './components/organisms/sections/AskMeSomething';
import MySkillset from './components/organisms/sections/MySkillset';
import MyProjects from './components/organisms/sections/MyProjects';
import GetInTouch from './components/organisms/sections/GetInTouch';
import ToTop from './components/atoms/ToTop';
import menuSidebarClosed from './assets/svg/menuSidebar.svg'; 
import menuSidebarOpen from './assets/svg/menuSidebarOpen.svg'; 
import lightMode from './assets/svg/lightMode.svg';
import darkMode from './assets/svg/darkMode.svg';
import './index.css';
import { Language, getTranslation } from './translations';

function App() {
  const [menuSrc, setMenuSrc] = useState(menuSidebarClosed);
  const [colorModeSrc, setColorModeSrc] = useState(lightMode);
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage ? (savedLanguage as Language) : 'en';
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Manage color mode when page is loaded
  useEffect(() => {
    // Check saved color mode
    const savedColorMode = localStorage.getItem('colorMode');
    // Set initial color mode
    const isDarkMode = savedColorMode === 'Light';
    // Add or remove dark class
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      setColorModeSrc(darkMode);
    } else {
      document.documentElement.classList.remove('dark');
      setColorModeSrc(lightMode);
    }
  }, []);

  // Manage color mode when Button is clicked
  const toggleColorMode = () => {
    document.documentElement.classList.toggle('dark');
    const isDarkMode = document.documentElement.classList.contains('dark');
    setColorModeSrc(isDarkMode ? darkMode : lightMode);
    localStorage.setItem('colorMode', isDarkMode ? 'Light' : 'Dark');
  };

  // Manage language
  const toggleLanguage = () => {
    setLanguage((prevLanguage: Language) => {
      const newLanguage = prevLanguage === 'fr' ? 'en' : 'fr';
      // Save language in localStorage
      localStorage.setItem('language', newLanguage);
      return newLanguage;
    });
  };

  // Manage sidebar
  const toggleMenu = () => {
    setMenuSrc((prevSrc: string) =>
      prevSrc === menuSidebarClosed ? menuSidebarOpen : menuSidebarClosed
    );
    setIsSidebarOpen((prevOpen) => !prevOpen);
  };
  // Close sidebar when menu anchor link is clicked
  const closeSidebar = () => {
    setMenuSrc(menuSidebarClosed);
    setIsSidebarOpen(false);
  };

  return (
    <div className="app-container bg-gradient-main-secondary-main from-colorMain via-colorSecondary dark:bg-gradient-main-secondary-light-mode  flex">
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
            <main className="px-4 md:px-10 xl:px-[125px] 2xl:px-[200px]">
              <section id="hero" className="py-[250px]">
                <Hero language={language} />
              </section>
              <section id="ask-me-something" className="py-[75px] md:py-[200px]">
                <AskMeSomething language={language} />
              </section>
              <section id="my-skillset" className="py-[75px] md:py-[100px]">
                <MySkillset language={language} />
              </section>
              <section id="my-projects" className="py-[75px] md:py-[100px]">
                <MyProjects language={language} />
              </section>
              <section id="get-in-touch" className="mb-[100px] sm:mb-[100px] mt-[100px]">
                <GetInTouch language={language} />
              </section>
            </main>
            <footer>
              <Footer language={language} />
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
