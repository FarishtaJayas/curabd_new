import React from 'react';
import bannerImage2 from './../../../assets/Images/homeBanner.png'
import bannerImage from './../../../assets/Images/Airport-pana.png'



import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { EffectFlip, Pagination, Navigation, Autoplay } from "swiper";

import './Banner.css'

const BannerSlider = () => {
    return (

        <>
            <Swiper
                effect={"flip"}
                grabCursor={true}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                modules={[EffectFlip, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='img-fluid d-block' src={bannerImage2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='img-fluid d-block' src={bannerImage} alt="" />
                </SwiperSlide>





            </Swiper>
        </>


    );
};

export default BannerSlider;