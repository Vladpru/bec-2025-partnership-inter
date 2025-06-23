import Image from "next/image"

const WhyBec = () => {

  const majors = [
    'Інженерія програмного забезпечення',
    'Кібербезпека',
    'Системна інженерія',
    'Архітектура і містобудування',
    'Обчислювальна техніка',
    'Телекомунікації та радіотехніка',
    'Електроніка',
    'Промислове та цивільне будівництво',
    'Робототехніка',
    'Електроніка',
    'Інші'
  ]

  return (
    <section className="mt-30">
      <div className="container">
        <h1 className="font-black text-center text-4xl uppercase text-bec">ЧОМУ ВАМ ВАРТО ПІДТРИМАТИ BEC</h1>
        <div className="flex justify-center mt-15 gap-20 relative">
          <div className="flex flex-col gap-6">
            <div className="bg-[#645E58] p-3 2xl:max-w-[450px] h-[180px] flex flex-col justify-center">
              <h2 className="font-bold leading-snug">ЗАЛУЧІТЬ МОЛОДЬ — ЗНАЙДІТЬ НОВЕ РІШЕННЯ</h2>
              <hr className="border-t-2 border-becwhite my-3"/>
              <p className="text-base leading-relaxed">Залучіть учасників BEC’y до вирішення Вашої інженерної задачі та отримайте свіжий погляд та варіанти її розв’язання. </p>
            </div>
            <div className="bg-[#645E58] p-3 2xl:max-w-[450px] h-[180px] flex flex-col justify-center">
              <h2 className="font-bold leading-snug">ПІДВИЩІТЬ ВПІЗНАВАНІСТЬ ВАШОЇ КОМПАНІЇ</h2>
              <hr className="border-t-2 border-becwhite my-3"/>
              <p className="text-base leading-relaxed">Таким чином Ви посилите імідж роботодавця, який підтримує нове покоління інженерів. </p>
            </div>
            <div className="bg-[#645E58] p-3 2xl:max-w-[450px] h-[180px] flex flex-col justify-center">
              <h2 className="font-bold leading-snug">ЗНАЙДІТЬ МОЛОДИХ ТАЛАНТІВ</h2>
              <hr className="border-t-2 border-becwhite my-3"/>
              <p className="text-base leading-relaxed">Наша цільова аудиторія – перспективні студенти-інженери. Серед них Ви можете знайти потенційних працівників для Вашої компанії.</p>
            </div>
          </div>
          <Image
            src="/images/whybec/divider-vertical.svg"
            width={100}
            height={50}
            className=""
            alt="divider"
          />
          <div className="flex flex-col gap-6">
            <div className="bg-[#645E58] p-3 2xl:max-w-[450px] h-[180px] flex flex-col justify-center">
              <h2 className="font-bold leading-snug">ОТРИМАЙТЕ ЕФЕКТИВНИЙ ПІАР</h2>
              <hr className="border-t-2 border-becwhite my-3"/>
              <p className="text-base leading-relaxed">Ваша впізнаваність зросте без прямих витрат на маркетинг.</p>
            </div>
            <div className="bg-[#645E58] p-3 2xl:max-w-[450px] h-[180px] flex flex-col justify-center">
              <h2 className="font-bold leading-snug">ПІДТРИМАЙТЕ ЗБРОЙНІ СИЛИ УКРАЇНИ</h2>
              <hr className="border-t-2 border-becwhite my-3"/>
              <p className="text-base leading-relaxed">Частина коштів йде на допомогу нашим військовим.</p>
            </div>
            <div className="bg-[#645E58] p-3 2xl:max-w-[450px] h-[180px] flex flex-col justify-center">
              <h2 className="font-bold leading-snug">ЗРОБІТЬ ВАГОМИЙ ВНЕСОК В МОЖЛИВІСТЬ РЕАЛІЗАЦІЇ СТАРТАПУ</h2>
              <hr className="border-t-2 border-becwhite my-3"/>
              <p className="text-base leading-relaxed">Підтримавши учасників на етапі розробки, ви можете стати першою компанією, що повірила в ідею і побачила частинки її реалізації.</p>
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
        <h1 className="font-black text-center text-4xl uppercase text-bec">Портрет учасника</h1>
        <div className="flex justify-center items-center gap-40 mx-auto whybec-bg py-45 px-35 max-h-[1000px]">
          <div className="flex flex-col items-start gap-10">
            <Image 
              src="/images/whybec/portrait.png"
              alt="participant"
              width={400}
              height={70}
              className=""
            />
            <h1 className="uppercase font-black text-2xl">Студенти ВікОМ 17-21 рік</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="uppercase font-black text-2xl">Спеціальності учасників:</h1>
            <ul className="space-y-2 md:text-base">
            {majors.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-md">
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