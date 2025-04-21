import { useRef, useEffect, useState } from 'react';
import Chatbot from '../../molecules/Chatbot';
import { getTranslation, Language } from '../../../utils/translations';

function AskMeSomething({ language }: { language: Language }) {
    // Translations
    const title = getTranslation('askMeTitle', language);
    const paragraph = getTranslation('askMeParagraph', language);
    
    // Parallax and interaction refs
    const chatbotRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Calculate interactive tilt based on mouse position
    const calculateTilt = () => {
        // Only apply tilt effect on md screens and larger
        if (!chatbotRef.current || window.innerWidth < 640) return { transform: 'none' };
        
        const rect = chatbotRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (mousePosition.x - centerX) / 100;
        const deltaY = (mousePosition.y - centerY) / 100;
        
        return {
            transform: `perspective(1000px) rotateX(${-deltaY}deg) rotateY(${deltaX}deg) scale(${isHovering ? 1.02 : 1})`,
            transition: 'transform 0.1s ease-out'
        };
    };

    // Handle parallax and interaction
    useEffect(() => {
        const handleScroll = () => {
            if (chatbotRef.current) {
                const scrollPosition = window.pageYOffset;
                
                // Playful wave-like scroll effect with sine wave (no vertical translation)
                const waveAmplitude = 10; // Adjust for more/less wobble
                const waveFrequency = 0.005; // Adjust for different wave patterns
                const wobbleX = Math.sin(scrollPosition * waveFrequency) * waveAmplitude;

                chatbotRef.current.style.transform = `translateX(${wobbleX}px) rotate(${wobbleX * 0.1}deg)`;
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="lg:flex">
            <div className="lg:w-[50%]">
                {/* Mobile text */}
                <div className="block lg:hidden pb-10">
                    <h2 className="font-sans font-medium text-2xl sm:text-3xl leading-[1.2]  bg-gradient-to-r from-colorTertiary to-colorMain/80 dark:from-colorWhite/90 dark:to-colorWhite/90 bg-clip-text text-transparent">{title}</h2>
                    <p className="text-colorMain dark:text-colorWhite font-figtree text-base mt-6 pb-8">{paragraph}</p>
                </div>
                <div className="relative opacity-80 hover:opacity-100">
                    <div className="absolute -top-6 -right-10 md:-right-6 w-full h-[300px] border border-colorQuinaryLight dark:border-colorQuinary/50 z-0"></div>
                    <div 
                        ref={chatbotRef}
                        className="relative z-10 transition-all duration-200 ease-out"
                        style={calculateTilt()}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Chatbot 
                            language={language}
                        />
                    </div>
                    {/* Lien télécharger CV */}
                    {/* <div className="mt-6">
                        <Link 
                            linkText={linkLabel} 
                            linkUrl="" 
                            blank={true}
                            icon={<svg
                                height="20px"
                                width="20px"
                                viewBox="0 0 50 50"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="w-5 h-5 text-current dark:group-hover:text-colorMain group-hover:text-colorWhite"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path fill="" d="M11,32.996c-0.553,0-1,0.448-1,1v6.133c0,0.552,0.447,1,1,1h28c0.553,0,1-0.448,1-1v-6.133 c0-0.552-0.447-1-1-1s-1,0.448-1,1v5.133H12v-5.133C12,33.444,11.553,32.996,11,32.996z"></path>
                                    <path fill="" d="M25,9.129c-0.553,0-1,0.448-1,1v21.51l-6.343-6.127c-0.395-0.384-1.03-0.373-1.413,0.024 c-0.384,0.397-0.373,1.03,0.024,1.414l8.023,7.751c0.001,0.001,0.001,0.001,0.002,0.002l0.012,0.011 c0.037,0.036,0.084,0.051,0.124,0.08c0.062,0.045,0.12,0.095,0.192,0.124c0.121,0.05,0.249,0.076,0.378,0.076 s0.257-0.027,0.378-0.076c0.067-0.027,0.12-0.074,0.178-0.115c0.046-0.031,0.098-0.05,0.139-0.09l8.036-7.765 c0.396-0.384,0.407-1.017,0.023-1.414c-0.384-0.397-1.017-0.408-1.414-0.024L26,31.639v-21.51C26,9.577,25.553,9.129,25,9.129z"></path>
                                </g>
                            </svg>
                            }
                        />
                    </div> */}
                </div>
            </div>
            {/* Desktop text */}
            <div className="relative hidden lg:block sm:pl-[50px] lg:w-[50%] lg:pl-[100px] 2xl:pl-[200px]">
                <div className="max-w-[550px]">
                    <h2 className="font-sans font-medium text-3xl leading-[1.2] bg-gradient-to-r from-colorTertiary to-colorMain/80 dark:from-colorWhite/90 dark:to-colorWhite/90 bg-clip-text text-transparent">{title}</h2>
                    <p className="text-colorMain dark:text-colorWhite font-figtree text-base mt-6 pb-8">{paragraph}</p>
                </div>
            </div>
        </div>
    );
}

export default AskMeSomething;