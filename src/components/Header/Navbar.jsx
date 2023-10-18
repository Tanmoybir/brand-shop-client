import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import { useState } from "react";


const Navbar = () => {
    const [open,setOpen] =useState(false)
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
                <div className=""><Link to={'/login'}><button className="bg-yellow-500 px-6 py-4 rounded-lg text-2xl font-bold">Login</button></Link></div>
            </nav>
        </div>
    );
};

export default Navbar;