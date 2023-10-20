import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import AddProduct from "../pages/AddProduct/AddProduct";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Update from "../pages/Update/Update";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Contact from "../pages/Contact/Contact";


const myCreateRouter = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('/brands.json')
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/add',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/update',
                element:<PrivateRoute>
                    <Update></Update>
                </PrivateRoute>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
           

        ]
    }
])

export default myCreateRouter;