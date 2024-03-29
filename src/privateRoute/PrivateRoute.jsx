import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";


const PrivateRoute = ({children}) => {
    const { user,loading } = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user) {
        return children;

    }
    return <Navigate state={location.pathname} to={'/login'}/>
   
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.object,
    
}