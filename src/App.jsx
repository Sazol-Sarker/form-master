import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='text-xl font-bold text-slate-400 m-4'><em>A Simple Form</em></h1>
     <SimpleForm></SimpleForm>
    </>
  )
}

export default App
