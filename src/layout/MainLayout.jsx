import { Outlet } from "react-router";
import Navbar from "../components/Header/Navbar";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster></Toaster>
        </div>
    );
};

export default MainLayout;