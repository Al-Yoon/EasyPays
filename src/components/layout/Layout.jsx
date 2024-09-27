import React from "react";
import Footer from "../utils/Partials/Footer";
import Navbar from "../utils/Partials/Nav";
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