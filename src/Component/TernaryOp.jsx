import { useState } from "react";


const TernaryOp = () => {

    const [seton, setLight] = useState(false);
    return (

        <>

            <div>
                <h1 className="font-bold p-3" >Ternary Operater</h1>

                {seton ? <h1 className="bg-green-600 p-7 rounded-4xl  m-6" >on</h1> : <h1 className="bg-red-800 p-7 rounded-4xl">off</h1>}
                <div className=" flex justify-center">

                    <button className="bg-yellow-200 rounded-4xl p-7  m-6" onClick={() => { setLight(!seton); }}>{seton ? "on" : "off"}</button>

                </div>

            </div>
        </>
    )
}
export default TernaryOp;
