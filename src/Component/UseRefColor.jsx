import { useRef } from "react";

const UseRefColor=()=>{

const inputs=useRef(null);
const outputs=useRef(null);

const header=()=>{
    const killer=inputs.current.value;
    
    killer === 'on'&& (outputs.current.style.backgroundColor='green');
    killer === 'off'&& (outputs.current.style.backgroundColor='red');

}
//   const header = () => {
//     const killer = inputs.current.value;
    
//     killer === 'on' && (outputs.current.style.backgroundColor = 'green');
//     killer === 'off' && (outputs.current.style.backgroundColor = 'red');
//   };
return(

    <>

    <div>
    <input ref={inputs} type="text" placeholder=" color changes" onChange={header} />
    <button ref={outputs}>Click Here</button>
   </div>
   
    </>
)
}
export default UseRefColor;

