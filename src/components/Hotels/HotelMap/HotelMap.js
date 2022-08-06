import React from 'react';

const HotelMap = ({ HotelData }) => {
    const staticMap = 'https://www.google.com/maps/d/embed?mid=1Hx9m_kL6Xe0fBOaMJlJ8mMqPNLsaGpY&ehbc=2E312F'
    return (
        <div className='map_section' >
            <div className='' >
                {
                    HotelData?.map ?
                        <div className='map_container'>
                            <iframe src={HotelData?.map} className='largeMap' title='Hotel and Hospital Map'></iframe>
                        </div>
                        :
                        <div className='map_container'>
                            <iframe src={staticMap} className='largeMap' title='Hotel and Hospital Map'></iframe>
                        </div>
                }
            </div>
        </div>
    );
};

export default HotelMap;