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
            {/* <div className="absolute -top-[50px] -left-[220px] sm:-left-[150px] md:-bottom-[100px] xl:-left-[225px] 2xl:-left-[300px] z-0">
                <img src={decorativeEl} alt="Decorative Element" className="w-full max-h-[300px] sm:max-h-[290px] object-contain dark:opacity-30 opacity-10 sm:opacity-15 filter-brightness-0 invert dark:filter-none" />
            </div> */}
            <div className="relative">
                <h2 className="mx-auto text-center w-[350px] font-sans font-medium text-2xl sm:text-3xl leading-[1.2]  bg-gradient-to-r dark:from-colorWhite/90 dark:to-colorWhite/90 from-colorTertiary to-colorMain/80 bg-clip-text text-transparent">{title}</h2>
                <p className="text-center dark:text-colorWhite text-colorMain font-figtree text-base mt-6 pb-2 md:max-w-[75%] lg:max-w-[60%] md:mx-auto">{paragraph}</p>
            </div>
            {/* Skillset grid */}
            <div className="mr-[25px] md:mr-0 flex overflow-x-auto space-x-4 py-4 md:grid md:grid-cols-4 lg:grid-cols-6 gap-y-8 mt-6">
                {[
                    { dark: html, light: html_light, alt: "HTML Icon" },
                    { dark: css, light: css_light, alt: "CSS Icon" },
                    { dark: js, light: js_light, alt: "Node Icon" },
                    { dark: sql, light: sql_light, alt: "SQL Icon" },
                    { dark: docker, light: docker_light, alt: "Docker Icon" },
                    { dark: openai, light: openai_light, alt: "OpenAI Icon" },
                    { dark: react, light: react_light, alt: "React Icon" },
                    { dark: git, light: git_light, alt: "Git Icon" },
                    { dark: wp, light: wp_light, alt: "WP Icon" },
                    { dark: adobe, light: adobe_light, alt: "Adobe Icon"},
                    { dark: php, light: php_light, alt: "PHP Icon" },
                    { dark: npm, light: npm_light, alt: "npm Icon" }
                ].map((skill, index) => (
                    <div key={index} className="flex-shrink-0 flex justify-center items-center opacity-70 hover:opacity-100">
                        <img 
                            src={document.documentElement.classList.contains('dark') ? skill.dark : skill.light} 
                            alt={skill.alt} 
                            className={`w-auto h-[75px] sm:w-25 sm:h-25`}
                        />
                    </div>
                ))}
            </div>
            {/* Section Bottom */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-8 rounded-lg text-center font-sans text-xs sm:text-sm mt-8 p-6 sm:p-10 bg-[#bfc4d470] dark:bg-[#31465d70] text-colorMain dark:text-colorWhite/80 border dark:border-colorWhite/60 border-colorMain/10 dark:opacity-90 opacity-70 hover:opacity-100 dark:hover:opacity-100" >
                <p>UX/UI<br /> conception</p>
                <p>Tailwind<br /> CSS</p>
                <p>Responsive<br /> design</p>
                <p>Design<br /> system</p>
                <p>Figma</p>
                <p>Shopify</p>
                <p>Next.js</p>
                <p>Angular</p>
                <p>Laravel</p>
                <p>Langchain</p>
                <p>API REST</p>
                <p>.Liquid</p>
            </div>
            <div className="mt-3">
                <small className='flex justify-end cursor-pointer text-colorMain/80 dark:text-colorWhite/60 underline dark:hover:text-colorQuaternary hover:text-colorTertiary'><a href="https://www.linkedin.com/in/eloise-emery/details/skills/" target="_blank" rel="noopener noreferrer">see all my skills on my LinkedIn</a> 
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