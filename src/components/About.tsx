'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const About = () => {

  const photosDict = [
    { img: "/images/about/ab_slide1.png", alt: "slide1" },
  ]

  return (
    <section className="h-72 mt-50 mb-50">
      <div className="container flex flex-col">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-10">
            <h1 className="uppercase text-bec text-4xl font-bold">Про наш івент</h1>
            <p>
              <span className='text-bec font-bold'>BEC</span> - змагання, які мають на меті дати можливість молодим інженерам продемонструвати свої знання,
              командну роботу та практичні навички для вирішення прикладних задач, які є реальними викликами сучасності.
              Учасники зможуть проявити себе в двох категоріях Team Design (TD) та Innovative Design (ID).
            </p>
            <p>
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
                delay: 1500,
                disableOnInteraction: false,
              }}
              className="swiper_skl w-xl"
            >
              {photosDict.map((photo) => (
                <SwiperSlide key={photo.img}>
                  <div className="slide_card">
                    <img className="slide_card_img" src={photo.img} alt={photo.alt} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About