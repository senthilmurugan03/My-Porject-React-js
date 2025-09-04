import { useRef } from "react";


const UseRef =()=>{


  const textchange=useRef(null);
  const  outputs=useRef(null);
 
   const datas=()=>{
       
     const getvalue=textchange.current.value;
      outputs.current.textContent=getvalue;
   }

    return(

        <>
        
    <div>
        
        <input  ref={textchange} type="text" placeholder="Any words" onChange={datas} />

        <h1 ref={outputs}> this value</h1>
        </div>    
        </>
    )
}
export default UseRef;



