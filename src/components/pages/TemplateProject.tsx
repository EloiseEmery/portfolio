import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectData from '../../datas/dataProject.json';
import { getTranslation } from '../../utils/translations';

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

    useEffect(() => {
        // If project is not found, redirect to 404
        if (!project) {
            navigate('/404', { replace: true });
        }
    }, [project, navigate]);

    // If project is not found, return null to prevent rendering
    if (!project) {
        return null;
    }

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="mb-4">
                    <strong>{getTranslation('technologies', language)}:</strong>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech) => (
                            <span key={tech} className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">
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
                {project.githubLink && (
                    <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-500 hover:underline"
                    >
                        {getTranslation('footerLinkHover2', language)}
                    </a>
                )}
                {project.websiteLink && (
                    <a 
                        href={project.websiteLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="ml-4 text-green-500 hover:underline"
                    >
                        {getTranslation('footerLinkHover1', language)}
                    </a>
                )}
            </div>
        </div>
    );
};

export default TemplateProject;
