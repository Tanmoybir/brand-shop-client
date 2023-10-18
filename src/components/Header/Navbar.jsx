import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu} from "react-icons/ai";
import { useState } from "react";


const Navbar = () => {
    const [menu,setMenu] = useState(false);
    return (
        <div>
            <nav className="flex justify-between items-center py-4 shadow-lg px-4 relative ">
                <div className="flex items-center gap-4">
                    <button onClick={() => setMenu(!menu)} className="md:hidden"><AiOutlineMenu></AiOutlineMenu></button>
                    <h1>Electronics</h1>
                </div>
                <ul className={`md:flex absolute ml-0 duration-500 md:static justify-between items-center gap-6 ${menu? 'block top-10  shadow-lg md:shadow-none text-black':'hidden -top-20'}`}>
                    <li className="text-2xl font-semibold px-3 my-8 ">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? " " : isActive ? "text-2xl bg-blue-500 px-2 py-2 rounded-md font-semibold" : "hover:bg-blue-200 px-2 py-2 rounded-md"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="text-2xl font-semibold px-3 my-4 ">
                        <NavLink
                            to="/add"
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "text-2xl bg-blue-500 px-2 py-2 rounded-md font-semibold" : "hover:bg-blue-200 px-2 py-2 rounded-md"
                            }
                        >
                            Add Product
                        </NavLink>
                    </li>
                    <li className="text-2xl font-semibold px-3 my-4 ">
                        <NavLink
                            to="/about"
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "text-2xl bg-blue-500 px-2 py-2 font-semibold rounded-md" : "hover:bg-blue-200 px-2 py-2 rounded-md"
                            }
                        >
                            About Us
                        </NavLink>
                    </li>
                </ul>
                <div className=""><Link to={'/login'}><button className="bg-blue-500 px-6 py-4 rounded-lg text-2xl">Login</button></Link></div>
            </nav>
        </div>
    );
};

export default Navbar;