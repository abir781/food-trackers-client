import React from 'react';
import { BiWorld } from 'react-icons/bi';
import { FaPlusMinus } from "react-icons/fa6";
import { PiClockCountdownFill, PiListChecksFill } from 'react-icons/pi';
import { motion } from "motion/react"

const Features = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <motion.h1 
            initial={{scale:0.3}}
            animate={{scale:1,transition:{duration:4,repeat:Infinity}}}
            className='text-5xl text-center font-bold'>Key Features</motion.h1>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-4 my-7'>
                <motion.div
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.95 }}
                
                 className='text-center bg-yellow-500 rounded-2xl p-10 space-y-2'>
                    <div className='flex justify-center'>

                         <FaPlusMinus size={32}/>

                    </div>
                    
                      <h3 className="text-3xl font-bold ">Easy Tracking</h3>
                      <p className="text-gray-600 font-semibold text-xl">Add and manage food items with just a few clicks. Keep your inventory up to date effortlessly.</p>
                </motion.div>
                <motion.div
                whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.95 }}
                 
                 className='text-center bg-yellow-500 rounded-2xl p-10 space-y-2'>
                    <div className='flex justify-center'>

                        <BiWorld size={32}/>

                    </div>
                    
                      <h3 className="text-3xl font-bold ">Waste Less</h3>
                      <p className="text-gray-600 font-semibold text-xl">Cut down on food waste and save money while making a positive environmental impact</p>
                </motion.div>
                <motion.div 
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.95 }}
                className='text-center bg-yellow-500 rounded-2xl p-10 space-y-2'>
                    <div className='flex justify-center'>

                        <PiClockCountdownFill size={32} />

                    </div>
                    
                      <h3 className="text-3xl font-bold ">Expiry Countdown</h3>
                      <p className="text-gray-600 font-semibold text-xl"> Track upcoming expiry dates with a live countdown timer to help you prioritize what to use first.</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.95 }}
                 className='text-center bg-yellow-500 rounded-2xl p-10 space-y-2'>
                    <div className='flex justify-center'>

                       <PiListChecksFill size={32} />

                    </div>
                    
                      <h3 className="text-3xl font-bold ">My Items</h3>
                      <p className="text-gray-600 font-semibold text-xl"> View all your added food items in a detailed table format. Sort and manage them efficiently.</p>
                </motion.div>
            </div>
            
        </div>
    );
};

export default Features;