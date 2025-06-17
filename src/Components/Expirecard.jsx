import React from 'react';

const Expirecard = ({singleexpire}) => {
    return (
           <div className="card bg-base-100 w-76 shadow-sm">
  <figure>
    <img
      src={singleexpire.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{singleexpire.title}</h2>
    <div className='flex'>

        <p className='font-bold'>Category:{singleexpire.category}</p>
        <p className='font-bold'>Quantity:{singleexpire.quantity}</p>

    </div>
    
    <div className="card-actions flex justify-end">

       
     
      
     <span className=" bg-red-500 text-white text-xs px-2 py-1 rounded mt-2">
          Expired
        </span>
    </div>
  </div>
</div>
    );
};

export default Expirecard;