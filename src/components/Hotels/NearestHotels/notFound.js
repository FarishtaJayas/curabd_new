import './NearestHotels.css';
import { useEffect, useRef } from 'react';

const NotFound = () => {
    let myRef = useRef();

    useEffect(
        () => {
            myRef.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        }
    );

    return (
        <div ref={myRef} className="not-found-cont">
            <h1 data-aos="fade-up">
                NOT FOUND
            </h1>
        </div>
    );
}

export default NotFound;