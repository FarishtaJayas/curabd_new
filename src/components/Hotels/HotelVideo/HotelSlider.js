import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./HotelImageSlider.css";

// import required modules

import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";

export default function HotelSlider({ HotelData }) {

    return (

        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}

                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    HotelData?.images ?

                        <>

                            {HotelData?.images?.map((image) => (

                                <SwiperSlide  >
                                    <img className='HotelSliderImage' src={image} alt="" />
                                </SwiperSlide>

                            ))}
                        </>


                        :

                        <>

                            <SwiperSlide>
                                <img className='HotelSliderImage' src="https://cache.marriott.com/content/dam/marriott-renditions/BKKAL/bkkal-entrance-3589-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='HotelSliderImage' src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/70/2016/11/18081413/home-novotel-bangkok-ploenchit-sukhumvit-1.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='HotelSliderImage' src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/70/2016/11/22074111/home-novotel-bangkok-ploenchit-sukhumvit-41.jpeg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='HotelSliderImage' src="https://www.frasershospitality.com/content/dam/frasers-hospitality/english/properties/thailand/modena-by-fraser-bangkok/gallery-images/facilities/Modena%20by%20Fraser%20Bangkok_Herb%20Garden.jpg/_jcr_content/renditions/cq5dam.thumbnail.319.319.png" alt="" />
                            </SwiperSlide>
                        </>

                }


            </Swiper>
        </>
    );
}
