// import { useEffect, useState } from "react";

// const UseEffect_Fetch_Reload = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [search,setSearchs]=useState("");


//   //   const users_data = () => {

//   //     setLoading(true);
//   //     setError(null);

//   // // functon kulla useeffect function use panna mudiyathu

//   //       fetch("https://dummyjson.com/users?limit=10")
//   //         .then((res) => res.json())//res-response
//   //         .then((data) => { setProducts(data.users); setLoading(false); })// data- data kula irukura data value get pani yetothuto varum
//   //         //.finally- last of dataka 
//   //         .catch(() => { setError("Some items have a problem"); setLoading(false); })// catch- yethavathu  erroe irthu show aganumathukaga

//   //   };
//   //console.log(users);

 
    
//     const users_data=async()=>{
//    setLoading(true);
//     setError(null);

//     // functon kulla useeffect function use panna mudiyathu
//   try{
//      const res = await fetch("https://dummyjson.com/products?limit=5");
//     const data = await res.json();
//      setUsers(data.users) ; 
   
//   }
//   catch(err){
//     setError(console.error("some thing erroe",err.message));
//   }
//   finally{
//        setLoading(false);
//   }
// }

//  useEffect(()=>{
// users_data();
// },[]);


// const serach=(e)=>{
//   setSearchs(e.target.value);

// }

// const  filteredproducts = users;

// filteredproducts=users.filter.title.toLowerCase().includes(search.toLowerCase())


// const SkeletonCard = () => ( <div className="bg-gray-200 animate-pulse rounded-2xl overflow-hidden flex flex-col"> 
// <div className="h-56 w-full bg-gray-300"></div> <div className="p-4 flex flex-col flex-grow"> 
//   <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div> <div className="h-4 bg-gray-300 rounded mb-4 w-full">
//     </div> <div className="flex justify-between items-center mt-auto"> <div className="h-6 bg-gray-300 rounded w-1/3"></div> 
// <div className="h-8 bg-gray-300 rounded w-16"></div> </div> </div> </div> );
//   return (

//     <>

//       <div>
//         <div><h1>Welcome to React Hook in UseEffect </h1></div>
//       </div>
//         <input type="text" onChange={serach} placeholder="Searchs" />
//       <button onClick={users_data} className="bg-amber-950 text-white">Click Here</button>

     

//       {error && <p className="text-red-500">{error}</p>}

//        {loading?Array.from({length:10}).map((_,f)=>(<SkeletonCard key={f}/>)):
       
//        filteredproducts.map((user_new) => (
//         <div key={user_new.id}>

//           <h1>{user_new.firstName} {user_new.maidenName} {user_new.lastName} </h1>
//           <p>{user_new.age}</p>
//           <p>{user_new.birthDate}</p>
//           <p>{user_new.gender}</p>
//           <p>{user_new.phone}</p>
//           <p>{user_new.email}</p>
//           <p>{user_new.university}</p>


//         </div>
//       ))}


//     </>
//   )
// };
// export default UseEffect_Fetch_Reload;

import { useEffect, useState } from "react";

const UseEffect_Fetch_Reload = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const products_data = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products); // ✅ correct key
    } catch (err) {
      console.error("Something error", err.message);
      setError("Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };




  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // ✅ Search Filter
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const SkeletonCard = () => (
    <div className="bg-gray-200 animate-pulse rounded-2xl overflow-hidden flex flex-col">
      <div className="h-56 w-full bg-gray-300"></div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded mb-4 w-full"></div>
        <div className="flex justify-between items-center mt-auto">
          <div className="h-6 bg-gray-300 rounded w-1/3"></div>
          <div className="h-8 bg-gray-300 rounded w-16"></div>
        </div>
      </div>
    </div>
  );

  return (
    <>
     

      <div>
  <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700">
    Our Product List
  </h2>
</div>

      <input type="text" onChange={handleSearch} placeholder="Search products" />
      <button onClick={products_data} className="bg-amber-950 text-white">
        Reload Products
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {loading
        ? Array.from({ length: 5 }).map((_, f) => <SkeletonCard key={f} />)
        : filteredProducts.map((product_New) => (
            <div key={product_New.id} className="border p-2 m-2 rounded">
              <img
                src={product_New.images[0]}
                alt={product_New.title}
                className="w-40 h-40 object-cover"
              />
              <h1 className="font-bold">{product_New.title}</h1>
              <h2 className="text-gray-600">{product_New.brand}</h2>
              <p>{product_New.description}</p>
              <button className="bg-blue-600 text-white px-4 py-1 rounded mt-2">
                ${product_New.price}
              </button>
            </div>
          ))}
    </>
  );
};

export default UseEffect_Fetch_Reload;


