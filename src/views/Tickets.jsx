import React from "react";
import ModalTickets from "../components/Body/ModalTickets";
import ModalTicketsFile from "../components/Body/ModalTicketsFile";
import Cloud from "../components/Assets/cloud.svg";
import Ticket from "../components/Assets/tickets.svg";

const UploadTickets = () =>{
    return(
        <div>
            <div className="w-full py-[10rem] bg-white px-4 text-black h-auto">
            <p className="max-w-[1240px] md:text-2xl sm:text-1xl text-xl pl-4">Mis</p>
            <h1 className="font-bold md:text-3xl sm:text-2xl text-xl pb-3 pl-4">Tickets</h1>
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
    );
}

export default UploadTickets;