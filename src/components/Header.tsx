import Image from 'next/image'; 
import Link from 'next/link'; 

const Header = () => {



  return (
    <header className="bg-header fixed top-0 left-0 w-full z-50">
        <div className="header-container pt-7 pb-7 pl-5 pr-5 flex text-center items-center justify-between">
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
                        Пропозиції
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