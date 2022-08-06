import Footer from '../../../Shared/Footer/Footer';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import './login.css';

const Login = () => {

    var main_credentials = JSON.parse(localStorage.getItem('credentials'));
    var credentials = [null, null];

    const [user, setUser] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isUser(credentials)) {
            localStorage.setItem('loggedIn', 'true');
            setUser(true);
        }
    }

    const isUser = (data) => {
        if (main_credentials[0].username === data[0] && main_credentials[0].password === data[1]) return true;
        else return false;
    }


    return (
        <>
            {user
                ? <Navigate to='/dashboard'/>
                : <>
                    <div className="section pt-5 login_cont">
                        <div className="section-center">
                            <div className="container">
                                <div className="row py-5">
                                    <div className="booking-form">
                                        <div className="form-header">
                                            <h1 className='mt-4'>Log In</h1>
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                            <div className="row">

                                                <div className="form-group">
                                                    <span className="form-label">Username: </span>
                                                    <input className="form-control" type="text" onChange={e => credentials[0] = e.target.value} />
                                                </div>

                                                <div className="form-group">
                                                    <span className="form-label">Password: </span>
                                                    <input className="form-control" type="password" onChange={e => credentials[1] = e.target.value} />
                                                </div>

                                            </div>

                                            <div className="form-btn">
                                                <button type="submit" className="submit-btn">Login</button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </>
            }
        </>
    );
}

export default Login;