import React, { useState, useEffect } from 'react';
import './OurHospital.css'
// import HospitalVideo from '../HospitalVideo/HospitalVideo';
import { useCollection } from '../../../Hooks/useCollection';
import HospitalDepartments from '../HospitalDepartments/HospitalDepartments';
// import HospitalMap from '../HospitalMap/HospitalMap';
// import Footer from '../../../Shared/Footer/Footer';
import HospitalMapGostDiv from '../HospitalMap/HospitalMapGostDiv/HospitalMapGostDiv';
import SpinnerCorner from '../../Spinner/spinnerCorner';
import ScrollToTop from './../../ScrollToTop/ScrollToTop';

const OurHospitals = () => {

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
                var screenh = window.innerHeight;
                window.scrollBy(0, screenh + 800);
            }
            if (document.length !== 0) {
                setData(document);
            };
        }, [document, allPagesVisibility]
    );

    return (
        <>
            <ScrollToTop></ScrollToTop>
            <div className="ourHospitals">
                {
                    mydata.length !== 0 ? <div className='hospital_txt'>
                        Nearby Hospitals
                    </div> : <></>
                }

                {

                    !selectedHospital?.id ?
                        <>
                            <div className="container pt-5">
                                <div className="col-12 pt-5" >
                                    <div className='pt-5'>
                                        <h3>Our Hospitals</h3>
                                        <h4>Look out for the hospitals you sought for - spin and pin.</h4>

                                    </div>
                                </div>

                            </div>



                        </> : <div className='map_container'>

                            <div className="mapContainer iFrameContainer mapContainerLock">
                                <div style={{ width: '100vw', height: '100vh' }}>
                                    <iframe src={selectedHospital?.map_hospital} width="100%" height="100%" title='Hotel and Hospital Map'></iframe>
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

                            /> : <></>
                    }

                </div>

            </div>


            {
                allPagesVisibility ?
                    <div ref={myRef}>
                        <HospitalMapGostDiv></HospitalMapGostDiv>
                        {/* <HospitalMap hospitalData={selectedHospital}></HospitalMap> */}
                        {/* <HospitalVideo hospitalData={selectedHospital} /> */}
                        <HospitalDepartments hospitalData={selectedHospital} />
                    </div>
                    : <> </>

            }

        </>
    );
};

export default OurHospitals;
