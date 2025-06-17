import React, { use, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Authcontext } from '../Context/Authcontext';
import axios from 'axios';
import { useNavigate } from 'react-router';


const Addfood = () => {
    const {user}=use(Authcontext);
    const navigate=useNavigate();

      const [addedDate, setAddedDate] = useState('');

  useEffect(() => {
     const today = new Date();
    const formatted = today.toISOString().split('T')[0]; 
    setAddedDate(formatted);
    
  }, []);

   
    const handleaddfood=(e)=>{
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
        
        
       
        const newfood={image,title,category,quantity,expirydate,description,addeddate,email}
        

        axios.post('https://food-server-brown.vercel.app/allfoods', newfood)
             .then(res=>{
                
                if(res.data.insertedId){
                    toast.success("Data added to database successfully");
                    navigate("/myitems")

                }
                
             })
             .catch(error=>{
                // console.log(error)
                toast.warning(error)
             })

      
    }
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='p-25'>
                <div className='text-center space-y-4 mb-10'>
                    <h1 className='text-6xl text-yellow-700'>Add food</h1>
                   
                </div>
                <form onSubmit={handleaddfood}>
                     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box my-6 border p-4">
                       

                         <label className="label">Food image url</label>
                         <input type="text" name='image' className="input w-full" placeholder="imageURL" />

                         
                          </fieldset>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">Title</label>
                         <input type="text" name='title' className="input w-full" placeholder="Title" />

                         
                          </fieldset>
                            {/* <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">Plant type</label>
                         <input type="text" name='plant' className="input w-full" placeholder="Plant-type" />

                         
                          </fieldset> */}

                          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

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

                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">Quantity</label>
                         <input type="text" name='quantity' className="input w-full" placeholder="Quantity" />

                         
                          </fieldset>

                              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">Expiry date</label>
                         {/* <input type="text" name='quantity' className="input w-full" placeholder="Quantity" /> */}
                         <input type="date" name='expiredate' className="input w-full" />

                         
                          </fieldset>
                           
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">Description</label>
                         <input type="text" name='description' className="input w-full" placeholder="Description" />

                         
                          </fieldset>

                           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

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
                           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">Email</label>
                         <input type="email" defaultValue={user.email} required  name='email' className="input w-full" placeholder="email" />

                         
                          </fieldset>

                     

                          <input type="submit" className='btn w-full' value="Add Food" />
                    
                </form>

            </div>
            
        </div>
    );
};

export default Addfood;