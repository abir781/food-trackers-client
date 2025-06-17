import React, { use, useEffect, useState } from 'react';
import { Authcontext } from '../Context/Authcontext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Modal = ({setopenmodal,updateid,setallfoodsdata}) => {
       const {user}=use(Authcontext);
       
    

      const [addedDate, setAddedDate] = useState('');

  useEffect(() => {
     const today = new Date();
    const formatted = today.toISOString().split('T')[0]; 
    setAddedDate(formatted);
    
  }, []);
    const handleupdate=(e)=>{
        e.preventDefault();
        const form=e.target;
        
        const image=form.image.value;
        const title=form.title.value;
        const category=form.category.value;
        const quantity=form.quantity.value;
        const expiredate=new Date(form.expiredate.value + "T00:00:00");
        const expirydate=expiredate.toLocaleDateString();
        const description=form.description.value;
        const addeddate=form.addeddate.value;
        const email=form.email.value;
        
        
       
        const updatedfood={image,title,category,quantity,expirydate,description,addeddate,email}
        

         fetch(`https://food-server-brown.vercel.app/allfoods/${updateid}`,{
                    method:'PUT',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(updatedfood)
        
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.modifiedCount){
                        toast.success("data updated successfully")
                        fetch(`https://food-server-brown.vercel.app/myfoods?email=${user.email}`)
                         .then(res => res.json())
                          .then(updatedData => {
                           setallfoodsdata(updatedData); 
                         setopenmodal(false); 
                            })
                         .catch(err => {
                          console.error("Error refreshing data:", err);
                          toast.warning("Something went wrong while refreshing the data");
                           });
                        
                    }
                    
                })

      
    }
    return (
        <div  className='bg-gray-600 bg-opacity-50 p-25 absolute top-0 left-0 md:absolute md:top-10 md:left-120   z-50'>
            
             <form onSubmit={handleupdate} className='relative'>
                     <fieldset className="fieldset bg-gray-500 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">Food image url</label>
                         <input type="text" name='image' className="input w-full" placeholder="imageURL" />

                         
                          </fieldset>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <fieldset className="fieldset bg-gray-500 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">Title</label>
                         <input type="text" name='title' className="input w-full" placeholder="Title" />

                         
                          </fieldset>
                            {/* <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">Plant type</label>
                         <input type="text" name='plant' className="input w-full" placeholder="Plant-type" />

                         
                          </fieldset> */}

                          <fieldset className="fieldset bg-gray-500 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">
                <span className="label-text font-bold">Category</span>
              </label>

              <select className="input input-bordered w-full" name="category" id="day">
                <option value="dairy">Dairy</option>
                <option value="meat">Meat</option>
                <option value="vegetable">Vegetable</option>
                 <option value="snacks">Snacks</option>
                
              </select>

                         
                          </fieldset>

                            <fieldset className="fieldset bg-gray-500 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">Quantity</label>
                         <input type="text" name='quantity' className="input w-full" placeholder="Quantity" />

                         
                          </fieldset>

                              <fieldset className="fieldset bg-gray-500 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">Expiry date</label>
                         {/* <input type="text" name='quantity' className="input w-full" placeholder="Quantity" /> */}
                         <input type="date" name='expiredate' className="input w-full" />

                         
                          </fieldset>
                           
                            <fieldset className="fieldset bg-gray-500 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">Description</label>
                         <input type="text" name='description' className="input w-full" placeholder="Description" />

                         
                          </fieldset>

                           <fieldset className="fieldset bg-gray-500 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">Added date</label>
                         {/* <input type="text" name='quantity' className="input w-full" placeholder="Quantity" /> */}
                        <input
                         type="date"
                         defaultValue={addedDate}
                         name='addeddate'
                         readOnly
                         className="w-full border p-2 rounded bg-gray-100 cursor-not-allowed"
                         />



                         
                          </fieldset>

                              


                         
                            
                            

                            
                     


                        
                    </div>
                           <fieldset className="fieldset bg-gray-500 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">Email</label>
                         <input type="email" defaultValue={user.email}  required  name='email' className="input w-full" placeholder="email" />

                         
                          </fieldset>

                     

                          <input type="submit" className='btn w-full bg-gray-500' value="Update Food" />
                    
                </form>
            <button onClick={()=>setopenmodal(false)} className='btn absolute top-0 right-0 bg-gray-500 text-white'>x</button>
            
        </div>
    );
};

export default Modal;