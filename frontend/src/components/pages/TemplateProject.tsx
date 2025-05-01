import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectData from '../../datas/datasProjects.json';
import { getTranslation } from '../../utils/translations';
import Button from '../atoms/Button';
import Link from '../atoms/Link';
import SEO from '../atoms/SEO';
import project1 from '../../assets/projects/project1.png';
import project2 from '../../assets/projects/project2.png';
import project3 from '../../assets/projects/project3.png';
import project4 from '../../assets/projects/project4.png';
import project5 from '../../assets/projects/project5.png';
import { motion } from 'framer-motion';

const projectImages = {
    'portfolio': project1,
    'banq': project2,
    'sqi': project3,
    'stampee': project4,
    '21 game': project5
};

interface TemplateProjectProps {
    language: 'en' | 'fr';
}

interface ProjectDataItem {
    id: string;
    title: string;
    technologies: string[];
    highlights: {
        fr: string[];
        en: string[];
    };
    githubLink?: string;
    websiteLink?: string;
    descriptionKey: string;
    intro: {
        fr: string;
        en: string;
    };
    descriptionMain: {
        fr: string;
        en: string;
    };
    files?: string[];
    keyStep?: {
        fr: string[];
        en: string[];
    };
}

const TemplateProject: React.FC<TemplateProjectProps> = ({ language }) => {
    const { projectId } = useParams() as { projectId: string };
    const navigate = useNavigate();
    const project: ProjectDataItem | undefined = projectData.projects.find((p: ProjectDataItem) => p.id === projectId);

    // Scroll to top when page is loaded
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, [projectId]);

    // Check if project exists
    useEffect(() => {
        if (!project) {
            navigate('/404', { replace: true });
        }
    }, [project, navigate]);
    if (!project) {
        return null;
    }

    const projectImage = projectImages[projectId as keyof typeof projectImages] || '';
    const projectTitle = project.title;
    const projectDescription = project.intro[language];
    const projectUrl = `https://www.eloemery.com/projects/${projectId}`;

    // Render Files section
    const renderFilesSection = () => {
        if (project?.files && project.files.length > 0) {
            return (
                <div className="">
                    <h2 className="text-colorMain dark:text-colorWhite mb-4 font-sans font-medium">
                        {getTranslation('projectDocuments', language)}
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        {project.files.map((file, index) => (
                            <Button 
                                key={index} 
                                onClick={() => openFile(file)}
                                type="secondary"
                            >
                                {file}
                            </Button>
                        ))}
                    </div>
                </div>
            );
        }
        return null;
    };

    // Open File
    const openFile = (fileName: string) => {
        try {
            const filePath = `/files/${projectId}/${fileName}`;
            const fullFileUrl = `${window.location.origin}${filePath}`;

            window.open(fullFileUrl, '_blank', 'noopener,noreferrer');
        } catch (error) {
            alert('Unable to open file. Please try again.');
        }
    };

    // Render project description with HTML support
    const renderDescriptionWithHTML = (description: string) => {
        return <div 
            className="font-figtree text-[15px] leading-7" 
            dangerouslySetInnerHTML={{ __html: description }} 
        />;
    };

    const renderKeyStep = () => {
        if (project?.keyStep && project.keyStep[language]) {
            return (
                <div className="mt-12 text-colorMain dark:text-colorWhite overflow-hidden">
                    <div className="relative">
                        <motion.div 
                            className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-indigo-200 via-purple-300 to-pink-200 dark:from-colorTertiary dark:via-colorQuaternary dark:to-colorTertiary opacity-60"
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.5, ease: "easeInOut" }}
                            style={{ originY: 0 }}
                        ></motion.div>
                        <div className="space-y-10">
                            {project.keyStep[language].map((step, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-6 relative"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ 
                                        opacity: 1, 
                                        y: 0,
                                        transition: {
                                            duration: 0.8,
                                            delay: index * 0.2,
                                            ease: [0.22, 1, 0.36, 1]
                                        }
                                    }}
                                    viewport={{ once: true, margin: "-100px" }}
                                >
                                    <motion.div
                                        className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-100 to-purple-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center shadow-lg dark:shadow-indigo-900/30 relative z-10"
                                        whileHover={{ scale: 1.1 }}
                                        whileInView={{
                                            rotate: [0, -15, 0],
                                            transition: {
                                                duration: 1.2,
                                                delay: index * 0.2 + 0.3,
                                                ease: "easeOut"
                                            }
                                        }}
                                        viewport={{ once: true, margin: "-100px" }}
                                    >
                                        <span className="text-lg font-medium bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-indigo-300 dark:to-white bg-clip-text text-transparent">
                                            {index + 1}
                                        </span>
                                    </motion.div>
                                    <motion.div
                                        className="flex-1 bg-gradient-to-br mr-4 from-indigo-100/25 to-purple-50/25 dark:from-gray-900/50 dark:to-gray-800/50 rounded-2xl p-6 shadow-md dark:shadow-lg dark:shadow-purple-900/10"
                                        whileHover={{ 
                                            scale: 1.02,
                                            boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
                                        }}
                                        whileInView={{
                                            x: [50, 0],
                                            transition: {
                                                duration: 1,
                                                delay: index * 0.2 + 0.2,
                                                ease: "easeOut"
                                            }
                                        }}
                                        viewport={{ once: true, margin: "-100px" }}
                                    >
                                        <div className="font-figtree text-[14px] leading-6 dark:text-gray-200">
                                            {step}
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="lg:flex px-4 md:px-10 xl:px-[150px] 2xl:px-[200px] py-[100px] 2xl:pt-[150px]">
            <SEO 
                title={`${projectTitle} | Éloïse Emery`}
                description={projectDescription}
                image={projectImage}
                url={projectUrl}
                type="article"
                canonicalUrl={projectUrl}
                keywords={project.technologies}
            />
            <div className="lg:pr-[50px] lg:w-1/2">
                <div className="relative group">
                    <img 
                        src={projectImages[projectId as keyof typeof projectImages]} 
                        alt={project.title} 
                        className="relative w-full h-[300px] object-cover rounded-lg mb-4 group-hover:opacity-80 transition-opacity"
                    /> 
                    <a 
                        href={project.githubLink || project.websiteLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block absolute inset-0 z-10 cursor-pointer"
                    />
                
                    {/* Buttons external links desktop */}
                    <div className="flex gap-4 pt-2">
                        {project.githubLink && (
                            <Link 
                            linkText={getTranslation('viewOnGithub', language)}
                            linkUrl={project.githubLink}
                            blank={true}
                            className="group-hover:text-colorTertiary dark:group-hover:text-colorQuaternary transition-colors"
                            icon={
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 50 50"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-current group-hover:text-colorTertiary dark:group-hover:text-colorQuaternary"
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
                            <Link
                            linkText={getTranslation('visitWebsite', language)}
                            linkUrl={project.websiteLink}
                            blank={true}
                            className="group-hover:text-colorTertiary dark:group-hover:text-colorQuaternary transition-colors"
                            icon={
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 50 50"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-current group-hover:text-colorTertiary dark:group-hover:text-colorQuaternary"
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
            <div className="pt-6 lg:pt-0 lg:w-1/2 overflow-y-auto lg:max-h-[525px]">
                <h1 className="text-2xl md:text-4xl font-sans font-medium dark:text-colorWhite/80 bg-gradient-to-r from-colorTertiary to-colorMain/80 bg-clip-text text-transparent">{project.title}</h1>
                <div className="pb-10 font-figtree text-base leading-7 text-colorMain dark:text-colorWhite mt-6">
                    {project.intro[language]}
                </div>
                <div className="font-figtree text-colorMain dark:text-colorWhite">
                    <div className="mb-8">
                        <h2 className="font-sans font-medium">{getTranslation('technologies', language)}:</h2>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="text-colorWhite dark:text-colorMain bg-colorTertiary dark:bg-colorQuaternary dark:border-colorQuaternary border-colorTertiar px-2 py-1 rounded text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="mb-6">
                        <h2 className="font-sans font-medium">{getTranslation('highlights', language)}:</h2>
                        <ul className="list-disc list-inside text-sm mt-1">
                            {project.highlights[language].map((highlight) => (
                                <li key={highlight} className="mt-1">{highlight}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-6">
                        {project.descriptionMain && (
                            renderDescriptionWithHTML(project.descriptionMain[language])
                        )}
                    </div>
                </div>
                {renderFilesSection()}
                {renderKeyStep()}
            </div>
        </div>
    );
};

export default TemplateProject;
