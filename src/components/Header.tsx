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
      <div className="container pt-7 pb-7 flex items-center justify-between 4xl:h-[135px]">
        <div>
          <a onClick={() => handleMenuClick(refs?.topRef)} className="cursor-pointer">
            <Image src="/images/header/BEC_logo.svg" className='4xl:w-[170px]' alt="Logo" width={134} height={44} />
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
        <a onClick={() => handleMenuClick(refs?.aboutRef)} className="cursor-pointer hover:text-white">
          Про нас
        </a>
        <a onClick={() => handleMenuClick(refs?.statisticsRef)} className="cursor-pointer hover:text-white">
          Статистика
        </a>
        <a onClick={() => handleMenuClick(refs?.contactsRef)} className="cursor-pointer hover:text-white">
          Контакти
        </a>
        <button
          className="mt-4 h-12 px-6 text-base bg-[#5A5A58] text-[#CFCFCF] border border-[#CFCFCF] shadow-[inset_-3px_1px_15px_rgba(0,0,0,0.5)] cursor-pointer
            hover:bg-[#727270] hover:text-white hover:border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-400 ease-out"
          onClick={() => handleMenuClick(refs?.sposorRef)}
        >
          Стати партнером
        </button>
      </div>
    </header>
  );
};

export default Header;
