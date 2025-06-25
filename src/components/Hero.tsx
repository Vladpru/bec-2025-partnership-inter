import { Audiowide } from 'next/font/google';
import Image from "next/image"
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
        <div className="absolute top-16 z-0 right-120 4xl:right-140">
            <Image
            src="/images/hero/top-el.svg" 
            alt="Decorative line 2"
            width={200}
            height={70}
            className="3xl:w-[220px] 4xl:w-[280px]"
            />
        </div>
        <div className="absolute top-35 right-0">
            <Image
            src="/images/hero/top-right-el.svg" 
            alt="Decorative line 2"
            width={430}
            height={70}
            className="opacity-45 3xl:w-[490px] 4xl:w-[530px]"
            />
        </div>
        <div className="absolute bottom-22 right-90 4xl:right-110">
            <Image
            src="/images/hero/bottom-right-el.svg" 
            alt="Decorative line 3"
            width={400}
            height={60}
            className="3xl:w-[450px] 4xl:w-[500px]"
            />
        </div>
        <div className="absolute bottom-35 right-75 3xl:right-105">
            <Image
            src="/images/hero/right-el.svg" 
            alt="Decorative line 3"
            width={250}
            height={60}
            className="3xl:w-[300px] 4xl:w-[400px]"
            />
        </div>
        <div className="absolute right-10 top-15">
            <Image
            src="/images/hero/hero-robot.png" 
            alt="Decorative"
            width={600}
            height={60}
            className="3xl:w-[665px] 4xl:w-[755px]"
            />
        </div>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="space-y-2 3xl:space-y-5 z-1 4xl:mt-10">
                <h2 className="text-3xl uppercase tracking-wider pl-2 font-light 3xl:text-4xl">Майбутнє за інженерами</h2>
                <p
                    className={`text-[69px] 3xl:text-[89px] tracking-wide font-bold text-secondary 3xl:w-5xl w-3xl text-bec ${awide.className} leading-[1.3]`}
                    style={{ textShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)' }}
                >
                        BEST Engineering Competition
                </p>
                <p className="text-3xl pl-2 font-semibold mb-12 mt-5 tracking-wider 3xl:text-[38px]">
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