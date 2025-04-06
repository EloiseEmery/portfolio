import React, { useState, useEffect } from 'react';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Sidebar from './components/organisms/Sidebar';
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
          <div className='main-content'>
            <main className="h-screen">
              {/* Main content goes here */}
            </main>
            <footer className={`${isSidebarOpen ? 'ml-[300px] md:ml-[250px]' : ''}`}>
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
