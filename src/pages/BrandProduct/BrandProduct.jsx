import { useLoaderData } from "react-router-dom";
import Products from "./Products";

const BrandProduct = () => {
    const products = useLoaderData()
    return (
        <div>
            <div className="max-w-screen-xl mx-auto">
                {
                    products.map(product => <Products key={product._id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default BrandProduct;