import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './index.scss';

import { Navigation } from 'swiper/modules';

export default function Main() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src="https://preview.colorlib.com/theme/florist/img/hero/hero-1.jpg" alt="" />
        <div className="text">
            <p>FRESH FLOWER & GIFT SHOP</p>
            <h2>Making beautiful flowers a part of your life</h2>
            <button>SHOP NOW</button></div>
            </SwiperSlide>
        <SwiperSlide><img src="https://preview.colorlib.com/theme/florist/img/hero/hero-2.jpg" alt="" />
        <div className="text">
            <p>FRESH FLOWER & GIFT SHOP</p>
            <h2>Making beautiful flowers a part of your life</h2>
            <button>SHOP NOW</button></div>
            </SwiperSlide>
      </Swiper>
    </>
  );
}
