import Button from '../../atoms/Button';
import decorativeEl from '../../../assets/png/elementHero.png';
import paralaxeEl from '../../../assets/png/paralaxeEl.png';
import { getTranslation, Language } from '../../../utils/translations';
import { useEffect } from 'react';
import '../../../index.css';

function Hero({ language }: { language: Language }) {
  
  // Translations
  const h1Text = getTranslation('heroTitle', language);
  const pText = getTranslation('heroParagraph', language);
  const buttonLabel = getTranslation('heroButton', language);

  // Handle Paralaxe effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const decorativeEl = document.getElementById('decorativeEl');
      const paralaxeEl = document.getElementById('paralaxeEl');

      if (decorativeEl) {
        const maxTranslateY = 200; // Set the maximum translate value
        const translateY = Math.min(scrollPosition * 0.4, maxTranslateY);
        decorativeEl.style.transform = `translateY(${translateY}px)`;
      }
      if (paralaxeEl) {
        const maxTranslateY = 100; // Set the maximum translate value
        const translateY = Math.min(scrollPosition * 0.6, maxTranslateY);
        paralaxeEl.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Hero Images paralaxe */}
      <div className="absolute -right-[200px] md:right-0 top-0 z-0 opacity-30 filter-brightness-0 invert dark:sm:opacity-70 dark:filter-none" id="decorativeEl">
        <img src={decorativeEl} alt="Decorative Element" className="w-full max-h-[350px] dark:sm:opacity-70 dark:filter-none" />
      </div>
      <div className="absolute top-[150px] -right-[50px] md:right-8 md:top-0 z-0 opacity-40 sm:opacity-100" id="paralaxeEl">
        <img src={paralaxeEl} alt="Paralaxe Element" className="w-full max-h-[350px] opacity-40 sm:opacity-100" />
      </div>
      {/* Hero Texts */}
      <div className="-mt-10">
        <h1 className="text-shadow shadow-red-3 relative z-10 font-sans text-4xl md:text-5xl bg-gradient-to-r from-colorTertiary to-colorMain/80 dark:from-colorWhite dark:to-colorWhite bg-clip-text text-transparent leading-[1.2] ">{h1Text}</h1>
        <p className="relative z-10 text-colorMain dark:text-colorWhite font-figtree mt-6 pb-8 text-lg">{pText}</p>
        <Button
          children={buttonLabel}
          className="relative z-10 glow-on-hover bg-colorTertiary after:bg-colorTertiary hover:bg-colorMain hover:after:bg-colorMain hover:text-colorWhite dark:bg-colorQuaternary dark:after:bg-colorQuaternary dark:hover:bg-colorMain dark:hover:after:bg-colorMain dark:hover:text-colorWhite"
          href="https://www.linkedin.com/in/eloise-emery/"
          aria-label="See my LinkedIn profile"
          blank={true}
          type="primary"
          icon={
              <svg
                  fill="currentColor"
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-current group-hover:text-colorWhite dark:group-hover:text-colorMain"
              >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                      <path d="M38.288 10.297l1.414 1.415-14.99 14.99-1.414-1.414z"></path>
                      <path d="M40 20h-2v-8h-8v-2h10z"></path>
                      <path d="M35 38H15c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h11v2H15c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V24h2v11c0 1.7-1.3 3-3 3z"></path>
                  </g>
              </svg>
          }
        />
      </div>
    </div>
  );
}
    
export default Hero;