import React from 'react';
import './HotelMapGostDiv.css'

const HotelMapGostDiv = ({myRef}) => {
    return (
        <div>
            <div ref={myRef} className="HotelMapGostDiv " id="HotelMap">
            </div>
        </div>
    );
};

export default HotelMapGostDiv;