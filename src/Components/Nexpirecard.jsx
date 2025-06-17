import React from 'react';
import { Link } from 'react-router';

const Nexpirecard = ({nexpire}) => {
    return (
        <div className="card bg-base-100 w-76 shadow-sm">
  <figure>
    <img
      src={nexpire.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{nexpire.title}</h2>
    <div className='flex'>

        <p className='font-bold'>Category:{nexpire.category}</p>
        <p className='font-bold'>Quantity:{nexpire.quantity}</p>

    </div>
    
    <div className="card-actions flex justify-end">

       
     
      
      <Link to={`/fooddetails/${nexpire._id}`}><button className="btn btn-primary">See Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default Nexpirecard;