import { useContext } from "react";
import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";
import { MoneyContext } from "../Grandpa/Grandpa";

const Dad = ({gift}) => {
    const [money]=useContext(MoneyContext);
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex">

            <Myself gift={gift}></Myself>
            <Brother></Brother>
            <Sister></Sister>
            </section>
            
            <p className="text-red-500">Papa Got: {money} </p>
            {/* <button onClick={(  )=>setMoney(money+100)} className="m-2 p-2 border-4 rounded-lg  hover:cursor-pointer border-orange-400">Add 100 tk</button> */}
    
        </div>
    );
};

export default Dad;