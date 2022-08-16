import Footer from "../../../Shared/Footer/Footer";
import Bookings from './Bookings';
import Hotels from './Hotels';
import Hospitals from './Hospitals';
import Settings from './Settings';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';
import './dashboard.css';

const Dashboard = () => {

    let [page, setPage] = useState(<Hotels></Hotels>);
    const nav = useNavigate();

    return (

        <ProtectedRoute>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-color">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-5 text-white min-vh-100">

                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">

                                <li className="nav-item has-submenu pt-5">

                                    <a href="#submenu1" data-bs-toggle="collapse" className="text-color px-0 align-middle">
                                        <i className="fas fa-th-large icon-color"></i>
                                        <span className="ms-1 d-none d-sm-inline"> Categories </span> &nbsp;
                                        <i className="fas fa-caret-down icon-color px-1"></i>
                                    </a>

                                    <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                        <li className="w-100 mt-4 expand-bg">
                                            <a href="#" className="text-color px-3" onClick={() => {
                                                setPage(<Hotels></Hotels>)
                                            }}>
                                                <i className="fas fa-hotel"></i>
                                                <span className="d-none d-sm-inline"> Hotels</span>
                                            </a>
                                        </li>
                                        <li className="pt-4 expand-bg">
                                            <a href="#" className="text-color px-3" onClick={() => {
                                                setPage(<Hospitals />)
                                            }}>
                                                <i className="fa-solid fa-house-medical"></i>
                                                <span className="d-none d-sm-inline"> Hospitals</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item pt-5">
                                    <a href="#" className="text-color align-middle px-0" onClick={() => {
                                        setPage(<Bookings></Bookings>)
                                    }}>
                                        <i className="fas fa-calendar-check icon-color"></i>
                                        <span className="ms-1 d-none d-sm-inline"> Bookings</span>
                                    </a>
                                </li>

                                <li className="nav-item pt-5">
                                    <a href="#" className="text-color align-middle px-0" onClick={
                                        () => {
                                            setPage(<Settings></Settings>)
                                        }
                                    }>
                                        <i className="fas fa-cog icon-color"></i>
                                        <span className="ms-1 d-none d-sm-inline"> Settings</span>
                                    </a>
                                </li>

                                <li className="nav-item pt-5">
                                    <a href="#" className="text-color align-middle px-0" onClick={
                                        () => {
                                            localStorage.setItem('loggedIn', 'false');
                                            nav('/home');
                                        }
                                    }>
                                        <i class="fas fa-sign-out-alt icon-color"></i>
                                        <span className="ms-1 d-none d-sm-inline"> Logout </span>
                                    </a>
                                </li>

                            </ul>

                        </div>
                    </div>

                    <div className="col pt-5">
                        {page}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </ProtectedRoute>
    );
}

export default Dashboard;