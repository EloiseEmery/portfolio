import Button from '../../atoms/Button';
import layer4 from '../../../assets/png/elementHero.png';
import layer1 from '../../../assets/png/layer1.png';
import layer1Light from '../../../assets/png/layer1_light.png';
import layer2Light from '../../../assets/png/layer2_light.png';
import layer2 from '../../../assets/png/layer2.png';
import layer3 from '../../../assets/png/layer3.png';
import { getTranslation, Language } from '../../../utils/translations';
import { useEffect } from 'react';
import '../../../index.css';

function Hero({ language }: { language: Language }) {
  
  // Translations
  const h1Text = getTranslation('heroTitle', language);
  const pText = getTranslation('heroParagraph', language);
  const buttonLabel = getTranslation('heroButton', language);

  // Handle paralax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const layer4 = document.getElementById('layer4');
      const layer1 = document.getElementById('layer1');
      const layer2 = document.getElementById('layer2');
      const layer3 = document.getElementById('layer3');
      const layer1Light = document.getElementById('layer1Light');
      const layer2Light = document.getElementById('layer2Light');

      if (layer1) {
        const maxTranslateY = 170;
        const translateY = Math.min(scrollPosition * 0.6, maxTranslateY);
        layer1.style.transform = `translateY(${translateY}px)`;
      }
      if (layer1Light) {
        const maxTranslateY = 170;
        const translateY = Math.min(scrollPosition * 0.6, maxTranslateY);
        layer1Light.style.transform = `translateY(${translateY}px)`;
      }
      if (layer2) {
        const maxTranslateY = 120;
        const translateY = Math.min(scrollPosition * 0.5, maxTranslateY);
        layer2.style.transform = `translateY(${translateY}px)`;
      }
      if (layer2Light) {
        const maxTranslateY = 120;
        const translateY = Math.min(scrollPosition * 0.5, maxTranslateY);
        layer2Light.style.transform = `translateY(${translateY}px)`;
      }
      if (layer3) {
        const maxTranslateY = 50;
        const maxScaleDown = 0.9; 
        const translateY = Math.min(scrollPosition * 0.4, maxTranslateY);
        const scaleDown = Math.max(1 - (scrollPosition * 0.002), maxScaleDown); 
        layer3.style.transform = `translateY(${translateY}px) scale(${scaleDown})`;
      }
      if (layer4) {
        const maxTranslateY = 75;
        const maxScaleDown = 0.95; 
        const translateY = Math.min(scrollPosition * 0.4, maxTranslateY);
        const scaleDown = Math.max(1 - (scrollPosition * 0.0015), maxScaleDown); 
        layer4.style.transform = `translateY(${translateY}px) scale(${scaleDown})`;
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
      <div className="absolute right-[-100px] md:right-0 top-0 z-0 opacity-70">
        <div className="flex relative">
          <img 
            src={layer1Light} 
            alt="Layer 1" 
            className="absolute object-contain -ml-[500px] w-[450px] -mt-[50px] max-w-[450px] max-h-[350px] dark:hidden" 
            id="layer1Light" 
          />
          <img 
            src={layer1} 
            alt="Layer 1" 
            className="absolute object-contain -ml-[500px] w-[450px] -mt-[50px] max-w-[450px] max-h-[350px] hidden dark:block" 
            id="layer1" 
          />
          <img 
            src={layer2Light} 
            alt="Layer 2" 
            className="absolute object-contain -ml-[500px] w-[450px] max-w-[340px] max-h-[270px] dark:hidden opacity-30 sm:opacity-70" 
            id="layer2Light" 
          />
          <img 
            src={layer2} 
            alt="Layer 2" 
            className="absolute object-contain -ml-[500px] w-[450px] max-w-[340px] max-h-[270px] hidden dark:block" 
            id="layer2" 
          />
          <img src={layer3} alt="Layer 3" className="absolute object-contain -ml-[600px] mt-[100px] w-[130px] max-w-[130px] max-h-[130px] filter-brightness-0 invert dark:filter-none opacity-50 dark:opacity-70 sm:opacity-100" id="layer3" />
        </div>
      </div>
      <div className="absolute top-[50px] -right-[50px] md:right-8 md:top-0 z-0 opacity-30 sm:opacity-50 filter-brightness-0 invert dark:filter-none" id="layer4">
        <img src={layer4} alt="Paralaxe Element" className="w-full max-h-[350px]" />
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