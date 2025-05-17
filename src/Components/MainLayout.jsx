import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='mx-[100px]'>
            
            <Navbar></Navbar>
            <Outlet></Outlet>



        </div>
    );
};

export default MainLayout;