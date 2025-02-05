import "./App.css";
import Grandpa from "./components/Grandpa/Grandpa";
// import HookForm from './components/HookForm/HookForm'
import ReusableForm from "./components/ReusableForm/ReusableForm";

// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import SimpleForm2 from './components/SimpleForm2/SimpleForm2'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {
  const handleSignUpData = (data) => {
    const { name, email } = data;
    console.log(name, email);
  };

  const handleUpdateData = (data) => {
    const { name, email } = data;
    console.log(name, email);
  };
  return (
    <>
      {/* <h1 className='text-xl font-bold text-slate-400 m-4'><em>A Simple Form</em></h1>
     <SimpleForm></SimpleForm> <br />
     <SimpleForm2></SimpleForm2> <br />
     <StatefulForm></StatefulForm>
     <br />
     <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}

      {/* <ReusableForm
        formTitle="Sign Up Form"
        btnText="Sign Up"
        handleData={handleSignUpData}
      >
        <div>
          <h2>Signup Profile</h2>
          <p>Please Signup Profile data</p>
        </div>
      </ReusableForm>
      <br />
      <ReusableForm
        formTitle="Profile Update Form"
        btnText="Update"
        handleData={handleUpdateData}
      >
        {" "}
        <div>
          <h2>Update Profile</h2>
          <p>Please Insert update data</p>
        </div>
      </ReusableForm> */}

      <Grandpa></Grandpa>

    </>
  );
}

export default App;
