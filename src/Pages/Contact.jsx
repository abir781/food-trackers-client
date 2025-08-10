import React from 'react';
import { FaAddressBook, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


const Contact = () => {
  
    return (
        <div  className='min-h-screen'>
            <h1 className='text-6xl  text-center mt-25 text-yellow-700'>Contact Us</h1>
            <div className='w-full lg:w-3/12 mx-auto space-y-5 mt-20 bg-gray-700 p-10 rounded-2xl'>
               
                <div className='flex items-center gap-3'>
                    <FaPhoneAlt className='text-orange-500' size={45}/> 
                    <div className='text-white'>
                    <h2 className='text-xl font-bold'>Contact No</h2>
                    <h2 className='text-xl font-bold'>01871917336</h2>

                    </div>
                    
                </div>

                <div className='flex items-center gap-3'>
                    <MdEmail className='text-orange-500' size={45}/> 
                    <div className='text-white'>
                    <h2 className='text-xl font-bold'>Email</h2>
                    <h2 className='text-xl font-bold'>hasan.abir3176@gmail.com</h2>

                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Contact;