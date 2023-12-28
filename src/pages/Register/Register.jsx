import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/Social/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2'


const Register = () => {

    const { createUser,profileUpdate } =useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        const form = e. target
        const name = form.name.value
        const email = form.email.value
        const image = form.image.value

        const password = form.password.value
        console.log(name,email,image,password);


        if (password.length < 6){
            Swal.fire({
                title: 'Error!',
                text: 'Password must be at least 6 characters',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
            
            return
        }

        createUser(email,password)
        .then(res => {
            profileUpdate(name,image)
            .then(() => {
                console.log(res.user);
                Swal.fire({
                    title: 'Success!',
                    text: 'User Created Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  form.reset()
                  navigate('/')
            })
        })
        .catch(error => {
            console.log(error)
            const mistake = error.message
            Swal.fire({
                title: 'Error!',
                text: mistake,
                icon: 'error',
                confirmButtonText: 'Cool'
              })
              form.reset()
        })



    }

    return (
        <div>
             <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="hidden sm:block">
                <img className="w-full h-full object-cover" src={"https://i.ibb.co/mzXDKd4/carnaval-background.jpg"} alt="" />
            </div>

            <div className="bg-gray-800 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
                <h1 className="text-4xl dark:text-white font-bold text-center">REGISTER</h1>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Full Name</label>
                    <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" name="name" required placeholder="Enter Your Name" id="name" />
                </div>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Email</label>
                    <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="email" name="email" required placeholder="Email" id="email" />
                </div>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Image URL</label>
                    <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" name="image" required placeholder="Image URL" id="image" />
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
                <p className="text-white">Already have an account?<Link to={'/login'} className="px-5 text-xl hover:bg-blue-500 rounded-lg">Login</Link></p>
            </form>
            <SocialLogin></SocialLogin>
            </div>
        </div>
        </div>
    );
};

export default Register;