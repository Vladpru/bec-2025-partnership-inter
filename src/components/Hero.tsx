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
    <section className="mt-15 940px:pt-24 xs:pt-36 sm:pt-26">
        <div className="absolute 940px:top-16 z-0 940px:right-120 4xl:right-140 xs:hidden 940px:block">
            <Image
            src="/images/hero/top-el.svg" 
            alt="Decorative line 2"
            width={200}
            height={70}
            className="3xl:w-[220px] 4xl:w-[280px]"
            />
        </div>
        <div className="absolute top-20 940px:hidden">
            <Image
            src="/images/hero/phone-top.svg" 
            alt="Decorative line 2"
            width={200}
            height={70}
            className="3xl:w-[220px] 4xl:w-[280px] xs:w-[160px] 540px:w-[200px]"
            />
        </div>
        <div className="absolute bottom-30 940px:hidden">
            <Image
            src="/images/hero/phone-left.svg" 
            alt="Decorative line 2"
            width={200}
            height={70}
            className="3xl:w-[220px] 4xl:w-[280px] sm:w-[220px] xs:w-[200px]"
            />
        </div>
        <div className="absolute 940px:top-35 940px:right-0 top-30 right-0">
            <Image
            src="/images/hero/top-right-el.svg" 
            alt="Decorative line 2"
            width={430}
            height={70}
            className="opacity-45 3xl:w-[490px] 4xl:w-[530px] xs:w-[250px] 540px:w-[420px]"
            />
        </div>
        <div className="absolute 940px:top-122 940px:right-89 4xl:right-110 xs:right-0 xs:top-70">
            <Image
            src="/images/hero/bottom-right-el.svg" 
            alt="Decorative line 3"
            width={400}
            height={60}
            className="3xl:w-[450px] 4xl:w-[500px] xs:w-[250px] 540px:w-[400px]"
            />
        </div>
        <div className="absolute 940px:bottom-45 940px:right-105 3xl:right-105 xs:bottom-30 xs:right-0">
            <Image
            src="/images/hero/right-el.svg" 
            alt="Decorative line 3"
            width={250}
            height={60}
            className="3xl:w-[300px] 4xl:w-[400px] xs:w-[170px] lg:w-[250px]"
            />
        </div>


        <div className="absolute 2xl:right-10 2xl:top-15 1140px:top-20 1140px:right-5 xs:hidden 940px:block 940px:right-0 940px:top-15">
            <Image
            src="/images/hero/hero-robot.png" 
            alt="Decorative"
            width={600}
            height={60}
            className="3xl:w-[665px] 4xl:w-[755px]"
            />
        </div>
      <div className="container mx-auto 540px:px-4 xs:px-8 flex flex-col md:flex-row items-center 940px:justify-between xs:justify-center">
        <div className="space-y-2 3xl:space-y-5 z-10 xs:max-w-[360px] 540px:max-w-[440px] sm:max-w-[780px]">
          <h2 className="text-3xl uppercase tracking-wider pl-2 font-light 3xl:text-4xl
          sm:text-[35px] 540px:text-[22px] xs:text-[20px]
          ">
            Майбутнє за інженерами
          </h2>
          <p
            className={`
              font-bold tracking-wide leading-[1.3] 540px:leading-13 sm:leading-25
              text-bec ${awide.className}
              text-[45px] sm:text-[75px]
              1340px:text-[75px] 3xl:text-[89px]
              540px:text-[52px] xs:text-[48px]
            `}
            style={{ textShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)' }}
          >
            BEST Engineering Competition
          </p>

          <p className="text-3xl pl-2 font-semibold mb-12 mt-5 tracking-wider 3xl:text-[38px] 540px:text-[25px]">
            24–28 жовтня
          </p>

          <div className="540px:max-w-3xs flex">
            <HeroBtn scrollToSection={scrollToSection} sposorRef={sposorRef} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero