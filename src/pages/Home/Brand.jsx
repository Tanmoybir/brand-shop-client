

import BrandCard from "./BrandCard";


const Brand = ({brands}) => {
   

 
    return (
        <div className="my-10">
          
           <h1 className="text-5xl font-bold text-center mb-5">Our trusted Brands</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3">
                {
                    brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                }
            </div>
          
        </div>
    );
};

export default Brand;