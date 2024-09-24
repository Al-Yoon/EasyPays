import React, { useState, useContext } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Botton from "./Botton";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import ProfileButton from './ProfileButton';

const Nav = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const [nav, setNav] = useState(false);
    const navigate = useNavigate();

    const handleNav = () => {
        setNav(!nav);
    };

    const handleServiceClick = () => {
        navigate('/');
        setTimeout(() => {
            const element = document.getElementById('services');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // Add a small delay to allow the page to load before scrolling
    };

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <Link to="/"><button className='w-full text-3xl font-bold text-[#38bdf8]'>EasyPays</button></Link>
            <ul className='hidden md:flex items-center gap-3'>
                <Link to="/nosotros"><li className='p-4'>Nosotros</li></Link>
                <li className='p-4 cursor-pointer' onClick={handleServiceClick}>Servicios</li>
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
            <ul className={nav ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300' : 'ease-in-out duration-300 fixed left-[-100%]'}>
                <a href='#'><h1 className='w-full text-3xl font-bold text-[#38bdf8] m-4'>EasyPays.</h1></a>
                <Link to="/nosotros"><li className='p-4 border-b border-gray-600'>Nosotros</li></Link>
                <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={handleServiceClick}>Servicios</li>
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