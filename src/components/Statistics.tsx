import { refPropSt } from "@/types/types";
import Image from "next/image"
import { forwardRef } from "react";



const Statistics = forwardRef<HTMLElement, {}>((props, ref) => {

  const socialData = [
    { icon: "/images/statistics/inst.svg", number: "3400+", label: "підписників" },
    { icon: "/images/statistics/tg.svg", number: "900+", label: "підписників" },
    { icon: "/images/statistics/linkedin.svg", number: "700+", label: "підписників" },
  ];

  return (
    <section className="text-center scroll-m-40" ref={ref}>
      <div className="container">
        <h1 className="uppercase font-black text-3xl text-bec mb-10">
          Статистика з соцмереж:
        </h1>
        <div className="">
          <div className=" relative flex justify-center flex-wrap gap-16">
            {socialData.map((item, i) => (
              <div key={i} className="flex items-center gap-1 text-md font-bold sm:text-base">
                <Image src={item.icon} alt="icon" width={50} height={50} />
                <h1 className="ml-2 text-xl font-black">{item.number}</h1>
                <h1 className="text-xl">{item.label}</h1>
              </div>
            ))}
            <Image
              src="/images/statistics/inst-el.svg" // Шлях до вашого зображення
              alt="Statistics line"
              width={900}
              height={100} // Встановіть висоту відповідно до зображення
              className="absolute top-10 left-77"
            />
          </div>
          <div className="pt-18 space-y-3 text-xl font-extralight">
            <p>
              Кількість переглядів наших публікацій під час івентів –{" "}
              <span className="font-semibold text-bec">20.5 тисяч</span>
            </p>
            <p>
              Середня кількість взаємодій протягом місяця –{" "}
              <span className="font-semibold text-bec">6 тисяч</span>
            </p>
            <p>
              Середня кількість переглядів в Stories –{" "}
              <span className="font-semibold text-bec">675</span>
            </p>
          </div>
        </div>

        </div>
      <div className="pt-20 container">
          <h1 className="uppercase font-black text-3xl text-bec">
            Статистика івенту 2024
          </h1>
          <div className="flex gap-2 mt-20 justify-center">
            <div className="relative flex flex-col w-[500px] h-[350px]">
              <p className="mb-2 text-lg">РЕЄСТРАЦІЙ <span className="text-bec">199</span></p>
              <p className="mb-2 text-lg">КОМАНД <span className="text-bec">12</span></p>
              <p className="text-lg">УЧАСНИКІВ <span className="text-bec">48</span></p>
              <Image
                src="/images/statistics/left-block.svg"
                alt="фон"
                width={40}
                height={40}
                className="absolute bottom-15 left-0 w-full h-full -z-10"
              />
            </div>
            <div className="relative flex flex-col w-[500px] justify-center pt-17">
              <p className="mb-3 text-lg px-10 leading-tight">ЗАГАЛЬНА ОЦІНКА ВІД ПАРТНЕРІВ ПРОВЕДЕННЯ ВЕСЬ 2024</p>
              <div className="relative h-5 mx-10 border border-bec bg-becblack">
                <div className="absolute inset-0 bg-bec" style={{ width: '95%' }}></div>
                <div className="absolute inset-0 flex items-center justify-center text-sm font-black text-becblack">
                  9.6/10
                </div>
              </div>
              <Image
                src="/images/statistics/right-block.svg"
                alt="фон"
                width={40}
                height={40}
                className="absolute bottom-16 left-0 w-full h-full -z-10"
              />
              <p className="text-sm text-gray-300 text-start pt-10 pl-4">
                *Компанії-партнери заново оцінили форму зворотнього зв’язку
                щодо проведених івентів, напряки які цього тижня будуть
                вражені у відзвіті
              </p>
            </div>
          </div>
      </div>
    </section>
  )
})

export default Statistics