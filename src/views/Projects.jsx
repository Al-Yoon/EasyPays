import React, { useState, useEffect } from 'react';
import { useLocation,useParams } from 'react-router-dom';
import ModalTickets from "../components/utils/Modal/ModalTickets.jsx";
import ModalMiembros from "../components/utils/Modal/ModalMiembros.jsx";
import Cloud from "../components/Assets/cloud.svg";
import Table from "../components/utils/Table/Table.jsx";
import TableUsers from '../components/utils/Table/TableUsers.jsx';
import { getProject } from '../api/project_alone.js';
import { getTicketsByProject } from '../../../../backendEasyPays/controllers/ticketController.js';
import { getUsers } from '../api/users_project.js';

const Projects = () => {
    const [dataTickets, setDataTickets] = useState([]);

    const [dataMembers, setDataMembers] = useState([]);

    const [paidAmount, setPaidAmount] = useState(0);

    const location = useLocation();

    const project = location.state; 

    const [projectName, setProjectName] = React.useState(project.nombre)

    const { id } = useParams()

    useEffect(() => {
        const totalAmount = dataTickets.reduce((sum, ticket) => sum + ticket.total, 0);
        localStorage.setItem('totalAmountForProyecto-Finde-Pasado', JSON.stringify(totalAmount));
    }, [dataTickets]);

    useEffect(() => {
        const fetchData = async() =>{
            await getProject(id,setProjectName);
            const data = await getTicketsByProject(id);
            setDataTickets(data);
            const responseMembers = await getUsers(id);
            setDataMembers(responseMembers)
        };
        fetchData();
    },[id]);

    const addTicket = (newTicket) => {
        const existingTicket = dataTickets.find(ticket => ticket.ticketId === newTicket.ticketId);
        if (existingTicket) {
            return false;
        }
        setDataTickets([...dataTickets, newTicket]);
        return true;
    };

    const addMember = (newMember) => {
        const existingMember = dataMembers.find(member => member.userId === newMember.userId);
        if (existingMember) {
            return false;
        }
        setDataMembers([...dataMembers, { ...newMember, percentage: 0 }]);
        return true;
    };

    const updatePercentage = (index, newPercentage) => {
        const updatedMembers = [...dataMembers];
        updatedMembers[index].percentage = newPercentage;

        setDataMembers(updatedMembers);
    };

    const handlePayment = (index, amount) => {
        const updatedMembers = [...dataMembers];
        updatedMembers[index].paid = true;
        setPaidAmount(prevPaidAmount => prevPaidAmount + parseFloat(amount));
        setDataMembers(updatedMembers);
    };

    const totalAmount = dataTickets.reduce((sum, ticket) => sum + ticket.total, 0);
    const remainingAmount = totalAmount - paidAmount;

    return (
        <div className="w-screen bg-white px-4 text-black py-[5rem]">
            <p className="max-w-auto md:text-2xl sm:text-1xl text-xl pl-4">Proyecto</p>
            <h1 className="font-bold md:text-3xl sm:text-2xl text-xl pb-3 pl-4">{projectName}</h1>
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
                    <Table data={dataTickets} className="mx-auto"/>
                    <p className="max-w-auto md:text-2xl sm:text-1xl text-xl pl-1 pt-10 font-bold">Añadir Miembros</p>
                    <ModalMiembros addMember={addMember} />
                    <TableUsers 
                        data={dataMembers} 
                        updatePercentage={updatePercentage} 
                        totalAmount={totalAmount} 
                        handlePayment={handlePayment}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;