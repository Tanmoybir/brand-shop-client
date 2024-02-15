import MyCartCard from "./MyCartCard";
import {  useEffect, useState } from "react";
import { auth } from "../../firebase/firebaseConfig";

const MyCart = () => {
    const [myCartItem, setMyCartItem] = useState([])
    const email = auth.currentUser.email
    useEffect(() => {
        fetch(`http://localhost:5000/myCarts?email=${email}`)
        .then(res => res.json())
        .then(data => {
            setMyCartItem(data)
        })
    }, [email])
   
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