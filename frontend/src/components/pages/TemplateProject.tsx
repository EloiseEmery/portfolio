import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectData from '../../datas/datasProjects.json';
import { getTranslation } from '../../utils/translations';
import Button from '../atoms/Button';
import project1 from '../../assets/projects/project1.png';
import project2 from '../../assets/projects/project2.png';
import project3 from '../../assets/projects/project3.png';

const projectImages = {
    'portfolio': project1,
    'banq': project2,
    'sqi': project3
};

interface TemplateProjectProps {
    language: 'en' | 'fr';
}

interface ProjectDataItem {
    id: string;
    title: string;
    technologies: string[];
    highlights: string[];
    githubLink?: string;
    websiteLink?: string;
    descriptionKey: string;
    intro?: string;
    image1?: string;
    image2?: string;
    image3?: string;
    descriptionMain?: string;
}

const TemplateProject: React.FC<TemplateProjectProps> = ({ language }) => {
    const { projectId } = useParams() as { projectId: string };
    const navigate = useNavigate();
    const project: ProjectDataItem | undefined = projectData.projects.find((p: ProjectDataItem) => p.id === projectId);

    // Scroll to top immediately when component mounts
    // Ensure the scroll is instant when clicking on a project from homepage
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, [projectId]);

    // If project is not found, redirect to 404
    useEffect(() => {
        if (!project) {
            navigate('/404', { replace: true });
        }
    }, [project, navigate]);

    // If project is not found, return null to prevent rendering
    if (!project) {
        return null;
    }

    return (
        <div className="2xl:flex px-4 md:px-10 xl:px-[200px] py-[100px] 2xl:py-[200px]">
            <div className="lg:pr-[50px]">
                <div className="relative">
                    <img 
                        src={projectImages[project.id as keyof typeof projectImages]} 
                        alt={project.title} 
                        className="relative w-full max-h-[400px] lg:min-h-[400px] lg:w-[700px] max-w-[700px] object-cover rounded-lg mb-4 hover:opacity-80 transition-opacity"
                    /> 
                    <a 
                        href={project.githubLink || project.websiteLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hidden lg:block absolute inset-0 z-10 cursor-pointer"
                    />
                </div>
                {/* Buttons external links mobile */}
                <div className="hidden 2xl:flex gap-4 pt-2">
                    {project.githubLink && (
                        <Button 
                        children={getTranslation('viewOnGithub', language)}
                        aria-label="View on GitHub"
                        href={project.githubLink}
                        blank={true}
                        type="secondary"
                        icon={
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
                        }
                        />
                    )}
                    {project.websiteLink && (
                        <Button
                        children={getTranslation('visitWebsite', language)}
                        aria-label="Visit Website"
                        href={project.websiteLink}
                        blank={true}
                        type="secondary"
                        icon={
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
                        }
                    />
                    )}
                </div>
            </div>
            <div className="pt-6">
                <h1 className="text-4xl font-sans dark:text-colorWhite/80 bg-gradient-to-r from-colorTertiary to-colorMain/80 bg-clip-text text-transparent">{project.title}</h1>
                <div className="pb-10 font-figtree text-base leading-7 text-colorMain dark:text-colorWhite mt-6">
                    {project.intro}
                </div>
                <div className="font-figtree text-colorMain dark:text-colorWhite">
                    <div className="mb-6">
                        <h2 className="font-sans">{getTranslation('technologies', language)}:</h2>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="text-colorWhite dark:text-colorMain bg-colorTertiary dark:bg-colorQuaternary dark:border-colorQuaternary border-colorTertiar px-2 py-1 rounded text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="mb-4">
                        <h2 className="font-sans">{getTranslation('highlights', language)}:</h2>
                        <ul className="list-disc list-inside text-sm mt-1">
                            {project.highlights.map((highlight) => (
                                <li key={highlight} className="mt-1">{highlight}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Buttons external links desktop */}
                <div className="flex 2xl:hidden gap-4 pt-2">
                    {project.githubLink && (
                        <Button 
                        children={getTranslation('viewOnGithub', language)}
                        aria-label="View on GitHub"
                        href={project.githubLink}
                        blank={true}
                        type="secondary"
                        icon={
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
                        }
                        />
                    )}
                    {project.websiteLink && (
                        <Button
                        children={getTranslation('visitWebsite', language)}
                        aria-label="Visit Website"
                        href={project.websiteLink}
                        blank={true}
                        type="secondary"
                        icon={
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
                        }
                    />
                    )}
                </div>
            </div>
        </div>
    );
};

export default TemplateProject;
