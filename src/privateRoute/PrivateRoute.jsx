import { useState } from "react";
import { AuthContext } from "../provider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user} = useState(AuthContext)
    console.log(user);
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;