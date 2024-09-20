import React from "react";
import ModalTickets from "../components/layout/ModalTickets";
import ModalTicketsFile from "../components/layout/ModalTicketsFile";
import Cloud from "../components/Assets/cloud.svg";
import Ticket from "../components/Assets/tickets.svg";


const UploadTickets = () =>{
    return(
        <div>
            <div className="w-full py-[10rem] bg-white px-4 text-black h-[100vh]">
            <p className="max-w-[1240px] md:text-2xl sm:text-1xl text-xl pl-4">Mis</p>
            <h1 className="font-bold md:text-3xl sm:text-2xl text-xl pb-3 pl-4">Tickets</h1>
                <div className="max-w-auto mx-auto grid md:grid-cols-2 gap-8 p-5">
                
                    <div className="w-full h-[30vh] shadow-2xl bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg">
                    <img className='w-20 mx-auto mt-auto bg-transparent mb-10' src={Cloud} alt="/" />
                        <p className='text-center text-black text-2xl font-bold'>Carga Manualmente el Ticket</p>
                        <p className='text-center text-[#38bdf8] text-4xl font-bold'><ModalTickets></ModalTickets></p>
                            <div className='text-center font-medium'>
                            </div>
                    </div>

                    <div className="w-full h-[30vh]  shadow-2xl bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg">
                    <img className='w-20 mx-auto mt-auto bg-transparent mb-10' src={Ticket} alt="/" />
                        <p className='text-center text-black text-2xl font-bold'>Sube una foto del Ticket</p>
                        <p className='text-center text-[#38bdf8] text-4xl font-bold'><ModalTicketsFile></ModalTicketsFile></p>
                            <div className='text-center font-medium'>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
    );
}

export default UploadTickets;