
import { useLoaderData } from "react-router-dom";
import Brand from "./bRAND.JSX";
import Banner from "../../components/Banner/Banner";




const Home = () => {
   const brands = useLoaderData()
    
    return (
        <div className="px-2">
           <Banner/>
            <Brand brands={brands}></Brand>
            
        </div>
    );
};

export default Home;