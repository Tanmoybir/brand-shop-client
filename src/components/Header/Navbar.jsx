import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    const [open,setOpen] =useState(false)
    // console.log(user);
    return (
        <div>
            <nav className="flex justify-between items-center py-4 bg-yellow-100 shadow-lg px-4 relative ">
                <div className="flex items-center gap-4 md:hidden text-2xl" onClick={() => setOpen(!open)}>
                    {
                        open === true? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                    }
                    </div>
                    <img className="w-40 md:w-60 " src="https://i.ibb.co/M8QPwz2/aro-store.png" alt="" />
                <ul className={`md:flex absolute  duration-500 md:static justify-between items-center gap-6 ${open ? 'top-16 bg-yellow-100':'-top-60'} `}>
                    <li className="text-2xl font-semibold px-3 my-8 ">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? " " : isActive ? "text-2xl bg-yellow-500 px-2 py-2 rounded-md font-semibold" : "hover:bg-yellow-200 px-2 py-2 rounded-md"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="text-2xl font-semibold px-3 my-4 ">
                        <NavLink
                            to="/add"
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "text-2xl bg-yellow-500 px-2 py-2 rounded-md font-semibold" : "hover:bg-yellow-200 px-2 py-2 rounded-md"
                            }
                        >
                            Add Product
                        </NavLink>
                    </li>
                    <li className="text-2xl font-semibold px-3 my-4 ">
                        <NavLink
                            to="/about"
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "text-2xl bg-yellow-500 px-2 py-2 font-semibold rounded-md" : "hover:bg-yellow-200 px-2 py-2 rounded-md"
                            }
                        >
                            About Us
                        </NavLink>
                    </li>
                </ul>
                <div className="">
                {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={logOut}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="bg-yellow-500 px-6 py-4 rounded-lg text-2xl font-bold">Login</button>
                            </Link>
                    }
                    {/* <Link to={'/login'}><button className="bg-yellow-500 px-6 py-4 rounded-lg text-2xl font-bold">Login</button></Link> */}
                    </div>
            </nav>
        </div>
    );
};

export default Navbar;