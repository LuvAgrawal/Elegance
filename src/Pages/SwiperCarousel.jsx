import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperCarousel = () => {
  const images = ["../src/assets/event-11.jpg"];
  // console.log(images)
  return (
    <>
    <img src={images[0]} alt="Couple" />
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images?.map((img, index) => {
          <SwiperSlide key={index}><img src={img} alt="Couple Photo" /></SwiperSlide>;
        })}
        
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </>
  );
};

export default SwiperCarousel;
