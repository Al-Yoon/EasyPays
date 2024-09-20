import React from "react";
import { ReactTyped } from "react-typed";
import Logo from "../components/Assets/Easy_2.png";
import MyProyects from "./MyProyects";
import Chats  from "../components/Assets/chat.svg";
import Historial from "../components/Assets/historial.svg";
import UploadTickets from "../views/Tickets";
import Tickets from "../components/Assets/tickets.svg";

const Landing = () =>{
    return(
        <div className="text-white bg-black">
            <UploadTickets></UploadTickets>
            <MyProyects></MyProyects>
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center p-5">
                <p className="text-[#38bdf8] font-bold md:text-3xl sm:text-2xl text-xl pt-2">Bienvenido a Easy Pays</p>
                    <h1 className="md:text-1xl sm:text-6xl text-4xl font-bold md:py-6">
                    Gestión Inteligente</h1>
                <div className="md:text-2xl sm:text-1xl text-xl">
                    <h1>Lleva el control de tus compras al siguiente nivel</h1>
                    <ReactTyped className="pl-2 pt-1 font-bold md:text-1xl sm:texl-4xl text-xl" 
                    strings={["ORGANIZA","CONTROLA","PAGOS"]} 
                    TypedSpeed={120} 
                    backSpeed={140} 
                    loop/> 
                </div>
                    {/* SUB DESCRIPCION 
                    <p className="md:text-1xl text-xl font-bold text-gray-500 pt-10">
                    una app web que calcula la parte de cada integrante de un grupo a partir de los tickets.
                    </p> */}
                <button className="bg-[#38bdf8] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Registrarse</button>
                    <p className="border-b border-white w-[180px] font-medium mx-auto">Ya tenes una cuenta?</p>
            </div>

            <div className="w-full bg-white text-black py-16 px-4">
                <div className="max-w[1240px] mx-auto grid md:grid-cols-2">
                    <img className="w-[500px] mx-auto " src={Logo} alt="/"></img>
                    <div className="flex flex-col pl-4 justify-center">
                        <p className="text-[#38bdf8] md:text-1xl sm:text-3xl text-2xl font-bold">Sobre nosotros</p>
                        <h1 className="text-black md:text-1xl sm:text-6xl text-4xl font-bold md:py-3">Calcular y manejar tus gastos nunca fue tan fácil</h1>
                        <p className="text-gray-700 md:text-2xl sm:text-1xl text-xl my-2">Controla, Analiza y Comparte tus Gastos con Facilidad</p>
                        <p className="text-black md:text-1xl sm:text-1xl text-xl">
                        Te brindamos soluciones integrales para que puedas calcular, gestionar y analizar tus gastos de manera eficiente. Nuestra plataforma te permite no solo visualizar y desglosar tus compras, 
                        sino también compartir fácilmente la información con otras personas, facilitando la división de los gastos en grupo de manera justa y precisa. </p>
                    </div>
                </div>
            </div>

            <div className='w-full py-16 text-white px-4 bg-black'>
             <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
             <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-1'>
                    ¿Queres saber mas?
                </h1>
                <p className="md:text-1xl sm:text-1xl text-xl font-bold">Con EasyPays tenés ahorros y beneficios</p>
                </div>
             </div>
            </div>

            <div className="w-full py-[10rem] bg-white px-4 text-black">
             <p className="max-w-[1240px] md:text-2xl sm:text-1xl text-xl pl-4">Cómo trabajamos</p>
              <h1 className="font-bold md:text-3xl sm:text-2xl text-xl pb-3 pl-4"> NUESTRO PROCEDIMIENTO DE TRABAJO</h1>
                <div className="max-w-auto mx-auto grid md:grid-cols-3 gap-8 pl-5 pr-5">

                    <div className="w-full shadow-2xl bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg">
                        <img className='w-20 mx-auto mt-auto' src={Chats} alt="/"/>
                            <h2 className='text-2xl font-bold text-center py-8 '>Gestiona y Asigna</h2>
                                <p className='text-center text-[#38bdf8] text-4xl font-bold'>1</p>
                                    <div className='text-center font-medium'>
                                        <p className='py-2 my-5'>
                                        Gestiona proyectos para calcular tus gastos, tanto individuales como en grupo.</p>
                                    </div>
                    </div>

                    <div className='w-[20] shadow-2xl bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg'>
                        <img className='w-20 mx-auto mt-auto bg-transparent' src={Historial} alt="/" />
                            <h2 className='text-2xl font-bold text-center py-8'>Carga tus Tickets</h2>
                                <p className='text-center text-[#38bdf8] text-4xl font-bold'>2</p>
                                    <div className='text-center font-medium'>
                                        <p className='py-2 my-5'>
                                        Sube tus tickets de compra, para obtener el calculo gastado de los mismos. </p>
                                    </div>
                    </div>
                
                    <div className='w-[20] shadow-2xl bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg'>
                            <img className='w-20 mx-auto mt-auto bg-transparent' src={Tickets} alt="/" />
                                <h2 className='text-2xl font-bold text-center py-8'>Historial y Reportesr</h2>
                                    <p className='text-center text-[#38bdf8] text-4xl font-bold'>3</p>
                                        <div className='text-center font-medium'>
                                            <p className="py-2 my-5">
                                            Visualiza un historial de tus tickets con sus respectivos gastos y genera reportes detallados.
                                            </p>
                                        </div>
                    </div>
                </div>    
            </div>


        </div> 
        );
}


export default Landing;