import { useRef, useState } from "react";
import Imagem01 from "../../assets/imagesServices/18.jpg";
import Imagem02 from "../../assets/imagesServices/19.jpg";
import Imagem03 from "../../assets/imagesServices/20.jpg";
import Imagem04 from "../../assets/imagesServices/21.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Services = () => {

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Imagem01} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Imagem02} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Imagem03} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Imagem04} />
        </SwiperSlide>
      </Swiper>
    </>
  );

};
