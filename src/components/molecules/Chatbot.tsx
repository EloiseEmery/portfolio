import chatLogos from '../../assets/png/chatLogos.png';
import { getTranslation, Language } from '../../utils/translations';
import { useState, useEffect } from 'react';

function Chatbot({ language }: { language: Language }) {
    const title = getTranslation('askMeInput', language);
    const [displayedPlaceholder, setDisplayedPlaceholder] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const [showCursor, setShowCursor] = useState(true);
    const [isFocused, setIsFocused] = useState(false);

    // Animated placeholder letters
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        let cursorTimeoutId: NodeJS.Timeout;
        
        if (!isComplete && displayedPlaceholder.length < title.length) {
            timeoutId = setTimeout(() => {
                setDisplayedPlaceholder(title.slice(0, displayedPlaceholder.length + 1));
            }, 100);
        } else if (!isComplete && displayedPlaceholder.length === title.length) {
            timeoutId = setTimeout(() => {
                setIsComplete(true);
            }, 1000); // Pause for 1 second when fully typed
        } else if (isComplete) {
            timeoutId = setTimeout(() => {
                setDisplayedPlaceholder('');
                setIsComplete(false);
            }, 2000); // Wait 2 seconds before starting over
        }

        // Cursor blinking animation only when not focused
        if (!isFocused) {
            cursorTimeoutId = setInterval(() => {
                setShowCursor(prev => !prev);
            }, 500);
        }

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
            if (cursorTimeoutId) clearInterval(cursorTimeoutId);
        };
    }, [displayedPlaceholder, isComplete, title, isFocused]);

    // Reset animation when language changes
    useEffect(() => {
        setDisplayedPlaceholder('');
        setIsComplete(false);
        setShowCursor(true);
    }, [language]);

    return (
       <div className="">
            <form className="relative bg-[#B6B6B9] dark:bg-darkBlue p-4 rounded-lg dark:bg-[#121F2E] rounded-t-lg border dark:border-colorWhite/20  border-colorMain/10">
                <div className="">
                    <div className="h-64 bg-darkBlueDarker rounded-lg"></div>
                </div>
                <div className="flex items-center p-2 border dark:border-colorWhite/40 border-colorMain/20 dark:bg-colorWhite/20 bg-colorWhite/60 rounded-lg">
                    <input 
                        type="text" 
                        placeholder={`${displayedPlaceholder}${!isFocused && showCursor ? '│' : ''}`}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className="flex-grow bg-transparent p-1 dark:text-white text-colorMain focus:outline-none 
                            dark:placeholder:text-white/80 placeholder:text-colorMain/80"
                    />
                    <button type="submit" className="ml-2 dark:bg-colorQuinary/50 bg-[#c5d438] p-2 rounded-full">
                        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="currentColor" fill="none" className="text-colorMain/60 dark:text-colorMain w-4 h-4">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M38.61,54.93,27.94,35.57,9.08,25.38a1,1,0,0,1,.2-1.8L54.08,8.64a1,1,0,0,1,1.27,1.27L40.41,54.73A1,1,0,0,1,38.61,54.93Z"></path>
                                <line x1="55.13" y1="8.91" x2="27.94" y2="35.57" strokeLinecap="round"></line>
                            </g>
                        </svg>
                    </button>
                </div>
            </form>
            <div className="absolute right-0 -top-14 sm:-bottom-10 sm:top-auto filter-brightness-0 invert dark:filter-none">
                <img src={chatLogos} className='h-[20px] sm:h-[25px]'/>
            </div>
        </div>
    );
}

export default Chatbot;
