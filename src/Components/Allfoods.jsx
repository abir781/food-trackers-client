import React, { use, useEffect, useState } from 'react';
import Singfood from './Singfood';

const Allfoods = ({foods,setFoods}) => {
    // const fooddata=use(foodpromise);
    
    // console.log(foods)
    return (
        <div className='w-11/12 mx-auto'>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 mb-10'>

                 {
                foods.map(singlefood=><Singfood key={singlefood._id} singlefood={singlefood}></Singfood>)
            }

            </div>

           
            
        </div>
    );
};

export default Allfoods;