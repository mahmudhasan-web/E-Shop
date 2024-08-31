import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const Banner = () => {
  const imageArray = [
    "https://i.ibb.co/x7Yh3t2/Banner4.jpg",
    "https://i.ibb.co/s99gjsj/Banner3.jpg",
    "https://i.ibb.co/RPwV6SS/Banner2.jpg",
    "https://i.ibb.co/MfpWZ28/Banner1.jpg",
  ];

  return (
    <section className="my-10">
      <Swiper
        effect={"coverflow"}
        spaceBetween={30}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={
            {
                delay : 2000
            }
        }
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="rounded-2xl p-3"
      >
        {imageArray.map((e, idx) =>
          <SwiperSlide className="w-fit rounded-2xl" key={idx}>
            <img className="w-[900px] rounded-2xl h-[500px] mx-auto" src={e} alt="" />
          </SwiperSlide>
        )}
      </Swiper>
    </section>
  );
};

export default Banner;
