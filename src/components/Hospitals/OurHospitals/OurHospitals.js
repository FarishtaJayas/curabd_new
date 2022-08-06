import React, { useState, useEffect } from 'react';
import './OurHospital.css'
// import HospitalVideo from '../HospitalVideo/HospitalVideo';
import { useCollection } from '../../../Hooks/useCollection';
import HospitalDepartments from '../HospitalDepartments/HospitalDepartments';
// import HospitalMap from '../HospitalMap/HospitalMap';
import Footer from '../../../Shared/Footer/Footer';
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
            if (allPagesVisibility) myRef.current.scrollIntoView({ behavior: 'smooth' });
            if (document.length !== 0) {
                setData(document);
            };
        }, [allPagesVisibility, document]
    );

    return (
        <>
            <ScrollToTop></ScrollToTop>
            <div className="ourHospitals">
                {

                    !selectedHospital?.id ?
                        <>
                            <div className="container pt-5">
                                <div className="col-12 mt-5" >
                                    <div >
                                        <h3>Our Hospitals</h3>
                                        <h4>Look out for the hospitals you sought for - spin and pin.</h4>

                                    </div>
                                </div>

                            </div>

                        </> : <div className='map_container'>

                            <div className="container pt-5">
                                <div className="col-12 mt-5" >
                                    <div >
                                        <h3 className='none'>Our Hospitals</h3>
                                        <h4 className='none'>Look out for the hospitals you sought for - spin and pin.</h4>

                                    </div>
                                </div>
                            </div>
                            <div className="mapContainer iFrameContainer mapContainerLock">

                                <div style={{ width: '100vw', height: '100%' }}>


                                    <iframe src={selectedHospital?.map} width="100%" height="100%" title='Hotel and Hospital Map'></iframe>

                                </div>
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


            {
                allPagesVisibility ?
                    <>
                        <HospitalMapGostDiv></HospitalMapGostDiv>
                        {/* <HospitalMap hospitalData={selectedHospital}></HospitalMap> */}
                        {/* <HospitalVideo hospitalData={selectedHospital} /> */}
                        <HospitalDepartments myRef={myRef} hospitalData={selectedHospital} />
                    </>
                    : <>
                        <Footer />
                    </>

            }

        </>
    );
};

export default OurHospitals;
