// import React, { useEffect, useState } from 'react';
import './OurHotels.css'
// import { useCollection } from '../../../Hooks/useCollection';
// import HotelDepartments from '../HotelDepartment/HotelDepartments';
// import HotelMap from '../HotelMap/HotelMap';
// import Footer from '../../../Shared/Footer/Footer';
// import HotelMapGostDiv from '../HotelMap/HotelMapGostDiv/HotelMapGostDiv';
// import HotelSlider from '../HotelVideo/HotelSlider';
// import SpinnerCorner from '../../Spinner/spinnerCorner';
import ScrollToTop from './../../ScrollToTop/ScrollToTop';
import Typewriter from 'typewriter-effect';

const OurHotels = () => {
    // let [selectedHotel, setSelectedHotel] = useState('')

    // const { document } = useCollection('Hotels');
    // let [mydata, setData] = useState(document);

    // // Code Here Rafi
    // let [visibility, setVisibility] = useState(false);
    // const handleSelectValue = (selectedHotel) => {
    //     setVisibility(!visibility);
    //     setSelectedHotel(selectedHotel)
    // }


    // let [allPagesVisibility, setAllPagesVisibility] = useState(false);

    // const HandleHoverButtonClick = () => {
    //     setAllPagesVisibility(!allPagesVisibility);
    // }

    // const myRef = React.createRef();

    // useEffect(
    //     () => {
    //         if (allPagesVisibility) myRef.current.scrollIntoView({ behavior: 'smooth' });
    //         if (document.length !== 0) {
    //             setData(document);
    //         };
    //     }, [allPagesVisibility, document]
    // );

    return (
        <>
            <ScrollToTop></ScrollToTop>



            <div className='ourHotels'>
                <div className="container pt-5 align-middle">
                    <div className="col-12 mt-5" >
                        <div className='text-center'>
                            <h3 className='mb-5 Myheading'>
                                Hotels
                            </h3>
                            {                            
                                <h3>
                                    <Typewriter
                                        options={{
                                            strings: ['Coming Soon ...'],
                                            autoStart: true,
                                            loop: true,
                                            delay: 110
                                        }}
                                    />
                                </h3>
                            }
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="ourHotels">
                {

                    !selectedHotel?.id ?
                        <>
                            <div className="container pt-5">
                                <div className="col-12 mt-5" >
                                    <div>
                                        <h3>Our Hotels</h3>
                                        <h4>Find out the most comfortable and cost-effective hotel options.
                                        </h4>


                                    </div>
                                </div>
                            </div>

                        </>

                        : <div className='map_container'>
                            <div className="container pt-5">
                                <div className="col-12 mt-5" >
                                    <div >
                                        <h3 className='none'>Our Hotels</h3>
                                        <h4 className='none'>Find out the most comfortable and cost-effective hotel options.
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="mapContainer iFrameContainer mapContainerLock">
                                <div style={{ width: '100vw', height: '100%' }}>
                                    <iframe src={selectedHotel?.map} width="100%" height="100%" title='Hotel and Hotel Map'></iframe>



                                </div>
                            </div>
                        </div>
                }


                <div className="spin-wheel-corner">
                    <div className="spin-wheel-corner">

                        {
                            mydata.length !== 0 ?
                                <SpinnerCorner info={mydata}
                                    handleClick={
                                        () => {
                                            HandleHoverButtonClick();
                                        }
                                    }

                                    handleHover={
                                        (data) => {
                                            handleSelectValue(data);
                                        }
                                    }

                                /> :
                                <></>
                        }

                    </div>
                </div>

            </div> */}

            {/* {
                allPagesVisibility ?
                    <>
                        <HotelMapGostDiv myRef={myRef}></HotelMapGostDiv>
                        <HotelMap HotelData={selectedHotel}></HotelMap>
                        <HotelSlider HotelData={selectedHotel}></HotelSlider>
                        <HotelDepartments HotelData={selectedHotel} />
                    </>
                    : <>
                        <Footer />
                    </>
            } */}

        </>
    );
};

export default OurHotels;