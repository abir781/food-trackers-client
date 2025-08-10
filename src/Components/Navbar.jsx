import { Menu } from 'lucide-react';
import React, {  use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Authcontext } from '../Context/Authcontext';
import { toast } from 'react-toastify';



const Navbar = () => {
    const [open,setopen]=useState(false);
    const {user,logout}=use(Authcontext);
    const handlelogout=()=>{
        
        logout().then(()=>{
            toast.success("User logged out successfully");
           
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div className=' bg-yellow-500 sticky top-0  w-full z-50'>
        <div className='flex items-center justify-between py-6  w-11/12 mx-auto'>
            <div className='flex items-center gap-2'>
                <Menu onClick={()=>setopen(!open)} className='md:hidden '></Menu>
                <ul className={`md:hidden absolute duration-500 z-10 ${open?'top-14':'-top-40'} bg-black text-white`}>
                    <li className='px-2 py-1'><NavLink className={({isActive})=>(isActive?'font-bold ':'')} to="/">Home</NavLink></li>
                    <li className='px-2 py-1 '><NavLink className={({isActive})=>(isActive?'font-bold':'')} to="/fridge">Fridge</NavLink></li>
                    {
                        user && <>

                            <li className='px-2 py-1 '><NavLink className={({isActive})=>(isActive?'font-bold':'')} to="/addfood">Addfood</NavLink></li>
                     <li className='px-2 py-1 '><NavLink className={({isActive})=>(isActive?'font-bold':'')} to="/myitems">Myitems</NavLink></li>
                        
                        </>
                    }
                   
                  
                    
                </ul>
                
                <img className='w-14 h-14' src="/logo.png" alt="" />

              

            </div>
            <div>
                <ul className='hidden md:flex md:gap-5'>
                    <li className=''><NavLink className={({isActive})=>(isActive?'font-bold ':'')} to="/">Home</NavLink></li>
                    <li className=''><NavLink className={({isActive})=>(isActive?'font-bold':'')} to="/fridge">Fridge</NavLink></li>
                    {
                        user &&<>
                         <li className=''><NavLink className={({isActive})=>(isActive?'font-bold':'')} to="/addfood">Addfood</NavLink></li>
                    <li className=''><NavLink className={({isActive})=>(isActive?'font-bold':'')} to="/myitems">Myitems</NavLink></li>
                        
                        </>
                    }
                   
                 
                   
                </ul>

            </div>
            <div className='flex items-center gap-3'>
                <div className='flex gap-3'>
                    {/* <img className='w-12  rounded-full' src={`${user ? user.photoURL:""}`} title={`${user?user.displayName:""}`} alt="" /> */}
                   {/* <p className='text-white'>{user && user.email}</p>  */}

                   {
                    user?<><img className='w-12  rounded-full' src={`${user ? user.photoURL:""}`} title={`${user?user.displayName:""}`} alt="" />
                    <button onClick={handlelogout} className='btn btn-accent'>Logout</button>
                    </>:<>  <Link to='/register' className='btn btn-accent'>Register</Link>
                    <Link to='/login' className='btn btn-accent'>Login</Link></>
                   }
                  
                </div>
        
                

            </div>
            
        </div>

        </div>
      
    );
};

export default Navbar;