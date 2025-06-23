import { Audiowide } from 'next/font/google';
import Image from "next/image"
import Link from "next/link"
import HeroBtn from "./ui/Hero-btn"


const awide = Audiowide({
  weight: ['400'],
  subsets: ['latin'],
});

interface HeroProps {
  scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void;
  sposorRef: React.RefObject<HTMLElement | null>;
}

const Hero = ({ scrollToSection, sposorRef }: HeroProps) => {
  return (
    <section className="mt-15 pt-26">
        <div className="absolute top-16 z-0 right-120">
            <Image
            src="/images/hero/top-el.svg" 
            alt="Decorative line 2"
            width={200}
            height={70}
            className=""
            />
        </div>
        <div className="absolute top-35 right-0">
            <Image
            src="/images/hero/top-right-el.svg" 
            alt="Decorative line 2"
            width={430}
            height={70}
            className="opacity-45"
            />
        </div>
        <div className="absolute bottom-22 right-80">
            <Image
            src="/images/hero/bottom-right-el.svg" 
            alt="Decorative line 3"
            width={400}
            height={60}
            className=""
            />
        </div>
        <div className="absolute bottom-35 right-65">
            <Image
            src="/images/hero/right-el.svg" 
            alt="Decorative line 3"
            width={250}
            height={60}
            className="" // animate-pulse
            />
        </div>
        <div className="absolute right-0">
            <Image
            src="/images/hero/hero-robot.png" 
            alt="Decorative line 3"
            width={400}
            height={60}
            className=""
            />
        </div>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="space-y-2 z-10">
                <h2 className="text-3xl uppercase tracking-wider pl-2">Майбутнє за інженерами</h2>
                <p
                  className={`text-5xl md:text-7xl tracking-wide font-bold text-secondary w-3xl text-bec ${awide.className} leading-[1.3]`}
                  style={{ textShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)' }}
                >
                    BEST Engineering Competition
                </p>
                <p className="text-3xl pl-2 font-semibold mb-12 mt-5 tracking-wider">
                    24-28 жовтня
                </p>
                <a className="max-w-3xs flex">
                    <HeroBtn scrollToSection={scrollToSection} sposorRef={sposorRef} />
                </a>
            </div>
        </div>
    </section>
  )
}

export default Hero