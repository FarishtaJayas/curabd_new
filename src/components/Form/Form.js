import React, {useState} from 'react'
import AddDoctors from './Components/AddDoctors/AddDoctors';
import AddHospitals from './Components/AddHospitals/AddHospitals';
import AddHotels from './Components/AddHotels/AddHotels';
import classes from "./Form.module.css"
import ProtectedRoute from '../Admin/ProtectedRoute';

export default function Form() {
    let [whichForm, setWhichForm] = useState("Hotel");
    return (
        <ProtectedRoute>
            <div className={classes.form_page}>
                <h2>Upload Your Hotels and Hospitals</h2>
                <div className={classes.form_option}>
                    <p onClick={() => setWhichForm("Doctors")}>Doctors</p>
                    <p onClick={() => setWhichForm("Hotel")}>Hotels</p>
                    <p onClick={() => setWhichForm("Hospital")}>Hospitals</p>
                </div>
            </div>
            {
                whichForm === "Hotel" ? <AddHotels /> : ""
            }
            {
                whichForm === "Hospital" ? <AddHospitals /> : ""
            }
            {
                whichForm === "Doctors" ? <AddDoctors /> : ""
            }
            
        </ProtectedRoute>
    )
}
