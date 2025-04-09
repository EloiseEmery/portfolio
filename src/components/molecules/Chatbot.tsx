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
            <form className="relative bg-darkBlue dark:bg-[#B6B6B9] p-4 rounded-lg bg-[#121F2E] rounded-t-lg border border-colorWhite/20 dark:border-colorMain/10">
                <div className="">
                    <div className="h-64 bg-darkBlueDarker rounded-lg"></div>
                </div>
                <div className="flex items-center p-2 border border-colorWhite/40 dark:border-colorMain/20 bg-colorWhite/20 dark:bg-colorWhite/60 rounded-lg">
                    <input 
                        type="text" 
                        placeholder={`${displayedPlaceholder}${!isFocused && showCursor ? '│' : ''}`}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className="flex-grow bg-transparent p-1 text-white dark:text-colorMain focus:outline-none 
                            placeholder:text-white/80 dark:placeholder:text-colorMain/80"
                    />
                    <button type="submit" className="ml-2 bg-colorWhite/40 dark:bg-colorBlack/30 p-2 rounded-full">
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
