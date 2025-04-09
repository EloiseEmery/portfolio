import decorativeForms from '../../../assets/png/decorativeForms.png';
import decorativeFormLight from '../../../assets/png/decorativeFormsLight.png';
import Button from '../../atoms/Button';
import { getTranslation, Language } from '../../../translations';

function GetInTouch({ language }: { language: Language }) {
    // Translations
    const title = getTranslation('getInTouchTitle', language);
    const paragraph = getTranslation('getInTouchParagraph', language);
    const button = getTranslation('getInTouchButton', language);
    return (
        <div className="relative">
            <div className="absolute -top-6 -left-10 md:-left-6 w-full md:w-[50%] h-[300px] border border-colorQuinary/50 dark:border-[#c5d438] z-0"></div>
            <div className="relative bg-[#161B22] dark:bg-transparent dark:bg-gradient-to-r from-[#ebeffd] via-[#D9DFF7] to-[#D9DFF7]  rounded-lg p-10 md:flex z-11">
                <div className="items-center flex md:w-1/2">
                    <img src={document.documentElement.classList.contains('dark') ? decorativeFormLight : decorativeForms} className="max-h-[200px] " alt="decorative forms" />
                </div>
                <div className="md:w-1/2 py-8">
                    <h2 className="font-sans font-medium text-2xl sm:text-3xl leading-[1.2] bg-gradient-to-r from-colorWhite/80 to-colorWhite/80 dark:from-colorTertiary dark:to-colorMain/80 bg-clip-text text-transparent">{title}</h2>
                    <p className="text-colorWhite dark:text-colorMain font-figtree text-base mt-6 pb-8">{paragraph}</p>
                    <Button 
                        children={button}
                        aria-label={button}
                        className="relative z-10 group"
                        href="mailto:eloise@eloiseemery.com"
                        blank={true}
                        type="secondary"
                        icon={<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="currentColor" fill="none" className="w-4 h-4 text-colorWhite dark:text-colorTertiary group-hover:text-colorMain dark:group-hover:text-colorWhite">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M38.61,54.93,27.94,35.57,9.08,25.38a1,1,0,0,1,.2-1.8L54.08,8.64a1,1,0,0,1,1.27,1.27L40.41,54.73A1,1,0,0,1,38.61,54.93Z"></path>
                                <line x1="55.13" y1="8.91" x2="27.94" y2="35.57" stroke-linecap="round"></line>
                            </g>
                        </svg>}
                    />
                </div>
            </div>
        </div>
    )
}   

export default GetInTouch;