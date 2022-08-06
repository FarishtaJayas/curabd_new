import { Link } from 'react-router-dom';
import hotelIcon from './../../../assets/Images/LandingPage/med_wing.png';
import hospitalIcon from './../../../assets/Images/LandingPage/hospital_wing.png';
import './SelectHotelsOrHospital.css';

import hospitalBtn from './../../../assets/Images/LandingPage/btn-hospital.png';
import hotelBtn from './../../../assets/Images/LandingPage/btn-hotel.png';
import { useRef, useEffect } from 'react';


const SelectHotelsOrHospital = () => {

    const myRef = useRef('');
    const img_width = 792;
    const img_height = 612;

    const setBgSize = (ref) => {
        let scaleFactor = parseInt(window.innerWidth) / img_width;
        if( scaleFactor < 1) ref.style.height = window.innerHeight + 'px';
        else ref.style.height = (scaleFactor * img_height) + 'px';
    }

    window.addEventListener('resize', () => {
        setBgSize(myRef.current);
    });

    useEffect(
        () => {
            setBgSize(myRef.current);
            console.log(10);
        }
    );


    return (

        <div ref={myRef} className='_SelectHotelsOrHospital text-center'  >
            <div>
                {/* <div className='d-flex ma-auto justify-content-center'>
                    <div className='p-2' >
                        <h2>Choose between</h2>
                        <h4>The best hotels and the hospitals</h4>
                        <h6>
                            Cura is concerned with bringing the ultimate ease in your life - be it traveling or healing.

                        </h6>
                    </div>
                </div> */}



                <div class="mx-auto row row-cols-1 row-cols-md-4 g-5 mt-3 justify-content-center">

                    <div class="col d-flex justify-content-center" data-aos="fade-left">
                        <div class="card h-100 HospitalContainer">
                            <div class="card-body">
                                <p class="card-text text-white">Discover the best hotel to make your journey worthwhile. </p>
                            </div>

                            <img src={hospitalIcon} className="mb-5" alt="..." />

                            <div class="card-footer">
                                <Link to='/hospital'>
                                    <img src={hospitalBtn} alt="Hospital" className='selectionBtn' />
                                </Link>
                            </div>

                        </div>
                    </div>


                    <div class="col d-flex justify-content-center" data-aos="fade-right" >
                        <div class="card h-100 HotelContainer">

                            <div class="card-body">
                                <p class="card-text text-white">Discover the best hospital to treat your ailment</p>
                            </div>

                            <img src={hotelIcon} className="mb-5" alt="..." />

                            <div class="card-footer">
                                <Link to='/hotel'>
                                    <img src={hotelBtn} alt="Hospital" className='selectionBtn' />
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>



            </div>
        </div>
    );
};

export default SelectHotelsOrHospital;