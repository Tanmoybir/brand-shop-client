import { Link } from "react-router-dom";
import SocialLogin from "../../components/Social/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {
    const { signIn } = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        if (password.length < 6){
            toast.error('Password must be at least 6 characters');
            return
        }

        signIn(email,password)
        .then(res => console.log(res.user))
        .catch(error => console.log(error))

    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="hidden sm:block">
                <img className="w-full h-full object-cover" src={"https://i.ibb.co/LQ2tB6m/light-img.webp"} alt="" />
            </div>

            <div className="bg-gray-800 flex flex-col justify-center">
            <form onSubmit={handleLogin} className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
                <h1 className="text-4xl dark:text-white font-bold text-center">LOGIN</h1>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Email</label>
                    <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="email" name="email" required placeholder="Email" id="email" />
                </div>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Password</label>
                    <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="password" name="password" required placeholder="Password" id="password" />
                    <div className="flex justify-between py-2">
                        <label className="flex items-center">
                            <input className="mr-2"  type="checkbox" name="check" id="check" />Remember me</label>
                        <Link className="hover:underline ">Forget password</Link>
                    </div>

                </div>
                <input className="w-full my-5 py-2 bg-teal-500 shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg" type="submit" value="Login" />
                <p className="text-white">Don't have an account?<Link to={'/register'} className="px-5 text-xl hover:bg-blue-500 rounded-lg">Register</Link></p>
            </form>

            {/* Google login */}
            <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;