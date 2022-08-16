import React, { useState } from 'react';
import './HospitalDepartments.css'
// import departmentsImage from './../../../assets/Images/HospitalDepartmentImage.png'
import Doctors from '../Doctors/Doctors';
import SpinnerMiddle from '../../Spinner/spinnerMiddle';
// import { useEffect } from 'react';

const HospitalDepartments = ({ hospitalData }) => {

    let [selectedDepartment, setSelectedDepartment] = useState('');
    let [bgColor, setBgColor] = useState('#f4bae1');
    let allDepartments = [];

    for (let i = 0; i < hospitalData?.department?.length; i++) {
        if (!allDepartments.includes(hospitalData?.department[i]?.department)) {
            allDepartments.push(hospitalData?.department[i]?.department)
        }
    }


    // const doctorsData = (hospitalData?.department[firstDepartment]);
    const doctorsData = hospitalData?.department?.filter(data => data?.department === selectedDepartment);
    const handleSelectValue = (selectedDepartment, bg_color) => {
        setBgColor(bg_color);
        setSelectedDepartment(selectedDepartment)
    }

    return (
        <div className={!selectedDepartment ? "departments" : "doctors"} style={{ background: bgColor }}>
            <div>
                {

                    !selectedDepartment ?
                        <div className="container">
                            <h1 className='text-center'>
                                HOSPITAL DEPARTMENTS
                            </h1>
                        </div >
                        :

                        <div className='container'>
                            <Doctors doctorsData={doctorsData} />
                        </div>

                }


                <div className='spinner-middle-cont'>
                    {/* data-aos="fade-up" */}

                    <SpinnerMiddle info={allDepartments}
                        UseCase="hospital"
                        handleClick={
                            (data, bg_color) => {
                                handleSelectValue(data, bg_color);
                            }
                        }

                    />
                </div>

            </div>

        </div >

    );
};

export default HospitalDepartments;