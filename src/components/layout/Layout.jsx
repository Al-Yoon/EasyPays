import React from "react";
import Footer from "./Footer";
import Navbar from "./Nav";
import { Outlet } from "react-router-dom";

const Layout = () =>{
    return(
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};
export default Layout;