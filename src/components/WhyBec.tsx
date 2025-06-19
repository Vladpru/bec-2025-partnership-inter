import Image from "next/image"

const WhyBec = () => {
  return (
    <section className="mt-30">
      <div className="container">
        <h1 className="font-black text-center text-4xl uppercase text-bec">ЧОМУ ВАМ ВАРТО ПІДТРИМАТИ BEC</h1>
        <div className="flex justify-center mt-15 gap-20">
          <div className="flex flex-col gap-6">
            <div className="bg-[#5A5A58] p-3 2xl:max-w-[420px]">
              <h2 className="font-bold leading-snug">ЗАЛУЧІТЬ МОЛОДЬ — ЗНАЙДІТЬ НОВЕ РІШЕННЯ</h2>
              <hr className="border-t-2 border-becwhite my-3"/>
              <p className="text-sm leading-relaxed">Залучіть учасників BEC’y до вирішення Вашої інженерної задачі та отримайте свіжий погляд та варіанти її розв’язання. </p>
            </div>
            <div className="bg-[#5A5A58] p-3 2xl:max-w-[420px]">
              <h2 className="font-bold leading-snug">ЗАЛУЧІТЬ МОЛОДЬ — ЗНАЙДІТЬ НОВЕ РІШЕННЯ</h2>
              <hr className="border-t-2 border-becwhite my-3"/>
              <p className="text-sm leading-relaxed">Залучіть учасників BEC’y до вирішення Вашої інженерної задачі та отримайте свіжий погляд та варіанти її розв’язання. </p>
            </div>
            <div className="bg-[#5A5A58] p-3 2xl:max-w-[420px]">
              <h2 className="font-bold leading-snug">ЗАЛУЧІТЬ МОЛОДЬ — ЗНАЙДІТЬ НОВЕ РІШЕННЯ</h2>
              <hr className="border-t-2 border-becwhite my-3"/>
              <p className="text-sm leading-relaxed">Залучіть учасників BEC’y до вирішення Вашої інженерної задачі та отримайте свіжий погляд та варіанти її розв’язання. </p>
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
            <div className="bg-[#5A5A58] p-3 2xl:max-w-[420px]">
              <h2 className="font-bold leading-snug">ЗАЛУЧІТЬ МОЛОДЬ — ЗНАЙДІТЬ НОВЕ РІШЕННЯ</h2>
              <hr className="border-t-2 border-becwhite my-3"/>
              <p className="text-sm leading-relaxed">Залучіть учасників BEC’y до вирішення Вашої інженерної задачі та отримайте свіжий погляд та варіанти її розв’язання. </p>
            </div>
            <div className="bg-[#5A5A58] p-3 2xl:max-w-[420px]">
              <h2 className="font-bold leading-snug">ЗАЛУЧІТЬ МОЛОДЬ — ЗНАЙДІТЬ НОВЕ РІШЕННЯ</h2>
              <hr className="border-t-2 border-becwhite my-3"/>
              <p className="text-sm leading-relaxed">Залучіть учасників BEC’y до вирішення Вашої інженерної задачі та отримайте свіжий погляд та варіанти її розв’язання. </p>
            </div>
            <div className="bg-[#5A5A58] p-3 2xl:max-w-[420px]">
              <h2 className="font-bold leading-snug">ЗАЛУЧІТЬ МОЛОДЬ — ЗНАЙДІТЬ НОВЕ РІШЕННЯ</h2>
              <hr className="border-t-2 border-becwhite my-3"/>
              <p className="text-sm leading-relaxed">Залучіть учасників BEC’y до вирішення Вашої інженерної задачі та отримайте свіжий погляд та варіанти її розв’язання. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-30">
        <div className="relative">
          <Image
            src="/images/whybec/left-el.svg" 
            alt="Decorative line 1"
            width={200}
            height={70}
            className="absolute top-0 right-0"
          />
        </div>
        <div className="relative">
          <Image
            src="/images/whybec/left-el.svg" 
            alt="Decorative line 1"
            width={200}
            height={70}
            className="absolute top-0 right-0"
          />
        </div>
        <div className="relative">
          <Image
            src="/images/whybec/left-el.svg" 
            alt="Decorative line 1"
            width={200}
            height={70}
            className="absolute top-0 right-0"
          />
        </div>
        <h1 className="font-black text-center text-4xl uppercase text-bec">Портрет учасника</h1>
        <div className="xl:max-w-120 whybec-bg bg-center bg-contain bg-no-repeat group">

        </div>
      </div>
    </section>
  )
}

export default WhyBec