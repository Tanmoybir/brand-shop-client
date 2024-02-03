import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
    const product = useLoaderData()
    console.log(product);
    return (
        <div>
            <h1>Details Coming Soon....</h1>
        </div>
    );
};

export default ProductDetails;