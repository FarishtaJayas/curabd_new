import React from 'react';
import './Doctors.css'

const Doctors = ({ doctorsData }) => {


    const localData = [
        {
            "doctorImage": 'https://firebasestorage.googleapis.com/v0/b/hotelsandhospitals-9aa7b.appspot.com/o/Dummy%2FImages%2Fdoctor%20(1).jpg?alt=media&token=fe1658a1-3488-44bb-a086-1bab55dc67de',
            'doctorName': 'Gold',
            'department': 'Dr. Farhana Anam',
        },
        {
            "doctorImage": 'https://firebasestorage.googleapis.com/v0/b/hotelsandhospitals-9aa7b.appspot.com/o/Dummy%2FImages%2Fdoctor%20(1).png?alt=media&token=f5c15b4d-1915-4a0a-96a5-fa24868e4198',

            'doctorName': 'Dr. Jannat Ara Ferdous',

            'department': 'Cardiology',
        },
        {
            "doctorImage": 'https://firebasestorage.googleapis.com/v0/b/hotelsandhospitals-9aa7b.appspot.com/o/Dummy%2FImages%2Fdoctor%20(2).jpg?alt=media&token=24eaa57a-81bc-4b49-bc30-deb33f8aa6d7',
            'doctorName': 'Dr. AKM Fazlul Hoque',

            'department': 'Rheumatology',
        },
        {
            "doctorImage": 'https://firebasestorage.googleapis.com/v0/b/hotelsandhospitals-9aa7b.appspot.com/o/Dummy%2FImages%2Fdoctor%20(3).jpg?alt=media&token=92ae698b-86e2-498c-bf81-5ab4cbe13fd8',
            'doctorName': 'Dr. Mahbub H Khan',
            'department': 'Endocrinology',
        },
        {
            "doctorImage": 'https://firebasestorage.googleapis.com/v0/b/hotelsandhospitals-9aa7b.appspot.com/o/Dummy%2FImages%2Fdoctor%20(2).png?alt=media&token=6fba0c1b-302e-4199-ba79-7881e06df2d7',
            'doctorName': 'Dr. Ferdous Ara J. Janan',

            'department': 'Orthopedic',
        },
    ]

    return (

        <div className="doctors">
            <>
                {/* <div className="container">
                    <div className="row">
                        <div className="col-12 mt-5" data-aos="zoom-in">
                            <h3>Doctors</h3>
                            <h4>Get connected with the most experienced medicos.</h4>
                        </div>

                    </div>

                </div> */}

                <div className="col-12 ">

                    <div className="row row-cols-1 row-cols-md-5 g-4 mx-3 pt-5">
                        <div className='cardsCont'>
                            {
                                doctorsData?.length ?
                                    <>
                                        {doctorsData?.slice(0, 5).map((doctor) => (
                                            <a className='card-cont' href="https://p5jfzp15q2p.typeform.com/to/iAHQysg7" target="_blank" style={{ textDecoration: "none", color: "currentColor" }}>

                                                <div key={doctor?.id} className="col h-100" data-aos="zoom-out-down">
                                                    <div className="card doctorHover h-100">
                                                        <img src={doctor?.doctorImage} className="card-img-top  img-fluid m-auto w-100 m-auto" alt="..." />
                                                        <div className="card-body px-2 text-center">
                                                            <h5 className="card-title">{doctor?.doctorName}</h5>
                                                            <p className="card-text">{doctor?.department}</p>
                                                            {/* <p className="card-text">{doctor?.qualification}</p> */}
                                                        </div>
                                                    </div>
                                                </div>

                                            </a>
                                        ))}

                                    </>

                                    :

                                    <>
                                        {localData?.map((doctor) => (

                                            <a className='card-cont' href="https://p5jfzp15q2p.typeform.com/to/iAHQysg7" target="_blank" style={{ textDecoration: "none", color: "currentColor" }}>

                                                <div key={doctor?.id} className="col h-100" data-aos="zoom-out-down">
                                                    <div className="card doctorHover h-100">
                                                        <img src={doctor?.doctorImage} className="card-img-top  img-fluid m-auto w-100 m-auto" alt="..." />
                                                        <div className="card-body px-2 text-center">
                                                            <h5 className="card-title">{doctor?.doctorName}</h5>
                                                            <p className="card-text">{doctor?.department}</p>
                                                            {/* <p className="card-text">{doctor?.qualification}</p> */}
                                                        </div>
                                                    </div>
                                                </div>

                                            </a>
                                        ))}
                                    </>
                            }
                        </div>
                    </div>

                </div>
            </>
        </div >
    );
};

export default Doctors;