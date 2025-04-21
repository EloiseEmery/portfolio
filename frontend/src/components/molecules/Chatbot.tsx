import chatLogos from '../../assets/png/chatLogos.png';
import { getTranslation, Language } from '../../utils/translations';
import { useState, useEffect, useRef } from 'react';
import userIcon from '../../assets/png/userIcon.png';
import assistantIcon from '../../assets/png/assistantIcon.png';

type Message = { role: "user" | "assistant"; content: string; };

function Chatbot({ language }: { language: Language })  {
    // Translations
    const title = getTranslation('askMeInput', language);
    const assistantTyping = getTranslation('assistantTyping', language);
    const assistantDefaultMessage = getTranslation('assistantDefaultMessage', language);
    // Effects
    const [displayedPlaceholder, setDisplayedPlaceholder] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const [showCursor, setShowCursor] = useState(true);
    const [isFocused, setIsFocused] = useState(false);
    // Chatbot logic
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const questions = [
        'Où te vois-tu dans 3 à 5 ans ?',
        'Quelles sont tes valeurs au travail ?',
        'Où travailles-tu actuellement ?'
    ]

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

    // Add initial Assistant message with a delay
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setMessages([{ role: 'assistant', content: assistantDefaultMessage }]);
        }, 1500);

        return () => clearTimeout(timeoutId);
    }, [assistantDefaultMessage]);

    // Auto-scroll to the last message
    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    }, [messages, loading]);

    // Function to handle question click
    const handleQuestionClick = (question: string) => {
        setInput(question);
    }

    // Handle message submission
    async function sendMessage(userMsg: string) {
        // Validate message
        const trimmedMsg = userMsg.trim();
        const MAX_MESSAGE_LENGTH = 200;
        // Reset any previous error states
        setErrorMessage(null);

        if (!trimmedMsg) {
            setErrorMessage('Please enter a message');
            return;
        }

        if (trimmedMsg.length > MAX_MESSAGE_LENGTH) {
            setErrorMessage(`Message is too long. Maximum length is ${MAX_MESSAGE_LENGTH} characters.`);
            return;
        }

        const userMessage: Message = { role: 'user', content: trimmedMsg };
        const updatedMessages: Message[] = [...messages, userMessage];
        setMessages(updatedMessages);
        setInput('');
        setLoading(true);

        try {
            // Send message to API
            const response = await fetch('http://localhost:3001/api/chat', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                message: trimmedMsg,
                conversation: updatedMessages.filter((m): m is Message & { role: 'user' } => m.role !== 'assistant'),
              }),
            });
            
            // Get response from API
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const assistantMessage: Message = { role: 'assistant', content: data.response || data.error };

            // Add assistant message to chat
            setMessages([...updatedMessages, assistantMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
            const errorMessage: Message = { 
                role: 'assistant', 
                content: getTranslation('errorSendingMessage', language) 
            };
            setMessages([...updatedMessages, errorMessage]);
        } finally {
            setLoading(false);
        }
    }

    return (
       <div className="">
             <div className="opacity-80 absolute right-0 -top-[60px] filter-brightness-0 invert dark:filter-none">
                <img src={chatLogos} className='h-[25px]'/>
            </div>
            <form 
                onSubmit={e => {
                    e.preventDefault();
                    if (input.trim()) sendMessage(input);
                }}
                className="relative bg-[#bfc4d4] dark:bg-darkBlue p-4 rounded-2xl dark:bg-[#31465d] border dark:border-colorWhite/30  border-colorMain/15"
            >
                <div className="">
                    <div ref={messagesContainerRef} className="h-64 bg-darkBlueDarker rounded-lg overflow-y-auto py-4">
                    {messages.map((m, i) => (
                        <div key={i} className={`flex ${m.role === "user" ? "justify-end" : ""}`}>
                            <div>
                                <span className={`text-colorMain/80 dark:text-colorWhite/80 text-xs ${m.role === "user" ? "flex justify-end" : ""}`}>{m.role === "user" ? "You" : "Éloïse"}</span>
                                <div className="flex mb-2 pt-1">
                                    <img src={m.role === "user" ? userIcon : assistantIcon} className={`w-6 h-6 ${m.role === "user" ? "opacity-60 order-1 ml-2" : "mr-2"}`} />
                                    <span className={`inline-block rounded p-2 ${m.role === "user" ? "bg-colorWhite/80 text-colorMain" : "bg-colorMain/40 text-colorWhite"}`}>
                                        {m.content}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                    {loading && <div className="text-gray-400 italic">{assistantTyping}</div>}
                    </div>
                </div>
                <div className="flex items-center p-2 border dark:border-colorWhite/40 border-colorMain/15 dark:bg-colorWhite/20 bg-colorWhite/60 rounded-lg">
                    <input 
                        type="text" 
                        placeholder={`${displayedPlaceholder}${!isFocused && showCursor ? '│' : ''}`}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        disabled={loading}
                        className="flex-grow bg-transparent p-1 dark:text-white text-colorMain focus:outline-none 
                            dark:placeholder:text-white/80 placeholder:text-colorMain/80"
                    />
                    <button type="submit" className="ml-2 dark:bg-colorQuinary/50 bg-[#c5d438] p-2 rounded-full dark:hover:scale-105 hover:scale-105 transition-transform" disabled={loading}>
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
            {errorMessage && (
                <div className="text-red-600 text-xs mt-2">
                    {errorMessage}
                </div>
            )}
            <div className="mt-2 flex gap-2 flex-wrap">
                {questions.map((question, index) => (
                    <span 
                        key={index} 
                        onClick={() => handleQuestionClick(question)}
                        className="cursor-pointer text-colorMain/60 dark:text-colorWhite/75 bg-colorMain/15 dark:bg-colorWhite/20 px-2 py-1 rounded-md text-xs hover:bg-colorMain/20 dark:hover:bg-colorWhite/30 transition-colors"
                    >
                        {question}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Chatbot;
