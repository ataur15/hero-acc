import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import image1 from "../../../assets/images/slider/1.webp";
import image2 from "../../../assets/images/slider/2.webp";
import image3 from "../../../assets/images/slider/3.webp";
import image4 from "../../../assets/images/slider/4.webp";

const Dslider = () => {
  return (
    <div className="py-20">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={2}
        autoplay
      >
        <SwiperSlide>
          <img src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Dslider;
