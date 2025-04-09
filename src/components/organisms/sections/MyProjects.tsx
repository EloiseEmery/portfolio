import { useState } from 'react';
import Button from '../../atoms/Button';
import project1 from '../../../assets/projects/project1.png';
import project2 from '../../../assets/projects/project2.png';
import project3 from '../../../assets/projects/project3.png';
import decorativeEl from '../../../assets/png/decorativeCube.png';
import { getTranslation, Language } from '../../../translations';

function MyProjects({ language }: { language: Language }) {
    // Translations
    const title = getTranslation('myProjectsTitle', language);
    const paragraph = getTranslation('myProjectsParagraph', language);
    const button = getTranslation('myProjectsButton', language);
    const tags = getTranslation('myProjectsTag', language);

    const [hoveredProject, setHoveredProject] = useState<number | null>(1);
    const projectImages = [project1, project2, project3];

    // Projects data
    const projects = [
        {
            id: 1,
            title: "This project portfolio",
            tags: ["UI/UX", "React", "Tailwind", "OpenAI", "Docker"]
        },
        {
            id: 2,
            title: "BanQ dans ta classe",
            tags: ["UI/UX", tags, "MCD", "React", "Tailwind"]
        },
        {
            id: 3,
            title: "Société Québécoise des Infrastructures",
            tags: ["UI/UX", tags, "CMS"]
        }
    ];

    return (
        // Projects section
        <div className="relative">  
            {/* Decorative element */}
            <div className="absolute -right-[170px] sm:-right-[275px] z-1">
                <img src={decorativeEl} alt="Decorative Element" className="w-full max-h-[300px] sm:max-h-[340px] object-contain opacity-100 dark:filter-brightness-0 dark:invert" />
            </div>
            {/* Top section */}
            <div className="lg:flex z-10 relative">
                <div className="sm:pr-[50px] lg:w-[55%] flex">
                    <div>
                        <h2 className="font-sans font-medium text-2xl sm:text-3xl leading-[1.2] text-colorWhite/80 dark:bg-gradient-to-r dark:from-colorTertiary dark:to-colorMain/80 dark:bg-clip-text dark:text-transparent">{title}</h2>
                        <p className="text-colorWhite dark:text-colorMain font-figtree text-base mt-6 pb-8 lg:pb-0 ">{paragraph}</p>
                    </div>
                </div>
                <div className="lg:w-[45%]">
                    <div className="flex lg:justify-end">
                        <Button 
                            children={button}
                            aria-label="See more projects on my Github"
                            className="relative z-10 group"
                            href="https://github.com/eloiseemery"
                            blank={true}
                            type="secondary"
                            icon={
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 50 50"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-current group-hover:text-colorMain dark:group-hover:text-colorWhite"
                                >
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M38.288 10.297l1.414 1.415-14.99 14.99-1.414-1.414z"></path>
                                        <path d="M40 20h-2v-8h-8v-2h10z"></path>
                                        <path d="M35 38H15c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h11v2H15c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V24h2v11c0 1.7-1.3 3-3 3z"></path>
                                    </g>
                                </svg>
                            }
                        />
                    </div>
                </div>
            </div>
            {/* Bottom section */}
            <div className="lg:flex z-10 relative">
                {/* Projects Image */}
                <div className="lg:w-[50%] pt-6 text-colorWhite dark:text-colorMain flex">
                    <div className="rounded-lg overflow-hidden w-full">
                        <div className="h-[400px]">
                            <img src={hoveredProject !== null ? projectImages[hoveredProject - 1] : project1} alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
                {/* Projects Templating */}
                <div className="mt-8 lg:w-[50%] lg:pl-6">
                    {projects.map(project => (
                        <div 
                            key={project.id} 
                            className={`project-${project.id} group sm:flex 
                                ${hoveredProject === project.id ? 'bg-white/10 dark:bg-colorTertiary/10' : ''} 
                                justify-center items-center p-4 rounded-lg cursor-pointer`}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(1)}
                        >
                            <h3 className="w-[70%] text-colorWhite dark:text-colorMain pb-4 sm:pb-0 pr-4">{project.title}</h3>
                            <div className="flex sm:justify-end w-full text-xs gap-x-2">
                                {project.tags.map(tag => (
                                    <p 
                                        key={tag} 
                                        className={`p-1.5 rounded-lg border 
                                            ${hoveredProject === project.id 
                                                ? 'bg-colorQuaternary border-colorQuaternary dark:bg-colorTertiary dark:border-colorTertiary text-colorMain dark:text-colorWhite' 
                                                : 'border-colorQuaternary/60 text-colorWhite dark:text-colorMain/70 dark:border-colorTertiary/40 bg-colorQuaternary/20 dark:bg-colorTertiary/20'}`}
                                    >
                                        {tag}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyProjects;