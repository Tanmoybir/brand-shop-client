import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="hidden sm:block">
                <img className="w-full h-full object-cover" src={"https://i.ibb.co/mzXDKd4/carnaval-background.jpg"} alt="" />
            </div>

            <div className="bg-gray-800 flex flex-col justify-center">
            <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
                <h1 className="text-4xl dark:text-white font-bold text-center">LOGIN</h1>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Email</label>
                    <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="email" name="email" required placeholder="Email" id="" />
                </div>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Password</label>
                    <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="password" name="password" required placeholder="Password" id="" />
                    <div className="flex justify-between py-2">
                        <label className="flex items-center">
                            <input className="mr-2"  type="checkbox" name="" id="" />Remember me</label>
                        <Link className="hover:underline ">Forget password</Link>
                    </div>

                </div>
                <input className="w-full my-5 py-2 bg-teal-500 shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg" type="submit" value="Login" />
                <p className="text-white">Don't have an account?<Link to={'/register'} className="px-5 text-xl hover:bg-blue-500 rounded-lg">Register</Link></p>
            </form>
            </div>
        </div>
    );
};

export default Login;