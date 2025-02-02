import { useState } from "react";

const StatefulForm = () => {
const [username,setUsername]=useState('John doe');
const [useremail,setUseremail]=useState('John@gmail.com');
const [userpassword,setUserpassword]=useState('1Aa@!');
const [shortPwdError,setShortPwdError]=useState(false);
const formHandler=(e)=>{
    e.preventDefault();
    if(e.target.userPwd.value.length<8)
        {
            setShortPwdError(true);
        }
    console.log(username,useremail,userpassword);

}
const handleUserNameChange=e=>{
    setUsername(e.target.value);
    console.log(e.target.value);
}
const handleUserEmailChange=e=>{
    setUseremail(e.target.value);
    console.log(e.target.value);
}

const handleUserPwdChange=e=>
{
  
    

        setUserpassword(e.target.value);
        console.log(e.target.value);
   
}

    return (
        <div className="flex flex-col text-lg rounded-md justify-center items-center bg-slate-300 border-4 border-yellow-300">
           <h2 className="font-bold text-2xl"><em>Hello form</em></h2> 
           <form onSubmit={formHandler} className="flex flex-col justify-center items-center m-2 p-2">
            <input onChange={handleUserNameChange} className="m-2 p-2 w-80 rounded-md" type="text" name="userName"  value={username} />  <br />
            <input onChange={handleUserEmailChange} className="m-2 p-2 w-80 rounded-md" type="email" name="userEmail" value={useremail} required/>  <br />
            <input onChange={handleUserPwdChange} className="m-2 p-2 w-80 rounded-md" type="password" name="userPwd" value={userpassword} required/>  <br />
            <input className="m-2 p-2 rounded-md  border-4 border-green-400 bg-yellow-300 hover:cursor-pointer" type="submit" name="name" value="Submit" />  
            <span className="text-xl text-red-600">
                {
                    shortPwdError&&
                    <p>Password length must be greater equal 8</p>

                }
            </span>
           </form>
        </div>
    );
};

export default StatefulForm;