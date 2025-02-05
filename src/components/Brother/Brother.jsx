import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Brother = () => {
    const asset=useContext(AssetContext);
    return (
        <div>
            <h2>Brother Got:</h2>
            <p>{asset}</p>
        </div>
    );
};

export default Brother;