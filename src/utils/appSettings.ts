import { Language } from './translations';
import lightMode from '../assets/svg/lightMode.svg';
import darkMode from '../assets/svg/darkMode.svg';

// Handle initial color mode
export const getInitialColorMode = () => {
  const savedColorMode = localStorage.getItem('colorMode');
  const isDarkMode = savedColorMode === 'dark';
  return isDarkMode ? lightMode : darkMode;
};

// Handle color mode toggle between light and dark mode
export const toggleColorMode = (currentColorModeSrc: string) => {
  const newColorMode = currentColorModeSrc === lightMode ? darkMode : lightMode;
  
  // Toggle dark class on html element
  const isDarkModeActive = document.documentElement.classList.toggle('dark');
  
  // Set localStorage based on the current state of dark class
  localStorage.setItem('colorMode', isDarkModeActive ? 'dark' : 'light');
  
  return newColorMode;
};

// Handle initial language
export const getInitialLanguage = (): Language => {
  const savedLanguage = localStorage.getItem('language');
  return savedLanguage ? savedLanguage as Language : 'en';
};

// Handle language toggle between English and French
export const toggleLanguage = (currentLanguage: Language): Language => {
  const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
  localStorage.setItem('language', newLanguage);
  return newLanguage;
};
