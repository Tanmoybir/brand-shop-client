import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const SocialLogin = () => {
    const {googleLogin } =useContext(AuthContext);
    
    const handleSocialLogin = (media) =>{
        media()
        .then(res => console.log(res))
        .catch(error => console.log(error))
    } 
    return (
        <div>
            <div className="divider">continue with</div>
            <div className="flex justify-around">
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="btn btn-neutral btn-sm">Google</button>
                {/* <button
                    onClick={() => handleSocialLogin(githubLogin)}
                    className="btn btn-neutral btn-sm">Github</button> */}

            </div>
        </div>
    );
};

export default SocialLogin;