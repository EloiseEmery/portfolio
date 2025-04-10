import iconeEmail from '../../assets/png/email.png';
import iconeLinkedIn from '../../assets/png/linkedin.png';
import iconeGithub from '../../assets/png/github.png';
import decorativeEl from '../../assets/png/elementFooter.png';
import { getTranslation, Language } from '../../utils/translations';

function Footer({ language }: { language: Language }) {
  // Translations
  const footerTitle1 = getTranslation('footerTitle1', language);
  const footerTitle2 = getTranslation('footerTitle2', language);
  const footerTitle3 = getTranslation('footerTitle3', language);
  const footerCopyright = getTranslation('footerCopyright', language);
  const footerText1 = getTranslation('footerText1', language);
  const footerText2 = getTranslation('footerText2', language); 
  const linkText1 = getTranslation('askMeTitle', language);
  const linkText2 = getTranslation('mySkillsetTitle', language);
  const linkText3 = getTranslation('footerLinText', language);
  const footerLinkHover1 = getTranslation('footerLinkHover1', language);
  const footerLinkHover2 = getTranslation('footerLinkHover2', language);
  const footerLinkHover3 = getTranslation('footerLinkHover3', language);
  
  return (
        <div className="relative w-full overflow-x-hidden px-4 md:px-10 xl:px-[125px] 2xl:px-[200px] pb-10">
          {/* Decorative element */}
          {/* <div className="absolute -right-[100px] bottom-[130px] dark:filter-brightness-0 dark:invert">
            <img src={decorativeEl} alt="Decorative Element" className="w-full h-[150px] opacity-50 dark:opacity-40 dark:sm:opacity-60" />
          </div> */}
          {/* Top section */}
          <div className="sm:flex sm:flex-wrap text-colorWhite dark:text-colorBlack w-full lg:w-4/5">
            <div className="sm:w-1/2 lg:w-1/3 mb-10">
              <h3 className="font-sans text-lg font-regular mb-4 opacity-50">{footerTitle1}</h3>
              <ul className="tracking-wider font-figtree space-y-4 text-[15px] font-medium pr-10 sm:max-w-[250px]">
                <li className="cursor-pointer hover:text-colorQuaternary dark:hover:text-colorTertiary transition-all duration-300 ease-in-out whitespace-nowrap"><a href="/project/portfolio">{linkText3}</a></li>
                <li className="cursor-pointer hover:text-colorQuaternary dark:hover:text-colorTertiary transition-all duration-300 ease-in-out"><a href="/project/banq">BanQ dans ta classe</a></li>
                <li className="leading-[1.4] cursor-pointer hover:text-colorQuaternary dark:hover:text-colorTertiary transition-all duration-300 ease-in-out"><a href="/project/sqi">Société Québécoise des Infrastructures</a></li>
              </ul>
            </div>
            <div className="sm:w-1/2 lg:w-1/3 mb-10">
              <h3 className="font-sans text-lg font-regular mb-4 opacity-50">{footerTitle2}</h3>
              <ul className="tracking-wider font-figtree space-y-4 text-[15px] font-medium">
                <li className="cursor-pointer hover:text-colorQuaternary dark:hover:text-colorTertiary transition-all duration-300 ease-in-out"><a href="/#ask-me-something">{linkText1}</a></li>
                <li className="cursor-pointer hover:text-colorQuaternary dark:hover:text-colorTertiary transition-all duration-300 ease-in-out"><a href="/#my-skillset">{linkText2}</a></li>
              </ul>
            </div>
            <div className="sm:w-1/2 lg:w-1/3 mb-10">
              <h3 className="font-sans text-lg font-regular mb-4 opacity-50">{footerTitle3}</h3>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/eloise-emery/" target="_blank" rel="noopener noreferrer" className="relative group">
                  <div className="cursor-pointer border border-colorWhite/30 dark:border-colorMain/10 rounded-full p-2 hover:border-colorWhite/100 dark:hover:border-colorTertiary/50 transition-all duration-300 ease-in-out ">
                    <img src={iconeLinkedIn} alt="LinkedIn" className="max-w-[22px] dark:brightness-0 dark:invert(1)" />
                  </div>
                  <span className="hidden md:block md:absolute font-sans bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {footerLinkHover1}
                  </span>
                </a>
                <a href="https://github.com/eloiseemery" target="_blank" rel="noopener noreferrer" className="relative group">
                  <div className="cursor-pointer border border-colorWhite/30 dark:border-colorMain/10 rounded-full p-2 hover:border-colorWhite/100 dark:hover:border-colorTertiary/50 transition-all duration-300 ease-in-out ">
                    <img src={iconeGithub} alt="Github" className=" max-w-[22px] dark:brightness-0 dark:invert(1)" />
                  </div>
                  <span className="hidden md:block md:absolute font-sans bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {footerLinkHover2}
                  </span>
                </a>
                <a href="mailto:eloise.emery@gmail.com" target="_blank" rel="noopener noreferrer" className="relative group">
                  <div className="cursor-pointer border border-colorWhite/30 dark:border-colorMain/10 rounded-full p-2 hover:border-colorWhite/100 dark:hover:border-colorTertiary/50 transition-all duration-300 ease-in-out ">
                    <img src={iconeEmail} alt="Email" className="max-w-[22px] opacity-70 dark:brightness-0 dark:invert(1)" />
                  </div>
                  <span className="hidden md:block md:absolute font-sans bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {footerLinkHover3}
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* Bottom section */}
          <div className="border-t border-colorWhite/10 dark:border-colorTertiary/10 py-10">
            <div className="text-colorWhite dark:text-colorBlack font-sans text-[11px] md:flex md:justify-between">
              <p className="mb-2 md:mb-0">{footerCopyright}</p>
              <p className="flex whitespace-nowrap">
                {footerText1} 
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-[14px] px-2 mt-0.5 text-colorQuinary dark:text-colorTertiary"
                >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                {footerText2}
              </p>
            </div>
          </div>
        </div>
      );
  }
  
  export default Footer;