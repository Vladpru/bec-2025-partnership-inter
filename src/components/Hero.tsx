import { Audiowide } from 'next/font/google';
import Image from "next/image"
import Link from "next/link"
import HeroBtn from "./Hero-btn"


const awide = Audiowide({
  weight: ['400'],
  subsets: ['latin'],
});

const Hero = () => {
  return (
    <section className="mt-25 pt-26">
        {/* Декоративні палочки */}
        <div className="absolute top-32">
            <Image
            src="/images/hero/left-top-el.svg" 
            alt="Decorative line 1"
            width={250}
            height={50}
            className=""
            />
        </div>
        <div className="absolute top-16 z-0 right-120">
            <Image
            src="/images/hero/top-el.svg" 
            alt="Decorative line 2"
            width={200}
            height={70}
            className=""
            />
        </div>
        <div className="absolute top-32 right-0">
            <Image
            src="/images/hero/top-right-el.svg" 
            alt="Decorative line 2"
            width={430}
            height={70}
            className="opacity-45"
            />
        </div>
        <div className="absolute bottom-32 right-80">
            <Image
            src="/images/hero/bottom-right-el.svg" 
            alt="Decorative line 3"
            width={430}
            height={60}
            className=""
            />
        </div>
        <div className="absolute bottom-50 right-80">
            <Image
            src="/images/hero/right-el.svg" 
            alt="Decorative line 3"
            width={250}
            height={60}
            className="" // animate-pulse
            />
        </div>
        <div className="absolute bottom-2 right-0">
            <Image
            src="/images/hero/hero-robot.png" 
            alt="Decorative line 3"
            width={380}
            height={60}
            className=""
            />
        </div>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="space-y-6 z-10">
                <h2 className="text-3xl uppercase tracking-wider pl-2">Майбутнє за інженерами</h2>
                <p
                  className={`text-5xl md:text-7xl tracking-wide font-bold text-secondary w-3xl text-bec ${awide.className}`}
                  style={{ textShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)' }}
                >
                    BEST Engineering Competition
                </p>
                <p className="text-3xl pl-2">
                    Дати проведення: 24-28 жовтня
                </p>
                <Link href="#" className="max-w-3xs flex">
                    <HeroBtn/>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Hero