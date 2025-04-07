import Button from '../../atoms/Button';
import Chatbot from '../../molecules/Chatbot';
import downloadIcon from '../../../assets/svg/downloadIcon.svg';

function AskMeSomething() {
    return (
        <div className="lg:flex">
            <div className="lg:w-[50%]">
                <div className="relative opacity-80 hover:opacity-100 mb-16 lg:mb-0">
                    <div className="absolute -top-6 -right-10 md:-right-6 w-full h-[300px] border border-colorQuinary/50 z-0"></div>
                    <div className="relative z-10">
                        <Chatbot />
                    </div>
                </div>
            </div>
            <div className="sm:pl-[50px] lg:w-[50%] xl:pl-[200px]">
                <h2 className="font-sans font-medium text-2xl sm:text-4xl text-colorWhite/80 leading-[1.2]">Ask me something<span className="pl-1 font-figtree">...</span></h2>
                <p className="text-colorWhite font-figtree text-base mt-6 pb-8">Use my chatbot to ask me anything you'd like to know about me or my work. This chatbot is powered by OpenAI's GPT-4 model and use LangChain to interface with it. </p>
                <Button 
                children="Download my full resume"
                aria-label="Download my full resume"
                className="relative z-10 group"
                href=""
                blank={true}
                type="secondary"
                icon={<img src={downloadIcon} alt="Download Icon" className="w-4 h-4 filter-brightness-0 invert group-hover:filter-none" />}
                />
            </div>
        </div>
    );
}

export default AskMeSomething;