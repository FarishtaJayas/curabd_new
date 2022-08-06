import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import logo from './../../../assets/Images/logo.png'
import './AddHotels.css'
import logoUpload from './../../../../assets/Images/logoUpload-icon.png'
import { useFirestore } from '../../../../Hooks/useFirestore';
import { useCollection } from '../../../../Hooks/useCollection';
import { useStorage } from '../../../../Hooks/useStorage';
import { projectStorage } from '../../../../firebase.config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const AddHotels = () => {
    let [hotelForm, setHotelForm] = useState({
        name: "",
        address: "",
        contact: "",
        images: [],
        map: "",
        logo: "",
        longitude: "",
        latitude: "",
        packages: [],
        hospitals: []
    })

    let [packageObj, setPackageObj] = useState({
        name: "",
        // description: "",
        // room: "",
        // images: []
    })

    const { addDocument, response } = useFirestore("Hotels");
    const { document: hospitalsCollection } = useCollection("Hospitals")

    const types = ['image/png', 'image/jpeg', "image/jpg"];

    const [logoFile, setLogoFile] = useState("");
    const [logoFileError, setlogoFileError] = useState("");
    const [logoProgress, setLogoProgress] = useState(0);
    const [hotelImageError, setHotelImageError] = useState("");
    // const [hotelImageProgress, setHotelImageProgress] = useState(0);
    const [hotelUrl, setHotelUrl] = useState([]);
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

    const handleHotelImage = e => {
        let images = [];
        for (let i = 0; i < e.target.files.length; i++) {
            let newImage = e.target.files[i];
            newImage["id"] = Math.random();
            images.push(newImage);

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
                        setHotelImageError(error);
                    },
                    async () => {
                        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            setHotelUrl(prevUrl => [...prevUrl, downloadURL]);
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
            setHotelForm({ ...hotelForm, logo: logoFile })
        }

        if (hotelUrl.length > 0) {
            setHotelForm({ ...hotelForm, images: hotelUrl })
        }
    }, [logoFile, hotelUrl])



    const handleAddHospital = (hospital) => {
        setHotelForm({ ...hotelForm, hospitals: [...hotelForm.hospitals, hospital] });
    }

    const handlePackages = (e) => {

        setHotelForm({ ...hotelForm, packages: [...hotelForm.packages, packageObj] });
        setPackageObj({
            name: "",
            // description: "",
            // room: "",
            // images: []
        });
        setHotelUrl([]);
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        // if(hotelForm.name === "" || hotelForm.address === "" || hotelForm.contact === "" || hotelForm.video === "" || hotelForm.logo === "" || hotelForm.longitude === "" || hotelForm.latitude === "" || hotelForm.packages.length <= 0 || hotelForm.hospitals.length <= 0) {
        //     setAlert("You should fill all the input field");
        //     return
        // }


        addDocument(hotelForm);
        setSuccess("Hotel Added Successfully");
        setHotelForm({
            name: "",
            address: "",
            contact: "",
            images: [],
            logo: "",
            longitude: "",
            latitude: "",
            packages: [],
            hospitals: []
        })
        setHotelUrl([]);
        setLogoFile("");
    }

    return (
        <div id="booking" className="section ">
            <div className="section-center">
                <div className="container">
                    <div className="row py-5">
                        <div className="booking-form">
                            <div className="form-header">
                                <h1 className='mt-4'>Upload Hotels</h1>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="row">

                                    <div class="user-thumb user-thumb--edit d-flex justify-content-center">
                                        <div>


                                            <input class="custom-file__input" id="photo" accept="image/*" type="file" onChange={handleLogo} />
                                            <label class="custom-file__label" for="photo">
                                                <img alt="" class="thumb--lg rounded-circle" src={logoFile || logoUpload} />


                                            </label>
                                            <p>Upload logo</p>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <span className="form-label">Hotel Name</span>
                                        <input className="form-control" value={hotelForm.name} onChange={e => setHotelForm({ ...hotelForm, name: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                        <span className="form-label">Address</span>
                                        <input className="form-control" value={hotelForm.address} onChange={e => setHotelForm({ ...hotelForm, address: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                        <span className="form-label">Contact</span>
                                        <input className="form-control" value={hotelForm.contact} onChange={e => setHotelForm({ ...hotelForm, contact: e.target.value })} />
                                    </div>

                                    <div className="col-sm-12">
                                        {/* <div className="form-group">
                                            <span className="form-label">Hotel Video Link</span>
                                            <input className="form-control" type="text" value={hotelForm.video} onChange={e => setHotelForm({ ...hotelForm, video: e.target.value })} />
                                        </div> */}
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <span className="form-label">Hotel Image </span>

                                                <input className="form-control" type='file' multiple onChange={handleHotelImage} />
                                            </div>
                                        </div>

                                        {
                                            hotelUrl?.map(hotel => (
                                                <div className="col-md-3">
                                                    <img src={hotel || ""} />
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <span className="form-label">Latitude </span>
                                            <input className="form-control" value={hotelForm.latitude} onChange={e => setHotelForm({ ...hotelForm, latitude: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <span className="form-label">Longitude</span>
                                            <input className="form-control" value={hotelForm.longitude} onChange={e => setHotelForm({ ...hotelForm, longitude: e.target.value })} />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <span className="form-label">Nearest Hospital Map</span>
                                    <input className="form-control" value={hotelForm.map} onChange={e => setHotelForm({ ...hotelForm, map: e.target.value })} />
                                </div>

                                <div className='hospital_container'>
                                    {
                                        hotelForm.packages.length ? <p>You have Added {hotelForm.packages.length} packages</p> : ""
                                    }
                                    <div className="form-group">
                                        <span className="form-label">Package Name</span>
                                        <input value={packageObj.name} onChange={e => setPackageObj({ name: e.target.value })} className="form-control" type="text" />
                                        {/* <div className="col-sm-12">
                                            <div className="form-group">
                                                <span className="form-label">Hotel Image </span>

                                                <input className="form-control" type='file' multiple onChange={handleHotelImage} />
                                            </div>
                                        </div>

                                        {
                                            hotelUrl?.map(hotel => (
                                                <div className="col-md-3">
                                                    <img src={hotel || ""} />
                                                </div>
                                            ))
                                        }
                                        <span className="form-label">Package Description</span>
                                        <input value={packageObj.description} onChange={e => setPackageObj({ ...packageObj, description: e.target.value })} className="form-control" type="tex" />
                                        <span className="form-label">Room</span>
                                        <input value={packageObj.room} onChange={e => setPackageObj({ ...packageObj, room: e.target.value })} className="form-control" type="tex" /> */}
                                    </div>
                                </div>

                                <p onClick={() => handlePackages()} className='btn bg-success text-white'>Add Packages</p>

                                {
                                    hotelForm.hospitals.length ? <p>You have Added {hotelForm.hospitals.length} Hospital</p> : ""
                                }

                                <div className="form-group">
                                    <span className="form-label">Add Hospital</span>
                                    {
                                        hospitalsCollection?.map(hospital => (
                                            <p key={hospital?.id} className="bg-dark text-white" onClick={() => handleAddHospital(hospital)}>{hospital?.name}</p>
                                        ))
                                    }
                                    {/* <select className="form-control" onChange={handleAddHospital}>
                                        <option value="">Select Hospital</option>
                                        {
                                            hospitalsCollection?.map(hospital => (
                                                <option value={hospital}>{hospital?.name}</option>
                                            ))
                                        }
                                    </select>
                                    <span className="select-arrow"></span> */}
                                </div>


                                {/* <div className='hospital_container'>
                                    <div className="form-group">
                                        <span className="form-label">Hospital Name</span>
                                        <input value={hospitalObj.name} onChange={e => setHospitalObj({ ...hospitalObj, name: e.target.value })} className="form-control" type="text" />
                                        <span className="form-label">Hospital longitude</span>
                                        <input value={hospitalObj.longitude} onChange={e => setHospitalObj({ ...hospitalObj, longitude: e.target.value })} className="form-control" type="text" />
                                        <span className="form-label">Hospital latitude</span>
                                        <input value={hospitalObj.latitude} onChange={e => setHospitalObj({ ...hospitalObj, latitude: e.target.value })} className="form-control" type="text" />
                                    </div>
                                </div>
                                <p onClick={() => handleAddHospital()} className='btn bg-success text-white'>Add Hospital</p> */}

                                <div className="form-btn">
                                    <button type="submit" className="submit-btn">Add Hotel</button>
                                </div>
                                {
                                    logoFileError && <p style={{ color: "red", fontSize: "14px" }}>{logoFileError}</p>
                                }
                                {
                                    hotelImageError && <p style={{ color: "red", fontSize: "14px" }}>{hotelImageError}</p>
                                }
                                {
                                    response?.success ? <div>
                                        <p className='success'>Hospital Added Successfully</p>
                                    </div> : ""
                                }
                                {
                                    response?.error ? <div>
                                        <p className='error'>Could not be able to Upload you Hospital</p>
                                    </div> : ""
                                }


                            </form>
                            {
                                success && <p style={{ color: "green" }}>{success}</p>
                            }
                            {
                                alert && <p style={{ color: "red" }}>{alert}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddHotels;