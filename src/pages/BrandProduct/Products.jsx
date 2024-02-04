import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Products = ({ product }) => {
    console.log(product);
    const { _id, image, productName, brand_name,price } = product
    return (
        <div className="mt-20 mx-2 md:mx-4 flex items-center justify-center">
            <div className="relative flex w-full max-w-[50rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 h-80  shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="pt-6 px-1 md:w-60 lg:w-72">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                        {brand_name}
                    </h6>
                    <h4 className="mb-2 block md:h-20 font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {productName}
                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        ${price}
                    </p>
                </div>
                <div className=" flex flex-col pt-6 mr-1 gap-4">
                    <Link to={`/details/${_id}`}><button className="btn">See Details</button></Link>
                   <Link to={`/update/${_id}`}><button className="btn">Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Products;
Products.propTypes = {
    product: PropTypes.object
}