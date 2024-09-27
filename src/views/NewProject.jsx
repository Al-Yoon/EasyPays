import React, { useState, useEffect } from 'react';
import ModalTickets from "../components/utils/Modal/ModalTickets.jsx";
import ModalMiembros from "../components/utils/Modal/ModalMiembros";
import Cloud from "../components/Assets/cloud.svg";
import Table from "../components/utils/Table/Table.jsx";
import TableUsers from "../components/utils/Table/TableUsers.jsx";
import DeleteButton from '../components/utils/Buttons/DeleteButton.jsx';
import { useParams, useNavigate } from 'react-router-dom';

const NewProject = () => {
    const { projectSlug } = useParams();
    const navigate = useNavigate();
    const [tickets, setTickets] = useState([]);
    const [members, setMembers] = useState([]);
    const [paidAmount, setPaidAmount] = useState(0);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        const totalAmount = tickets.reduce((sum, ticket) => sum + ticket.total, 0);
        localStorage.setItem(`totalAmountFor${projectSlug.replace(/-/g, '')}`, JSON.stringify(totalAmount));
    }, [tickets, projectSlug]);

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

    const handleDeleteProject = () => {
        const projects = JSON.parse(localStorage.getItem('projects')) || [];
        const updatedProjects = projects.filter(project => project.slug !== projectSlug);
        localStorage.setItem('projects', JSON.stringify(updatedProjects));
        localStorage.removeItem(`totalAmountFor${projectSlug.replace(/-/g, '')}`);
        setShowDeleteModal(false);
        navigate('/myprojects');
    };

    const totalAmount = tickets.reduce((sum, ticket) => sum + ticket.total, 0);
    const remainingAmount = totalAmount - paidAmount;

    return (
        <div className="w-screen py-auto bg-white px-4 text-black">
            <p className="max-w-auto md:text-2xl sm:text-1xl text-xl pl-4">Proyecto: {projectSlug.replace(/-/g, ' ')}</p>
            <h1 className="font-bold md:text-3xl sm:text-2xl text-xl pb-3 pl-4">{projectSlug.replace(/-/g, ' ')}</h1>
            <div className="max-w-auto mx-auto pl-5 pr-5">

                <div className="w-full shadow-2xl flex flex-col p-4 md:my-0 my-8 rounded-lg">
                    <h2 className='text-2xl font-bold text-center py-8'>Gastos</h2>
                    <p className='text-center text-[#38bdf8] text-4xl font-bold'>{totalAmount} $</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 my-5'>Total Gasto Tickets</p>
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
                        <p className='py-2 my-5'>Total a pagar restante.</p>
                    </div>
                </div>

                <div className="w-auto my-5 flex justify-center px-4 h-[50vh] rounded-lg shadow-2xl">
                    <div className="max-w-auto mx-5 my-auto items-center p-5">
                        <div className="w-full h-auto flex flex-col p-4 mx-auto">
                            <img className='w-20 mx-auto mt-auto bg-transparent mb-10' src={Cloud} alt="/" />
                            <p className='text-center text-2xl font-bold pb-5'>Carga Manualmente el Ticket</p>
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
                        handlePayment={handlePayment}/>
                    <button
                        className='bg-[#e57373] text-red-700 w-auto rounded-md font-medium my-6 mx-auto px-6 py-3' onClick={() => setShowDeleteModal(true)}>
                        Eliminar Proyecto
                    </button>
                    {showDeleteModal && ( <DeleteButton onDelete={handleDeleteProject}onCancel={() => setShowDeleteModal(false)}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NewProject;