import Image from "next/image"

const WhyBec = () => {

  const majors = [
    'Інженерія програмного забезпечення',
    'Кібербезпека',
    'Системна інженерія',
    'Архітектура і містобудування',
    'Обчислювальна техніка',
    'Телекомунікації та радіотехніка',
    'Промислове та цивільне будівництво',
    'Робототехніка',
    'Електроніка',
    'Інші'
  ]

  return (
    <section className="mt-30">
      <div className="container">
        <h1 className="font-black text-center text-4xl uppercase text-bec 3xl:text-[42px] 4xl:text-5xl">ЧОМУ ВАМ ВАРТО ПІДТРИМАТИ BEC</h1>
        <div className="flex justify-center mt-15 gap-20 relative">
          <div className="flex flex-col gap-6">
            <div className="bg-[#645E58] p-3 4xl:p-5 max-w-[450px] h-[180px] flex flex-col justify-center 4xl:max-w-[530px] 4xl:h-[260px]">
              <h2 className="font-bold leading-snug 4xl:text-3xl">ЗАЛУЧІТЬ МОЛОДЬ — ЗНАЙДІТЬ НОВЕ РІШЕННЯ</h2>
              <hr className="border-t-2 border-becwhite my-3 4xl:border-t-3"/>
              <p className="text-base leading-relaxed 4xl:text-xl">Залучіть учасників BEC’y до вирішення Вашої інженерної задачі та отримайте свіжий погляд та варіанти її розв’язання. </p>
            </div>
            <div className="bg-[#645E58] p-3 4xl:p-5 max-w-[450px] h-[180px] flex flex-col justify-center 4xl:max-w-[530px] 4xl:h-[260px]">
              <h2 className="font-bold leading-snug 4xl:text-3xl">ПІДВИЩІТЬ ВПІЗНАВАНІСТЬ ВАШОЇ КОМПАНІЇ</h2>
              <hr className="border-t-2 border-becwhite my-3 4xl:border-t-3"/>
              <p className="text-base leading-relaxed 4xl:text-xl">Таким чином Ви посилите імідж роботодавця, який підтримує нове покоління інженерів. </p>
            </div>
            <div className="bg-[#645E58] p-3 4xl:p-5 max-w-[450px] h-[180px] flex flex-col justify-center 4xl:max-w-[530px] 4xl:h-[260px]">
              <h2 className="font-bold leading-snug 4xl:text-3xl">ЗНАЙДІТЬ МОЛОДИХ ТАЛАНТІВ</h2>
              <hr className="border-t-2 border-becwhite my-3 4xl:border-t-3"/>
              <p className="text-base leading-relaxed 4xl:text-xl">Наша цільова аудиторія – перспективні студенти-інженери. Серед них Ви можете знайти потенційних працівників для Вашої компанії.</p>
            </div>
          </div>
          <Image
            src="/images/whybec/divider-vertical.svg"
            width={100}
            height={50}
            className="4xl:w-[120px]"
            alt="divider"
          />
          <div className="flex flex-col gap-6">
            <div className="bg-[#645E58] p-3 4xl:p-5 max-w-[450px] h-[180px] flex flex-col justify-center 4xl:max-w-[530px] 4xl:h-[260px]">
              <h2 className="font-bold leading-snug 4xl:text-3xl">ОТРИМАЙТЕ ЕФЕКТИВНИЙ ПІАР</h2>
              <hr className="border-t-2 border-becwhite my-3 4xl:border-t-3"/>
              <p className="text-base leading-relaxed 4xl:text-xl">Ваша впізнаваність зросте без прямих витрат на маркетинг.</p>
            </div>
            <div className="bg-[#645E58] p-3 4xl:p-5 max-w-[450px] h-[180px] flex flex-col justify-center 4xl:max-w-[530px] 4xl:h-[260px]">
              <h2 className="font-bold leading-snug 4xl:text-3xl">ПІДТРИМАЙТЕ ЗБРОЙНІ СИЛИ УКРАЇНИ</h2>
              <hr className="border-t-2 border-becwhite my-3 4xl:border-t-3"/>
              <p className="text-base leading-relaxed 4xl:text-xl">Частина коштів йде на допомогу нашим військовим.</p>
            </div>
            <div className="bg-[#645E58] p-3 4xl:p-5 max-w-[450px] h-[180px] flex flex-col justify-center 4xl:max-w-[530px] 4xl:h-[260px]">
              <h2 className="font-bold leading-snug 4xl:text-3xl">ЗРОБІТЬ ВАГОМИЙ ВНЕСОК В МОЖЛИВІСТЬ РЕАЛІЗАЦІЇ СТАРТАПУ</h2>
              <hr className="border-t-2 border-becwhite my-3 4xl:border-t-3"/>
              <p className="text-base leading-relaxed 4xl:text-xl">Підтримавши учасників на етапі розробки, ви можете стати першою компанією, що повірила в ідею і побачила частинки її реалізації.</p>
            </div>
          </div>
          <Image
            src="/images/elipses/why_left.png"
            width={450}
            height={50}
            alt="divider"
            className="absolute top-0 -left-20"
          />
          <Image
            src="/images/elipses/why_right.png"
            width={500}
            height={50}
            alt="divider"
            className="absolute -bottom-22 -right-20"
          />
        </div>
      </div>
      <div className="container pt-30">
        <div className="relative">
          <Image
            src="/images/whybec/right-el.svg" 
            alt="Decorative line 1"
            width={160}
            height={70}
            className="absolute top-40 -right-15"
          />
        </div>
        <div className="relative">
          <Image
            src="/images/whybec/left.svg" 
            alt="Decorative line 1"
            width={210}
            height={70}
            className="absolute top-24 -left-15"
          />
        </div>
        <h1 className="font-black text-center text-4xl uppercase text-bec 3xl:text-[42px] 4xl:text-5xl">Портрет учасника</h1>
        <div className="flex justify-center items-center gap-40 mx-auto whybec-bg 4xl:bg-[length:85%] py-45 px-35 max-h-[1000px]">
          <div className="flex flex-col items-start gap-10">
            <Image 
              src="/images/whybec/portrait.png"
              alt="participant"
              width={400}
              height={70}
              className="4xl:w-[440px]"
            />
            <h1 className="uppercase font-black text-2xl 4xl:text-3xl">Студенти Віком 17-21 рік</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="uppercase font-black text-2xl 4xl:text-3xl 4xl:mb-4">Спеціальності учасників:</h1>
            <ul className="space-y-2 md:text-base">
            {majors.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-md 4xl:text-xl">
                <span>→</span> <span>{item}</span>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyBec