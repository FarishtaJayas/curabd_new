import React from 'react';

const DoctorsCart = ({ doctor }) => {

    return (
        <div className="col" data-aos="zoom-out-down">
            <div className="card doctorHover">
                <img src={doctor.doctorImage} className="card-img-top  m-auto mt-3 w-50 m-auto mt-3" alt="..." />
                <div className="card-body m-3 px-5 ">

                    <h5 className="card-title">{doctor.doctorName}</h5>
                    <p className="card-text">{doctor.department}</p>
                    <p className="card-text">{doctor.qualification}</p>
                </div>
            </div>
        </div>
    );
};

export default DoctorsCart;