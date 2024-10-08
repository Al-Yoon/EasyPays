import React, { useState, useEffect } from 'react';
import ModalTickets from "../components/utils/Modal/ModalTickets.jsx";
import ModalMiembros from "../components/utils/Modal/ModalMiembros.jsx";
import Cloud from "../components/Assets/cloud.svg";
import Table from "../components/utils/Table/Table.jsx";
import TableUsers from '../components/utils/Table/TableUsers.jsx';

const Projects = () => {
    const [tickets, setTickets] = useState([
        { ticketId: 1, name: "Finde salida", date: "11/06/2024", total: 5000, image: null },
        { ticketId: 2, name: "Bayside", date: "05/12/2024", total: 87000, image: null },
        { ticketId: 3, name: "Cine", date: "02/12/2024", total: 9000, image: null },
        { ticketId: 4, name: "Bodegon", date: "22/12/2024", total: 5500, image: null },
    ]);

    const [members, setMembers] = useState([
        { userId: 1, firstName: "John", lastName: "Doe", email: "john.doe@example.com", percentage: 25 },
        { userId: 2, firstName: "Jane", lastName: "Doe", email: "jane.doe@example.com", percentage: 25 },
        { userId: 3, firstName: "Jim", lastName: "Beam", email: "jim.beam@example.com", percentage: 25 },
        { userId: 4, firstName: "Jack", lastName: "Daniels", email: "jack.daniels@example.com", percentage: 25 },
    ]);

    const [paidAmount, setPaidAmount] = useState(0);

    useEffect(() => {
        const totalAmount = tickets.reduce((sum, ticket) => sum + ticket.total, 0);
        localStorage.setItem('totalAmountForProyecto-Finde-Pasado', JSON.stringify(totalAmount));
    }, [tickets]);

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
        <div className="w-screen bg-white px-4 text-black py-[5rem]">
            <p className="max-w-auto md:text-2xl sm:text-1xl text-xl pl-4">Proyecto</p>
            <h1 className="font-bold md:text-3xl sm:text-2xl text-xl pb-3 pl-4">Finde pasado</h1>
            <div className="max-w-auto mx-auto pl-5 pr-5 ">

                <div className="w-full shadow-2xl flex flex-col p-4 md:my-0 my-8 rounded-lg">
                    <h2 className='text-2xl font-bold text-center py-8'>Gastos</h2>
                    <p className='text-center text-[#38bdf8] text-4xl font-bold'>{totalAmount} $</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 my-5'>Total Tickets</p>
                    </div>
                </div>
                
                <div className="w-full shadow-2xl flex flex-col p-4 md:my-0 my-8 rounded-lg">
                    <h2 className='text-2xl font-bold text-center py-8 '>Pagado</h2>
                    <p className='text-center text-red-600 text-4xl font-bold'>{paidAmount.toFixed(2)} $</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 my-5'>Total Pagado por los miembros</p>
                    </div>
                </div>

                <div className="w-full shadow-2xl flex flex-col p-4 md:my-0 my-8 rounded-lg">
                    <h2 className='text-2xl font-bold text-center py-8 '>Falta Pagar</h2>
                    <p className={`text-center text-4xl font-bold ${remainingAmount === 0 ? 'text-green-600' : 'text-red-600'}`}>{remainingAmount.toFixed(2)} $</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 my-5'>Lo que falta pagar.</p>
                    </div>
                </div>

                <div className="w-auto py-[10rem] my-5 flex justify-center px-4 h-auto rounded-lg shadow-2xl">
                    <div className="max-w-auto mx-5 my-auto items-center p-5">
                        <div className="w-full h-auto flex flex-col p-4 mx-auto ">
                            <img className='w-20 mx-auto mt-auto bg-transparent mb-10' src={Cloud} alt="/" />
                            <p className='text-center text-2xl font-bold pb-5'>Carga Manualmente el Ticket</p>
                            <button className='bg-[#299ad78d] w-auto rounded-md font-medium my-auto mx-auto px-6 py-3'>
                                <ModalTickets addTicket={addTicket} />
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="max-w-auto md:text-2xl sm:text-1xl text-xl pl-4 font-bold">Tickets Seleccionados</p>
                    <Table data={tickets} className="mx-auto"/>
                    <p className="max-w-auto md:text-2xl sm:text-1xl text-xl pl-1 pt-10 font-bold">Añadir Miembros</p>
                    <ModalMiembros addMember={addMember} />
                    <TableUsers 
                        data={members} 
                        updatePercentage={updatePercentage} 
                        totalAmount={totalAmount} 
                        handlePayment={handlePayment}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;