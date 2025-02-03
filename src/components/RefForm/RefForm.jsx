import { useEffect, useRef } from "react";

const RefForm = () => {
    const userEmailRef=useRef(null);
    const userPwdRef=useRef(null);

    const formHandler=(e)=>{
        e.preventDefault();
        console.log(userEmailRef.current.value,userPwdRef.current.value);

    }
    useEffect(()=>{
        userEmailRef.current.focus();
        userPwdRef.current.focus();



        },[])


    return (
        <div className="flex flex-col text-lg rounded-md justify-center items-center bg-slate-300 border-4 border-yellow-300">
           <h2 className="font-bold text-2xl"><em>Hello useRef form</em></h2> 
           <form onSubmit={formHandler} className="flex flex-col justify-center items-center m-2 p-2">
            <input ref={userEmailRef}  className="m-2 p-2 w-80 rounded-md" type="email" name="userEmail" required/>  <br />
            <input ref={userPwdRef}  className="m-2 p-2 w-80 rounded-md" type="password" name="userPwd" required/>  <br />
            <input className="m-2 p-2 rounded-md  border-4 border-green-400 bg-yellow-300 hover:cursor-pointer" type="submit" name="submit" value="Submit" />  
           
           </form>
        </div>
    );
};

export default RefForm;