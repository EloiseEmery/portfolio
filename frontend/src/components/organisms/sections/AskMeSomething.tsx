import { useRef, useEffect, useState } from 'react';
import Chatbot from '../../molecules/Chatbot';
import { getTranslation, Language } from '../../../utils/translations';
import { motion } from 'framer-motion';

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
        if (!chatbotRef.current || window.innerWidth < 768) return { transform: 'none' };
        
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
                // Only apply scroll effect if screen is large enough
                if (window.innerWidth >= 500) {
                    const scrollPosition = window.pageYOffset;
                    const waveAmplitude = 10;
                    const waveFrequency = 0.005;
                    const wobbleX = Math.sin(scrollPosition * waveFrequency) * waveAmplitude;

                    chatbotRef.current.style.transform = `translateX(${wobbleX}px) rotate(${wobbleX * 0.1}deg)`;
                } else {
                    chatbotRef.current.style.transform = 'none';
                }
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (window.innerWidth >= 768) {
                setMousePosition({ x: e.clientX, y: e.clientY });
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="lg:flex -mt-20 md:-mt-0">
            <div className="lg:w-[50%]">
                {/* Mobile text */}
                <div className="block lg:hidden pb-10">
                    <h2 className="font-sans font-medium text-2xl leading-[1.2] bg-gradient-to-r from-colorTertiary to-colorMain/80 dark:from-colorWhite/90 dark:to-colorWhite/90 bg-clip-text text-transparent">{title}</h2>
                    <p className="text-colorMain dark:text-colorWhite font-figtree text-[15px] mt-6 pb-8">{paragraph}</p>
                </div>
                <div className="relative opacity-80 hover:opacity-100">
                    {/* <div className="absolute -top-6 -right-10 md:-right-6 w-full h-[300px] border border-colorQuinaryLight dark:border-colorQuinary/50 z-0"></div> */}
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
                </div>
            </div>
            {/* Desktop text */}
            <motion.div 
                className="relative hidden lg:block sm:pl-[50px] lg:w-[50%] lg:pl-[100px] 2xl:pl-[175px]"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                        type: "spring",
                        duration: 1.8,
                        bounce: 0.2
                    }
                }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div 
                    className="max-w-[500px]"
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { 
                            opacity: 1, 
                            y: 0,
                            transition: {
                                type: "spring",
                                duration: 2,
                                bounce: 0.2,
                                delay: 0.3
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h2 
                        className="font-sans font-medium text-2xl leading-[1.2] bg-gradient-to-r from-colorTertiary to-colorMain/80 dark:from-colorWhite/90 dark:to-colorWhite/90 bg-clip-text text-transparent"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { 
                                opacity: 1, 
                                y: 0,
                                transition: {
                                    type: "spring",
                                    duration: 1.8,
                                    bounce: 0.2,
                                    delay: 0.4
                                }
                            }
                        }}
                    >
                        {title}
                    </motion.h2>
                    <motion.p 
                        className="text-colorMain dark:text-colorWhite font-figtree text-base mt-6 pb-8"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { 
                                opacity: 1, 
                                y: 0,
                                transition: {
                                    type: "spring",
                                    duration: 1.8,
                                    bounce: 0.2,
                                    delay: 0.6
                                }
                            }
                        }}
                    >
                        {paragraph}
                    </motion.p>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default AskMeSomething;