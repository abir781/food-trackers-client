import React from 'react';
import { Link } from 'react-router';

const Singfood = ({singlefood}) => {
    
     const today = new Date().toISOString().split("T")[0]; 
     
      const expiry = new Date(singlefood.expirydate).toISOString().split("T")[0];
      
  const isExpired = expiry < today; 
  
    return (
       <div className="card bg-base-100 w-76 shadow-sm">
  <figure>
    <img
      src={singlefood.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{singlefood.title}</h2>
    <div className='flex'>

        <p className='font-bold'>Category:{singlefood.category}</p>
        <p className='font-bold'>Quantity:{singlefood.quantity}</p>

    </div>
    
    <div className="card-actions flex justify-end">

          {isExpired && (
        <span className=" bg-red-500 text-white text-xs px-2 py-1 rounded mt-2">
          Expired
        </span>
      )}
      
      <Link to={`/fooddetails/${singlefood._id}`}><button className="btn btn-primary">Food Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default Singfood;