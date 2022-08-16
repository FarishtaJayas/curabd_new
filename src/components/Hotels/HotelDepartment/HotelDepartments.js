import React, { useState } from 'react';
import Rooms from '../Rooms/Rooms';
// import HotelDepartment from './../../../assets/Images/HotelsDepertmentImage.png';
import SpinnerMiddle from '../../Spinner/spinnerMiddle';
import './HotelDepartments.css';

const HotelDepartments = ({ HotelData}) => {

    let [bgColor, setBgColor] = useState('#f4bae1');
    let [selectedDepartment, setSelectedDepartment] = useState('');
    let allPackages = [];

    for (let i = 0; i < HotelData?.packages?.length; i++) {
        allPackages.push(HotelData?.packages[i].name);
    }

    const roomData = HotelData?.packages?.filter(packages => packages?.name === selectedDepartment);
    const handleSelectValue = (selectedDepartment, bg_color) => {
        setSelectedDepartment(selectedDepartment);
        setBgColor(bg_color);
        // change button colors
        // let btns = ReactDOM.findDOMNode(bgRef.current).getElementsByClassName('Hotel-Selection-Btn');
        // btns = [].slice.call(btns);
        // btns.forEach(
        //     (btn) => {
        //         btn.style.backgroundColor = bg_color;
        //     }
        // )
    }


    return (
        <div className={!selectedDepartment ? "departments" : "doctors hotelDiv"} style={{ backgroundColor: bgColor }}>
            <div>
                {

                    !selectedDepartment ?
                        <div className="container spinner-cont">
                            <h1 className='text-center'>
                                HOTEL DEPARTMENTS
                            </h1>

                        </div>
                        :
                        <Rooms
                            roomData={roomData}
                            HotelData={HotelData}
                            bg_color={bgColor}
                        />
                }
                <>

                    <div className='spinner-middle-cont' style={{ backgroundColor: bgColor }}>
                        <SpinnerMiddle info={allPackages}
                            UseCase="hotel"
                            handleClick={
                                (data, bg_color) => {
                                    handleSelectValue(data, bg_color);
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