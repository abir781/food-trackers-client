import React, { use, useEffect, useState } from 'react';
import Myitemtable from './Myitemtable';
import Modal from './Modal';

const Myitemlist = ({myitemspromise}) => {
    const myitemsdata=use(myitemspromise);
    


    const [allfoodsdata,setallfoodsdata]=useState([]);

    const [openmodal,setopenmodal]=useState(false);

    const [updateid,setupdateid]=useState(null);
    // console.log(updateid)

          useEffect(() => {
        
        //  console.log(singleusertips)
         setallfoodsdata(myitemsdata)

  }, [setallfoodsdata,myitemsdata]);


    return (
     <div className='w-11/12 mx-auto min-h-screen'>

            <div>
               <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='text-green-700'>
       
        <th>Title</th>
        <th>Category</th>
        <th>Quantity</th>
        <th>Expiry Date</th>
         <th>Description</th>
          <th>Added date</th>
        
        <th>Email</th>
        <th></th>

      </tr>
    </thead>
    <tbody>
     
    
     {
        allfoodsdata.map(mitem=><Myitemtable key={mitem._id} setupdateid={setupdateid} openmodal={openmodal} setopenmodal={setopenmodal} allfoodsdata={allfoodsdata} setallfoodsdata={setallfoodsdata} mitem={mitem}></Myitemtable>)
     }
      
    </tbody>
    
  
  </table>
</div>
            </div>

            <div>
                {openmodal && <Modal updateid={updateid} setallfoodsdata={setallfoodsdata}  setopenmodal={setopenmodal}/>}
            </div>
            
            
        </div>
    );
};

export default Myitemlist;