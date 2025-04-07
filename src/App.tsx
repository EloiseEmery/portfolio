import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Sidebar from './components/organisms/Sidebar';
import Hero from './components/organisms/sections/Hero';
import AskMeSomething from './components/organisms/sections/AskMeSomething';
import MySkillset from './components/organisms/sections/MySkillset';
import MyProjects from './components/organisms/sections/MyProjects';
import ContactMe from './components/organisms/sections/GetInTouch';
import ToTop from './components/atoms/ToTop';
import menuSidebarClosed from './assets/svg/menuSidebar.svg'; 
import menuSidebarOpen from './assets/svg/menuSidebarOpen.svg'; 
import lightMode from './assets/svg/lightMode.svg';
import darkMode from './assets/svg/darkMode.svg';
import './index.css';


function App() {
  const [menuSrc, setMenuSrc] = useState(menuSidebarClosed);
  const [darkModeSrc, setDarkModeSrc] = useState(lightMode);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('fr');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  
  // Manage dark mode
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setDarkModeSrc((prevSrc: string) =>
      prevSrc === lightMode ? darkMode : lightMode
  );
};

// Manage language
const toggleLanguage = () => {
  setLanguage((prevLanguage: string) =>
    prevLanguage === 'fr' ? 'en' : 'fr'
);
i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
}

// Manage sidebar
const toggleMenu = () => {
  // change menu icon
  setMenuSrc((prevSrc: string) =>
    prevSrc === menuSidebarClosed ? menuSidebarOpen : menuSidebarClosed
  );
  // open or close sidebar
  setIsSidebarOpen((prevOpen) => !prevOpen);
};
// Close sidebar when menu anchor link is clicked
const closeSidebar = () => {
  setMenuSrc(menuSidebarClosed);
  setIsSidebarOpen(false);
};

  return (
    <div className="app-container bg-gradient-main-secondary-main from-colorMain via-colorSecondary dark:bg-gradient-main-secondary-dark  flex">
      {/* Sidebar */}
      {isSidebarOpen && <Sidebar closeSidebar={closeSidebar} />}
      {/* To top button */}
      {/* App content */}
      <ToTop />
      <div className="flex w-full overflow-x-hidden">
        <div className="flex-1 transition-all duration-300 ease-in-out">
          {/* Header */}
          <header className="">
            <Header toggleMenu={toggleMenu} menuSrc={menuSrc} darkModeSrc={darkModeSrc} toggleDarkMode={toggleDarkMode} toggleLanguage={toggleLanguage} language={language} />
          </header>
          {/* Main content */}
          <div className={`app-main-content relative z-10 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'md:ml-[250px] xl:ml-[150px] blur-xl md:blur-0 ' : ''}`}>
            <main className="px-4 md:px-10 xl:px-[125px] 2xl:px-[200px]">
              <section id="hero" className="py-[250px]">
                <Hero />
              </section>
              <section id="ask-me-something" className="py-[75px] md:py-[100px]">
                <AskMeSomething />
              </section>
              <section id="my-skillset" className="py-[75px] md:py-[100px]">
                <MySkillset />
              </section>
              <section id="my-projects" className="py-[75px] md:py-[100px]">
                <MyProjects />
              </section>
              <section id="get-in-touch" className="mb-[100px] sm:mb-[100px] mt-[100px]">
                <ContactMe />
              </section>
            </main>
            <footer>
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
