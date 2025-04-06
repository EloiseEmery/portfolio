import React, { useState, useEffect } from 'react';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Sidebar from './components/organisms/Sidebar';
import Hero from './components/organisms/Hero';
import AskMeSomething from './components/organisms/AskMeSomething';
import MySkillset from './components/organisms/MySkillset';
import MyProjects from './components/organisms/MyProjects';
import menuSidebarClosed from './assets/svg/menuSidebar.svg'; 
import menuSidebarOpen from './assets/svg/menuSidebarOpen.svg'; 
import './index.css';


function App() {
  const [menuSrc, setMenuSrc] = useState(menuSidebarClosed);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuSrc((prevSrc: string) =>
      prevSrc === menuSidebarClosed ? menuSidebarOpen : menuSidebarClosed
    );
    setIsSidebarOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="app-container bg-gradient-main-secondary-main from-colorMain via-colorSecondary to-colorMain flex">
      {/* Sidebar */}
      {isSidebarOpen && <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />}
      {/* App content */}
      <div className="flex w-full overflow-x-hidden">
        <div className="flex-1 transition-all duration-300 ease-in-out">
          {/* Header */}
          <header className="">
            <Header toggleMenu={toggleMenu} menuSrc={menuSrc} isScrolled={isScrolled} />
          </header>
          {/* Main content */}
          <div className={`app-main-content relative z-10 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-[350px] md:translate-x-0 md:ml-[250px] xl:ml-[150px] blur md:blur-0 ' : 'px-2'}`}>
            <main className="px-4 md:px-10 xl:px-[125px] 2xl:px-[200px]">
              <Hero />
              <section id="ask-me-something">
                <AskMeSomething />
              </section>
              <section id="my-skillset">
                <MySkillset />
              </section>
              <section id="my-projects">
                <MyProjects />
              </section>
            </main>
            {/* Footer */}
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
