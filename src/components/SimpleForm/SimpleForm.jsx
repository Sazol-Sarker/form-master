const SimpleForm = () => {

    const handleForm=(e)=>{
        e.preventDefault();
        // console.log(e);
        // react keeps full form elelment in e.target
        console.log(e.target);
        const nameField=e.target.name;
        const emailField=e.target.email;
        const phoneField=e.target.phone;
        console.log(nameField,emailField,phoneField);
        
        // form data= .value
        console.log(nameField.value,emailField.value,phoneField.value);
        



    }

    return (
        <div className="flex flex-col justify-center items-center">

        <form onSubmit={handleForm} className=" w-72 border p-6 shadow-lg rounded-lg bg-white">
            <input className="border-2 w-full  rounded-md border-green-500 m-2 p-2" name="name" type="text" placeholder="Name" />
            <input className="border-2 w-full rounded-md border-green-500 m-2 p-2" name="email" type="email" placeholder="Email" />
            <input className="border-2 w-full rounded-md border-green-500 m-2 p-2" name="phone" type="text" placeholder="Phone" />
            <input type="submit"  value="Submit" name="submit"  className="border-4 rounded-md border-green-500 p-2 m-2 bg-green-500 text-white hover:cursor-pointer"/>
            {/* <button onSubmit={handleForm} className="border-4 rounded-md border-green-500 p-2 m-2 bg-green-500 text-white">Submit</button> */}
        </form>
        </div>
    );
};

export default SimpleForm;
