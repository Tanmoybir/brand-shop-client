import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const BrandCard = ({ brand }) => {
    const { image, brand_name } = brand
    
    return (
        <div className="flex justify-center items-center">
            <Link to={`/brands/${brand_name}`}>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md lg:w-[400px] rounded-xl bg-clip-border">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                    <img className="w-full h-full" src={image} alt="profile-picture" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {brand_name}
                    </h4>

                </div>

            </div>
            </Link>
        </div>
    );
};

export default BrandCard;
BrandCard.propTypes = {
    brand: PropTypes.object
}