import decorativeForms from '../../../assets/png/decorativeForms.png';
import decorativeFormLight from '../../../assets/png/decorativeFormsLight.png';
import Button from '../../atoms/Button';
import { getTranslation, Language } from '../../../utils/translations';
import { motion } from 'framer-motion';

function GetInTouch({ language }: { language: Language }) {
    // Translations
    const title = getTranslation('getInTouchTitle', language);
    const paragraph = getTranslation('getInTouchParagraph', language);
    const button = getTranslation('getInTouchButton', language);
    return (
        <div className="relative pb-10 md:pb-0">
            {/* <div className="absolute -top-6 -left-10 md:-left-6 w-full md:w-[50%] h-[300px] border dark:border-colorQuinary/40 border-colorQuinaryLight z-0"></div> */}
            <div className="relative shadow-md bg-transparent bg-gradient-to-r from-[#bfc4d4] via-[#bfc4d4] to-[#bac2dd] dark:from-[#31465d] dark:via-[#31465d] dark:to-[#31465d] rounded-lg p-10 md:flex z-11">
                <div className="items-center flex md:w-1/2 lg:w-2/5 justify-end md:justify-center md:mr-10 -mb-[120px] md:-mb-0">
                    <img src={document.documentElement.classList.contains('dark') ? decorativeForms : decorativeFormLight} className="max-h-[150px] lg:max-h-[200px]" alt="decorative forms" />
                </div>
                <div className="md:w-1/2 lg:w-3/5 py-8">
                    <h2 className="font-sans font-medium text-2xl sm:text-2xl leading-[1.2] bg-gradient-to-r dark:from-colorWhite/90 dark:to-colorWhite/90 from-colorTertiary to-colorMain/80 bg-clip-text text-transparent">{title}</h2>
                    <p className="max-w-[450px] text-colorMain dark:text-colorWhite font-figtree text-[15px] lg:text-base mt-6 pb-8">{paragraph}</p>
                    <Button 
                        children={button}
                        aria-label={button}
                        className="relative z-10 group"
                        href="mailto:eloise@eloiseemery.com"
                        blank={true}
                        type="secondary"
                        animate={true}
                        icon={<svg 
                            viewBox="0 0 64 64" 
                            xmlns="http://www.w3.org/2000/svg" 
                            strokeWidth="3" 
                            stroke="currentColor" 
                            fill="none" 
                            className="w-4 h-4 dark:text-colorWhite text-colorTertiary dark:group-hover:text-colorMain group-hover:text-colorWhite">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M38.61,54.93,27.94,35.57,9.08,25.38a1,1,0,0,1,.2-1.8L54.08,8.64a1,1,0,0,1,1.27,1.27L40.41,54.73A1,1,0,0,1,38.61,54.93Z"></path>
                                <line x1="55.13" y1="8.91" x2="27.94" y2="35.57" strokeLinecap="round"></line>
                            </g>
                        </svg>}
                    />
                </div>
            </div>
        </div>
    )
}   

export default GetInTouch;