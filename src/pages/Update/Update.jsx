import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const product = useLoaderData()
    const { _id, image, details_img, name, description, price, rating, type, brand_name } = product

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const details_image = form.details_image.value;
        const productName = form.name.value;
        const brand_name = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        
        const updateProducts = { image, details_image, productName, brand_name, type, price, description, rating }
        // console.log(updateProducts);
        fetch(`http://localhost:5000/brands/${_id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProducts)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Products Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="mt-5 px-3">

            <form onSubmit={handleUpdateProduct} className="max-w-[400px] md:max-w-lg lg:max-w-3xl w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
                <h1 className="text-4xl text-white font-bold text-center">UPDATE PRODUCTS</h1>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Image</label>
                    <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" name="image" defaultValue={image} required placeholder="Image URl" id="img" />
                </div>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Details Image</label>
                    <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" name="details_image" defaultValue={details_img} required placeholder="Details Image URl" id="img1" />
                </div>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Product Name</label>
                    <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" defaultValue={name} name="name" placeholder="Product Name" id="product" />
                </div>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Brand Name</label>
                    <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" defaultValue={brand_name} name="brand" placeholder="Brand Name" id="brand" />
                </div>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Type</label>
                    <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" defaultValue={type} name="type" placeholder="Type of Product" id="password" />


                </div>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Price</label>
                    <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="number" defaultValue={price} name="price" placeholder="Product Price" id="price" />


                </div>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Short description</label>
                    <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" defaultValue={description} name="description" placeholder="Product description" id="description" />


                </div>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Rating</label>
                    <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" defaultValue={rating} name="rating" placeholder="Rating" id="Rating" />


                </div>
                <input className="w-full my-5 py-2 text-3xl bg-teal-500 shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg" type="submit" value="UPDATE" />

            </form>
        </div>
    );
};

export default UpdateProduct;