import Button from '../../atoms/Button';
import decorativeEl from '../../../assets/png/elementHero.png';
import iconExternLink from '../../../assets/svg/iconExternLink.svg';
import { getTranslation, Language } from '../../../translations';
 
function Hero({ language }: { language: Language }) {
  
  // Translations
  const h1Text = getTranslation('heroTitle', language);
  const pText = getTranslation('heroParagraph', language);
  const buttonLabel = getTranslation('heroButton', language);

  return (
    <div className="relative">
    <h1 className="relative z-10 font-sans text-4xl md:text-5xl bg-gradient-to-br from-colorWhite to-colorWhite dark:from-colorMain/80 dark:to-colorTertiary bg-clip-text text-transparent leading-[1.2] ">{h1Text}</h1>
      <p className=" relative z-10 text-colorWhite font-figtree mt-6 pb-8 text-lg dark:text-colorMain">{pText}</p>
      <Button
        children={buttonLabel}
        className="relative z-10"
        href="https://www.linkedin.com/in/eloise-emery/"
        aria-label="See my LinkedIn profile"
        blank={true}
        type="primary"
        icon={
            <svg
                fill="currentColor"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-current group-hover:text-colorMain dark:group-hover:text-colorWhite"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M38.288 10.297l1.414 1.415-14.99 14.99-1.414-1.414z"></path>
                    <path d="M40 20h-2v-8h-8v-2h10z"></path>
                    <path d="M35 38H15c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h11v2H15c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V24h2v11c0 1.7-1.3 3-3 3z"></path>
                </g>
            </svg>
        }
      />
      <div className="absolute sm:right-0 top-0 z-0">
        <img src={decorativeEl} alt="Decorative Element" className="w-full h-[350px] opacity-70 dark:opacity-40 dark:filter-brightness-0 dark:invert" />
      </div>
    </div>
  );
}
    
export default Hero;