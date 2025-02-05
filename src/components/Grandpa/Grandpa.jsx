import { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

// Context API
export const AssetContext=createContext("Diamond Ring");
export  const MoneyContext=createContext(100);

const Grandpa = () => {
    const [money,setMoney]=useState(100);
    const  gift="Gold ring";
    return (
        <div className='grandpa w-max'>
            <h2>Grandpa</h2>
            <MoneyContext.Provider value={[money,setMoney]}>
                
            <AssetContext.Provider value='Diamond'>

            <section className='flex'>
            <Dad gift={gift}></Dad>
            <Uncle></Uncle>
            <Aunty gift={gift}></Aunty>
            </section>
            </AssetContext.Provider>
            </MoneyContext.Provider>
            <p className="text-red-500">Papa Got: {money}</p>
        </div>
    );
};

export default Grandpa;