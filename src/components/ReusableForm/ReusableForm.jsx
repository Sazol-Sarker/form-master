
const ReusableForm = ({formTitle,btnText,handleData,children}) => {


    const formHandler=(e)=>{
        e.preventDefault();
        const data={
            name:e.target.userName.value,
            email:e.target.userEmail.value
        };

        handleData(data);

    }
    return (
        <div className="flex flex-col text-lg rounded-md justify-center items-center bg-slate-300 border-4 border-yellow-300">
           <h2 className="font-bold text-2xl"><em>{children}</em></h2> 
           <form onSubmit={formHandler} className="flex flex-col justify-center items-center m-2 p-2">
            <input  className="m-2 p-2 w-80 rounded-md" type="text" name="userName" placeholder="Enter your name" />  <br />
            <input className="m-2 p-2 w-80 rounded-md" type="email" name="userEmail" placeholder="Enter your email" />  <br />
            <input className="m-2 p-2 rounded-md  border-4 border-green-400 bg-yellow-300 hover:cursor-pointer" type="submit" name="name" value={btnText} />  

           </form>
        </div>
    );
};

export default ReusableForm;