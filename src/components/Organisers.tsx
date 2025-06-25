  import { Audiowide } from 'next/font/google';
  import Image from 'next/image'

  const awide = Audiowide({
    weight: ['400'],
    subsets: ['latin'],
  });
 
  const Organisers = () => {
    return (
      <section className='mt-30 mb-7'>
        <div className="container mb-20 relative 4xl:mb-40">
          <h1 className="text-center text-4xl text-bec font-black mb-10 uppercase 3xl:text-[42px] 4xl:text-5xl">Про організаторів події</h1>
          <div className="flex justify-around">
            <div className="">
              <Image
                src="/images/statistics/best_logo.svg"
                alt="e"
                width={300}
                height={100}
                className="object-cover 3xl:w-[350px] 4xl:w-[400px]"
              />
            </div>
            <p className='max-w-[600px] text-lg 3xl:text-xl 3xl:mt-10 4xl:text-2xl 4xl:max-w-[700px]'>
              <span className='font-bold'>BEST Lviv (Board of European Students of Technology)</span> – осередок міжнародної неприбуткової
              громадської організації, який об’єднує студентів технічних спеціальностей. Нашою місією
              є розвиток студентів через обмін знаннями та співпраці компаній, університетів та 
              студентів Європи.
            </p>
          </div>
          <Image
            height={60}
            width={500}
            alt="Decorative line 3"
            src="/images/elipses/org_left.png" 
            className="absolute -top-80 -left-15 -z-1"
          />
          <Image
            height={60}
            width={500}
            alt="Decorative line 3"
            src="/images/elipses/org_right.png" 
            className="absolute -top-40 -right-15 -z-1"
          />
        </div>
        <div className="flex justify-between container pb-20">
          <Image
            src="/images/organisers/best_map.png"
            alt="e"
            width={600}
            height={100}
            className="object-cover ml-10 3xl:w-[650px] 4xl:w-[750px]"
          />
          <div className="flex flex-col gap-10 w-[500px] justify-center text-center mr-30">
            <div className="flex flex-col gap-5">
              <h1 className={`${awide.className} text-5xl text-bec`}>84</h1>
              <p className='text-5xl'>осередки</p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className={`${awide.className} text-5xl text-bec`}>30</h1>
              <p className='text-5xl'>країн</p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className={`${awide.className} text-5xl text-bec`}>36</h1>
              <p className='text-5xl'>років досвіду</p>
            </div>
          </div>
        </div>        
      </section>
    )
  }

  export default Organisers