import {  useState } from "react";

const UseEffect_Fetch_Reload = () => {
  const [users, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const users_data = () => {

    setLoading(true);
    setError(null);

// functon kulla useeffect function use panna mudiyathu

      fetch("https://dummyjson.com/users?limit=10")
        .then((res) => res.json())//res-response
        .then((data) => { setProducts(data.users); setLoading(false); })// data- data kula irukura data value get pani yetothuto varum
        //.finally- last of dataka 
        .catch(() => { setError("Some items have a problem"); setLoading(false); })// catch- yethavathu  erroe irthu show aganumathukaga
 
  };
  //console.log(users);

  return (

    <>

      <div>
        <div><h1>Welcome to React Hook in UseEffect </h1></div>
      </div>

      <button onClick={users_data} className="bg-amber-950 text-white">Click Here</button>

      {loading && 
      (<div className="flex flex-col items-center text-white">
        <div className="w-16 h-16 border-4 border-red-700 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-6 text-lg font-semibold">Loading... Please wait</p>
      </div>)
      }

       {error && <p className="text-red-500">{error}</p>}

      {users.map((user_new) => (
        <div key={user_new.id}>

          <h1>{user_new.firstName} {user_new.maidenName} {user_new.lastName} </h1>
          <p>{user_new.age}</p>
          <p>{user_new.birthDate}</p>
          <p>{user_new.gender}</p>
          <p>{user_new.phone}</p>
          <p>{user_new.email}</p>
          <p>{user_new.university}</p>


        </div>
      ))}


    </>
  )
};
export default UseEffect_Fetch_Reload;


