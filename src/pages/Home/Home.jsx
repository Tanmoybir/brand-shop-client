
import { useLoaderData } from "react-router-dom";
import Brand from "./bRAND.JSX";



const Home = () => {
   const brands = useLoaderData()
    
    return (
        <div className="px-2">
           
            <Brand brands={brands}></Brand>
            
        </div>
    );
};

export default Home;