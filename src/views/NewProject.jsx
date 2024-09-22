import React, { useState } from 'react';
import ModalTickets from "../components/Body/ModalTickets.jsx";
import ModalMiembros from "../components/Body/ModalMiembros.jsx";
import Cloud from "../components/Assets/cloud.svg";
import Table from "../components/Body/Table.jsx";
import TableUsers from "../components/Body/TableUsers.jsx";
import { useParams } from 'react-router-dom';

const NewProject = () => {
    const { projectSlug } = useParams();
    const [tickets, setTickets] = useState([]);
    const [members, setMembers] = useState([]);
    const [paidAmount, setPaidAmount] = useState(0);

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

    const handlePayment = (index, amount) => {
        const updatedMembers = [...members];
        updatedMembers[index].paid = true;
        setPaidAmount(prevPaidAmount => prevPaidAmount + parseFloat(amount));
        setMembers(updatedMembers);
    };

    const totalAmount = tickets.reduce((sum, ticket) => sum + ticket.total, 0);
    const remainingAmount = totalAmount - paidAmount;

    return (
        <div className="w-screen py-auto bg-white px-4 text-black">
            <p className="max-w-auto md:text-2xl sm:text-1xl text-xl pl-4">Proyecto: {projectSlug.replace(/-/g, ' ')}</p>
            <h1 className="font-bold md:text-3xl sm:text-2xl text-xl pb-3 pl-4">{projectSlug.replace(/-/g, ' ')}</h1>
            <div className="max-w-auto mx-auto pl-5 pr-5">
                <div className="w-full shadow-2xl bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg">
                    <h2 className='text-2xl font-bold text-center py-8 '>Gastos</h2>
                    <p className='text-center text-[#38bdf8] text-4xl font-bold'>{totalAmount} $</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 my-5'>Total Tickets</p>
                    </div>
                </div>
                <div className="w-full shadow-2x1 bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg">
                    <h2 className='text-2xl font-bold text-center py-8 '>Pagado</h2>
                    <p className='text-center text-red-600 text-4xl font-bold'>{paidAmount.toFixed(2)} $</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 my-5'>Total Pagado por los miembros</p>
                    </div>
                </div>
                <div className="w-full shadow-2xl bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg">
                    <h2 className='text-2xl font-bold text-center py-8 '>Falta Pagar</h2>
                    <p className={`text-center text-4xl font-bold ${remainingAmount === 0 ? 'text-green-600' : 'text-red-600'}`}>{remainingAmount.toFixed(2)} $</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 my-5'>Lo que falta pagar.</p>
                    </div>
                </div>
                <div className="w-auto py-[10rem] my-5 flex justify-center bg-white px-4 text-black h-auto rounded-lg shadow-2xl">
                    <div className="max-w-auto mx-5 my-auto items-center p-5">
                        <div className="w-full h-auto bg-white flex flex-col p-4 text-black mx-auto ">
                            <img className='w-20 mx-auto mt-auto bg-transparent mb-10' src={Cloud} alt="/" />
                            <p className='text-center text-black text-2xl font-bold pb-5'>Carga Manualmente el Ticket</p>
                            <button className='bg-[#299ad78d] w-auto rounded-md font-medium my-auto mx-auto px-6 py-3'>
                                <ModalTickets addTicket={addTicket} />
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="max-w-auto md:text-2xl sm:text-1xl text-xl pl-4">Tickets Seleccionados</p>
                    <Table data={tickets} />
                    <p className="max-w-auto md:text-2xl sm:text-1xl text-xl pl-1 pt-10">Añadir Miembros</p>
                    <ModalMiembros addMember={addMember} />
                    <TableUsers 
                        data={members} 
                        updatePercentage={updatePercentage} 
                        totalAmount={totalAmount} 
                        handlePayment={handlePayment} 
                    />
                </div>
            </div>
        </div>
    );
};

export default NewProject;