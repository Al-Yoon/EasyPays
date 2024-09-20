import React from "react";
import { ReactTyped } from "react-typed";
import Logo from "../components/Assets/Easy_2.png";
import MyProyects from "./MyProyects";

const Landing = () =>{
    return(
        <div className="text-white bg-black">
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
                <p className="border-b border-white w-[180px] rounded-md font-medium mx-auto">Ya tenes una cuenta?</p>
            </div>
            <div className="w-full bg-white text-black py-16 px-4">
                <div className="max-w[1240px] mx-auto grid md:grid-cols-2">
                    <img className="w-[500px] mx-auto " src={Logo} alt="/"></img>
                    <div className="flex flex-col pl-4 justify-center">
                        <p className="text-[#38bdf8] md:text-1xl sm:text-3xl text-2xl font-bold">Sobre nosotros</p>
                        <h1 className="text-black md:text-1xl sm:text-6xl text-4xl font-bold md:py-3"> Somos la mejor aplicacion de todo el mundo</h1>
                        <p className="text-gray-700 md:text-2xl sm:text-1xl text-xl my-2">Controla, Analiza y Comparte tus Gastos con Facilidad</p>
                        <p className="text-black md:text-1xl sm:text-1xl text-xl">
                        Te brindamos soluciones integrales para que puedas calcular, gestionar y analizar tus gastos de manera eficiente. Nuestra plataforma te permite no solo visualizar y desglosar tus compras, 
                        sino también compartir fácilmente la información con otras personas, facilitando la división de los gastos en grupo de manera justa y precisa. </p>
                    </div>
                </div>
            </div>
        </div> 
        );
}


export default Landing;