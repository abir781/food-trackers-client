import React, { useEffect, useState } from 'react';
import Expirecard from './Expirecard';

const Expiryfood = () => {
    const [expire,setexpire]=useState([]);
           useEffect(() => {
                
              fetch("https://food-server-brown.vercel.app/expiryfoods").then(res=>res.json()).then(data=>setexpire(data))
              
        
          },[] );
    return (
        <div className='w-11/12 mx-auto my-10'>



            <h2 className='text-4xl mx-auto text-yellow-700 text-center mb-10'>Expired Foods</h2>
            
            
                <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
                    {

                        expire.map(singleexpire=><Expirecard key={singleexpire._id} singleexpire={singleexpire}></Expirecard>)

                    }

                  </div>

            
            
        </div>
    );
};

export default Expiryfood;