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
                    <Link href="#">
                        Про нас
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        Статистика
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        Контакти
                    </Link>
                </li>
            </ul>
            <Link href="#">
                <button className='h-10 text-center pl-6 pr-6 text-base'>
                    Стати партнером
                </button>
            </Link>
        </div>
    </header>
  )
}

export default Header