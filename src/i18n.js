// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          heroTitle: "Hello, I'm elo,se Emery",
          heroDescription: "I, a full stack web developer from Montreal, Canada.",
        }
      },
      fr: {
        translation: {
          heroTitle: "Bonjour, je suis Éloïse Emery",
          heroDescription: "Je suis développeuse web full stack de Montréal, Canada.",
        }
      }
    },
    lng: "en", // default language
    fallbackLng: "en", // fallback language
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;