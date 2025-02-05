import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = ({gift}) => {
    const [money,setMoney]=useContext(MoneyContext);
    return (
        <div>
           <h2>Aunty</h2> 
           <section className="flex">
            <Cousin name="Kisi"></Cousin>
            <Cousin gift={gift} name="Tisi"></Cousin>
            {/* <br /> */}
           </section>
            <p className="text-red-500">Papa Got: {money}</p>
            <button onClick={(  )=>setMoney(money+100)} className="m-2 p-2 border-4 rounded-lg  hover:cursor-pointer border-orange-400">Add 100 tk</button>
        </div>
    );
};

export default Aunty;