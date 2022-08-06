import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import logo from './../../assets/Images/logo.png'
import '../AddHotels/AddHotels.css'
import logoUpload from './../../../../assets/Images/logoUpload-icon.png'
import { useFirestore } from '../../../../Hooks/useFirestore';
import { useCollection } from '../../../../Hooks/useCollection';
import { projectStorage } from '../../../../firebase.config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

// import { MultiSelect } from "react-multi-select-component";

const AddHospitals = () => {
    let [hospitalForm, setHospitalForm] = useState({
        name: "",
        address: "",
        contact: "",
        image: [],
        video: "",
        logo: "",
        longitude: "",
        latitude: "",
        map: "",
        department: [],
        hotel: []
    })

    let [hotelObj, setHotelObj] = useState({
        name: "",
        longitude: "",
        latitude: ""
    })

    const { addDocument, response } = useFirestore("Hospitals");
    const { document: doctorsCollection } = useCollection("Doctors");

    const types = ['image/png', 'image/jpeg', "image/jpg"];

    const [logoFile, setLogoFile] = useState("");
    const [logoFileError, setlogoFileError] = useState("");
    const [logoProgress, setLogoProgress] = useState(0);
    const [hospitalImageError, setHospitalImageError] = useState("");
    // const [hotelImageProgress, setHotelImageProgress] = useState(0);
    const [hospitalUrl, setHospitalUrl] = useState([]);
    const [alert, setAlert] = useState("");
    const [success, setSuccess] = useState("");


    const handleLogo = e => {
        let selected = e.target.files[0]

        if (selected && !types.includes(selected.type)) {
            setLogoFile("")
            setlogoFileError('Please select an image file (png , jpg Or JPeg) for Logo');
            return
        }
        const storageRef = ref(projectStorage, `files/${selected.name}`);
        const uploadTask = uploadBytesResumable(storageRef, selected);

        uploadTask.on("state_changed",
            (snapshot) => {
                const progress =
                    Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setLogoProgress(progress);
            },
            (error) => {
                setlogoFileError(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setLogoFile(downloadURL);
                });
            }
        );
    }

    const handleHospitalImage = e => {
        let images = [];
        for (let i = 0; i < e.target.files.length; i++) {
            let newImage = e.target.files[i];
            newImage["id"] = Math.random();
            images.push(newImage)

            // if (selected && !types.includes(selected.type)) {
            //     setHotelImage("")
            //     setHotelImageError('Please select an image file (png , jpg Or JPeg) for Hotel');
            //     return
            // }
        }


        {
            images.map(selected => {
                const promises = [];
                const storageRef = ref(projectStorage, `files/${selected.name}`);
                const uploadTask = uploadBytesResumable(storageRef, selected);

                promises.push(uploadTask);
                uploadTask.on("state_changed",
                    (snapshot) => {
                        const progress =
                            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                        // setHotelImageProgress(prevProgress => [...prevProgress, progress]);
                    },
                    (error) => {
                        setHospitalImageError(error);
                    },
                    async () => {
                        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            setHospitalUrl(prevUrl => [...prevUrl, downloadURL]);
                        });
                    }
                );

                // Promise.all(promises)
                //     .then(() => alert("uploaded all image"))
                //     .catch(err => console.log(err))
            })
        }

    }

    useEffect(() => {
        if (logoFile !== null && logoFile !== "") {
            setHospitalForm({ ...hospitalForm, logo: logoFile })
        }

        if (hospitalUrl.length > 0) {
            setHospitalForm({ ...hospitalForm, image: hospitalUrl });
        }
    }, [logoFile, hospitalUrl])

    let [doctorName, setDoctorName] = useState([])
    const handleDoctor = doctor => {
        setDoctorName([...doctorName, doctor.doctorName])
        setHospitalForm({ ...hospitalForm, department: [...hospitalForm.department, doctor] })
    }




    const handleAddHotel = (e) => {
        // console.log(hospitalObj)
        setHospitalForm({ ...hospitalForm, hotel: [...hospitalForm.hotel, hotelObj] });
        setHotelObj({
            name: "",
            longitude: "",
            latitude: ""
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // if (hospitalForm.name === "" || hospitalForm.address === "" || hospitalForm.contact === "" || hospitalForm.image.length <= 0 || hospitalForm.video === "" || hospitalForm.logo === "" || hospitalForm.longitude === "" || hospitalForm.latitude === "" || hospitalForm.map === "" || hospitalForm.hotel.length <= 0) {
        //     setAlert("You should fill all the input field");
        //     return
        // }
        addDocument(hospitalForm);
        setSuccess("Hospital data Added successfully");
        setHospitalForm({
            name: "",
            address: "",
            contact: "",
            image: [],
            logo: "",
            longitude: "",
            latitude: "",
            map: "",
            department: [],
            hotel: []
        })
        setHospitalUrl([]);
        setLogoFile("");
    }
    return (
        <div id="booking" className="section ">
            <div className="section-center">
                <div className="container">
                    <div className="row py-5">
                        <div className="booking-form">
                            <div className="form-header">
                                <h1 className='mt-4'>Upload Hospital</h1>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="row">

                                    <div class="user-thumb user-thumb--edit d-flex justify-content-center">
                                        <div>


                                            <input class="custom-file__input" id="photo" accept="image/*" type="file" onChange={handleLogo} />
                                            <label class="custom-file__label" for="photo">

                                                <img alt="" class="thumb--lg rounded-circle" src={logoUpload || logoFile} />

                                            </label>
                                            <p>Upload logo</p>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <span className="form-label">Hospital Name</span>
                                        <input className="form-control" value={hospitalForm.name} onChange={e => setHospitalForm({ ...hospitalForm, name: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                        <span className="form-label">Address</span>
                                        <input className="form-control" value={hospitalForm.address} onChange={e => setHospitalForm({ ...hospitalForm, address: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                        <span className="form-label">Contact</span>
                                        <input className="form-control" value={hospitalForm.contact} onChange={e => setHospitalForm({ ...hospitalForm, contact: e.target.value })} />
                                    </div>


                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <span className="form-label">Hospital Image </span>

                                            <input className="form-control" type='file' multiple onChange={handleHospitalImage} />
                                        </div>
                                        {
                                            hospitalUrl?.map(hospital => (
                                                <div className="col-md-3">
                                                    <img src={hospital || ""} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <span className="form-label">Hospital Video </span>

                                            <input className="form-control" value={hospitalForm.video} onChange={e => setHospitalForm({ ...hospitalForm, video: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <span className="form-label">Latitude </span>

                                            <input className="form-control" value={hospitalForm.latitude} onChange={e => setHospitalForm({ ...hospitalForm, latitude: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <span className="form-label">Longitude</span>
                                            <input className="form-control" value={hospitalForm.longitude} onChange={e => setHospitalForm({ ...hospitalForm, longitude: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <span className="form-label">Nearest Hotel Map</span>
                                    <input className="form-control" value={hospitalForm.map} onChange={e => setHospitalForm({ ...hospitalForm, map: e.target.value })} />
                                </div>

                                {/* <div className="form-group">
                                    <span className="form-label">departments</span>
                                    <input className="form-control" value={hospitalForm.department} onChange={e => setHospitalForm({ ...hospitalForm, department: e.target.value })} />
                                </div> */}

                                <div className='hospital_container'>
                                    {
                                        hospitalForm.hotel.length ? <p>You have added {hospitalForm.hotel.length} Hotel</p> : ""
                                    }

                                    <div className="form-group">
                                        <span className="form-label">Hotel Name</span>
                                        <input value={hotelObj.name} onChange={e => setHotelObj({ ...hotelObj, name: e.target.value })} className="form-control" type="text" />
                                        <span className="form-label">Hospital longitude</span>
                                        <input value={hotelObj.longitude} onChange={e => setHotelObj({ ...hotelObj, longitude: e.target.value })} className="form-control" type="text" />
                                        <span className="form-label">Hospital latitude</span>
                                        <input value={hotelObj.latitude} onChange={e => setHotelObj({ ...hotelObj, latitude: e.target.value })} className="form-control" type="text" />
                                    </div>
                                </div>
                                <p onClick={() => handleAddHotel()} className='btn bg-success text-white'>Add Hotel</p>

                                <div className="form-group">
                                    {
                                        hospitalForm.department.length ? <>
                                            <p>addedd Doctor</p>
                                            {
                                                hospitalForm.department.map(doctor => (
                                                    <p style={{ fontWeight: "700" }}>{doctor.doctorName}</p>
                                                ))
                                            }
                                        </> : ""
                                    }

                                    <span className="form-label">Add Doctor</span>
                                    {
                                        doctorsCollection?.map(doctor => (
                                            <p key={doctor?.id} style={doctorName.includes(doctor.doctorName) ? { backgroundColor: "green" } : { backgroundColor: "black" }} className="bg-dark text-white" onClick={() => handleDoctor(doctor)}>{doctor?.doctorName}</p>

                                        ))
                                    }
                                    <span className="select-arrow"></span>
                                </div>

                                <div className="form-btn">
                                    <button type="submit" className="submit-btn">Add Hospital</button>
                                </div>
                            </form>
                            {
                                alert && <p style={{ color: "red" }}>{alert}</p>
                            }
                            {
                                success && <p style={{ color: "green" }}>{success}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddHospitals;