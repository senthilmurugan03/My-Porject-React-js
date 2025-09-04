// import { useState } from "react";

// const Qustion = () => {
//     const [defalut, sentQustion_02] = useState(false);
//     const [defalut_01, sentQustion_03] = useState(false);
//     const [question_One, sentQustion] = useState([{ id: 1, qustion: "state is a way to store and manage data inside a component.", id: 2, qustion01: "It helps React know when to re-render (update) the UI when the data changes" }]);
//     const [setstart_01, sentQustion_01] = useState([{ id: 1, qustion: "useState is a Hook in React that allows you to create and use state inside a functional component", id: 2, qustion_01: "It returns an array with two valuesThe current state value A function to update the state" }]);

//   const data=()=>{
//         setTimeout(() => {
//             sentQustion_03(true)
//         }, 1000)
//     };
//     const handling = () => {
//         setTimeout(() => {
//             sentQustion_02(true)
//         }, 1000);
  

//     }
//     return (

//         <>
//             <section className=" flex justify-center">
//                 <button onClick={handling} className="bg-amber-500">This is State</button>
//                 {defalut ? question_One.map((questions, i) => (
                
//                     <h2>
//                         <img src="./image/cap.jpg" alt=""  className="h-85"/>
//                         {questions.qustion}
//                         <br />
//                         {questions.qustion01}
                    

//                     </h2>

//                 )) : ""}

//                 <button onClick={data} className="bg-red-600">This is Usestate</button>
//                 {defalut_01 ? setstart_01.map((questions, i) => (
//                     <>
//                         <h2>
//                             <img src="./image/thons.jpg" alt="" />
//                             {questions.qustion}
//                             <br />
//                             {questions.qustion_01}


//                         </h2>
//                     </>
//                 )) : ""}
//             </section>



//         </>
//     )
// }
// export default Qustion;
import { useState } from "react";

const Qustion = () => {
  const [defalut, sentQustion_02] = useState(false);
  const [defalut_01, sentQustion_03] = useState(false);

  // ✅ ஒவ்வொரு objectக்கும் unique id கொடுத்தேன்
  const [question_One, sentQustion] = useState([
    { id: 1, qustion: "state is a way to store and manage data inside a component." },
    { id: 2, qustion01: "It helps React know when to re-render (update) the UI when the data changes" }
  ]);

  const [setstart_01, sentQustion_01] = useState([
    { id: 1, qustion: "useState is a Hook in React that allows you to create and use state inside a functional component" },
    { id: 2, qustion_01: "It returns an array with two values: The current state value and a function to update the state" }
  ]);

  const data = () => {
    setTimeout(() => {
      sentQustion_03(true);
    }, 1000);
  };

  const handling = () => {
    setTimeout(() => {
      sentQustion_02(true);
    }, 1000);
  };

  return (
    <>
      <section className="flex justify-center gap-5">
        <button onClick={handling} className="bg-amber-500 px-3 py-2 rounded">
          This is State
        </button>

        {defalut &&
          question_One.map((questions) => (
            <h2 key={questions.id}>
              <img src="./image/cap.jpg" alt="" className="h-20" />
              {questions.qustion}
              <br />
              {questions.qustion01}
            </h2>
          ))}

        <button onClick={data} className="bg-red-600 px-3 py-2 rounded">
          This is useState
        </button>

        {defalut_01 &&
          setstart_01.map((questions) => (
            <h2 key={questions.id}>
              <img src="./image/thons.jpg" alt="" className="h-20" />
              {questions.qustion}
              <br />
              {questions.qustion_01}
            </h2>
          ))}
      </section>
    </>
  );
};

export default Qustion;
