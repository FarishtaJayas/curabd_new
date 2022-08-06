import React, { useState, useEffect } from 'react'
import { projectStorage } from '../../../../firebase.config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useFirestore } from '../../../../Hooks/useFirestore';

export default function AddDoctors() {
    const [doctorImg, setDoctorImg] = useState(null);
    const [doctorImgError, setDoctorImgError] = useState("");
    const [doctorImgProgress, setDoctorImgProgress] = useState(null);
    const [alert, setAlert] = useState("");
    const [success, setSuccess] = useState("");
    const [doctor, setDoctor] = useState({
        doctorName: "",
        qualification: "",
        doctorImage: "",
        department: ""
    })

    const types = ['image/png', 'image/jpeg', "image/jpg"];

    const { addDocument, response } = useFirestore("Doctors")

    const handleDoctorImage = e => {
        let selected = e.target.files[0]

        if (selected && !types.includes(selected.type)) {
            setDoctorImg("")
            setDoctorImgError('Please select an image file (png , jpg Or JPeg) for Logo');
            return
        }
        const storageRef = ref(projectStorage, `files/${selected.name}`);
        const uploadTask = uploadBytesResumable(storageRef, selected);

        uploadTask.on("state_changed",
            (snapshot) => {
                const progress =
                    Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setDoctorImgProgress(progress);
            },
            (error) => {
                setDoctorImgError(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setDoctorImg(downloadURL);
                });
            }
        );
    }

    useEffect(() => {
        if (doctorImg !== null && doctorImg !== "") {
            setDoctor({ ...doctor, doctorImage: doctorImg })
        }

    }, [doctorImg])

    const handleSubmit = e => {
        e.preventDefault();
        if(doctor.doctorName === "" || doctor.qualification === "" || doctor.doctorImage === "" || doctor.department === "") {
            setAlert("You should fill all the input field");
            return
        }
        addDocument(doctor);
        setSuccess("Doctor Added successfully");
        setDoctor({
            doctorName: "",
            qualification: "",
            doctorImage: "",
            department: ""
        })
    }
    return (
        <div id="booking" className="section ">
            <div className="section-center">
                <div className="container">
                    <div className="row py-5">
                        <div className="booking-form">
                            <div className="form-header">
                                <h1 className='mt-4'>Upload Doctor</h1>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="form-group">
                                        <span className="form-label">Doctor Name</span>
                                        <input className="form-control" value={doctor.doctorName} onChange={e => setDoctor({ ...doctor, doctorName: e.target.value })} />
                                    </div>

                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <span className="form-label">Doctor Image </span>

                                            <input className="form-control" type='file' onChange={handleDoctorImage} />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <span className="form-label">Doctor Qualification</span>
                                        <input className="form-control" value={doctor.qualification} onChange={e => setDoctor({ ...doctor, qualification: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                        <span className="form-label">Doctor Department</span>
                                        <select className="form-control" value={doctor.department} onChange={e => setDoctor({ ...doctor, department: e.target.value })}>
                                            <option>Select Department</option>
                                            <option value="neurology">Neurology</option>
                                            <option value="radiology">Radiology</option>
                                            <option value="cardiology">Cardiology</option>
                                            <option value="darmatology">Darmatology</option>
                                            <option value="dentists">Dentists</option>
                                            <option value="gainey">Gainey</option>
                                        </select>
                                        <span className="select-arrow"></span>
                                    </div>

                                    <div className="form-btn">
                                        <button type="submit" className="submit-btn">Add Doctor</button>
                                    </div>
                                </div>
                            </form>
                            {
                                alert && <p style={{color: "red"}}>{alert}</p>
                            }
                            {
                                success && <p style={{color: "green"}}>{success}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
