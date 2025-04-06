import Heart from '../../assets/png/heart.png';
import iconeEmail from '../../assets/png/email.png';
import iconeLinkedIn from '../../assets/png/linkedin.png';
import iconeGithub from '../../assets/png/github.png';
import decorativeEl from '../../assets/png/elementFooter.png';

function Footer() {
  
      return (
        <div className="relative w-full overflow-x-hidden px-4 md:px-10 xl:px-[125px] 2xl:px-[200px]  ">
          {/* Decorative element */}
          <div className="absolute -right-[100px] bottom-[100px]">
            <img src={decorativeEl} alt="Decorative Element" className="w-full h-[190px] opacity-70" />
          </div>
          {/* Top section */}
          <div className="sm:flex sm:flex-wrap text-colorWhite w-full lg:w-4/5">
            <div className="sm:w-1/2 lg:w-1/3 mb-10">
              <h3 className="font-sans text-lg font-regular mb-4 opacity-50">Featured project</h3>
              <ul className="font-figtree space-y-4 text-[15px] font-medium pr-10 sm:max-w-[220px]">
                <li className="cursor-pointer hover:text-colorQuaternary transition-all duration-300 ease-in-out whitespace-nowrap">This project portfolio</li>
                <li className="cursor-pointer hover:text-colorQuaternary transition-all duration-300 ease-in-out">BAnQ dans ta classe</li>
                <li className="leading-[1.4] cursor-pointer hover:text-colorQuaternary transition-all duration-300 ease-in-out">Société Québécoise des Infrastructures</li>
              </ul>
            </div>
            <div className="sm:w-1/2 lg:w-1/3 mb-10">
              <h3 className="font-sans text-lg font-regular mb-4 opacity-50">Quick access</h3>
              <ul className="font-figtree space-y-4 text-[15px] font-medium">
                <li className="cursor-pointer hover:text-colorQuaternary transition-all duration-300 ease-in-out">Ask me something</li>
                <li className="cursor-pointer hover:text-colorQuaternary transition-all duration-300 ease-in-out">My skillset</li>
              </ul>
            </div>
            <div className="sm:w-1/2 lg:w-1/3 mb-10">
              <h3 className="font-sans text-lg font-regular mb-4 opacity-50">Contact me</h3>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/eloise-emery/" target="_blank" rel="noopener noreferrer" className="relative group">
                  <div className="cursor-pointer border border-colorWhite/30 rounded-full p-2 hover:border-colorWhite/100 transition-all duration-300 ease-in-out ">
                    <img src={iconeLinkedIn} alt="LinkedIn" className="max-w-[22px]" />
                  </div>
                  <span className="absolute font-sans bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Visit my LinkedIn
                  </span>
                </a>
                <a href="https://github.com/eloiseemery" target="_blank" rel="noopener noreferrer" className="relative group">
                  <div className="cursor-pointer border border-colorWhite/30 rounded-full p-2 hover:border-colorWhite/100 transition-all duration-300 ease-in-out ">
                    <img src={iconeGithub} alt="Github" className=" max-w-[22px]" />
                  </div>
                  <span className="absolute font-sans bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Visit my GitHub
                  </span>
                </a>
                <a href="mailto:eloise.emery@gmail.com" target="_blank" rel="noopener noreferrer" className="relative group">
                  <div className="cursor-pointer border border-colorWhite/30 rounded-full p-2 hover:border-colorWhite/100 transition-all duration-300 ease-in-out ">
                    <img src={iconeEmail} alt="Email" className="max-w-[22px] opacity-70" />
                  </div>
                  <span className="absolute font-sans bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Send me an email
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* Bottom section */}
          <div className="border-t border-colorWhite/10 py-10">
            <div className="text-colorWhite font-sans text-[11px] md:flex md:justify-between">
              <p className="mb-2 md:mb-0">Copyright © 2025 eloisemery.com. All rights reserved.</p>
              <p className="flex whitespace-nowrap">Made with <img src={Heart} alt="Heart" className="h-[10px] px-2 mt-1" /> by Éloïse Emery</p>
            </div>
          </div>
        </div>
      );
  }
  
  export default Footer;