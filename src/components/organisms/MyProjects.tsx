
import Button from '../atoms/Button';
import iconExternLink from '../../assets/svg/iconExternLink.svg';
import project2 from '../../assets/projects/project2.png';

function MyProjects() {
    return (
        <div className="py-[100px] sm:py-[200px]">  
            <div className="lg:flex">
                <div className="sm:pr-[50px] lg:w-[65%] flex">
                    <div>
                        <h2 className="font-sans font-medium text-2xl sm:text-4xl text-colorWhite/80 leading-[1.2]">My projects</h2>
                        <p className="text-colorWhite font-figtree text-base mt-6 pb-8 ">With a robust foundation in graphic design and programming, I have effectively harmonized my technical expertise with my creative sensibilities. I love bringing concepts to life by creating intuitive designs, while ensuring that accessibility and user experience are always at the forefront of my concerns. Below are some of the projects I've worked on:</p>
                    </div>
                </div>
                <div className="lg:w-[35%]">
                <div className="flex lg:justify-end">
                        <Button 
                            children="See more projects"
                            aria-label="See more projects on my Github"
                            className="relative z-10 group"
                            href="https://github.com/eloiseemery"
                            blank={true}
                            type="secondary"
                            icon={<img src={iconExternLink} alt="External Link Icon" className="w-3 h-3 filter-brightness-0 invert group-hover:filter-none" />}
                        />
                    </div>
                </div>
            </div>
            <div className="lg:w-[50%] pt-8">
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