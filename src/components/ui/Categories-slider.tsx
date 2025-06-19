import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const CategoriesSlider = () => {

  const photosDict = [
    {img: '/images/categories/ct_slide1.jpg', alt: 'photo1'},
    {img: '/images/categories/ct_slide2.jpg', alt: 'photo2'},
    {img: '/images/categories/ct_slide3.jpg', alt: 'photo3'},
    {img: '/images/categories/ct_slide4.jpg', alt: 'photo4'},
    {img: '/images/categories/ct_slide5.jpg', alt: 'photo5'},
    {img: '/images/categories/ct_slide6.jpg', alt: 'photo6'},
  ]

  return (
    <div className="mt-60">
      <div className="relative">
        <Image
          src="/images/categories/slider-top.svg" 
          width={1200}
          height={65}
          className="absolute left-0 bottom-10 w-full h-auto object-cover"
          alt="line"
        />
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="swiper_skl"
        slidesPerView={3}
      >
        {photosDict.map((photo) => (
          <SwiperSlide>
            <div className="slide_card">
              <Image
                src={photo.img}
                width={500}
                height={400}
                className="slide_card_img "
                alt={photo.alt}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative">
        <Image
          src="/images/categories/slider-bottom.svg" 
          width={1600}
          height={65}
          className="absolute left-0 top-10 w-full h-auto"
          alt="line"
        />
      </div>
    </div>
  )
}

export default CategoriesSlider