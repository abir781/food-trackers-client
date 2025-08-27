// import React, { Suspense, useEffect, useState } from 'react';
// import Allfoods from '../Components/Allfoods';


// // const foodpromise=fetch("https://food-server-brown.vercel.app/allfoods").then(res=>res.json())

// const Fridge = () => {
//       const [prevfood,setprevfood]=useState([]);
//       const [foods, setFoods] = useState([]);
//       const [search,setSearch]=useState("");
//       const [category, setCategory] = useState("all");
//       const [filteredFoods, setFilteredFoods] = useState([]);
      

// //   const fetchFoods = () => {
// //     fetch(`https://food-server-brown.vercel.app/allfoods?searchParams=${search}`)
// //       .then(res => res.json())
// //       .then(data => setFoods(data))
// //       .catch(err => console.error("Error fetching foods:", err));
// //   };

//   useEffect(() => {
//      fetch(`https://food-server-brown.vercel.app/allfoods?searchParams=${search}`)
//       .then(res => res.json())
//       .then(data => setFoods(data))
//       .catch(err => console.error("Error fetching foods:", err));
//   }, [search]);

//   useEffect(() => {
//     let filtered = foods;

//     if (category !== "all") {
//       filtered = foods.filter((food) => food.category === category);
//     }

//     setFilteredFoods(filtered);
//   }, [foods, category]);

//     const handleSortByQuantityDesc = () => {
//     const sorted = [...foods].sort((a, b) => b.quantity - a.quantity);
//     setFoods(sorted);
//   };

//   const handleSortByQuantityAsc = () => {
//     const sorted = [...foods].sort((a, b) => a.quantity - b.quantity);
//     setFoods(sorted);
//   };

  
//     return (
//         <div className='my-25'>


//             <div className='flex gap-4 justify-center mb-15'>
//     <div className="md:w-[400px]  mb-4">
//         <input
//           onChange={(e) => setSearch(e.target.value)}
//           type="text"
//           name="search"
//           placeholder="search"
//           className="input input-bordered w-full"
//           required
//         />
//       </div>
//         <div className='md:w-[400px]'>

//         <select
//           onChange={(e) => setCategory(e.target.value)}
//           className="select select-bordered w-full max-w-xs"
//         >
//           <option value="all">All Categories</option>
//           <option value="dairy">Dairy</option>
//           <option value="meat">Meat</option>
//           <option value="vegetable">Vegetable</option>
//           <option value="snacks">Snacks</option>
//         </select>
//             </div>

//             <div className=''>

//                  <button 
//         onClick={handleSortByQuantityDesc} 
//         className=" px-4 py-2 btn btn-primary  rounded"
//       >
//         Sort by Quantity (Desc)
//       </button>

//          <button
//             onClick={handleSortByQuantityAsc}
//             className="px-4 py-2 btn btn-primary  rounded"
//           >
//             Sort by Quantity (Asc)
//           </button>

//             </div>

             

//                 </div>
            

    

       
            

//                 <Allfoods foods={filteredFoods} setFoods={setFoods} ></Allfoods>

           
            
            
//         </div>
//     );
// };

// export default Fridge;

import React, { useEffect, useState } from 'react';
import Allfoods from '../Components/Allfoods';

const Fridge = () => {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    fetch(`https://food-server-brown.vercel.app/allfoods?searchParams=${search}`)
      .then(res => res.json())
      .then(data => setFoods(data))
      .catch(err => console.error("Error fetching foods:", err));
  }, [search]);

  useEffect(() => {
    let filtered = [...foods];

    // Category filter
    if (category !== "all") {
      filtered = filtered.filter((food) => food.category === category);
    }

    // Sorting logic
    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.quantity - b.quantity);
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.quantity - a.quantity);
    }

    setFilteredFoods(filtered);
  }, [foods, category, sortOrder]);

  return (
    <div className="my-25">
      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-15">
        {/* Search */}
        <div className="md:w-[400px] mb-4">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name="search"
            placeholder="Search food..."
            className="input input-bordered w-full"
          />
        </div>

        {/* Category */}
        <div className="md:w-[400px]">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full max-w-xs"
          >
            <option value="all">All Categories</option>
            <option value="dairy">Dairy</option>
            <option value="meat">Meat</option>
            <option value="vegetable">Vegetable</option>
            <option value="snacks">Snacks</option>
          </select>
        </div>

        {/* Sorting */}
        <div className="md:w-[250px]">
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            className="select select-bordered w-full"
          >
            <option value="none">Sort by Quantity</option>
            <option value="asc">Quantity (Ascending)</option>
            <option value="desc">Quantity (Descending)</option>
          </select>
        </div>
      </div>

      {/* Foods list */}
      <Allfoods foods={filteredFoods} setFoods={setFoods} />
    </div>
  );
};

export default Fridge;
