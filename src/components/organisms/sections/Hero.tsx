import Button from '../../atoms/Button';
import decorativeEl from '../../../assets/png/elementHero.png';
import iconExternLink from '../../../assets/svg/iconExternLink.svg';

function Hero() {
  
    return (
        <div className="relative">
            <h1 className="font-sans text-4xl md:text-5xl text-colorWhite leading-[1.2]">Hello, I'm Éloïse Emery</h1>
            <p className="text-colorWhite font-figtree mt-6 pb-8 text-lg">I'm a full stack web developer from Montreal, Canada.</p>
            <Button
              children="Connect with me"
              className="relative z-10"
              href="https://www.linkedin.com/in/eloise-emery/"
              blank={true}
              type="primary"
              icon={<img src={iconExternLink} alt="External Link Icon" className="w-3 h-3" />}
            />
            <div className="absolute right-0 top-0 z-1">
              <img src={decorativeEl} alt="Decorative Element" className="w-full h-[350px] opacity-70" />
            </div>
        </div>
    );
}
    
export default Hero;