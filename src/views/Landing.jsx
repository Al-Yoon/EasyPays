import React from "react";
import { ReactTyped } from "react-typed";


const Landing = () =>{
    return(
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center p-5">
            <p className="text-[#22d3ee] font-bold md:text-3xl sm:text-2xl text-xl pt-2">Bienvenido a Easy Pays</p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            Gestión Inteligente</h1>
            <div className="md:text-2xl sm:text-1xl text-xl">
                <h1>Lleva el control de tus compras al siguiente nivel</h1>
                <ReactTyped className="pl-2 pt-1 font-bold md:text-1xl sm:texl-4xl text-xl" 
                strings={["ORGANIZA","CONTROLA","PAGOS"]} 
                TypedSpeed={120} 
                backSpeed={140} 
                loop/> 
                </div>
                <p className="md:text-1xl text-xl font-bold text-gray-500 pt-10">
                una app web que calcula la parte de cada integrante de un grupo a partir de los tickets.
                </p>
            </div>
        </div>
        
    );
}
export default Landing;