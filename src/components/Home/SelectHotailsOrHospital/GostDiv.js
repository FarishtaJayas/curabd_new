
import React, { useEffect, useRef } from 'react';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
const GostDiv = () => {

    const SelectHotelsOrHospital = useRef(null)
    const executeScroll = () => scrollToRef(SelectHotelsOrHospital)
    useEffect(() => {
        setTimeout(function () {
            executeScroll()
        }, 5000);
    }, [])
    return (
        <div className='GostDiv'
            ref={SelectHotelsOrHospital}
        >

        </div>
    );
};

export default GostDiv;