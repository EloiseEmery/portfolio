import React, { useState, useEffect } from 'react';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Sidebar from './components/organisms/Sidebar';
import Hero from './components/molecules/Hero';
import menuSidebarClosed from './assets/menuSidebar.svg'; 
import menuSidebarOpen from './assets/menuSidebarOpen.svg'; 
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
        {isSidebarOpen && <Sidebar />}
      <div className="flex w-full">
        <div className="flex-1 transition-all duration-300 ease-in-out">
          <header className="">
            <Header toggleMenu={toggleMenu} menuSrc={menuSrc} isScrolled={isScrolled} />
          </header>
          <div className={`app-main-content transition-all duration-300 ease-in-out  ${isSidebarOpen ? 'ml-[250px] xl:ml-[150px] blur md:blur-0 ' : ''}`}>
            <main className="px-4 md:px-10 xl:px-[125px] 2xl:px-[200px]">
            <Hero />
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
