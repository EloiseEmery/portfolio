import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Import your page components
import TemplateProject from './components/pages/TemplateProject';
import GetInTouch from './components/organisms/sections/GetInTouch';
import Hero from './components/organisms/sections/Hero';
import AskMeSomething from './components/organisms/sections/AskMeSomething';
import MySkillset from './components/organisms/sections/MySkillset';
import MyProjects from './components/organisms/sections/MyProjects';
import NotFound from './components/pages/NotFound';
import projectData from './datas/datasProjects.json';

interface RoutesProps {
  language: 'en' | 'fr';
}

const AppRoutes: React.FC<RoutesProps> = ({ language }) => {
  const isValidProject = (projectId: string) => {
    return projectData.projects.some(project => project.id === projectId);
  };

  return (
    <Routes>
      <Route path="/" element={
        <>
          {/* SEO page home */}
          <Helmet>
            <title>{language === 'en' ? 'Portfolio - Eloise Emery' : 'Portfolio - Éloïse Emery'}</title>
            <meta name="description" content={language === 'en' ? 'Portfolio of Eloise Emery - Full Stack Developer' : 'Portfolio d\'Éloïse Emery - Développeuse Full Stack'} />
            <meta name="keywords" content="Eloise Emery, Full Stack Developer, Web Development, Portfolio" />
            <link rel="canonical" href="/" />
          </Helmet>
          {/* Page home */}
          <main className="px-4 md:px-10 xl:px-[150px] 2xl:px-[200px] max-w-[2000px] mx-auto">
            <section id="hero" className="py-[250px] md:pb-[200px]">
              <Hero language={language} />
            </section>
            <section id="ask-me-something" className="py-[70px] md:py-[150px]">
              <AskMeSomething language={language} />
            </section>
            <section id="my-skillset" className="py-[70px] md:py-[100px]">
              <MySkillset language={language} />
            </section>
            <section id="my-projects" className="py-[70px] md:py-[100px]">
              <MyProjects language={language} />
            </section>
            <section id="get-in-touch" className="py-[70px] md:py-[100px]">
              <GetInTouch language={language} />
            </section>
          </main>
        </>
      } />
      {/* Page project */}
      <Route 
        path="/project/:projectId" 
        element={<TemplateProject language={language} />} 
      />
      <Route path="*" element={
        <>
          {/* SEO page 404 */}
          <Helmet>
            <title>{language === 'en' ? '404 - Page Not Found' : '404 - Page Non Trouvée'}</title>
            <meta name="description" content={language === 'en' ? 'Page not found' : 'Page non trouvée'} />
            <meta name="robots" content="noindex" />
          </Helmet>
          {/* Page 404 */}
          <NotFound language={language} />
        </>
      } />
    </Routes>
  );
};

export default AppRoutes;
