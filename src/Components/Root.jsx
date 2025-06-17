import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';

const Root = () => {
    return (
        <div>
            
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ToastContainer />
            <Footer></Footer>
            
        </div>
    );
};

export default Root;