import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const Count = () => {
    const[expirycount,setexpirycount]=useState(0);
    const[nearlyexpirecount,setnearlyexpirecount]=useState(0);
      useEffect(() => {
                    
                  fetch("http://localhost:3000/expiryfoods").then(res=>res.json()).then(data=>setexpirycount(data.length))
                  
            
              },[] );


     useEffect(() => {
                    
                  fetch("http://localhost:3000/nearylyexpiryfoods").then(res=>res.json()).then(data=>setnearlyexpirecount(data.length))
                  
            
              },[] );
    return (
        <div className='w-11/12 mx-auto my-10'>
            <h1 className='text-5xl font-bold text-center mb-10'>CountUp</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

               <div className='bg-yellow-500 p-10 rounded-2xl'>

                <p className='text-2xl font-bold text-center'>Expired Food Count</p>

                <p className='text-2xl font-bold text-center'><CountUp start={0} end={expirycount} duration={9} delay={0}/> </p>
            </div>

            <div className='bg-yellow-500 p-10 rounded-2xl'>
                 <p className='text-2xl font-bold text-center'>Nearly Expired Food Count</p>

                <p className='text-2xl font-bold text-center'> <CountUp start={0} end={nearlyexpirecount} duration={9} delay={0}/></p>
            </div>

           </div>
           

           
           
            
        </div>
    );
};

export default Count;