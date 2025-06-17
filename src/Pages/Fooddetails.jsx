import axios from 'axios';
import React, { Suspense, use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Textnotelist from '../Components/Textnotelist';
import { Authcontext } from '../Context/Authcontext';


const getRemainingTime = (expirydate) => {
  const now = new Date();
  
  const expiry = new Date(expirydate);
  

  const diffMs = expiry.getTime() - now.getTime();

  if (diffMs <= 0) return "Expired";

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);

  return `${days}d ${hours}h ${minutes}m left`;
};

    const textnotepromise=foodid=>{
    return fetch(`https://food-server-brown.vercel.app/textnotes?foodid=${foodid}`).then(res=>res.json())
}


const Fooddetails = () => {


const [notes, setNotes] = useState([]);

const fooddetail=useLoaderData();

const {user}=use(Authcontext);



const [disablebtn,setdisablebtn]=useState(true);




   useEffect(() => {

    if(user?.email==fooddetail.email){
    setdisablebtn(false);
}
else{
    setdisablebtn(true);
}


 
  },[user?.email,fooddetail.email] );




    
   
   
    const [countdown, setCountdown] = useState(getRemainingTime(fooddetail.expirydate));

     useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getRemainingTime(fooddetail.expirydate));
    }, 60000); // update every minute

    return () => clearInterval(interval);
  }, [fooddetail.expirydate]);

  const handleaddnote=(e)=>{
    e.preventDefault();

    const form=e.target;
        
    const textnote=form.textnote.value;
    const posteddate=new Date().toLocaleDateString();
    const newnoteobj={
        foodid:fooddetail._id,
        textnote,
        posteddate

    }
    // console.log(newnoteobj)

    axios.post('https://food-server-brown.vercel.app/textnotes',newnoteobj)
    .then(res=>{
        
        setNotes(prev => [...prev, newnoteobj]);
    })
    .catch(error=>{
        console.log(error)
    })
    

  }
    // console.log(fooddetail)
    return (
        <div className='w-11/12 mx-auto min-h-screen'>
            <div className="lg:flex gap-10 mt-20">
                <div>
                    <img className='h-[500px] w-[1500px] rounded-3xl' src={fooddetail.image} alt="" />

                </div>
                <div className='w-full flex justify-center items-center  border border-yellow-700 p-10 rounded-3xl'>
                    <div className='text-center'>

                        <h1 className='text-3xl font-semibold text-yellow-700 '>Title: {fooddetail.title}</h1>
                    <h2 className='text-2xl font-semibold text-yellow-700'>Category: {fooddetail.category}</h2>
                    <h2 className='text-2xl font-semibold text-yellow-700'>Quantity: {fooddetail.quantity}</h2>
                    <h2 className='text-2xl font-semibold text-yellow-700'>Expirydate: {fooddetail.expirydate}</h2>
                    <h2 className='text-2xl font-semibold text-yellow-700'>Description: {fooddetail.description}</h2>
                           <h2 className='text-2xl font-semibold text-yellow-700'>Added-date: {fooddetail.addeddate}</h2>
                    <h2 className='text-2xl font-semibold text-yellow-700'>Email: {fooddetail.email}</h2>
                     
                    

                    </div>
                   

                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <h2 className='text-4xl font-bold text-yellow-700'>{countdown}</h2>
            </div>

            <div className='mt-10'>
                <h2 className='text-4xl text-yellow-700 text-center mb-10'>Add a note</h2>

                <form onSubmit={handleaddnote}>

                      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">Text note</label>
                         <textarea className="textarea w-full" name='textnote' placeholder="Bio"></textarea>
                        

                         
                          </fieldset>

                          <input type="submit" disabled={disablebtn} className='btn w-full' value="Add note" />

                </form>
                
            </div>

            <div className='mt-10'>
                

                 <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>

                    <Textnotelist notes={notes}  textnotepromise={textnotepromise(fooddetail._id)}></Textnotelist>

                 </Suspense>

                 

            </div>
            
        </div>
    );
};

export default Fooddetails;