import { HeaderProps } from '@/types/types';
import { Exo_2 } from 'next/font/google';
import Image from 'next/image';
import { RefObject, useState } from 'react';

const exo2 = Exo_2({
  weight: ['400'],
  subsets: ['latin'],
});

const Header = ({ scrollToSection, refs }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (ref?: RefObject<HTMLElement | null>) => {
    if (ref && typeof scrollToSection === 'function') {
      scrollToSection(ref);
    }
    setMenuOpen(false);
  };

  return (
    <header className={`${exo2.className} font-audiowide bg-header fixed top-0 left-0 w-full z-50 backdrop-blur `}>
      <div className={`540px:pt-7 540px:pb-7 flex items-center justify-between 4xl:h-[135px] lg:px-5 sm:px-5 xs:px-5 xs:pt-3 xs:pb-3`}>
        <div>
          <a onClick={() => handleMenuClick(refs?.topRef)} className="cursor-pointer">
            <Image src="/images/header/BEC_logo.svg" className='4xl:w-[170px] xs:w-[120px] 540px:w-[128px]' alt="Logo" width={134} height={44} />
          </a>
        </div>
        <ul className="hidden xl:flex gap-37 4xl:text-[26px]">
          <li>
            <a
              className="hover:text-white hover:text-shadow-sm/30 hover:text-shadow-white transition-all duration-400 ease-in-out cursor-pointer"
              onClick={() => handleMenuClick(refs?.aboutRef)}
            >
              Про нас
            </a>
          </li>
          <li>
            <a
              className="hover:text-white hover:text-shadow-sm/30 hover:text-shadow-white transition-all duration-400 ease-in-out cursor-pointer"
              onClick={() => handleMenuClick(refs?.statisticsRef)}
            >
              Статистика
            </a>
          </li>
          <li>
            <a
              className="hover:text-white hover:text-shadow-sm/30 hover:text-shadow-white transition-all duration-400 ease-in-out cursor-pointer"
              onClick={() => handleMenuClick(refs?.contactsRef)}
            >
              Контакти
            </a>
          </li>
        </ul>
        <div className="hidden xl:block">
          <button
            className="h-10 4xl:h-12 text-center px-6 4xl:px-8 4xl:text-xl text-base bg-[#5A5A58] text-[#CFCFCF] border border-[#CFCFCF] shadow-[inset_-3px_1px_15px_rgba(0,0,0,0.5)] cursor-pointer
              hover:bg-[#727270] hover:text-white hover:border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-400 ease-out"
            onClick={() => handleMenuClick(refs?.sposorRef)}
          >
            Стати партнером
          </button>
        </div>

        {/* Burger Button */}
        <div className="xl:hidden z-50">
          <button
            className="flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-7 bg-white transition-transform duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[9px]' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-7 bg-white transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-7 bg-white transition-transform duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Fullscreen */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#212121] backdrop-blur-xl text-white flex flex-col items-center justify-center gap-10 text-2xl transition-transform duration-300 ease-in-out z-40 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          <a onClick={() => handleMenuClick(refs?.topRef)} className="cursor-pointer absolute top-5 left-5">
            <Image src="/images/header/BEC_logo.svg" className='' alt="Logo" width={134} height={44} />
          </a>
        </div>
        <Image
          height={60}
          width={300}
          alt="Decorative line 3"
          src="/images/elipses/add_right.png" 
          className={`absolute -top-60 -right-30 -z-1 ${menuOpen ? "block" : 'hidden'}`}
        />
        <Image
          height={60}
          width={300}
          alt="Decorative line 3"
          src="/images/elipses/add_left.png" 
          className={`absolute -top-20 -left-30 -z-1 ${menuOpen ? "block" : 'hidden'}`}
        />
        <div className="absolute bottom-10 left-0 940px:hidden">
          <Image
            src="/images/hero/phone-left.svg" 
            alt="Decorative line 2"
            width={200}
            height={70}
            className={`-z-1 ${menuOpen ? "block" : 'hidden'}`}
          />
        </div>
        <div className="absolute bottom-40 right-0 940px:hidden">
          <Image
            src="/images/elipses/right_burger.svg" 
            alt="Decorative line 2"
            width={200}
            height={70}
            className={`-z-1 ${menuOpen ? "block" : 'hidden'}`}
          />
        </div>
        <ul className="flex flex-col gap-5 text-center text-3xl font-bold">
          <li>
            <a
              className="hover:text-white hover:text-shadow-sm/30 hover:text-shadow-white transition-all duration-400 ease-in-out cursor-pointer"
              onClick={() => handleMenuClick(refs?.aboutRef)}
            >
              Про нас
            </a>
          </li>
          <li>
            <a
              className="hover:text-white hover:text-shadow-sm/30 hover:text-shadow-white transition-all duration-400 ease-in-out cursor-pointer"
              onClick={() => handleMenuClick(refs?.statisticsRef)}
            >
              Статистика
            </a>
          </li>
          <li>
            <a
              className="hover:text-white hover:text-shadow-sm/30 hover:text-shadow-white transition-all duration-400 ease-in-out cursor-pointer"
              onClick={() => handleMenuClick(refs?.contactsRef)}
            >
              Контакти
            </a>
          </li>
        </ul>
        <div className="relative aspect-[655/367] w-full 540px:max-w-[270px] xs:max-w-[210px] xs:max-h-[80px] 540px:max-h-[98px] bg-center bg-contain bg-no-repeat bg-[#212121] cursor-pointer header-btn group"
            onClick={() => handleMenuClick(refs?.sposorRef)}>
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
      </div>
    </header>
  );
};

export default Header;
