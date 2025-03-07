import { useState } from "react";

const SimpleForm2 = () => {
    // const [,]=useState()

    const formHandler=(e)=>
    {
        e.preventDefault();
        console.log(e);
        console.log(e.target.userName.value);
        console.log(e.target.userEmail.value);
    }
    return (
        <div className="flex flex-col text-lg rounded-md justify-center items-center bg-slate-300 border-4 border-yellow-300">
           <h2 className="font-bold text-2xl"><em>Hello form</em></h2> 
           <form onSubmit={formHandler} className="flex flex-col justify-center items-center m-2 p-2">
            <input  className="m-2 p-2 w-80 rounded-md" type="text" name="userName" placeholder="Enter your name" />  <br />
            <input className="m-2 p-2 w-80 rounded-md" type="email" name="userEmail" placeholder="Enter your email" />  <br />
            <input className="m-2 p-2 rounded-md  border-4 border-green-400 bg-yellow-300 hover:cursor-pointer" type="submit" name="name" value="Submit" />  

           </form>
        </div>
    );
};

export default SimpleForm2;