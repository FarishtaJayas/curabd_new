import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import './Rooms.css'



const Rooms = ({ roomData, HotelData }) => {

    const roomName = (roomData[0]?.name);
    const HotelName = (HotelData?.name);
    let [bookData, setBookData] = useState({
        checkInDate: "",
        checkOutDate: "",
        numOfAdult: "",
        numOfChild: "",
        name: "",
        number: "",
        email: "",
        roomName,
        HotelName
    })

    const localData = [
        {
            "roomImage": 'https://firebasestorage.googleapis.com/v0/b/hotelsandhospitals-9aa7b.appspot.com/o/Dummy%2FImages%2F1%20(1).jpg?alt=media&token=8d8b5031-e984-4ec1-80ae-62301404edde',
            'name': 'Gold',
            'NumberOfRoom': '2',
            'Description': 'Room Description',
        },
        {
            "roomImage": 'https://firebasestorage.googleapis.com/v0/b/hotelsandhospitals-9aa7b.appspot.com/o/Dummy%2FImages%2F1%20(2).jpg?alt=media&token=510857f4-5793-4f07-b0b5-56534bd0475d',
            'name': 'Silver',
            'NumberOfRoom': '2',
            'Description': 'Room Description',
        },
        {
            "roomImage": 'https://firebasestorage.googleapis.com/v0/b/hotelsandhospitals-9aa7b.appspot.com/o/Dummy%2FImages%2F1%20(3).jpg?alt=media&token=510857f4-5793-4f07-b0b5-56534bd0475d',
            'name': 'Diamond',
            'NumberOfRoom': '2',
            'Description': 'Room Description',
        },
        {
            "roomImage": 'https://firebasestorage.googleapis.com/v0/b/hotelsandhospitals-9aa7b.appspot.com/o/Dummy%2FImages%2F1%20(4).jpg?alt=media&token=510857f4-5793-4f07-b0b5-56534bd0475d',
            'name': 'Platinum',
            'NumberOfRoom': '3',
            'Description': 'Room Description',
        },
        {
            "roomImage": 'https://firebasestorage.googleapis.com/v0/b/hotelsandhospitals-9aa7b.appspot.com/o/Dummy%2FImages%2F1%20(5).jpg?alt=media&token=510857f4-5793-4f07-b0b5-56534bd0475d',
            'name': 'Bronze',
            'NumberOfRoom': '2',
            'Description': 'Room Description',
        },
    ]

    return (
        <div className="rooms">
            <>

                <div className="col-12 pt-5">

                    <div class="py-5">
                        <div class="container">
                            <div class="col-md-12 d-flex p-2  justify-content-center p-0">
                                {/* <div className='bookRoom p-2 text-center m-3'>
                                    <h6>{HotelName}</h6>
                                </div> */}
                                <div className='p-3 px-5 bookRoom'>
                                    <h2>Book Your Room</h2>
                                </div>
                                {/* <div className='bookRoom p-2 text-center  m-3'>

                                    <h6>{roomName}</h6>
                                </div> */}
                            </div>
                            <div class="hotel_booking_table d-flex p-5  justify-content-center">

                                <div class="row align-items-center">

                                    <div className="col-12 col-md-4">
                                        <div className=' m-2 text-center'>
                                            <h3>{HotelName}</h3>
                                        </div>

                                        <div className=' m-2 text-center'>
                                            <h5>{roomName}</h5>
                                        </div>
                                    </div>

                                    <div className="col-md-8 col-12">
                                        <div className="row">
                                            <div className="col-12 col-md-3">
                                                <div className=' text-center'>
                                                    <label>Check In date</label>
                                                    <input onChange={e => setBookData({ ...bookData, checkInDate: e.target.value })} type='date' class="form-control py-4" placeholder="Arrival Date" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-3">
                                                <div className=' text-center'>
                                                    <label>Check out date</label>
                                                    <input onChange={e => setBookData({ ...bookData, checkOutDate: e.target.value })} type='date' class="form-control  py-4" placeholder="Arrival Date" />

                                                </div>

                                            </div>


                                            <div className="col-12 col-md-3">

                                                <div class="text-center ">
                                                    <label htmlFor="">Number of Adult</label>
                                                    {/* <select onChange={e => setBookData({ ...bookData, numOfAdult: e.target.value })} class="w-100 p-3 py-4">
                                                        <option data-display="Adult">Adult</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                    </select> */}

                                                    <input onChange={e => setBookData({ ...bookData, numOfAdult: e.target.value })} type='number' min="0" class="form-control  py-4" placeholder="Number of Adult" />
                                                </div>
                                            </div>


                                            <div className="col-12 col-md-3">
                                                <div class=" text-center">
                                                    <label htmlFor="">Number of Child</label>
                                                    {/* <select onChange={e => setBookData({ ...bookData, numOfChild: e.target.value })} class="w-100  p-3 py-4">
                                                        <option data-display="Child">Child</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                    </select> */}


                                                    <input onChange={e => setBookData({ ...bookData, numOfChild: e.target.value })} type='number' min="0" class="form-control py-4" placeholder="Number of Child" />
                                                </div>

                                            </div>

                                        </div>
                                    </div>



                                </div>
                            </div>
                            <div className='col-12 col-md-12 d-flex  justify-content-center'>
                                <button data-bs-toggle="modal"
                                    data-bs-target="#EditModal"
                                    className=" bookingSubmitButton btn btn-danger p-3 m-2">Book Now</button>
                            </div>

                        </div>
                    </div>
                </div>

            </>

            <BookingModal setBookData={setBookData} bookData={bookData}></BookingModal>
        </div >
    );
};

export default Rooms;