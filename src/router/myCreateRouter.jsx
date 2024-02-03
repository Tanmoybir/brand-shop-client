import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import AddProduct from "../pages/AddProduct/AddProduct";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Update from "../pages/Update/Update";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Contact from "../pages/Contact/Contact";
import BrandProduct from "../pages/BrandProduct/BrandProduct";
import ProductDetails from "../pages/ProductDetails/ProductDetails";


const myCreateRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/brands.json')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/add',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                // loader: ({params}) => fetch(`http://localhost:5000/brands/${params.id}`)
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/brands/:brand_name',
                element: <BrandProduct />,
                loader: ({params}) => fetch(`http://localhost:5000/brands?brand_name=${params.brand_name}`)
            },
            {
                path: '/details/:id',
                element: <ProductDetails/>,
                loader: ({params}) => fetch(`http://localhost:5000/brands/${params.id}`)
            }
        ]
    }
])

export default myCreateRouter;