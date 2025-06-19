'use client'
import Image from "next/image"
import { useOnScreen } from "@/hooks/useOnScreen" 
import CategoriesSlider from "./ui/Categories-slider";

const Categories = () => {
  
  const [arrowsRef, isVisible] = useOnScreen(0.1) as [React.RefObject<HTMLDivElement>, boolean];
  
  return (
    <section className="mb-50">
      <div className="container">
        <div className="flex justify-between items-start pr-40 pl-40 " ref={arrowsRef}>
          <Image
            src="/images/categories/left-arrow.svg" 
            alt="Decorative line 3"
            width={300}
            height={60}
            className={`transition-opacity duration-1000 ${(isVisible) ? "opacity-100" : "opacity-0"}`}
          />
          <div className="flex flex-col text-center justify-center items-center">
            <h3 className="text-center text-becblack border font-bold px-13 py-1 bg-bec">Тема:</h3>
            <h1 className="font-black text-4xl mt-2">Повоєнне відновлення</h1>
          </div>
          <Image
            src="/images/categories/right-arrow.svg" 
            alt="Decorative line 3"
            width={300}
            height={60}
            className={`transition-opacity duration-1000 ${(isVisible) ? "opacity-100" : "opacity-0"}`}
          />
        </div>
        <div className="text-xl mt-30">
          <h1 className="uppercase text-center text-4xl font-black text-bec mt-15 mb-15">категорії змагань</h1>
          <div className="flex font-light justify-between">
            <div className="flex max-w-[600px]">
              <Image
                src="/images/categories/text-divider.svg" 
                alt="Decorative line 3"
                width={75}
                height={65}
                className=""
              />
              <div className="flex flex-col justify-between">
                <h1 className="text-3xl font-black uppercase ">Team design</h1>
                <p className="pt-">
                  Практична інженерна категорія, у якій команди студентів вирішують реальні 
                  прикладні задачі у сфері embedded-систем, IoT, електроніки та механіки, 
                  створюючи робочі прототипи пристроїв.
                </p>
                <p>
                  <span className="font-bold">Приклад:</span> Розробити функціональну модель мінного тральщика для пошуку 
                  та розмінування морських мін, який може керуватися в ручному та автоматичному режимі
                </p>
              </div>
            </div>
            <div className="flex max-w-[700px]">
              <Image
                src="/images/categories/text-divider.svg" 
                alt="Decorative line 3"
                width={75}
                height={60}
                className=""
              />
              <div className="flex flex-col justify-between">
                <h1 className="text-3xl font-black uppercase pb-1">Innovative design</h1>
                <p className="">
                  Концептуальна категорія, що орієнтована на креативні інженерні ідеї. Команди 
                  пропонують абсолютно нові проєктні рішення для актуальних проблем, які потребують 
                  розв&apos;язання. Таким чином учасники у своїх проєктах демонструють інноваційний підхід, 
                  його переваги та реалістичність втілення, використовуючи креслення або 3D-моделі.
                </p>
                <p>
                  <span className="font-bold">Приклад:</span> Розробити концепцію «розумного вулика» з датчиками температури, вологості та 
                  шуму, що передає дані бджоляру в реальному часі на смартфон або інший пристрій.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CategoriesSlider/>
    </section>
  )
}

export default Categories