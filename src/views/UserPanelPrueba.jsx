import React, { useState, useEffect, useContext } from "react";
import ModalUser from "../components/utils/Modal/ModalUser";
import UserPic from "../components/Assets/user-avatar.svg";
import DeleteUserButton from "../components/utils/Buttons/DeleteUserButton";
import TicketsHistoryTable from "../components/utils/Table/TicketsHistoryTable";
import { AuthContext } from "../components/utils/AuthContextPrueba";

const ticketsData = [
    { ticketId: 1, name: "Finde salida", date: "11/06/2024", total: 5000 },
    { ticketId: 2, name: "Bayside", date: "05/12/2024", total: 87000 },
    { ticketId: 3, name: "Cine", date: "02/12/2024", total: 9000 },
    { ticketId: 4, name: "Bodegon", date: "22/12/2024", total: 5500 },
];

const UserPanel = () => {
    const { user, updateUser } = useContext(AuthContext);
    const [userData] = useState({
        user: user.user,
        name: user.name,
        lastName: user.lastName,
        mail: user.mail,
    });

    const [tempUserData, setTempUserData] = useState(userData);
    const [open, setOpen] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/users/", {
                    method: "GET",
                    headers: {"Content-Type": "application/json"}
                });
                const jsonData = await response.json();
                console.log(jsonData);
            } catch (error) {
                console.error("Error al obtener los datos del usuario:", error);
            }
        };

        fetchData();
    }, []);

    const handleOpen = () => {
        setOpen(true);
        setTempUserData(userData);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTempUserData((prev) => ({ ...prev, [name]: value }));
    };

    const validarMail = (mail) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);

    const handleSave = () => {
        if (
            tempUserData.user &&
            tempUserData.name &&
            tempUserData.lastName &&
            validarMail(tempUserData.mail) &&
            tempUserData.pass
        ) {
            updateUser(tempUserData);
            setOpen(false);
        } else {
            alert("Error: Verifique los campos.");
        }
    };

    return (
        user && (
            <div className="w-full py-[5rem] bg-white px-4 text-black">
                <p className="max-w-[1240px] md:text-2xl sm:text-1xl text-xl pl-4">Mi</p>
                <h1 className="font-bold md:text-3xl sm:text-2xl text-xl pb-3 pl-4">Usuario</h1>
                <div className="max-w-auto mx-auto grid md:grid-cols-3 gap-8 pl-5 pr-5">
                    <div className="w-[full] h-[550px] shadow-2xl flex flex-col p-4 md:my-0 rounded-lg justify-center">
                        <img className="w-20 mx-auto" src={UserPic} alt="/" />
                        <h2 className="text-2xl font-bold text-center pt-8 ">
                            Usuario: {user.name}
                        </h2>
                        <div className="text-center font-medium">
                            <p className="py-2 my-5">Nombre: {user.name}</p>
                            <p className="py-2 my-5">
                                Apellido: {user.lastName || "Apellido"}
                            </p>
                            <p className="py-2 my-5">Email: {user.email}</p>
                        </div>
                    </div>

                    <div className="w-full h-[30vh] shadow-2xl flex flex-col p-4 md:my-0 my-8 rounded-lg justify-center">
                        <p className="text-center text-2xl font-bold">Modificar Usuario</p>
                        <button
                            className="bg-[#299ad78d] hover:text-white w-2/3 rounded-md font-medium my-6 mx-auto px-auto py-3"
                            onClick={handleOpen}
                        >
                            Editar Usuario
                        </button>
                        <ModalUser
                            userData={tempUserData}
                            open={open}
                            onClose={handleClose}
                            onChange={handleChange}
                            onSave={handleSave}
                        />
                    </div>

                    <div className="w-full h-[30vh] shadow-2xl flex flex-col p-4 md:my-0 my-8 rounded-lg justify-center">
                        <p className="text-center text-2xl font-bold">Eliminar Usuario</p>
                        <button
                            className="bg-[#aa3d2aa4] text-[#a03a3a] hover:text-white w-2/3 rounded-md font-medium my-6 mx-auto px-6  h-[60px] font-sans uppercase pb-1"
                            onClick={() => setShowDeleteModal(true)}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
                {showDeleteModal && (
                    <DeleteUserButton
                        onDelete={() => console.log("Usuario eliminado.")}
                        onCancel={() => setShowDeleteModal(false)}
                    />
                )}

                <div className="w-full py-10 px-4 mt-10">
                    <p className="max-w-[1240px] md:text-2xl sm:text-1xl text-xl pl-4">Historial de</p>
                    <h1 className="font-bold md:text-3xl sm:text-2xl text-xl pb-3 pl-4">Tickets</h1>
                    <TicketsHistoryTable data={ticketsData} />
                </div>
            </div>
        )
    );
};

export default UserPanel;