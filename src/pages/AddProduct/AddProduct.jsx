import Swal from "sweetalert2";

const AddProduct = () => {
    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const productName= form.name.value;
        const brand_name = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const addProducts ={image,productName,brand_name,type,price,description,rating}
        console.log(addProducts);
        fetch('http://localhost:5000/brands',{
            method:'post',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(addProducts)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Products Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })  
            }
        })

    }
    return (
        <div className="mt-5 px-3">
            
            <form onSubmit={handleAddProduct} className="max-w-[400px] md:max-w-lg lg:max-w-3xl w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
                <h1 className="text-4xl text-white font-bold text-center">ADD PRODUCTS</h1>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Image</label>
                    <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" name="image" required placeholder="Image URl" id="img" />
                </div>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Product Name</label>
                    <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" name="name"  placeholder="Product Name" id="product" />
                </div>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Brand Name</label>
                    <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" name="brand" placeholder="Brand Name" id="brand" />
                </div>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Type</label>
                    <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" name="type"  placeholder="Type of Product" id="password" />
                   

                </div>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Price</label>
                    <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="number" name="price"  placeholder="Product Price" id="price" />
                   

                </div>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Short description</label>
                    <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" name="description"  placeholder="Product description" id="description" />
                   

                </div>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Rating</label>
                    <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" name="rating"  placeholder="Rating" id="Rating" />
                   

                </div>
                <input className="w-full my-5 py-2 text-3xl bg-teal-500 shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg" type="submit" value="ADD" />
               
            </form>
        </div>
    );
};

export default AddProduct;