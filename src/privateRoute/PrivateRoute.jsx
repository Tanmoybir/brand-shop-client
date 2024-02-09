import { useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {
    const {user,loading} = useState(AuthContext)
    const location = useLocation()


    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user?.email){
        return children
    }


    return <Navigate state={location.pathname} to={'/login'}></Navigate>
   
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.object,
    
}