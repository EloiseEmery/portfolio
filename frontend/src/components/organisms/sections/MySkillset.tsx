import html from '../../../assets/logos-skills/html.png'
import css from '../../../assets/logos-skills/css.png';
import wp from '../../../assets/logos-skills/wp.png';
import react from '../../../assets/logos-skills/react.png';
import adobe from '../../../assets/logos-skills/adobe.png';
import php from '../../../assets/logos-skills/php.png';
import git from '../../../assets/logos-skills/git.png';
import docker from '../../../assets/logos-skills/docker.png';
import openai from '../../../assets/logos-skills/openai.png';
import figma from '../../../assets/logos-skills/figma.png';
import sql from '../../../assets/logos-skills/sql.png';
import js from '../../../assets/logos-skills/js.png';
import { getTranslation, Language } from '../../../utils/translations';
import Link from '../../atoms/Link';

function MySkillset({ language }: { language: Language }) {
    // Translations
    const title = getTranslation('mySkillsetTitle', language);
    const paragraph = getTranslation('mySkillsetParagraph', language);
    const linkLabel = getTranslation('mySkillsetLink', language);
    const skill1 = getTranslation('mySkillsetSkill1', language);
    const skill2 = getTranslation('mySkillsetSkill2', language);
    const skill3 = getTranslation('mySkillsetSkill3', language);
    const skill4 = getTranslation('mySkillsetSkill4', language);
    
    return (
        <div className="relative">
            <div className="relative">
                <h2 className="mx-auto text-center w-[350px] font-sans font-medium text-2xl sm:text-3xl leading-[1.2]  bg-gradient-to-r dark:from-colorWhite/90 dark:to-colorWhite/90 from-colorTertiary to-colorMain/80 bg-clip-text text-transparent">{title}</h2>
                <p className="text-center dark:text-colorWhite text-colorMain font-figtree text-base mt-6 pb-2 max-w-[700px] md:mx-auto">{paragraph}</p>
            </div>
            {/* Skillset grid // Can add different images depends on color mode */}
            <div className="mr-[25px] md:mr-0 flex overflow-x-auto space-x-4 py-4 md:grid md:grid-cols-4 lg:grid-cols-6 gap-y-8 mt-6">
                {[
                    { dark: html, light: html, alt: "HTML Icon" },
                    { dark: css, light: css, alt: "CSS Icon" },
                    { dark: js, light: js, alt: "Node Icon" },
                    { dark: sql, light: sql, alt: "SQL Icon" },
                    { dark: docker, light: docker, alt: "Docker Icon" },
                    { dark: openai, light: openai, alt: "OpenAI Icon" },
                    { dark: react, light: react, alt: "React Icon" },
                    { dark: git, light: git, alt: "Git Icon" },
                    { dark: wp, light: wp, alt: "WP Icon" },
                    { dark: php, light: php, alt: "PHP Icon" },
                    { dark: figma, light: figma, alt: "Figma Icon" },
                    { dark: adobe, light: adobe, alt: "Adobe Icon"}
                ].map((skill, index) => (
                    <div key={index} className="flex-shrink-0 flex justify-center items-center opacity-50 dark:opacity-70 hover:opacity-100 dark:hover:opacity-100 filter-brightness-0 invert dark:filter-none">
                        <img 
                            src={document.documentElement.classList.contains('dark') ? skill.dark : skill.light} 
                            alt={skill.alt} 
                            className={`w-auto h-[75px] ${skill.alt === "Adobe Icon" ? "h-[80px]" : ""} ${skill.alt === "PHP Icon" ? "h-[70px]" : ""} ${skill.alt === "React Icon" ? "lg:-ml-4" : ""}`}
                        />
                    </div>
                ))}
            </div>
            {/* Section Bottom */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-8 rounded-lg gap-x-10  text-center font-sans text-xs sm:text-sm mt-8 p-6 sm:p-10 bg-[#bfc4d470] dark:bg-[#31465d70] text-colorMain dark:text-colorWhite/80 border dark:border-colorWhite/20 border-colorMain/10 dark:opacity-90 opacity-70 hover:opacity-100 dark:hover:opacity-100" >
                <p className="">{skill1}</p>
                <p>{skill2}</p>
                <p>{skill3}</p>
                <p>Tailwind CSS</p>
                <p>{skill4}</p>
                <p>Shopify</p>
                <p>Next.js</p>
                <p>Angular</p>
                <p>Laravel</p>
                <p>TypeScript</p>
                <p>API REST</p>
                <p>.Liquid</p>
            </div>
            <div className="mt-3 flex justify-end">
                <Link 
                    linkText={linkLabel} 
                    linkUrl="https://www.linkedin.com/in/eloise-emery/details/skills/" 
                    blank={true}
                />
            </div>
        </div>
    );
}

export default MySkillset;