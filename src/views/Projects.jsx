import React from "react";
import ModalTickets from "../components/Body/ModalTickets";
import ModalTicketsFile from "../components/Body/ModalTicketsFile";
import Cloud from "../components/Assets/cloud.svg";
import Ticket from "../components/Assets/tickets.svg";

const Projects = ()=>{
    return(
        <div className="w-full py-[10rem] bg-white px-4 text-black">
        <p className="max-w-[1240px] md:text-2xl sm:text-1xl text-xl pl-4">Proyecto</p>
        <h1 className="font-bold md:text-3xl sm:text-2xl text-xl pb-3 pl-4">Finde pasado</h1>
        <div className="max-w-auto mx-auto grid md:grid-cols-1 gap-8 pl-5 pr-5">
            
            <div className="w-full shadow-2xl bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg">
                <h2 className='text-2xl font-bold text-center py-8 '>Gastos</h2>
                <p className='text-center text-[#38bdf8] text-4xl font-bold'>56000 $</p>
                <div className='text-center font-medium'>
                    <p className='py-2 my-5'>Total Tickets</p>
                </div>
            </div>

            <div className="w-full py-[10rem] bg-white px-4 text-black h-auto">
                <div className="max-w-auto mx-auto grid md:grid-cols-2 gap-8 p-5">
                
                    <div className="w-full h-auto shadow-2xl bg-white flex flex-col p-4 text-black rounded-lg mx-auto">
                    <img className='w-20 mx-auto mt-auto bg-transparent mb-10' src={Cloud} alt="/" />
                        <p className='text-center text-black text-2xl font-bold'>Carga Manualmente el Ticket</p>
                        <button className='bg-[#299ad78d] w-2/3 rounded-md font-medium my-6 mx-auto px-auto py-3'><ModalTickets></ModalTickets></button>
                    </div>

                    <div className="w-full h-auto  shadow-2xl bg-white flex flex-col p-4 text-black rounded-lg mx-auto">
                    <img className='w-20 mx-auto mt-auto bg-transparent mb-10' src={Ticket} alt="/" />
                        <p className='text-center text-black text-2xl font-bold'>Sube una foto del Ticket</p>
                        <button className='bg-[#299ad78d] w-2/3 rounded-md font-medium my-6 mx-auto px-auto py-3'><ModalTicketsFile></ModalTicketsFile></button>
                    </div>
                    </div>
                </div>
        </div>
    </div>
    )
}

export default Projects;