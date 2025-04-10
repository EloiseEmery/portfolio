import html from '../../../assets/logos-skills/html.png'
import html_light from '../../../assets/logos-skills/html_light.png'
import css from '../../../assets/logos-skills/css.png';
import css_light from '../../../assets/logos-skills/css_light.png';
import wp from '../../../assets/logos-skills/wp.png';
import wp_light from '../../../assets/logos-skills/wp_light.png';
import react from '../../../assets/logos-skills/react.png';
import react_light from '../../../assets/logos-skills/react_light.png';
import adobe from '../../../assets/logos-skills/adobe.png';
import adobe_light from '../../../assets/logos-skills/adobe_light.png';
import php from '../../../assets/logos-skills/php.png';
import php_light from '../../../assets/logos-skills/php_light.png';
import git from '../../../assets/logos-skills/git.png';
import git_light from '../../../assets/logos-skills/git_light.png';
import docker from '../../../assets/logos-skills/docker.png';
import docker_light from '../../../assets/logos-skills/docker_light.png';
import openai from '../../../assets/logos-skills/openai.png';
import openai_light from '../../../assets/logos-skills/openai_light.png';
import npm from '../../../assets/logos-skills/npm.png';
import npm_light from '../../../assets/logos-skills/npm_light.png';
import sql from '../../../assets/logos-skills/sql.png';
import sql_light from '../../../assets/logos-skills/sql_light.png';
import js from '../../../assets/logos-skills/js.png';
import js_light from '../../../assets/logos-skills/js_light.png';
import decorativeEl from '../../../assets/png/elDecorativeSkills.png';
import { getTranslation, Language } from '../../../utils/translations';

function MySkillset({ language }: { language: Language }) {
    // Translations
    const title = getTranslation('mySkillsetTitle', language);
    const paragraph = getTranslation('mySkillsetParagraph', language);
    
    return (
        <div className="relative">
            {/* Decorative element */}
            <div className="absolute -top-[50px] -left-[220px] sm:-left-[150px] md:-bottom-[100px] xl:-left-[225px] 2xl:-left-[300px] z-0">
                <img src={decorativeEl} alt="Decorative Element" className="w-full max-h-[300px] sm:max-h-[290px] object-contain opacity-30 dark:opacity-10 dark:sm:opacity-15 dark:filter-brightness-0 dark:invert" />
            </div>
            <div className="relative">
                <h2 className="mx-auto text-center w-[350px] font-sans font-medium text-2xl sm:text-3xl leading-[1.2] text-colorWhite/80 dark:bg-gradient-to-r dark:from-colorTertiary dark:to-colorMain/80 dark:bg-clip-text dark:text-transparent">{title}</h2>
                <p className="text-center text-colorWhite dark:text-colorMain font-figtree text-base mt-6 pb-8 md:max-w-[75%] lg:max-w-[60%] md:mx-auto">{paragraph}</p>
            </div>
            {/* Skillset grid */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-8 mt-6">
                <div className='flex justify-center items-center opacity-70 hover:opacity-100'>
                    <img src={document.documentElement.classList.contains('dark') ? html_light : html} alt="SQL Icon" className="w-20 h-15 sm:w-25 sm:h-25" />
                </div>
                <div className='flex justify-center items-center opacity-70 hover:opacity-100'>
                    <img src={document.documentElement.classList.contains('dark') ? css_light : css} alt="CSS Icon" className="w-20 h-15 sm:w-25 sm:h-25" />
                </div>
                <div className='flex justify-center items-center opacity-70 hover:opacity-100'>
                    <img src={document.documentElement.classList.contains('dark') ? js_light : js} alt="Node Icon" className="w-20 h-15 sm:w-25 sm:h-25" />
                </div>
                <div className='flex justify-center items-center opacity-70 hover:opacity-100'>
                    <img src={document.documentElement.classList.contains('dark') ? sql_light : sql} alt="SQL Icon" className="w-20 h-15 sm:w-25 sm:h-25" />
                </div>  
                <div className='flex justify-center items-center opacity-70 hover:opacity-100'>
                    <img src={document.documentElement.classList.contains('dark') ? docker_light : docker} alt="Docker Icon" className="w-20 h-15 sm:w-25 sm:h-25" />
                </div>
                <div className='flex justify-center items-center opacity-70 hover:opacity-100'>
                    <img src={document.documentElement.classList.contains('dark') ? openai_light : openai} alt="OpenAI Icon" className="w-20 h-15 sm:w-25 sm:h-25" />
                </div>
                <div className='flex justify-center items-center opacity-70 hover:opacity-100'>
                    <img src={document.documentElement.classList.contains('dark') ? react_light : react} alt="React Icon" className="w-20 h-15 sm:w-25 sm:h-25" />
                </div>
                <div className='flex justify-center items-center opacity-70 hover:opacity-100'>
                    <img src={document.documentElement.classList.contains('dark') ? git_light : git} alt="Git Icon" className="w-20 h-15 sm:w-25 sm:h-25" />
                </div>
                <div className='flex justify-center items-center opacity-70 hover:opacity-100'>
                    <img src={document.documentElement.classList.contains('dark') ? wp_light : wp} alt="WP Icon" className="w-20 h-15 sm:w-25 sm:h-25" />
                </div>
                <div className='flex justify-center items-center opacity-70 hover:opacity-100'>
                    <img src={document.documentElement.classList.contains('dark') ? adobe_light : adobe} alt="Adobe Icon" className="w-25 h-20 sm:w-25 sm:h-25" />
                </div>
                <div className='flex justify-center items-center opacity-70 hover:opacity-100'>
                    <img src={document.documentElement.classList.contains('dark') ? php_light : php} alt="PHP Icon" className="w-20 h-15 sm:w-25 sm:h-25" />
                </div>
                <div className='flex justify-center items-center opacity-70 hover:opacity-100'>
                    <img src={document.documentElement.classList.contains('dark') ? npm_light : npm} alt="npm Icon" className="w-20 h-15 sm:w-25 sm:h-25" />
                </div>
            </div>
            {/* Section Bottom */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-8 rounded-lg text-center font-sans text-sm mt-8 p-6 sm:p-10 bg-[#121F2E] dark:bg-[#F3F3F3] text-colorWhite/80 hover:text-colorWhite dark:text-colorMain border border-colorWhite/60 dark:border-colorMain/10 opacity-90 hover:opacity-100 dark:opacity-70 dark:hover:opacity-100" >
                <p>Figma</p>
                <p>User<br /> experience</p>
                <p>Responsive<br /> design</p>
                <p>Tailwind<br /> CSS</p>
                <p>Langchain</p>
                <p>Shopify</p>
                <p>Next.js</p>
                <p>Node.js</p>
                <p>Angular</p>
                <p>Laravel</p>
                <p>API REST</p>
                <p>.Liquid</p>
            </div>
            <div className="mt-3">
                <small className='flex justify-end cursor-pointer text-colorWhite/60 dark:text-colorMain/60 underline hover:text-colorQuaternary dark:hover:text-colorTertiary'><a href="https://www.linkedin.com/in/eloise-emery/details/skills/" target="_blank" rel="noopener noreferrer">see all my skills on my LinkedIn</a> 
                    <svg
                        fill="currentColor"
                        viewBox="0 0 50 50"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-current group-hover:text-colorMain dark:group-hover:text-colorWhite"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M38.288 10.297l1.414 1.415-14.99 14.99-1.414-1.414z"></path>
                            <path d="M40 20h-2v-8h-8v-2h10z"></path>
                            <path d="M35 38H15c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h11v2H15c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V24h2v11c0 1.7-1.3 3-3 3z"></path>
                        </g>
                    </svg> 
                </small>
            </div>
        </div>
    );
}

export default MySkillset;