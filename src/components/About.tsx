'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import { forwardRef } from 'react';

const About = forwardRef<HTMLDivElement, {}>((props, ref) => {

  const photosDict = [
    { img: "/images/about/ab_slide1.png", alt: "slide1" },
    { img: "/images/about/ab_slide2.png", alt: "slide2" },
    { img: "/images/about/ab_slide3.png", alt: "slide3" },
    { img: "/images/about/ab_slide4.png", alt: "slide4" },
  ]

  return (
    <section className={`h-72 mt-70 mb-35 scroll-m-35 relative`} ref={ref}>
      <div className="relative">
        <div className="container flex flex-col md:flex-row gap-30">
          <div className="flex flex-col gap-5 text-xl">
            <h1 className="uppercase text-bec text-5xl font-bold">Про наш івент</h1>
            <p>
              <span className='text-bec font-extrabold'>BEC</span> – змагання, які мають на меті дати можливість молодим інженерам продемонструвати свої знання,
              командну роботу та практичні навички для вирішення прикладних задач, які є реальними викликами сучасності.
              Учасники зможуть проявити себе в двох категоріях Team Design (TD) та Innovative Design (ID).
            </p>
            <p className='mt-4'>
              <span className='text-bec font-bold'>Наша ціль:</span> Сформувати спільноту компетентних і вмотивованих студентів-інженерів,
              готових вирішувати нестандартні задачі.
            </p>
          </div>
          <div className="">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              className="swiper_skl max-w-[560px]"
            >
              {photosDict.map((photo, index) => (
                <SwiperSlide key={index} className='w-[560px]'>
                  <div className="slide_card w-[560px]">
                    <Image className="slide_card_img" width={560} height={300} src={photo.img} alt={photo.alt} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <Image 
          width={530}
          height={530}
          alt='2'
          src="/images/elipses/about_right.png"
          className='-right-10 -bottom-50 select-none z-0 absolute'
        />
        <Image 
          width={530}
          height={530}
          alt='2'
          src="/images/elipses/about_left.png"
          className='-left-10 -top-20 select-none z-0 absolute'
        />
      </div>
    </section>
  )
})

export default About