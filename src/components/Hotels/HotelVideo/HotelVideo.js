import React from 'react';
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './HotelImageSlider.css'
import HotelSlider from './HotelSlider';
const HotelVideo = ({ HotelData }) => {
    return (
        // <div className='video_section'>
        //     <div className=' row mx-auto'>
        //         <div className='video_container text-center'>
        //             <h3>Media Section</h3>
        //             <p5>Explore the abodes of a relaxing and pleasant experience.
        //             </p5>
        //             <div className='mt-5' >
        //                 <div className=''>
        //                     <div className='video_container'>
        //                         <div className="overlay"></div>
        //                         {
        //                             HotelData?.video ?

        //                                 <video src={HotelData?.video} autoplay='true' loop='true' muted='true' title='Hotel and Hospital Map'></video>
        //                                 :
        //                                 <video src={StaticVideo} autoplay='true' loop='true' muted='true' title='Hotel and Hospital Map'></video>
        //                         }

        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>


        // </div >


        <div className='video_section'>
            {/* <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='HotelSliderImage' src="https://www.frasershospitality.com/content/dam/frasers-hospitality/english/properties/thailand/modena-by-fraser-bangkok/gallery-images/facilities/Modena%20by%20Fraser%20Bangkok_Herb%20Garden.jpg/_jcr_content/renditions/cq5dam.thumbnail.319.319.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='HotelSliderImage' src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/70/2016/11/22074111/home-novotel-bangkok-ploenchit-sukhumvit-41.jpeg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='HotelSliderImage' src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/70/2016/11/18081413/home-novotel-bangkok-ploenchit-sukhumvit-1.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='HotelSliderImage' src="https://cache.marriott.com/content/dam/marriott-renditions/BKKAL/bkkal-entrance-3589-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" />
                    </SwiperSlide>

                </Swiper>
            </> */}

            <>
                <HotelSlider></HotelSlider>
            </>
        </div>

        // <div className='video_section'>
        //     <div className=' row mx-auto'>
        //         <div className='video_container text-center'>
        //             {/* <h3>Media Section</h3>
        //             <p5>Get to know more about your desirability in healthcare.</p5> */}
        //             <div className='' >
        //                 <div className=''>
        //                     <div className='video_container'>
        //                         <div className="overlay"></div>
        //                         {
        //                             HotelData?.video ?

        //                                 <video src={HotelData?.video} autoplay='true' loop='true' muted='true' title='Hotel and Hospital Map'></video>
        //                                 :
        //                                 <video src={StaticVideo} autoplay='true' loop='true' muted='true' title='Hotel and Hospital Map'></video>
        //                         }
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>






    );
};

export default HotelVideo;