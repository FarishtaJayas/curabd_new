import React, { useState } from 'react';
import './HospitalDepartments.css'
import departmentsImage from './../../../assets/Images/HospitalDepartmentImage.png'
import Doctors from '../Doctors/Doctors';
import SpinnerMiddle from '../../Spinner/spinnerMiddle';

const HospitalDepartments = ({ hospitalData, myRef}) => {

    let [selectedDepartment, setSelectedDepartment] = useState('');
    let [bgColor, setBgColor] = useState('`#a5a6f6');
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
        <div className={!selectedDepartment ? "departments" : "doctors"} style={{background: bgColor}}>
            <div ref={myRef}>
                {

                    !selectedDepartment ?
                        <div className="container">
                            < div className="row">

                                {/* <div className="col-md-5 col-12 mt-5 departmentText">

                                    <h3 data-aos="zoom-out-up">Departments</h3>
                                    <h4 data-aos="zoom-out-right" className='mt-5'>Over 100 departments to choose from </h4>

                                    <p data-aos="zoom-out-right"> Cura Bangladesh is here to introduce you to the available hospitals and doctors based on your ailment. Choose from the hundreds of departments and find the most fitting one to receive the sought treatment. It’s time to let go of all the troubles because hospitals are at your doorsteps.
                                    </p>
                                </div> */}

                                <div className="align-items-center mt-5">
                                    <div className='m-5'>
                                        <img data-aos="fade-down-left" className='img-fluid' src={departmentsImage} alt="" />
                                    </div>
                                </div>

                            </div>
                        </div >
                        :

                        <div className='container'>
                            <Doctors doctorsData={doctorsData}/>
                        </div>
                        
                }



                <div className='spinner-middle-cont'>
                    {/* data-aos="fade-up" */}

                    <SpinnerMiddle info={allDepartments}
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