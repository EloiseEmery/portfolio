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
      <h1 className="font-sans text-4xl md:text-5xl text-colorWhite leading-[1.2] ">{h1Text}</h1>
      <p className="text-colorWhite font-figtree mt-6 pb-8 text-lg dark:text-colorMain">{pText}</p>
      <Button
        children={buttonLabel}
        className="relative z-10"
        href="https://www.linkedin.com/in/eloise-emery/"
        blank={true}
        type="primary"
        icon={<img src={iconExternLink} alt="External Link Icon" className="w-3 h-3" />}
      />
      <div className="absolute sm:right-0 top-0 z-1">
        <img src={decorativeEl} alt="Decorative Element" className="w-full h-[350px] opacity-70" />
      </div>
    </div>
  );
}
    
export default Hero;