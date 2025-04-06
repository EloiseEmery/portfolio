import Button from '../atoms/Button';
import decorativeEl from '../../assets/elementHero.png';
import icon from '../../assets/iconBtnLinkedin.svg';

function Hero() {
  
    return (
        <div className="py-[200px] relative">
            <h1 className="font-sans text-4xl md:text-5xl text-colorWhite leading-[1.2]">Hello, I'm Éloïse Emery</h1>
            <p className="text-colorWhite font-figtree text-base mt-6 pb-8">I'm a full stack web developer from Montreal, Canada</p>
            <Button children="Connect with me" className="relative z-10" href="https://www.linkedin.com/in/eloise-emery/" blank={true} type="primary" />
            <div className="absolute right-0 bottom-10 z-1">
              <img src={decorativeEl} alt="Decorative Element" className="w-full h-[350px] opacity-70" />
            </div>
        </div>
    );
}
    
export default Hero;