import React, { useState } from 'react';
import Rooms from '../Rooms/Rooms';
import HotelDepartment from './../../../assets/Images/HotelsDepertmentImage.png';
import SpinnerMiddle from '../../Spinner/spinnerMiddle';
import './HotelDepartments.css';

const HotelDepartments = ({ HotelData }) => {

    let [selectedDepartment, setSelectedDepartment] = useState('');
    let allPackages = [];

    for (let i = 0; i < HotelData?.packages?.length; i++) {
        allPackages.push(HotelData?.packages[i].name);
    }

    const roomData = HotelData?.packages?.filter(packages => packages?.name === selectedDepartment);
    const handleSelectValue = (selectedDepartment) => {
        setSelectedDepartment(selectedDepartment);
    }




    return (
        <div className={!selectedDepartment ? "departments" : "doctors"}>
            <div>
                {

                    !selectedDepartment ?
                        <div className="container">
                            < div className="row">

                                <div className="col-md-5 col-12 mt-5 departmentText">

                                    <h3 data-aos="zoom-out-up">Departments</h3>
                                    <h4 data-aos="zoom-out-right" className='mt-5'>Over 100 departments to choose from</h4>

                                    <p data-aos="zoom-out-right">Cura Bangladesh is here at your rescue with the best concerns.We provide the best options for choosing hotels based on location and cost-effective desirability.Explore, select and book - all without the hassle of being confused.</p>
                                </div>
                                <div className="col-md-7  col-12 d-flex justify-content-end  align-items-center">
                                    <div>
                                        <img data-aos="fade-down-left" className='img-fluid' src={HotelDepartment} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <Rooms
                            roomData={roomData}
                            HotelData={HotelData}
                        />
                }
                <>

                    <div className='spinner-middle-cont'>
                        <SpinnerMiddle info={allPackages}
                            handleClick={
                                (data) => {
                                    handleSelectValue(data);
                                }
                            }
                        />
                    </div>

                </>
            </div>

        </div >

    );
};

export default HotelDepartments;