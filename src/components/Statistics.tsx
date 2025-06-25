import Image from "next/image";
import { forwardRef } from "react";

const Statistics = forwardRef<HTMLElement, object>((props, ref) => {
  const socialData = [
    { icon: "/images/statistics/inst.svg", number: "3400+", label: "підписників" },
    { icon: "/images/statistics/tg.svg", number: "900+", label: "підписників" },
    { icon: "/images/statistics/linkedin.svg", number: "700+", label: "підписників" },
  ];

  return (
    <section className="text-center scroll-m-40" ref={ref}>
      <div className="container">
        <h1 className="uppercase font-black text-3xl text-bec mb-10 3xl:text-[42px] 4xl:text-5xl">
          Статистика з соцмереж:
        </h1>
        <div className="relative">
          <div className="relative flex justify-center flex-wrap gap-25 4xl:gap-45">
            {socialData.map((item, i) => (
              <div key={i} className="flex items-center gap-1 text-md font-bold sm:text-base">
                <Image src={item.icon} alt="icon" width={60} height={60} className="4xl:w-[75px]" />
                <h1 className="ml-2 text-xl font-black 4xl:text-2xl">{item.number}</h1>
                <h1 className="text-xl 4xl:text-2xl">{item.label}</h1>
              </div>
            ))}
            <div className="w-[1000px] h-[320px] absolute top-1 left-61 3xl:left-86 4xl:left-76 4xl:top-6 4xl:w-[1150px]">
              <Image
                src="/images/statistics/inst-el.svg"
                alt="Statistics line"
                fill
                className=""
              />
            </div>
          </div>
          <div className="pt-18 space-y-3 text-2xl font-extralight">
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
          <Image
            alt="фон"
            src="/images/elipses/left_inst.png"
            width={620}
            height={240}
            className="absolute -bottom-92 -left-16 z-10"
          />
        </div>
      </div>

      <div className="pt-20 container 4xl:pt-40">
        <h1 className="uppercase font-black text-3xl text-bec 3xl:text-[42px] 4xl:text-5xl">
          Статистика івенту 2024
        </h1>
        <div className="flex gap-2 mt-20 justify-center relative">
          <div className="relative flex flex-col w-[500px] h-[350px] 4xl:w-[600px] 4xl:h-[450px]">
            <p className="mb-2 text-lg 4xl:mt-8 4xl:text-xl">РЕЄСТРАЦІЙ <span className="text-bec">199</span></p>
            <p className="mb-2 text-lg 4xl:text-xl">УЧАСНИКІВ <span className="text-bec">48</span></p>
            <p className="text-lg 4xl:text-xl">КОМАНД <span className="text-bec">12</span></p>
            <Image
              src="/images/statistics/left-block.svg"
              alt="фон"
              width={40}
              height={40}
              className="absolute bottom-15 left-0 w-full h-full -z-10 4xl:w-650"
            />
          </div>
          <div className="relative flex flex-col w-[500px] 4xl:w-[600px] justify-center pt-17 4xl:pt-30">
            <p className="mb-3 text-lg px-10 leading-tight 4xl:text-xl">
              ЗАГАЛЬНА ОЦІНКА ВІД ПАРТНЕРІВ ПРОВЕДЕННЯ ВЕСЬ 2024
            </p>
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
            <p className="text-sm text-gray-300 text-start pt-10 pl-4 4xl:text-base">
              *Компанії-партнери заново оцінили форму зворотнього зв’язку
              щодо проведених івентів, напряки які цього тижня будуть
              вражені у відзвіті
            </p>
          </div>
          <Image
            alt="фон"
            src="/images/elipses/statist_right.png"
            width={620}
            height={240}
            className="absolute -bottom-52 -right-16 -z-1"
          />
        </div>
      </div>
    </section>
  );
});

Statistics.displayName = 'Statistics';

export default Statistics;
