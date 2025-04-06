import chatLogos from '../../assets/png/chatLogos.png';
function Chatbot() {
    return (
       <div className="">
            <form className="relative bg-darkBlue p-4 rounded-lg shadow-lg bg-[#121F2E] rounded-t-lg border border-colorWhite/60">
                <div className="">
                    <div className="h-64 bg-darkBlueDarker rounded-lg"></div>
                </div>
                <div className="flex items-center p-2 border border-colorWhite rounded-lg">
                    <input 
                        type="text" 
                        placeholder="Ask me something..." 
                        className="flex-grow bg-transparent p-1 text-white placeholder-gray-400 focus:outline-none"
                    />
                    <button type="submit" className="ml-2 bg-gray-700 p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </button>
                </div>
            </form>
            <div className="absolute -bottom-[50px] right-0">
                <img src={chatLogos} width={200} height={200} />
            </div>
        </div>
    );
}

export default Chatbot;
