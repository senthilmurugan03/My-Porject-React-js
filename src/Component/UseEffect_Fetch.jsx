
import { useEffect, useState } from "react";

const UseEffect_Fetch = () => {
  const [setout, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=10")
      .then((res) => res.json())
      .then((data) => setProducts(data.users))
      .catch((err) => console.error("Some items have a problem:", err));
  }, []);

  console.log("This is product", setout);



    return (
      
    <>
<div>
  <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700">
    Our Product List
  </h2>
</div>

{setout.map((user_new) => (
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
  );
};
export default UseEffect_Fetch;

// white code get in AI


