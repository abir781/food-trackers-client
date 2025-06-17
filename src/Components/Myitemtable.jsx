import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Modal from './Modal';

const Myitemtable = ({mitem,allfoodsdata,setallfoodsdata,openmodal,setopenmodal,setupdateid}) => {


    


    const handledelete=(_id)=>{
        
        Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
    
        fetch(`https://food-server-brown.vercel.app/allfoods/${_id}`,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          
          if(data.deletedCount){
              Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        const remainingfoods=allfoodsdata.filter(food=>food._id !== _id);
        setallfoodsdata(remainingfoods)
    
          }
        })
      
      }
    });
    
      }





    return (
         <tr>
       
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={mitem.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{mitem.title}</div>
              
            </div>
          </div>
        </td>
        <td>
         {mitem.category}
        </td>
        <td>{mitem.quantity}</td>
        <td>{mitem.expirydate}</td>
         <td>{mitem.description}</td>
         <td>{mitem.addeddate}</td>
          <td>{mitem.email}</td>
          <th className='flex gap-3'>

         <button onClick={()=>{
            setopenmodal(true)
            setupdateid(mitem._id)
            }}  className="btn btn-warning">Update</button>

          
          <button onClick={()=>handledelete(mitem._id)} className="btn btn-success">Delete</button>
        </th>

       
      </tr>
    );
};

export default Myitemtable;