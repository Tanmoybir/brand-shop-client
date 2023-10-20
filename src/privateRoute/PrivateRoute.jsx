import { useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading} = useState(AuthContext)
    console.log(user);

    if (!user?.email){
        return <Navigate to={'/login'}></Navigate>
    }


    return children
   
};

export default PrivateRoute;