
import decorativeForms from '../../../assets/png/decorativeForms.png';
import Button from '../../atoms/Button';

function GetInTouch() {
    return (
        <div className="relative">
            <div className="absolute -top-6 -left-10 md:-left-6 w-full md:w-[50%] h-[300px] border border-colorQuinary/50 z-0"></div>
            <div className="relative bg-[#161B22] rounded-lg p-10 md:flex z-11">
                <div className="items-center flex md:w-1/2">
                    <img src={decorativeForms} className="max-h-[200px]" alt="decorative forms" />
                </div>
                <div className="md:w-1/2 py-8">
                    <h2 className="font-sans font-medium text-2xl sm:text-4xl text-colorWhite/80 leading-[1.2]">Get in touch</h2>
                    <p className="text-colorWhite/80 font-figtree text-base mt-6 pb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Suspendisse ut magna vel arcu tincidunt pretium.</p>
                    <Button 
                        children="Send me a email"
                        aria-label="Send me a email"
                        className="relative z-10 group"
                        href="mailto:eloise@eloiseemery.com"
                        blank={true}
                        type="secondary"
                    />
                </div>
            </div>
        </div>
    )
}   

export default GetInTouch;