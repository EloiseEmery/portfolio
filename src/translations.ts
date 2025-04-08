// Define translations
const translations = {
  // Footer
  footerTitle1: {
    en: "Featured projects",
    fr: "Projets en vedette"
  },
  footerTitle2: {
    en: "Quick access",
    fr: "Accès rapide"
  },
  footerTitle3: {
    en: "Connect with me",
    fr: "Connectez avec moi"
  }, 
  footerCopyright: {
    en: "Copyright © 2025 Éloïse Emery. All rights reserved.",
    fr: "Copyright © 2025 Éloïse Emery. Tous droits réservés."
  },
  footerText1: {
    en: "Created with",
    fr: "Créé avec"
  },
  footerText2: {
    en: "by Éloïse Emery",
    fr: "par Éloïse Emery"
  },
  footerLinText: {
    en: "This project portfolio",
    fr: "Ce projet de portfolio"
  },
  footerLinkHover1: {
    en: "Visit my LinkedIn",
    fr: "Visitez mon LinkedIn"
  },
  footerLinkHover2: {
    en: "Visit my GitHub",
    fr: "Visitez mon GitHub"
  },
  footerLinkHover3: {
    en: "Send me an email",
    fr: "Envoyez-moi un courriel"
  },
  // Sidebar
  sidebarLink1: {
    en: "Ask me something",
    fr: "Posez-moi une question"
  },
  sidebarLink2: {
    en: "My skillset",
    fr: "Mes compétences"
  },
  sidebarLink3: {
    en: "My projects",
    fr: "Mes projets"
  },
  sidebarLink4: {
    en: "Get in touch",
    fr: "Contactez-moi"
  },
  // Hero
  heroTitle: {
    en: "Full Stack Web Developer",
    fr: "Développeuse web full stack"
  },
  heroParagraph: {
    en: "Hello, I'm Éloïse Emery, a full stack web developer from Montreal, Canada.",
    fr: "Je suis Éloïse Emery, une développeuse web full stack basée à Montréal, Canada."
  },
  heroButton: {
    en: "Connect with me",
    fr: "Connectez avec moi"
  },
  // Ask me something
  askMeTitle: {
    en: "Ask me something",
    fr: "Posez-moi une question"  
  },
  askMeParagraph: {
    en: "Being an introvert, I've made this chatbot available for you to chat with me. It has an in-depth understanding of my professional experience and the project's source code. Feel free to ask it questions about me or my work. It uses OpenAI's GPT-4 and LangChain. Enjoy!",
    fr: "Étant introvertie, j'ai mis ce chatbot à votre disposition pour discuter avec moi. Il bénéficie d'une connaissance approfondie de mon expérience professionnelle et du code source de ce projet. Posez-lui vos questions sur moi ou mon travail. Il utilise GPT-4 d'OpenAI et LangChain. Amusez-vous !"
  },
  askMeButton: {
    en: "Download my full resume",
    fr: "Télécharger mon CV complet"
  },
  askMeInput: {
    en: "Ask me something...",
    fr: "Posez-moi une question..."
  },
  // My skillset
  mySkillsetTitle: {
    en: "My skillset",
    fr: "Mes compétences"
  },
  mySkillsetParagraph: {
    en: "With a robust foundation in graphic design and programming, I have effectively harmonized my technical expertise with my creative sensibilities. My skillset includes a wide range of technologies and frameworks.",
    fr: "Grâce à mes formations en design graphique et en programmation, j'ai su créer une belle synergie entre mes compétences techniques et ma sensibilité personnelle. Mes compétences comprennent une large gamme de technologies et frameworks."
  },
  // My projects
  myProjectsTitle: {
    en: "My projects",
    fr: "Mes projets"
  },
  myProjectsParagraph: {
    en: "I love bringing concepts to life by creating intuitive designs, while ensuring that accessibility and user experience are always at the forefront of my concerns. Below are some of the projects I've worked on.",
    fr: "J'adore concrétiser des concepts en créant des designs intuitifs, tout en veillant à ce que l'accessibilité et l'expérience utilisateur soient toujours au centre de mes préoccupations. Voici quelques-uns des projets sur lesquels j'ai travaillé."
  },
  myProjectsButton: {
    en: "See more projects",
    fr: "Voir plus de projets"
  },
  // Get in touch
  getInTouchTitle: {
    en: "Get in touch",
    fr: "Contactez-moi"
  },
  getInTouchParagraph: {
    en: "For any question or project proposal, feel free to contact me by email. Looking forward to discuss with you!",
    fr: "Pour toute question ou proposition de projet, je vous invite à me contacter par courriel. Au plaisir de vous discuter avec vous!"
  },
  getInTouchButton: {
    en: "Send me a email",
    fr: "Envoyez-moi un courriel"
  }
};

// Define a type for translation keys
export type TranslationKey = keyof typeof translations;

// Define a type for supported languages
export type Language = 'en' | 'fr';

// Get translation with type safety
export const getTranslation = (key: TranslationKey, language: Language) => {
  return translations[key][language];
};

// Export translations and types
export { translations };

