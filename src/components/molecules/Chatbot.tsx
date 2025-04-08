import chatLogos from '../../assets/png/chatLogos.png';
import { getTranslation, Language } from '../../translations';

function Chatbot({ language }: { language: Language }) {
    const title = getTranslation('askMeInput', language);
    return (
       <div className="">
            <form className="relative bg-darkBlue dark:bg-[#ebeffd] p-4 rounded-lg shadow-md bg-[#121F2E] rounded-t-lg border border-colorWhite/20 dark:border-colorMain/10">
                <div className="">
                    <div className="h-64 bg-darkBlueDarker rounded-lg"></div>
                </div>
                <div className="flex items-center p-2 border border-colorWhite/40 dark:border-colorMain/20 rounded-lg">
                    <input 
                        type="text" 
                        placeholder={title} 
                        className="flex-grow bg-transparent p-1 text-white dark:text-colorMain focus:outline-none"
                    />
                    <button type="submit" className="ml-2 bg-colorQuaternary dark:bg-colorTertiary/50 p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" className="text-colorMain dark:text-colorWhite" />
                        </svg>
                    </button>
                </div>
            </form>
            <div className="absolute  right-0 -top-14 sm:-bottom-10 sm:top-auto dark:filter-brightness-0 dark:invert">
                <img src={chatLogos} className='h-[20px] sm:h-[25px]'/>
            </div>
        </div>
    );
}

export default Chatbot;
