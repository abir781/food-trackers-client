import React, { useEffect, useState } from 'react';
import Nexpirecard from './Nexpirecard';

const Nearlyexpire = () => {
    const [nearlyexpire,setnearlyexpire]=useState([]);
       useEffect(() => {
            
          fetch("https://food-server-brown.vercel.app/nearylyexpiryfoods").then(res=>res.json()).then(data=>setnearlyexpire(data))
          
    
      },[] );
      
    return (
        <div className='w-11/12 mx-auto mt-25'>
            <h2 className='text-5xl text-center font-bold mb-15'>Nearly Expiry Items </h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>

                 {
                nearlyexpire.map(nexpire=><Nexpirecard key={nexpire._id} nexpire={nexpire}></Nexpirecard>)
                }

            </div>
           
            
        </div>
    );
};

export default Nearlyexpire;