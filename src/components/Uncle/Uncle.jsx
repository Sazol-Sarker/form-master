import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { AssetContext } from "../Grandpa/Grandpa";

const Uncle = () => {
    const asset=useContext(AssetContext);
    return (
        <div className=" ">
           <h2 className="">Uncle Got: {asset}</h2> 
           <section className=" ">
            <Cousin name="Sayem"></Cousin>
            <Cousin name="Nayem"></Cousin>
           </section>
        </div>
    );
};

export default Uncle;