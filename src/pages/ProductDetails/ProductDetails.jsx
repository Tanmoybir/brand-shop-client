import { useLoaderData } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import toast from "react-hot-toast";


const ProductDetails = () => {
    const product = useLoaderData()
    // console.log(product);
    const { image, details_img, name, description, price, rating, type } = product
    const email = auth.currentUser.email
    // console.log(email);
    const addCart = { email, image, name, price}
    const handleAddCart = () => {
        fetch('http://localhost:5000/myCarts', {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body:JSON.stringify(addCart)

        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.acknowledged){
                toast.success('Added MY Cart Successfully')
            }
        })
    }
    return (
        <div className="flex flex-col md:flex-row items-center shadow-lg p-5 max-w-3xl mx-auto gap-5 my-10">
            {/* image */}
            <div className="h-[500px] w-full bg-green-500 flex-1 rounded-3xl overflow-hidden ">
                <img src={details_img} alt="" className="w-full h-full object-cover " />
            </div>
            {/* text */}
            <div className="flex-1 space-y-5">
                <h3 className="text-2xl font-semibold ">{name}</h3>
                <p className="text-sm rounded-lg text-center p-2 bg-gray-700 text-white">Category: {type}</p>
                <p className="text-sm text-gray-500">{description}</p>
                <h2 className="text-2xl font-medium text-center">${price}</h2>
                <button onClick={handleAddCart} className="bg-gray-900 text-white px-6 py-2 w-full rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900">Add to Cart</button>
            </div>

        </div>
    );
};

export default ProductDetails;