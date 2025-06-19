import { Exo_2 } from 'next/font/google';
import Image from 'next/image'; 
import Link from 'next/link'; 

const exo2 = Exo_2({
  weight: ['400'],
  subsets: ['latin'],
});

const Header = () => {

  return (
    <header className={`${exo2.className} font-audiowide bg-header fixed top-0 left-0 w-full z-50 backdrop-blur`}>
        <div className="container pt-7 pb-7 flex text-center items-center justify-between">
            <div className="">
                <Link href="">
                    <Image 
                    src="/images/header/BEC_logo.svg" // Make sure this path is correct for Next.js
                    alt="Logo"
                    width={134}
                    height={44}
                    />
                </Link>
            </div>
            <ul className='flex gap-37'>
                <li>
                    <Link href="#" className='hover:text-white hover:text-shadow-sm/30 hover:text-shadow-white transition-all duration-400 ease-in-out'>
                        Про нас
                    </Link>
                </li>
                <li>
                    <Link href="#" className='hover:text-white hover:text-shadow-sm/30 hover:text-shadow-white transition-all duration-400 ease-in-out'>
                        Статистика
                    </Link>
                </li>
                <li>
                    <Link href="#" className='hover:text-white hover:text-shadow-sm/30 hover:text-shadow-white transition-all duration-400 ease-in-out'>
                        Контакти
                    </Link>
                </li>
            </ul>
            <Link href="#">
                <button className='h-10 text-center pl-6 pr-6 text-base bg-[#5A5A58] text-[#CFCFCF] border border-[#CFCFCF] shadow-[inset_-3px_1px_15px_rgba(0,0,0,0.5)] cursor-pointer
                hover:bg-[#727270] hover:text-white hover:border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-400 ease-out'>
                    Стати партнером
                </button>
            </Link>
        </div>
    </header>
  )
}

export default Header