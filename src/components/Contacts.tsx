import Image from "next/image";
import { forwardRef } from "react";
import { Play } from "next/font/google";

const play = Play({
  weight: ['700'],
  subsets: ['latin'],
});

const Contacts = forwardRef<HTMLDivElement, object>((props, ref) => {
  const teamMembers = [
    {
      name: "Соломія Ногаль",
      role: "Відповідальна за корпоративні зв’язки",
      email: "Solomiia.Nohal@Best-Eu.Org",
      phone: "+380688828848",
      src: "/images/organisers/solomia.jpg"
    },
    {
      name: "Денис Браздецький",
      role: "Головний організатор",
      email: "Denys.Brazdetskyi@Best-Eu.Org",
      phone: "+380664493594",
      src: "/images/organisers/denys.jpg"
    },
    {
      name: "Дмитро Мартинюк",
      role: "Відповідальний за корпоративні зв’язки",
      email: "Dmytro.Martyniuk@Best-Eu.Org",
      phone: "+380672710270",
      src: "/images/organisers/tomas_dima.jpg"
    }
  ];

  return (
    <section ref={ref} className="pb-7 scroll-m-28">
      <div className="container">
        <h1 className="text-center text-2xl 700px:text-4xl text-bec font-black mb-10 uppercase 3xl:text-[42px] 4xl:text-5xl">
          Контакти
        </h1>
        <div className="flex items-center gap-14 970px:gap-0 970px:justify-around 970px:flex-row flex-col justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center w-[285px] 1070px:w-[360px] 4xl:w-[420px] text-center">
              <Image
                src={member.src}
                alt="person"
                width={300}
                height={600}
                className="4xl:w-[400px]"
              />
              <h1 className="text-xl 1340px:text-2xl uppercase mt-3 pb-2 w-[300px]">{member.role}</h1>
              <Image
                src="/images/organisers/card_el.svg"
                alt="pp"
                width={300}
                height={50}
              />
              <h1 className="text-2xl 1340px:text-3xl mt-3 font-bold 1340px:font-black uppercase 4xl:text-4xl">{member.name}</h1>
              <p><a href={`mailto:${member.email}`} className="underline text-lg 1340px:text-xl 4xl:text-2xl">{member.email}</a></p>
              <p><a href={`tel:${member.phone}`} className="text-lg 1340px:text-xl 4xl:text-2xl">{member.phone}</a></p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex mt-30 justify-between px-5 780px:px-10 text-center items-center relative">
        <div className="flex gap-2 640px:gap-5 970px:gap-10 items-center">
          <a href="https://www.linkedin.com/company/best-lviv/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-all duration-300 ease">
            <Image src="/images/statistics/linkedin.svg" alt="LinkedIn" width={50} height={50} className="970px:w-[50px] 970px:h-[50px] 640px:w-[40px] 640px:h-[40px] 490px:w-[35px] w-[30px]"/>
          </a>
          <a href="https://t.me/bestlviv" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-all duration-300 ease">
            <Image src="/images/statistics/tg.svg" alt="Telegram" width={50} height={50} className="970px:w-[50px] 970px:h-[50px] 640px:w-[40px] 640px:h-[40px] 490px:w-[35px] w-[30px]"/>
          </a>
          <a href="https://www.facebook.com/BEST.Lviv" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-all duration-300 ease">
            <Image src="/images/statistics/facebook.svg" alt="Facebook" width={50} height={50} className="970px:w-[50px] 970px:h-[50px] 640px:w-[40px] 640px:h-[40px] 490px:w-[35px] w-[30px]"/>
          </a>
          <a href="https://www.instagram.com/best_lviv/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-all duration-300 ease">
            <Image src="/images/statistics/inst.svg" alt="Instagram" width={50} height={50} className="970px:w-[50px] 970px:h-[50px] 640px:w-[40px] 640px:h-[40px] 490px:w-[35px] w-[30px]"/>
          </a>
        </div>
        <div className="780px:w-[370px] absolute left-1/2">
          <Image
            src="/images/statistics/best_logo.svg"
            alt="logo"
            width={0}
            height={0}
            className="780px:w-[120px] w-[90px]"
          />
        </div>
        <p className={`${play.className} text-xl 780px:text-2xl`}>2025</p>

        <Image
          height={60}
          width={500}
          alt="Decorative line"
          src="/images/elipses/org_left.png"
          className="absolute bottom-65 -left-15 -z-1"
        />
        <Image
          height={60}
          width={300}
          alt="Decorative line"
          src="/images/elipses/add_right.png"
          className="absolute -bottom-5 -right-15 -z-1"
        />
      </div>
    </section>
  );
});

Contacts.displayName = 'Contacts';

export default Contacts;