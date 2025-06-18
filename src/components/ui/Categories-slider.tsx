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
    <div className="mt-50">
      <div className="relative">
        <Image
          src="/images/categories/slider-top.svg" 
          width={1600}
          height={65}
          className="absolute left-0 top-0 w-full h-auto"
          alt="line"
        />
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={5}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className="swiper_skl"
        slidesPerView={3}
      >
        {photosDict.map((photo) => (
          <SwiperSlide>
            <div className="slide_card">
              <img className="slide_card_img" src={photo.img} alt={photo.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative">
        <Image
          src="/images/categories/slider-bottom.svg" 
          width={1600}
          height={65}
          className="absolute left-0 top-24 w-full h-auto"
          alt="line"
        />
      </div>
    </div>
  )
}

export default CategoriesSlider