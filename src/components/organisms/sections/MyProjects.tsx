import Button from '../../atoms/Button';
import iconExternLink from '../../../assets/svg/iconExternLink.svg';
import project2 from '../../../assets/projects/project2.png';
import decorativeEl from '../../../assets/png/decorativeCube.png';
import { getTranslation, Language } from '../../../translations';

function MyProjects({ language }: { language: Language }) {
    // Translations
    const title = getTranslation('myProjectsTitle', language);
    const paragraph = getTranslation('myProjectsParagraph', language);
    const button = getTranslation('myProjectsButton', language);
    return (
        <div className="relative">  
            <div className="absolute -right-[170px] sm:-right-[275px] z-1">
                <img src={decorativeEl} alt="Decorative Element" className="w-full h-[350px] opacity-70 dark:filter-brightness-0 dark:invert" />
            </div>
            <div className="lg:flex">
                <div className="sm:pr-[50px] lg:w-[60%] flex">
                    <div>
                        <h2 className="font-sans font-medium text-2xl sm:text-3xl text-colorWhite/80 dark:text-colorMain/80 leading-[1.2]">{title}</h2>
                        <p className="text-colorWhite dark:text-colorMain font-figtree text-base mt-6 pb-8 lg:pb-0 ">{paragraph}</p>
                    </div>
                </div>
                <div className="lg:w-[35%]">
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
            <div className="lg:w-[50%] pt-6">
                <div className="rounded-lg overflow-hidden">
                    <div className="h-[400px] opacity-80 hover:opacity-100">
                        <img src={project2} alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default MyProjects;