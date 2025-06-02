import Image from 'next/image'; 

const Header = () => {
  return (
    <header className="bg-header">
        <div className="container pt-9 pb-9 flex text-center items-center justify-between">
            <div className="">
                <a href="">
                    <Image 
                    src="/images/hero/BEC_logo.svg" // Make sure this path is correct for Next.js
                    alt="Logo"
                    width={234}
                    height={94}
                    />
                </a>
            </div>
            <ul className='flex gap-5'>
                <li>
                    <a href="#">
                        Про нас
                    </a>
                </li>
                <li>
                    <a href="#">
                        Пропозиції
                    </a>
                </li>
                <li>
                    <a href="#">
                        Статистика
                    </a>
                </li>
                <li>
                    <a href="#">
                        Контакти
                    </a>
                </li>
            </ul>
            <button>
                Стати партнером
            </button>
        </div>
    </header>
  )
}

export default Header