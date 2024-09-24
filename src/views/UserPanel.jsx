import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalUser from '../components/utils/ModalUser';
import UserPic from '../components/Assets/user-avatar.svg';
import DeleteUserButton from '../components/utils/DeleteUserButton';
import TicketsHistoryTable from '../components/utils/TicketsHistoryTable';
import { AuthContext } from "../components/utils/AuthContext";

const ticketsData = [
    { ticketId: 1, name: "Finde salida", date: "11/06/2024", total: 5000 },
    { ticketId: 2, name: "Bayside", date: "05/12/2024", total: 87000 },
    { ticketId: 3, name: "Cine", date: "02/12/2024", total: 9000 },
    { ticketId: 4, name: "Bodegon", date: "22/12/2024", total: 5500 },
];

const UserPanel = () => {
    const { user, updateUser, logout, deleteUser } = useContext(AuthContext);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    const handleUserUpdate = (updatedUser) => {
        updateUser(updatedUser);
    };

    const handleDeleteUser = () => {
        if (user && user.email) {
            deleteUser(user.email);
        }
        logout();
        navigate('/login');
    };

    return (
        user && (
            <div className="w-full py-[5rem] bg-white px-4 text-black">
                <p className="max-w-[1240px] md:text-2xl sm:text-1xl text-xl pl-4">Mi</p>
                <h1 className="font-bold md:text-3xl sm:text-2xl text-xl pb-3 pl-4">Usuario</h1>
                <div className="max-w-auto mx-auto grid md:grid-cols-3 gap-8 pl-5 pr-5">
                    
                    <div className="w-[full] shadow-2xl bg-white flex flex-col p-4 md:my-0 text-black rounded-lg h-[550px] justify-center">
                        <img className='w-20 mx-auto' src={UserPic} alt="/"/>
                        <h2 className='text-2xl font-bold text-center pt-8 '>Usuario: {user.name}</h2>
                        <div className='text-center font-medium'>
                            <p className='py-2 my-5'>Nombre: {user.name}</p>
                            <p className='py-2 my-5'>Apellido: {user.lastName || "Apellido"}</p>
                            <p className='py-2 my-5'>Email: {user.email}</p>
                        </div>
                    </div>

                    <div className="w-full h-[30vh] shadow-2xl bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg justify-center">
                        <p className='text-center text-black text-2xl font-bold'>Modificar Usuario</p>
                        <button className='bg-[#299ad78d]  hover:bg-white w-2/3 rounded-md font-medium my-6 mx-auto px-auto py-3'>
                            <ModalUser userData={user} onUpdateUser={handleUserUpdate} />
                        </button>
                    </div>

                    <div className="w-full h-[30vh] shadow-2xl bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg justify-center">
                        <p className='text-center text-black text-2xl font-bold'>Eliminar Usuario</p>
                        <button
                            className='bg-[#aa3d2aa4] text-[#a03a3a] hover:text-white w-2/3 rounded-md font-medium my-6 mx-auto px-6  h-[60px] font-sans uppercase pb-1'
                            onClick={() => setShowDeleteModal(true)}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
                {showDeleteModal && (
                    <DeleteUserButton
                        onDelete={handleDeleteUser}
                        onCancel={() => setShowDeleteModal(false)}
                    />
                )}

                <div className="w-full py-10 bg-white px-4 text-black mt-10">
                    <p className="max-w-[1240px] md:text-2xl sm:text-1xl text-xl pl-4">Historial de</p>
                    <h1 className="font-bold md:text-3xl sm:text-2xl text-xl pb-3 pl-4">Tickets</h1>
                    <TicketsHistoryTable data={ticketsData} />
                </div>
            </div>
        )
    );
};

export default UserPanel;