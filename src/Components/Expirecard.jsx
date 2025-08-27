// import React from 'react';
// import { Link } from 'react-router';

// const Expirecard = ({singleexpire}) => {
//     return (
//            <div className="card bg-base-100 w-full shadow-sm">
//   <figure>
//     <img
//       src={singleexpire.image}
//       alt="Shoes"
//       className='h-50 w-full object-cover' />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">{singleexpire.title}</h2>
//     <div className='flex'>

//         <p className='font-bold'>Category:{singleexpire.description}</p>
//         {/* <p className='font-bold'>Quantity:{singleexpire.quantity}</p> */}

//     </div>
    
//     <div className="card-actions flex justify-end mt-auto">


//        <Link to={`/fooddetails/${singleexpire._id}`}><button className="btn btn-primary">See Details</button></Link>

       
     
      
//      <span className=" bg-red-500 text-white text-xs px-2 py-1 rounded mt-2">
//           Expired
//         </span>
//     </div>
//   </div>
// </div>
//     );
// };

// export default Expirecard;


import React from "react";
import { Link } from "react-router";

const Expirecard = ({ singleexpire }) => {
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure className="relative">
        <img
          src={singleexpire.image}
          alt={singleexpire.title}
          className="h-50 w-full object-cover rounded-t-lg"
        />
        {/* Expired Tag */}
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          Expired
        </span>
      </figure>

      <div className="card-body">
        <h2 className="card-title">{singleexpire.title}</h2>
        <div className="flex">
          <p className="font-bold">Category: {singleexpire.description}</p>
        </div>

        <div className="card-actions flex justify-end mt-auto">
          <Link to={`/fooddetails/${singleexpire._id}`}>
            <button className="btn btn-primary">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Expirecard;
