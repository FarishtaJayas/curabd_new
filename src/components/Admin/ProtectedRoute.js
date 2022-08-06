import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    let loggedIn = localStorage.getItem('loggedIn');
    console.log(loggedIn);

    return(
        loggedIn === 'true' ? children : <Navigate to='/login'></Navigate>
    );
}

export default ProtectedRoute;