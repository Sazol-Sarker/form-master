import useInputState from '../../hooks/useInputState'
const HookForm = () => {
const [username,setUsername]=useInputState('John doe');
const [useremail,setUseremail]=useInputState('Johndoe@ac.com');



const formHandler=(e)=>{
e.preventDefault();
console.log('Form data=> ',username,useremail);
}


    return (
        <div>
            <div className="flex flex-col text-lg rounded-md justify-center items-center bg-slate-300 border-4 border-yellow-300">
           <h2 className="font-bold text-2xl"><em>Custom Hook Form</em></h2> 
           <form onSubmit={formHandler}  className="flex flex-col justify-center items-center m-2 p-2">
            <input onChange={setUsername} value={username} className="m-2 p-2 w-80 rounded-md" type="text" name="userName" placeholder="Enter yourrr name" />  <br />
            <input onChange={setUseremail} className="m-2 p-2 w-80 rounded-md" value={useremail}  type="email" name="userEmail" placeholder="Enter your email" />  <br />
            <input className="m-2 p-2 rounded-md  border-4 border-green-400 bg-yellow-300 hover:cursor-pointer" type="submit" name="name" value="Submit" />  

           </form>
        </div>
            
        </div>
    );
};

export default HookForm;