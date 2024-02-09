import { useLoaderData } from "react-router-dom";
import MyCartCard from "./MyCartCard";
import { useState } from "react";

const MyCart = () => {
    const loadedMyCartItem = useLoaderData()
    const [myCartItem, setMyCartItem] = useState(loadedMyCartItem)
    //    console.log(myCartItem);
    return (
        <div>
            <div className="">
                {
                    myCartItem?.map(item => <MyCartCard
                        key={item._id}
                        item={item}
                        myCartItem={myCartItem}
                        setMyCartItem={setMyCartItem}
                    />)
                }
            </div>
        </div>

    );
};

export default MyCart;