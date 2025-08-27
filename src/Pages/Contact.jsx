import React from 'react';
import { FaAddressBook, FaFacebookSquare, FaInstagramSquare, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


const Contact = () => {
  
    return (
        <div  className='min-h-screen my-25'>
            <h1 className='text-5xl font-bold text-center mb-15 '>Contact Us</h1>
            <div className='w-full lg:w-3/12 mx-auto space-y-5  bg-emerald-500 p-10 rounded-2xl'>
               
                <div className='flex items-center gap-3'>
                    <FaPhoneAlt className='text-orange-500' size={45}/> 
                    <div className=''>
                    <h2 className='text-xl font-bold'>Contact No</h2>
                    <h2 className='text-xl font-bold'>01871917336</h2>

                    </div>
                    
                </div>

                <div className='flex items-center gap-3'>
                    <MdEmail className='text-orange-500' size={45}/> 
                    <div className=''>
                    <h2 className='text-xl font-bold'>Email</h2>
                    <h2 className='text-xl font-bold'>hasan.abir3176@gmail.com</h2>

                    </div>
                    
                </div>

                 <div className='flex items-center gap-3'>
                    <FaFacebookSquare className='text-orange-500' size={45} /> 
                   
                    <div className=''>
                    
                    
                    <a className='text-xl font-bold underline'  href="https://www.facebook.com/abirhasan09z/">Facebook</a>

                    </div>
                    
                </div>

                <div className='flex items-center gap-3'>
                    
                    <FaInstagramSquare className='text-orange-500' size={45} />
                    <div className=''>
                   
                    <a className='text-xl font-bold underline' href="https://www.instagram.com/abirhasan09z/">Instagram</a>
                   

                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Contact;