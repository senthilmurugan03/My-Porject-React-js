import { useEffect, useState } from "react";

const UseEffect_reload = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => { 
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
      {loading ? (
        
        <div className="flex flex-col items-center text-white">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-6 text-lg font-semibold">Loading... Please wait</p>
        </div>
      ) : (
        
        <div className="text-center text-white">
          <img
            src="./image/ware.jpg"
            alt="React Example"
            className="rounded-2xl shadow-2xl mt-16 h-100 transform hover:scale-105 transition duration-500 ease-in-out"/>
        </div>
      )}
    </div>
  );
};

export default UseEffect_reload;   


