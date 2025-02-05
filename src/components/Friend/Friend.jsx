import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Friend = () => {
    const asset=useContext(AssetContext);
    return (
        <div>
           <h2>Friend Got:</h2> 
           <p>{asset}</p>
        </div>
    );
};

export default Friend;