import Image from "next/image";
import { forwardRef } from "react";
import { Play } from "next/font/google";

 const play = Play({
    weight: ['700'],
    subsets: ['latin'],
  });


const Contacts = forwardRef<HTMLDivElement, {}>((props, ref) => {

  const teamMembers = [
    { name: "Соломія Ногаль", role: "Відповідальна за корпоративні зв’язки", email: "Solomiia.Nohal@Best-Eu.Org", phone: "+380688828848", src: "/images/organisers/solomia.jpg" },
    { name: "Денис Браздецький", role: "Головний організатор", email: "Denys.Brazdetskyi@Best-Eu.Org", phone: "+380664493594", src: "/images/organisers/denys.jpg" },
    { name: "Дмитро Мартинюк", role: "Відповідальний за корпоративні зв’язки", email: "Dmytro.Martyniuk@Best-Eu.Org", phone: "+380672710270", src: "/images/organisers/tomas.png" },
  ];

  return (
    <section ref={ref} className="pb-7 scroll-m-28">
      <div className="container" ref={ref}>
        <h1 className="text-center text-4xl text-bec font-black mb-10 uppercase">Контакти</h1>
        <div className="flex justify-around">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center w-[360px] text-center">
              <Image 
                src={member.src}
                alt="person"
                width={300}
                height={600}
                className=""
              />
              <h1 className="text-2xl uppercase mt-3 w-[300px]">{member.role}</h1>
              <Image 
                src="/images/organisers/card_el.svg"
                alt="solomia"
                width={300}
                height={50}
                className=""
              />
              <h1 className="text-3xl mt-3 font-black uppercase">{member.name}</h1>
              <p className=""><a href={`mailto:${member.email}`} className="underline text-xl">{member.email}</a></p>
              <p className="mt-2"><a href={`tel:${member.phone}`} className="text-xl">{member.phone}</a></p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-30 justify-between px-10 text-center items-center">
            <div className="flex gap-10 ">
              <a href="https://www.linkedin.com/company/best-lviv/" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/images/statistics/linkedin.svg"
                  alt="LinkedIn"
                  width={50}
                  height={50}
                  className=""
                />
              </a>
              <a href="https://t.me/bestlviv" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/images/statistics/tg.svg"
                  alt="Telegram"
                  width={50}
                  height={50}
                  className=""
                />
              </a>
              <a href="https://www.facebook.com/BEST.Lviv" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/images/statistics/facebook.svg"
                  alt="Facebook"
                  width={50}
                  height={50}
                  className=""
                />
              </a>
              <a href="https://www.instagram.com/best_lviv/" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/images/statistics/inst.svg"
                  alt="Instagram"
                  width={50}
                  height={50}
                  className=""
                />
              </a>
            </div>
            <Image 
              src="/images/statistics/best_logo.svg"
              alt="e"
              width={120}
              height={50}
              className="object-cover mr-65"
            />
            <p className={`${play.className} text-2xl`}>2025</p>
          </div>
    </section>
  )
})

export default Contacts