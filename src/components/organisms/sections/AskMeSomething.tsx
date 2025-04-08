import Button from '../../atoms/Button';
import Chatbot from '../../molecules/Chatbot';
import downloadIcon from '../../../assets/svg/downloadIcon.svg';
import { getTranslation, Language } from '../../../translations';

function AskMeSomething({ language }: { language: Language }) {
    // Translations
    const title = getTranslation('askMeTitle', language);
    const paragraph = getTranslation('askMeParagraph', language);
    const buttonLabel = getTranslation('askMeButton', language);
    
    return (
        <div className="lg:flex">
            <div className="lg:w-[50%]">
                {/* Mobile text */}
                <div className="block lg:hidden pb-8">
                    <h2 className="font-sans font-medium text-2xl sm:text-3xl text-colorWhite/80 leading-[1.2]">{title} <span className="-ml-2 font-figtree">...</span></h2>
                    <p className="text-colorWhite font-figtree text-base mt-6 pb-8">{paragraph}</p>
                </div>
                <div className="relative opacity-80 hover:opacity-100 mb-16 lg:mb-0">
                    <div className="absolute -top-6 -right-10 md:-right-6 w-full h-[300px] border border-colorQuinary/50 z-0"></div>
                    <div className="relative z-10">
                        <Chatbot language={language} />
                    </div>
                </div>
            </div>
            <div className="sm:pl-[50px] lg:w-[50%] xl:pl-[200px]">
                {/* Desktop text */}
                <div className="hidden lg:block">
                    <h2 className="font-sans font-medium text-2xl sm:text-3xl text-colorWhite/80 leading-[1.2]">{title}<span className="pl-1 font-figtree">...</span></h2>
                    <p className="text-colorWhite font-figtree text-base mt-6 pb-8">{paragraph}</p>
                </div>
                <Button 
                children={buttonLabel}
                aria-label="Download my full resume"
                className="relative z-10 group -mt-10 sm:-ml-8 lg:-ml-0 lg:mt-0"
                href=""
                blank={true}
                type="secondary"
                icon={<img src={downloadIcon} alt="Download Icon" className="w-4 h-4 filter-brightness-0 invert group-hover:filter-none" />}
                />
            </div>
        </div>
    );
}

export default AskMeSomething;