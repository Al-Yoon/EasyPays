import React, { useState, useContext, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Botton from "./Botton";
import { Link } from "react-router-dom";
import { AuthContext } from "../Body/AuthContext";
import ProfileButton from './ProfileButton';

const Nav = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
    }, [isAuthenticated]);

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <Link to="/"><botton className='w-full text-3xl font-bold text-[#38bdf8]'>EasyPays</botton></Link>
            <ul className='hidden md:flex items-center gap-3'>
                <Link to="/nosotros"><li className='p-4'>Nosotros</li></Link>
                <Link to=""><li className='p-4'>Servicios</li></Link>
                <Link to="/myprojects"><li className='p-4'>Proyectos</li></Link>
                {isAuthenticated ? (
                    <ProfileButton />
                ) : (
                    <Link to="/login"><li><Botton>Ingresa</Botton></li></Link>
                )}
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300' : 'ease-in-out duration-300 fixed left-[-100%]'}>
                <a href='#'><h1 className='w-full text-3xl font-bold text-[#38bdf8] m-4'>EasyPays.</h1></a>
                <Link to=""><li className='p-4 border-b border-gray-600'>Nosotros</li></Link>
                <Link to=""><li className='p-4 border-b border-gray-600'>Servicios</li></Link>
                <Link to="/myprojects"><li className='p-4 border-b border-gray-600'>Proyectos</li></Link>
                {isAuthenticated ? (
                    <ProfileButton />
                ) : (
                    <Link to="/login"><li className='p-4'><Botton>Ingresa</Botton></li></Link>
                )}
            </ul>
        </div>
    );
};

export default Nav;