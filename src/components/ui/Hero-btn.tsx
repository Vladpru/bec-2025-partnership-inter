import Image from 'next/image'


interface HeroBtnProps {
  scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void;
  sposorRef: React.RefObject<HTMLElement | null>;
}

const HeroBtn = ({ scrollToSection, sposorRef }: HeroBtnProps) => {
  return (
    <div className="relative aspect-[655/367] w-full 540px:max-w-[270px] xs:max-w-[210px] xs:max-h-[80px] 540px:max-h-[98px] bg-center bg-contain bg-no-repeat cursor-pointer hero-btn group"
    onClick={() => scrollToSection(sposorRef)}>
      <span className="pt-2 absolute inset-0 flex items-center justify-center text-white xs:text-[17px] 540px:text-[20px] font-bold select-none transition-all duration-400 ease-out group-hover:scale-105">
        СТАТИ ПАРТНЕРОМ
      </span>
      <span className=''>
        <Image
          src="/images/hero/btn-bottom-left.svg" 
          alt="Decorative line 3"
          width={110}
          height={7}
          className='absolute left-2 bottom-[-20px] transition-all duration-500 ease-out group-hover:-translate-x-5 group-hover:opacity-0 540px:max-w-[110px] xs:max-w-[90px]'
        >
        </Image>
        <Image
          src="/images/hero/btn-bottom-right.svg" 
          alt="Decorative line 3"
          width={110}
          height={7}
          className='absolute right-2 bottom-[-16px] transition-all duration-500 ease-out group-hover:translate-x-5 group-hover:opacity-0 540px:max-w-[110px] xs:max-w-[90px]'
        >
        </Image>
      </span>
    </div>
  );
};

export default HeroBtn;