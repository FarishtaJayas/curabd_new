
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirestore } from '../../../Hooks/useFirestore';
import './BookingModal.css'

const BookingModal = ({ setBookData, bookData }) => {
    const navigate = useNavigate("");
    let [success, setSuccess] = useState("");
    let [error, setError] = useState("");

    const { addDocument } = useFirestore("BookingData");
    const handleSubmit = e => {
        e.preventDefault();
        if (bookData.checkInDate !== "" && bookData.checkOutDate !== "" && bookData.numOfAdult !== "" && bookData.numOfChild !== "" && bookData.name !== "" && bookData.number !== "" && bookData.email !== "") {
            addDocument(bookData);
            setBookData({
                checkInDate: "",
                checkOutDate: "",
                numOfAdult: "",
                numOfChild: "",
                name: "",
                number: "",
                email: "",
                roomName: "",
                HotelName: ""
            });
            setSuccess("You have submitted your request successfully, We will contact you soon");
            setError("");
        } else {
            setSuccess("");
            setError("Please fill all the input fields");
        }
    }


    const clearValue = () => {
        setSuccess("")
        setError("")
    }



    return (
        <div className='userDetailsModal'>
            <div class="modal fade" id="EditModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="EditModalLabel" aria-hidden="true">
                <div class="modal-dialog  modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={clearValue}></button>
                        </div>
                        <div class="modal-body">
                            <div class=" col-12 ">
                                <div class="w-100 mx-auto">
                                    <div id="booking" className="section ">
                                        <div className="section-center">
                                            <div className="container">
                                                <div className="row pt-2">
                                                    <div className="booking-form">
                                                        <div className="form-header">
                                                            <h3 class="modal-title" id="EditModalLabel" >Upload Details</h3>
                                                        </div>

                                                        <form onSubmit={handleSubmit} className="my-2">
                                                            <div className="row">
                                                                <div className="form-group">
                                                                    <span className="form-label">Name</span>
                                                                    <input className="form-control" value={bookData.name} onChange={e => setBookData({ ...bookData, name: e.target.value })} />
                                                                </div>
                                                                <div className="form-group">
                                                                    <span className="form-label">Phone Number</span>
                                                                    <input className="form-control" type="tel" value={bookData.number} onChange={e => setBookData({ ...bookData, number: e.target.value })} />
                                                                </div>
                                                                <div className="form-group">
                                                                    <span className="form-label">Email</span>
                                                                    <input className="form-control" type="email" value={bookData.email} onChange={e => setBookData({ ...bookData, email: e.target.value })} />
                                                                </div>
                                                            </div>



                                                            <div className="form-btn">
                                                                <button type="submit" className="submit-btn" onClick={handleSubmit}>Submit</button>
                                                            </div>



                                                        </form>
                                                        {
                                                            success && <p style={{ color: "green", fontSize: "1.2rem", textAlign: "center", marginTop: "1rem" }}>{success}</p>
                                                        }
                                                        {
                                                            error && <p style={{ color: "red", fontSize: "1.2rem", textAlign: "center", marginTop: "1rem" }}>{error}</p>
                                                        }


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;