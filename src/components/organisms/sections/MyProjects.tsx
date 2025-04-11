import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button';
import project1 from '../../../assets/projects/project1.png';
import project2 from '../../../assets/projects/project2.png';
import project3 from '../../../assets/projects/project3.png';
import decorativeEl from '../../../assets/png/decorativeCube.png';
import { getTranslation, Language } from '../../../utils/translations';

function MyProjects({ language }: { language: Language }) {
    // Translations
    const title = getTranslation('myProjectsTitle', language);
    const paragraph = getTranslation('myProjectsParagraph', language);
    const button = getTranslation('myProjectsButton', language);
    const tagsRedesign = getTranslation('myProjectsTag', language);

    const [hoveredProject, setHoveredProject] = useState<string | null>("portfolio");
    const navigate = useNavigate();

    const handleProjectClick = (projectId: string, e: React.MouseEvent) => {
        e.preventDefault();
        navigate(`/project/${projectId}`);
    };

    // Projects datas
    const projectImages = [project1, project2, project3];
    const projects = [
        {
            id: "portfolio",
            title: "Portfolio Éloïse Emery",
            tags: ["UI/UX", "React", "Tailwind", "OpenAI", "Docker"]
        },
        {
            id: "banq",
            title: "BanQ dans ta classe",
            tags: ["UI/UX", tagsRedesign, "MCD", "React", "Tailwind"]
        },
        {
            id: "sqi",
            title: "Société Québécoise des Infrastructures",
            tags: ["UI/UX", tagsRedesign, "CMS"]
        },
        {
            id: "21 game",
            title: "21 game",
            tags: ["UI/UX", "JavaScript", "OOP"]
        },
        {
            id: "stampee",
            title: "Stampee",
            tags: ["UI/UX","JavaScript", "MVC", "PHP", "SQL"]
        }
    ];

    return (
        // Projects section
        <div className="relative">  
            {/* Decorative element */}
            {/* <div className="absolute -right-[300px] sm:-right-[275px] z-1">
                <img src={decorativeEl} alt="Decorative Element" className="w-full max-h-[300px] sm:max-h-[340px] object-contain opacity-100 filter-brightness-0 invert dark:filter-none" />
            </div> */}
            {/* Top section */}
            <div className="lg:flex z-10 relative">
                <div className="sm:pr-[50px] lg:w-[55%] flex">
                    <div>
                        <h2 className="font-sans font-medium text-2xl sm:text-3xl leading-[1.2]  bg-gradient-to-r dark:from-colorWhite/90 dark:to-colorWhite/90 from-colorTertiary to-colorMain/80 bg-clip-text text-transparent">{title}</h2>
                        <p className="dark:text-colorWhite text-colorMain font-figtree text-base mt-6 lg:pb-8 ">{paragraph}</p>
                    </div>
                </div>
                {/* Button Desktop */}
                <div className="hidden lg:block lg:w-[45%]">
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
                                    className="w-5 h-5 text-current dark:group-hover:text-colorMain group-hover:text-colorWhite"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
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
            <div className="lg:flex z-10 relative pb-6 md:pb-0">
                {/* Projects Image */}
                <div className="lg:w-[50%] pt-6 dark:text-colorWhite text-colorMain flex">
                    <div className="rounded-lg overflow-hidden w-full">
                        <div className="h-[285px] sm:h-[400px]">
                            <img src={hoveredProject !== null ? projectImages[projects.findIndex(project => project.id === hoveredProject)] : project1} alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
                {/* Projects Templating */}
                <div className="mt-8 lg:w-[50%] lg:pl-6 max-h-[285px] overflow-y-auto lg:max-h-[100%] lg:overflow-y-hidden">
                    {projects.map(project => (
                        <div 
                            key={project.id} 
                            className={`project-${project.id} group sm:flex 
                                ${hoveredProject === project.id ? 'dark:bg-[#31465d70] bg-colorTertiary/10' : ''} 
                                justify-center items-center p-4 rounded-lg cursor-pointer`}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject("portfolio")}
                            onClick={(e) => handleProjectClick(project.id, e)}
                        >
                            <h3 className="w-full text-base dark:text-colorWhite text-colorMain pb-4 sm:pb-0 pr-4">{project.title}</h3>
                            <div className="flex sm:justify-end w-full text-xs gap-x-2">
                                {project.tags.map(tag => (
                                    <p 
                                        key={tag} 
                                        className={`p-1.5 rounded-lg border 
                                            ${hoveredProject === project.id 
                                                ? 'dark:bg-colorQuaternary dark:border-colorQuaternary bg-colorTertiary border-colorTertiary dark:text-colorMain text-colorWhite' 
                                                : 'dark:border-colorQuaternary/60 dark:text-colorWhite text-colorMain/70 border-colorTertiary/40 dark:bg-colorQuaternary/20 bg-colorTertiary/20'}`}
                                    >
                                        {tag}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex lg:hidden mt-10">
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
                                className="w-5 h-5 text-current dark:group-hover:text-colorMain group-hover:text-colorWhite"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
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
    );
}

export default MyProjects;