import TransitionsModal from '../components/layout/ModalProyects';
import Historial from '../components/Assets/historial.svg';
import React from 'react';
import UpArrow from '../components/Assets/arrow-up-outline.svg';
import DownArrow from '../components/Assets/arrow-down-outline.svg';


const MyProjects = () =>{
    return(
        <div className="w-full py-[10rem] bg-black px-4 text-white">
            <p className="max-w-[1240px] md:text-2xl sm:text-1xl text-xl pl-4">Mis</p>
            <h1 className="font-bold md:text-3xl sm:text-2xl text-xl pb-3 pl-4">Proyectos</h1>
            <div className="max-w-auto mx-auto grid md:grid-cols-3 gap-8 pl-5 pr-5">
                
                <div className="w-full shadow-2xl bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg">
                    <h2 className='text-2xl font-bold text-center py-8 '>Crear Proyecto</h2>
                    <p className='text-center text-[#38bdf8] text-4xl font-bold'><TransitionsModal className="w-[50px]"></TransitionsModal></p>
                    <div className='text-center font-medium'>
                        <p className='py-2 my-5'>Crea un proyecto para luego asignarle los gastos</p>
                    </div>
                </div>

                <div className="w-full shadow-2xl bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg">
                    <h2 className='text-2xl font-bold text-center py-8 text-[#38b931]'>Saldo</h2>
                    <img className='w-20 mx-auto' src={UpArrow} alt="/"/>
                    <div className='text-center font-medium'>
                        <p className='py-2 my-5'>4500</p>
                    </div>
                </div>

                <div className="w-full shadow-2xl bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg">
                    <h2 className='text-2xl font-bold text-center py-8 text-[#c43434]'>Gastos</h2>
                    <img className='w-20 mx-auto' src={DownArrow} alt="/"/>
                    <div className='text-center font-medium'>
                        <p className='py-2 my-5'>68000</p>
                    </div>
                </div>

                <div className="w-[20] shadow-2xl bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg">
                    <img className='w-20 mx-auto mt-auto bg-transparent' src={Historial} alt="/" />
                    <h2 className='text-2xl font-bold text-center pt-8 '>Proyecto: Finde pasado</h2>
                    <div className='text-center font-medium'>
                        <p className='py-2 my-5'>Esta es la descripcion del Proyecto Guardada</p>
                        <p className='py-2 my-5'>07/07/2024</p>
                        <p className='py-2 my-5'>$5700</p>
                    </div>
                    <button className='bg-[#38bdf8] text-black w-2/3 rounded-md font-medium my-6 mx-auto px-6 py-3'>Ver Proyecto</button>
                </div>

                <div className="w-[20] shadow-2xl bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg">
                    <img className='w-20 mx-auto mt-auto bg-transparent' src={Historial} alt="/" />
                    <h2 className='text-2xl font-bold text-center pt-8 '>Proyecto: Cine el Jueves</h2>
                    <div className='text-center font-medium'>
                        <p className='py-2 my-5'>Pelicula del Joker division de gastos</p>
                        <p className='py-2 my-5'>07/07/2024</p>
                        <p className='py-2 my-5'>$5700</p>
                    </div>
                    <button className='bg-[#38bdf8] text-black w-2/3 rounded-md font-medium my-6 mx-auto px-6 py-3'>Ver Proyecto</button>
                </div>

                <div className="w-[20] shadow-2xl bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg">
                    <img className='w-20 mx-auto mt-auto bg-transparent' src={Historial} alt="/" />
                    <h2 className='text-2xl font-bold text-center pt-8 '>Boliche Sabado: </h2>
                    <div className='text-center font-medium'>
                        <p className='py-2 my-5'>Gatos de Bayside</p>
                        <p className='py-2 my-5'>07/07/2024</p>
                        <p className='py-2 my-5'>$5700</p>
                    </div>
                    <button className='bg-[#38bdf8] text-black w-2/3 rounded-md font-medium my-6 mx-auto px-6 py-3'>Ver Proyecto</button>
                </div>
            </div>
        </div>
    )
}

export default MyProjects;