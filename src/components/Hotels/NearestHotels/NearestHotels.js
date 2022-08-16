import './NearestHotels.css';
import { useState, useRef } from 'react';
import HotelSlider from './../HotelVideo/HotelSlider';
import HotelDepartments from './../HotelDepartment/HotelDepartments';
import { useCollection } from '../../../Hooks/useCollection';
import NotFound from './notFound';
import hotelIcon from './../../../assets/Images/hotels.png';

const NearestHotels = ({ data }) => {

    const { document } = useCollection('Hotels');
    let [hotel, setHotel] = useState(<></>);

    // const positionMaping = ['0vw', '27vw', '35vw', '9vw', '0vw', '25vw'];

    let bgRef = useRef();
    let spinnerDiv = useRef();

    const swapDown = () => {
        spinnerDiv.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }

    // const getPos = (index) => {
    // if (index + 1 > positionMaping.length) return positionMaping[((index + 1) % positionMaping.length) - 1];
    // else return positionMaping[index];
    // }

    const HotelSelected = (name) => {
        let result = query(name);
        result == null ?
            setHotel(
                <NotFound />
            )
            :
            setHotel(
                <>
                    <div className='pt-5 pb-5 sliderBG text-center'>
                        <HotelSlider HotelData={result}></HotelSlider>
                        <button className='swapDown' onClick={swapDown}>
                            <i class="fas fa-angle-down"></i>
                        </button>
                    </div>

                    <div ref={spinnerDiv}>
                        <HotelDepartments HotelData={result} />
                    </div>

                </>);
    }


    // List of nearest Hotels
    let nearHotels = data['hotel'].map(
        (element, index) =>

            <>
                <button className="Hotel-Selection-Btn" style={
                    index % 2 === 0 ? { float: 'left' } : { float: 'right' }
                }
                    onClick={() => {
                        HotelSelected(element['name'])
                    }}>

                    <div className="Hotel-Selection-icon">
                        <img src={hotelIcon} alt=" " />
                    </div>
                    <div className="Hotel-Selection-Name">
                        {element['name']}
                    </div>
                    <div className="Hotel-Selection-arrow">
                        <i class="fas fa-chevron-right"></i>
                    </div>

                </button>
            </>

    );

    // See if hotel info is avaible
    const query = (name) => {
        for (let i = 0; i < document.length; i++) {
            if (document[i].name === name) {
                return document[i];
            }
            else return null;
        }
    }

    return (
        <>
            <div className="selectionContainer">
                <h1>
                    SELECT HOTEL
                </h1>

                {/* <div className='tableContainer'> */}
                {/* <div className='label-container'>
                    <div className='Serial-label'>
                        SL
                    </div>
                    <div className='name-label'>
                        HOTEL NAME
                    </div>
                </div> */}

                <div className='Hotel-Selection-Container' data-aos="fade-up" ref={bgRef}>
                    {nearHotels}
                </div>
                {/* </div> */}

            </div>

            {hotel}

        </>
    );
}

export default NearestHotels;