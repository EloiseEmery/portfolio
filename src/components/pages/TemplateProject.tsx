import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectData from '../../datas/dataProject.json';
import { getTranslation } from '../../utils/translations';
import Button from '../atoms/Button';

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
}

const TemplateProject: React.FC<TemplateProjectProps> = ({ language }) => {
    const { projectId } = useParams() as { projectId: string };
    const navigate = useNavigate();
    const project: ProjectDataItem | undefined = projectData.projects.find((p: ProjectDataItem) => p.id === projectId);

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
        <div className="container px-4 md:px-10 xl:px-[125px] 2xl:px-[200px] py-[200px]">
            <h1 className="text-4xl mb-6 font-sans text-colorWhite/80 dark:bg-gradient-to-r dark:from-colorTertiary dark:to-colorMain/80 dark:bg-clip-text dark:text-transparent">{project.title}</h1>
            <div className="font-figtree text-colorWhite dark:text-colorMain">
                <div className="mb-4">
                    <strong>{getTranslation('technologies', language)}:</strong>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech) => (
                            <span key={tech} className="text-colorMain bg-colorQuaternary border-colorQuaternary dark:bg-colorTertiary dark:border-colorTertiary dark:text-colorWhite px-2 py-1 rounded text-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    <strong>{getTranslation('highlights', language)}:</strong>
                    <ul className="list-disc list-inside text-sm">
                        {project.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                        ))}
                    </ul>
                </div>
                {/* Buttons external links */}
                <div className="flex gap-4 pt-2">
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
