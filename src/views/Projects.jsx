import React, { useState } from 'react';
import ModalTickets from "../components/Body/ModalTickets.jsx";
import ModalMiembros from "../components/Body/ModalMiembros.jsx";
import Cloud from "../components/Assets/cloud.svg";
import Table from "../components/Body/Table.jsx";
import TableUsers from '../components/Body/TableUsers.jsx';


const Projects = () => {

    const [tickets, setTickets] = useState([
        { ticketId: 1, name: "Finde salida", date: "11/06/2024", total: 5000, image: null },
        { ticketId: 2, name: "Bayside", date: "05/12/2024", total: 87000, image: null },
        { ticketId: 3, name: "Cine", date: "02/12/2024", total: 9000, image: null },
        { ticketId: 4, name: "Bodegon", date: "22/12/2024", total: 5500, image: null },
    ]);

    const [members, setMembers] = useState([]);

    const addTicket = (newTicket) => {
        const existingTicket = tickets.find(ticket => ticket.ticketId === newTicket.ticketId);
        if (existingTicket) {
            return false;
        }
        setTickets([...tickets, newTicket]);
        return true;
    };

    const addMember = (newMember) => {
        const existingMember = members.find(member => member.userId === newMember.userId);
        if (existingMember) {
            return false;
        }
        setMembers([...members, { ...newMember, percentage: 0 }]);
        return true;
    };

    const updatePercentage = (index, newPercentage) => {
        const updatedMembers = [...members];
        updatedMembers[index].percentage = newPercentage;

        setMembers(updatedMembers);
    };

    const totalAmount = tickets.reduce((sum, ticket) => sum + ticket.total, 0);
    return (
        <div className="w-auto py-[10rem] bg-white px-4 text-black">
            <p className="max-w-auto md:text-2xl sm:text-1xl text-xl pl-4">Proyecto</p>
            <h1 className="font-bold md:text-3xl sm:text-2xl text-xl pb-3 pl-4">Finde pasado</h1>
            <div className="max-w-auto mx-auto grid md:grid-cols-1 gap-8 pl-5 pr-5">
                <div className="w-full shadow-2xl bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg">
                    <h2 className='text-2xl font-bold text-center py-8 '>Gastos</h2>
                    <p className='text-center text-[#38bdf8] text-4xl font-bold'>{totalAmount} $</p> {/* Actualizado */}
                    <div className='text-center font-medium'>
                        <p className='py-2 my-5'>Total Tickets</p>
                    </div>
                </div>

                <div className="w-auto py-[10rem] flex justify-center bg-white px-4 text-black h-auto">
                    <div className="max-w-[50%] mx-5 my-auto flex justify-center items-center p-5">
                        <div className="w-full h-auto shadow-2xl bg-white flex flex-col p-4 text-black rounded-lg mx-auto">
                            <img className='w-20 mx-auto mt-auto bg-transparent mb-10' src={Cloud} alt="/" />
                            <p className='text-center text-black text-2xl font-bold'>Carga Manualmente el Ticket</p>
                            <button className='bg-[#299ad78d] w-2/3 rounded-md font-medium my-6 mx-auto px-6 py-3'>
                                <ModalTickets addTicket={addTicket} />
                            </button>
                        </div>

                        {/* <div className="w-full h-auto shadow-2xl bg-white flex flex-col p-4 text-black rounded-lg mx-auto">
                            <img className='w-20 mx-auto mt-auto bg-transparent mb-10' src={Ticket} alt="/" />
                            <p className='text-center text-black text-2xl font-bold'>Sube una foto del Ticket</p>
                            <button className='bg-[#299ad78d] w-2/3 rounded-md font-medium my-6 mx-auto px-6 py-3'>
                                <ModalTicketsFile />
                            </button>
                        </div> */}
                    </div>
                </div>
                <p className="max-w-[1240px] md:text-2xl sm:text-1xl text-xl pl-4">Tickets Seleccionados</p>
                <Table data={tickets} />
                <p className="max-w-[1240px] md:text-2xl sm:text-1xl text-xl pl-4">Añadir Miembros</p>
                <ModalMiembros addMember={addMember} />
                <TableUsers data={members} updatePercentage={updatePercentage} />
            </div>
        </div>
    );
};

export default Projects;