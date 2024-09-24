import React from "react";
import Footer from "../utils/Footer";
import Navbar from "../utils/Nav";
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