import html from '../../../assets/logos-skills/html.png';
import css from '../../../assets/logos-skills/css.png';
import wp from '../../../assets/logos-skills/wp.png';
import react from '../../../assets/logos-skills/react.png';
import adobe from '../../../assets/logos-skills/adobe.png';
import php from '../../../assets/logos-skills/php.png';
import git from '../../../assets/logos-skills/git.png';
import docker from '../../../assets/logos-skills/docker.png';
import openai from '../../../assets/logos-skills/openai.png';
import npm from '../../../assets/logos-skills/npm.png';
import sql from '../../../assets/logos-skills/sql.png';
import js from '../../../assets/logos-skills/js.png';

function MySkillset() {
    return (
        <div className="">
            <div className="w-full text-center">
                <h2 className="font-sans font-medium text-2xl sm:text-3xl text-colorWhite/80 leading-[1.2]">My skillset</h2>
                <p className="text-colorWhite font-figtree text-base mt-6 pb-8 md:max-w-[50%] md:mx-auto">My skillset includes a wide range of technologies and frameworks, allowing me to build dynamic and responsive web applications.</p>
            </div>
            {/* Skillset grid */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-8 mt-6">
                <div className='flex justify-center items-center opacity-70 hover:opacity-100'>
                    <img src={html} alt="SQL Icon" className="w-25 h-20" />
                </div>
                <div className='flex justify-center items-center opacity-70 hover:opacity-100'>
                    <img src={css} alt="CSS Icon" className="w-25 h-20" />
                </div>
                <div className='flex justify-center items-center opacity-70 hover:opacity-100'>
                    <img src={js} alt="Node Icon" className="w-25 h-20" />
                </div>
                <div className='flex justify-center items-center opacity-70 hover:opacity-100'>
                    <img src={sql} alt="SQL Icon" className="w-25 h-20" />
                </div>  
                <div className='flex justify-center items-center opacity-70 hover:opacity-100'>
                    <img src={docker} alt="Docker Icon" className="w-25 h-20" />
                </div>
                <div className='flex justify-center items-center opacity-70 hover:opacity-100'>
                    <img src={openai} alt="OpenAI Icon" className="w-25 h-20" />
                </div>
                <div className='flex justify-center items-center opacity-70 hover:opacity-100'>
                    <img src={react} alt="React Icon" className="w-25 h-20" />
                </div>
                <div className='flex justify-center items-center opacity-70 hover:opacity-100'>
                    <img src={git} alt="Git Icon" className="w-25 h-20" />
                </div>
                <div className='flex justify-center items-center opacity-70 hover:opacity-100'>
                    <img src={wp} alt="WP Icon" className="w-25 h-20" />
                </div>
                <div className='flex justify-center items-center opacity-70 hover:opacity-100'>
                    <img src={adobe} alt="SQL Icon" className="w-25 h-20" />
                </div>
                <div className='flex justify-center items-center opacity-70 hover:opacity-100'>
                    <img src={php} alt="PHP Icon" className="w-25 h-20" />
                </div>
                <div className='flex justify-center items-center opacity-70 hover:opacity-100'>
                    <img src={npm} alt="npm Icon" className="w-25 h-20" />
                </div>
            </div>
            {/* Section Bottom */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-8 bg-[#121F2E] border border-colorWhite/60 rounded-lg text-colorWhite/80 hover:text-colorWhite text-center font-sans text-sm p-6 sm:p-10 mt-8" >
                <p>Node.js</p>
                <p>Figma</p>
                <p>Langchain</p>
                <p>User experience</p>
                <p>Responsive design</p>
                <p>Shopify</p>
                <p>Next.js</p>
                <p>Angular</p>
                <p>Laravel</p>
                <p>Bootstrap</p>
                <p>Blender</p>
                <p>Ableton</p>
            </div>
        </div>
    );
}

export default MySkillset;