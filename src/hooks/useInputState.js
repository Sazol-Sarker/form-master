import { useState } from "react"


const useInputState=(inputValue='')=>{
const [value,setValue]=useState(inputValue);

const handleValue=(e)=>{
    setValue(e.target.value);
}

return [value,handleValue];

}

export default useInputState;