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
    <section className="relative w-full h-screen overflow-hidden pt-[170px] 940px:pt-[170px] sm:pt-[184px]">

      <Image
        fill
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        alt="hero background"
        src="/images/hero/hero-bg.svg"
      />
       
      <div className="container mx-auto 540px:px-4 xs:px-8 flex flex-col md:flex-row items-center 940px:justify-between xs:justify-center">
        <div className="space-y-2 3xl:space-y-5 z-10 xs:max-w-[360px] 540px:max-w-[440px] sm:max-w-[780px]">
          <h2 className="text-3xl uppercase tracking-wider pl-2 font-light 3xl:text-4xl
          sm:text-[35px] 540px:text-[22px] xs:text-[20px]
          ">
            THE FUTURE BELONGS TO ENGINEERS
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
          <div className='flex gap-2 items-center mb-12 mt-5'>
            <Image 
              width={30}
              height={30}
              alt='.'
              src="/images/hero/calendar.svg"
            />
            <p className="text-3xl pl-2 font-semibold tracking-wider 3xl:text-[38px] 540px:text-[25px]">
              24–28 of October
            </p>
          </div>

          <div className="540px:max-w-2xs flex">
            <HeroBtn scrollToSection={scrollToSection} sposorRef={sposorRef} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero