import { useState } from "react";

const Usestate_01 = () => {

    const [value, updateValue] = useState(2);

    const Count = () => {
        updateValue(value * 2)
    };
    return (

        <>
            <div className="bg-orange-300 font-extrabold justify-items-center m-2 p-4">
              <div className="">
                <h1 >This is Usestate</h1>
                <h1 >{value}</h1>
            </div>
            <div>
                <button onClick={Count} className="bg-green-500 rounded-2xl p-2.5 justify-items-center">Click here</button>
            </div>
            </div>
            
        </>
    )
}
export default Usestate_01;
