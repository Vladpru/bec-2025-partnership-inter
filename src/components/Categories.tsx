'use client'
import Image from "next/image"
import { useOnScreen } from "@/hooks/useOnScreen" 
import CategoriesSlider from "./ui/Categories-slider";

const Categories = () => {
  
  const [arrowsRef] = useOnScreen(0.1) as [React.RefObject<HTMLDivElement>, boolean];
  
  return (
    <section className="mb-20 540px:mb-50 relative 4xl:mt-20 mt-100 1140px:mt-0">
      <div className="container">
        <div
          className="
            flex items-center gap-6
            flex-row justify-center 540px:justify-between sm:px-10 
            md:px-20 
            lg:px-28 
            xl:px-36 
            2xl:px-40 
            3xl:px-[80px] 
            4xl:px-[120px]
            relative
          "
          ref={arrowsRef}
        >
          <Image
            src="/images/categories/left-arrow.svg"
            alt="Decorative line 3"
            width={300}
            height={60}
            className="
              xs:absolute
              -top-3
              -left-12
              540px:static
              w-[180px]
              md:w-[200px]
              lg:w-[250px]
              xl:w-[280px]
              3xl:w-[350px]
              4xl:w-[400px]
            "
          />
          
          <div className="flex flex-col text-center justify-center items-center">
            <h3
              className="
                text-becblack font-bold bg-bec border 
                text-lg py-1
                md:text-xl px-8 
                lg:text-2xl lg:px-10 
                3xl:text-3xl 3xl:px-15 3xl:py-2 
                4xl:text-4xl
              "
            >
              Тема:
            </h3>

            <h1
              className="
                font-black text-2xl mt-2 
                md:text-3xl 
                lg:text-4xl 
                4xl:text-[44px]
              "
            >
              Повоєнне відновлення
            </h1>
          </div>

          <Image
            src="/images/categories/right-arrow.svg"
            alt="Decorative line 3"
            width={300}
            height={60}
            className="
              xs:absolute
              -top-3
              -right-12
              540px:static
              w-[180px]
              md:w-[200px]
              lg:w-[250px]
              xl:w-[280px]
              3xl:w-[350px]
              4xl:w-[400px]
            "
          />
        </div>
        <div className="text-xl mt-20 4xl:mt-40 px-4 660px:px-0">
          <h1 className="uppercase text-center xs:text-3xl 660px:text-4xl font-black text-bec 700px:mt-15 mb-10 mt-10 700px:mb-15 3xl:text-[42px] 4xl:text-5xl">Категорії змагань</h1>
          <div className="flex font-light flex-col lg:flex-row items-center justify-center lg:justify-between">
            <div className="flex max-w-[400px] sm:max-w-[600px] 3xl:max-w-[700px] 4xl:max-w-[800px]">
              <Image
                src="/images/categories/text-divider.svg" 
                alt="Decorative line 3"
                width={75}
                height={65}
                className="3xl:w-[85px] 4xl:w-[95px] lg:block hidden"
              />
              <div className="flex flex-col gap-3 justify-center 1160px:justify-between">
                <h1 className="text-2xl 1160px:text-3xl font-black uppercase 3xl:text-4xl 4xl:text-5xl">Team design</h1>
                <p className="text-[18px] 3xl:text-[22px] 4xl:text-[25px] 1160px:text-xl">
                  Практична інженерна категорія, у якій команди студентів вирішують реальні 
                  прикладні задачі у сфері embedded-систем, IoT, електроніки та механіки, 
                  створюючи робочі прототипи пристроїв.
                </p>
                <p className="text-[18px] 3xl:text-[22px] 4xl:text-[25px] 1160px:text-xl">
                  <span className="font-bold">Приклад:</span> Розробити функціональну модель мінного тральника для пошуку 
                  та розмінування морських мін, який може керуватися в ручному та автоматичному режимі
                </p>
              </div>
            </div>
            <Image
              src="/images/categories/text-divider-horizontal.svg" 
              alt="Decorative line 3"
              width={225}
              height={60}
              className="lg:hidden xs:w-[440px] sm:w-[500px] my-5 w-[350px]"
            />
            <div className="flex max-w-[400px] sm:max-w-[600px] lg:max-w-[700px] 3xl:max-w-[800px] 4xl:max-w-[900px] z-10">
              <Image
                src="/images/categories/text-divider.svg" 
                alt="Decorative line 3"
                width={75}
                height={60}
                className="3xl:w-[85px] 4xl:w-[95px] lg:block hidden"
              />
              <div className="flex flex-col gap-3 justify-center 1160px:justify-between">
                <h1 className="text-2xl 1160px:text-3xl font-black uppercase 3xl:text-4xl 4xl:text-5xl">Innovative design</h1>
                <p className="text-[18px] 3xl:text-[22px] 4xl:text-[25px] 1160px:text-xl">
                  Концептуальна категорія, зосереджена на креативних інженерних ідеях та нестандартному мисленні.
                  Команди пропонують нові або вдосконалюють наявні проєктні рішення для актуальних проблем, демонструючи інноваційний підхід, 
                  його переваги та реалістичність втілення. Використовують креслення або 3D-моделі.
                </p>
                <p className="text-[18px] 3xl:text-[22px] 4xl:text-[25px] 1160px:text-xl">
                  <span className="font-bold">Приклад:</span> «розумний вулик», оснащений датчиками, що передають дані бджоляру в реальному часі.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CategoriesSlider/>
      <Image
        height={60}
        alt="Decorative line 3"
        width={400}
        src="/images/elipses/categ_right.png" 
        className="absolute top-40 right-0 -z-1"
      />
    </section>
  )
}

export default Categories