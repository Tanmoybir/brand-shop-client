import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import PropTypes from 'prop-types';


const MyCartCard = ({ item, myCartItem, setMyCartItem }) => {
    const { _id, image, price, name } = item

    const handleDelete = () => {
        fetch(`http://localhost:5000/myCart/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount > 0) {
                    toast.success('Deleted Successfully')
                }
                const remaining = myCartItem.filter(element => element._id !== _id)
                setMyCartItem(remaining)
            })
    }
    return (
        <div>
            <div className="grid grid-cols-3 border-b pb-6">
                <div className="flex flex-wrap items-center gap-4">
                    <img className="w-[75px] h-[75px] rounded-lg bg-slate-500" src={image} alt="" />
                    <div>
                        <h5 className="text-lg font-medium"></h5>
                        <p className="text-sm text-gray-400">{name}</p>
                    </div>
                </div>
                {/* item increase decrees  */}
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-10">
                    {/* <div className="space-x-3">
                        <span className="py-1 px-2 hover:text-[#3EBFA4] text-xl duration-200">-</span>
                        <span className="py-1 px-2.5 border hover:bg-[#3EBFA4] hover:text-white hover:border-[#3EBFA4] duration-300 ease-in-out rounded-sm">4</span>
                        <span className="py-1 px-2 hover:text-[#3EBFA4] text-xl duration-200">+</span>
                    </div> */}
                    <h6 className="text-xl font-medium text-slate-800">${price}</h6>
                </div>
                <div className="text-3xl flex flex-col justify-center items-end pt-3 mr-4 space-y-3">
                    <MdDelete onClick={handleDelete} />
                   
                </div>
            </div>

            {/* calculation part  */}
            {/* <div className="space-y-10">
                <div className="flex justify-between items-center py-6">
                    <h5 className="text-xl text-slate-800 capitalize">total Price :</h5>
                    <h4 className="text-xl font-medium text-slate-800">$155.99</h4>
                </div>
                <button className="font-semibold bg-[#3EBFA4] text-white py-4 w-full duration-500 active:bg-[#278b76]">proceed to checkout</button>
            </div> */}
        </div>
    );
};

export default MyCartCard;
MyCartCard.propTypes = {
    item: PropTypes.object,
    myCartItem: PropTypes.array,
    setMyCartItem: PropTypes.func
}