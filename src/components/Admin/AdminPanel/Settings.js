import { useState } from "react";
import { useFirestore } from '../../../Hooks/useFirestore';

const Settings = () => {
    const { updateDocument } = useFirestore('Users');
    var main_credentials = JSON.parse(localStorage.getItem('credentials'));
    var credentials = [main_credentials[0].username, "", ""];
    let [msg, setMsg] = useState(<></>);


    const show_warning = (warning) => {
        setMsg(
            <div className="alert alert-danger text-center" role="alert">
                {warning}
            </div>
        );
    }


    const show_success = () => {
        writeUserData();
        setMsg(
            <div className="alert alert-success text-center" role="alert">
                Successful!
            </div>
        );
    }


    /* Update Admin Credentials */
    const writeUserData = () => {
        updateDocument('main-user',
            {
                username: credentials[0],
                password: credentials[2]
            });

        main_credentials[0] = {
            username: credentials[0],
            password: credentials[2]
        }

        localStorage.setItem('credentials', JSON.stringify(main_credentials));
    }


    /* Form Handling */
    const handleSubmit = (e) => {
        e.preventDefault();

        if (credentials[0] === "" || credentials[1] === "" || credentials[2] === "") show_warning("Please Fill up properly");
        else if (main_credentials[0].password === credentials[1]) show_success();
        else show_warning('Incorrect Password');
    }

    return (
        <>
            <h2 className="heading pt-2">
                SETTINGS
            </h2>

            <div className="pt-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-row align-items-center w-100">

                        <div className="col-sm-3 my-2 form-width">
                            <label className="sr-only" htmlFor="inlineFormInputGroupUsername">Username</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <i className="fas fa-user-alt py-1"></i>
                                    </div>
                                </div>
                                <input type="text" className="form-control" id="inlineFormInputGroupUsername" value={main_credentials[0].username}
                                    placeholder="Username" onChange={e => credentials[0] = e.target.value} />
                            </div>
                        </div>

                        <div className="col-sm-3 my-2 form-width">
                            <label className="sr-only" htmlFor="inlineFormInputGroupUsername">Current Password</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <i className="fas fa-unlock py-1"></i>
                                    </div>
                                </div>
                                <input type="password" className="form-control" id="inlineFormInputGroupUsername"
                                    placeholder="Current Password" onChange={e => credentials[1] = e.target.value} />
                            </div>
                        </div>

                        <div className="col-sm-3 my-2 form-width ">
                            <label className="sr-only" htmlFor="inlineFormInputGroupUsername">New Password</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <i className="fas fa-lock py-1"></i>
                                    </div>
                                </div>
                                <input type="password" className="form-control" id="inlineFormInputGroupUsername"
                                    placeholder="New Password" onChange={e => credentials[2] = e.target.value} />
                            </div>
                        </div>

                        <div className="col-auto my-5 text-center">
                            <button type="submit" className="btn btn-primary">Change</button>
                        </div>

                        {msg}

                    </div>
                </form>
            </div>


        </>
    );
}

export default Settings;