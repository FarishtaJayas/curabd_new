import React, { useState, useEffect } from 'react';
import './OurHotels.css'
import { useCollection } from '../../../Hooks/useCollection';
import SpinnerCorner from '../../Spinner/spinnerCorner';
// import ScrollToTop from './../../ScrollToTop/ScrollToTop';
import NearestHotels from './../NearestHotels/NearestHotels';

const OurHotels = () => {

    const { document } = useCollection('Hospitals');

    const handleSelectValue = (selectedHospital) => {
        setSelectedHospital(selectedHospital);
    }

    const HandleHoverButtonClick = () => {
        setAllPagesVisibility(!allPagesVisibility);
    }


    let [allPagesVisibility, setAllPagesVisibility] = useState(false);
    let [selectedHospital, setSelectedHospital] = useState('');
    let [mydata, setData] = useState(document);

    const myRef = React.createRef();

    useEffect(
        () => {
            if (allPagesVisibility) {
                myRef.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
            }
            if (document.length !== 0) {
                setData(document);
            };
        }, [allPagesVisibility, document]
    );

    return (
        <>
            {/* <ScrollToTop></ScrollToTop> */}
            <div className="OurHotels">
                {
                    mydata.length !== 0 ? <div className='hotel_txt'>
                        Hotels Nearby Hospital
                    </div> : <></>
                }
                {

                    !selectedHospital?.id ?
                        <>
                            <div className="container pt-5">
                                <div className="col-12 pt-5" >
                                    <div className='pt-5'>
                                        <h3>Our Hotels</h3>
                                        <h4>Find out the most comfortable and cost-effective hotel options.</h4>
                                    </div>
                                </div>

                            </div>

                        </> : <div className='map_container'>

                            <div className="mapContainer iFrameContainer mapContainerLock">
                                <div style={{ width: '100vw', height: '100vh' }}>
                                    <iframe src={selectedHospital?.map} width="100%" height="100%" title='Hotel and Hospital Map'></iframe>
                                </div>
                            </div>

                            <div className='bottom-map-img'>
                            </div>

                        </div>
                }


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

            <div ref={myRef}>
                {
                    allPagesVisibility ? <NearestHotels data={selectedHospital} /> : <></>
                }
            </div>
        </>
    );
};

export default OurHotels;
