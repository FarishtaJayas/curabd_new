import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';
import icon from './../../assets/Images/images.png'



const containerStyle = {
    width: '100vw',
    height: '100vh',
    overFlow: 'hidden'

};

const center = {
    lat: 23.7189,
    lng: 90.3882
};
const test = {
    lat: 23.7189,
    lng: 90.3882
};


const Maps = () => {
    return (
        <div>


            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={20}
                >
                    <Marker
                        center={test}
                        zoom={20}
                        icon={icon}

                    ></Marker>
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            </LoadScript>


        </div>
    );
};

export default Maps;