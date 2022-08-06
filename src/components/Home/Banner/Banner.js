import React from 'react';
import Typewriter from 'typewriter-effect';
import BannerSlider from './BannerSlider';
import "./Banner.css";

const Banner = () => {
    return (
        <div class="banner">
            <div class="inner-banner container mx-auto">
                <div className="row mx-auto w-100 h-100 align-items-center">
                    <div className="col-12 col-md-6  mt-5">
                        <div >
                            <h3>Choose Your</h3>
                            {
                                <h3>
                                    <Typewriter
                                        options={{
                                            strings: ['Hotel.', 'Hospital.'],
                                            autoStart: true,
                                            loop: true,
                                            delay: 100
                                        }}
                                    />
                                </h3>
                            }
                            <h4>Discover your desired hotels and hospitals.</h4>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 d-flex justify-content-center p-3">

                        <BannerSlider></BannerSlider>




                    </div>
                </div>
            </div>


            <div>
                <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g class="parallax">
                        <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                        <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        <use href="#gentle-wave" x="48" y="7" fill="#fff" />
                    </g>
                </svg>
            </div>
        </div>

    );
};

export default Banner;