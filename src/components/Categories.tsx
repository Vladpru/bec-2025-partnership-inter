import Image from "next/image" 

const Categories = () => {
  return (
    <section className="mb-50">
      <div className="container">
        <div className="flex justify-between pr-40 pl-40">
          <Image
            src="/images/categories/left-arrow.svg" 
            alt="Decorative line 3"
            width={300}
            height={60}
            className=""
          />
          <div className="flex flex-col text-center justify-center">
            <h3 className="text-bec">Тема:</h3>
            <h1 className="font-bold">Повоєнне відновлення</h1>
          </div>
          <Image
            src="/images/categories/right-arrow.svg" 
            alt="Decorative line 3"
            width={300}
            height={60}
            className=""
          />
        </div>
        <div className="">
          <h1 className="uppercase text-center text-4xl font-bold text-bec mt-15 mb-15">категорії змагань</h1>
          <div className="flex gap-10 items-start p-6">
            <div className="flex flex-col space-y-4 text-xl">
              <h1 className="text-3xl font-extrabold">Team design</h1>
              <p>
                Практична інженерна категорія, у якій команди студентів вирішують реальні 
                прикладні задачі у сфері embedded-систем, IoT, електроніки та механіки, 
                створюючи робочі прототипи пристроїв.
              </p>
              <p>
                Приклад: Розробити функціональну модель мінного тральщика для пошуку 
                та розмінування морських мін, який може керуватися в ручному та автоматичному режимі
              </p>
            </div>
            <Image
              src="/images/categories/text-divider.svg" 
              alt="Decorative line 3"
              width={300}
              height={60}
              className=""
            />
            <div className="flex flex-col space-y-4">
              <h1 className="text-3xl font-extrabold">Innovative design</h1>
              <p>
                Концептуальна категорія, що орієнтована на креативні інженерні ідеї. Команди 
                пропонують абсолютно нові проєктні рішення для актуальних проблем, які потребують 
                розв'язання. Таким чином учасники у своїх проєктах демонструють інноваційний підхід, 
                його переваги та реалістичність втілення, використовуючи креслення або 3D-моделі.
              </p>
              <p>
                Приклад: Розробити концепцію «розумного вулика» з датчиками температури, вологості та 
                шуму, що передає дані бджоляру в реальному часі на смартфон або інший пристрій.
              </p>
            </div>
          </div>
        </div>
        <div className="">

        </div>
      </div>
    </section>
  )
}

export default Categories