import { Link } from "react-router-dom";

const Navigate01 = () => {

    return (

        <>


            <div className="bg-blue-400">
                <div className="text-black flex font-bold p-3.5 gap-7 justify-end text-shadow-2xs">
                    <Link to="Usestate_01">Usestate</Link>
                    <Link to="TernaryOp">TernaryOp</Link>
                    <Link to="Qustion">Qustion</Link>
                    <Link to="Form">Form</Link>
                    <Link to="UseEffect_Page">UseEffect_Page</Link>
                    <Link to="UseEffect_reload">UseEffect_reload</Link>
                    <Link to="UseEffect_Fetch">UseEffect_Fetch</Link>
                     <Link to="UseEffect_Fetch_Reload">UseEffect_Fetch_Reload</Link>
                     <Link to="UseRefColor">UseRefColor</Link>
                     <Link to="UseTRefStore">UseTRefStore</Link>
                     <Link to="UseRef">UseRef</Link>
                </div>
            </div>

        </>
    )
}
export default Navigate01;
