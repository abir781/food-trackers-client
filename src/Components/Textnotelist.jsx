import React, { use, useState } from 'react';

const Textnotelist = ({textnotepromise}) => {
    const textnotedata=use(textnotepromise)
    
    
    
    
    return (
        <div className='w-11/12 mx-auto'>

            {textnotedata.length>0 && <h2 className='text-4xl text-yellow-700 text-center mb-10'>Textnote list</h2> }

             

           

            {
                textnotedata.map(singletextnote=><div key={singletextnote._id} className='bg-yellow-500 p-4 mb-10 rounded-2xl'>

                    <h3 className='text-2xl font-semibold'>{singletextnote.textnote}</h3>
                       <h2 className='text-xl font-semibold'>posted date:{singletextnote.posteddate}</h2>


                </div>)
            }

            
           
            
        </div>
    );
};

export default Textnotelist;