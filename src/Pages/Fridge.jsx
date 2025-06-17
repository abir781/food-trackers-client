import React, { Suspense, useEffect, useState } from 'react';
import Allfoods from '../Components/Allfoods';


// const foodpromise=fetch("https://food-server-brown.vercel.app/allfoods").then(res=>res.json())

const Fridge = () => {
      const [foods, setFoods] = useState([]);
      const [search,setSearch]=useState("");
      const [category, setCategory] = useState("all");
      const [filteredFoods, setFilteredFoods] = useState([]);
      

//   const fetchFoods = () => {
//     fetch(`https://food-server-brown.vercel.app/allfoods?searchParams=${search}`)
//       .then(res => res.json())
//       .then(data => setFoods(data))
//       .catch(err => console.error("Error fetching foods:", err));
//   };

  useEffect(() => {
     fetch(`https://food-server-brown.vercel.app/allfoods?searchParams=${search}`)
      .then(res => res.json())
      .then(data => setFoods(data))
      .catch(err => console.error("Error fetching foods:", err));
  }, [search]);

  useEffect(() => {
    let filtered = foods;

    if (category !== "all") {
      filtered = foods.filter((food) => food.category === category);
    }

    setFilteredFoods(filtered);
  }, [foods, category]);

  
    return (
        <div>


            <div className='flex gap-4 justify-center'>
    <div className="md:w-[400px]  mb-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          placeholder="search"
          className="input input-bordered w-full"
          required
        />
      </div>
        <div className='md:w-[400px]'>

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

                </div>
            

    

       
            

                <Allfoods foods={filteredFoods} setFoods={setFoods} ></Allfoods>

           
            
            
        </div>
    );
};

export default Fridge;