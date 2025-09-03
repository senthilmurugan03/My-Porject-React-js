
import { useEffect, useState } from "react";

const UseEffect_Fetch = () => {
  const [setout, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
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
{setout.map((product_New)=>(
  <div key={product_New.id}>
<img src={product_New.images[0]} alt={product_New.title} />
<h1>{product_New.title}</h1>
<h2>{product_New.brand}</h2>
<p>{product_New.description}</p>

<button>{product_New.price}</button>

  </div>
))}
    </>
  );
};
export default UseEffect_Fetch;

// white code get in AI


