import TransitionsModal from '../components/layout/ModalProyects';
import React from 'react';
import ModalUser from '../components/layout/ModalUser';
import { Avatar } from '@mui/material';
import UserPic from '../components/Assets/user-avatar.svg';

const UserPanel=()=>{
    return(
        <div className="w-full py-[10rem] bg-white px-4 text-black">
        <p className="max-w-[1240px] md:text-2xl sm:text-1xl text-xl pl-4">Mi</p>
        <h1 className="font-bold md:text-3xl sm:text-2xl text-xl pb-3 pl-4">Usuario</h1>
        <div className="max-w-auto mx-auto grid md:grid-cols-3 gap-8 pl-5 pr-5">
            
            <div className="w-[full] shadow-2xl bg-white flex flex-col p-4 md:my-0 text-black rounded-lg h-[550px] flex justify-center">
            <img className='w-20 mx-auto' src={UserPic} alt="/"/>
                <h2 className='text-2xl font-bold text-center pt-8 '>Usuario: yon1567</h2>
                <div className='text-center font-medium'>
                    <p className='py-2 my-5'>Nombre: Alex</p>
                    <p className='py-2 my-5'>Apellido: Yoon</p>
                    <p className='py-2 my-5'>Email: alex@gmail.com</p>
                </div>
            </div>

            <div className="w-full h-[30vh] shadow-2xl bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg justify-center">
                        <p className='text-center text-black text-2xl font-bold'>Modificar Usuario</p>
                        <button className='bg-[#299ad78d] w-2/3 rounded-md font-medium my-6 mx-auto px-6 py-3'><ModalUser></ModalUser></button>
                            <div className='text-center font-medium'>
                            </div>
                    </div>

            <div className="w-full h-[30vh] shadow-2xl bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg justify-center">
                        <p className='text-center text-black text-2xl font-bold'>Eliminar Usuario</p>
                        <button className='bg-[#aa3d2aa4] text-[#a03a3a] w-2/3 rounded-md font-medium my-6 mx-auto px-6  h-[60px] font-sans uppercase pb-1'>Eliminar</button>
                            <div className='text-center font-medium'>
                            </div>
                    </div>
        </div>
        </div>
)
}

export default UserPanel;
