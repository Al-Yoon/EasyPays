import React from 'react';
import { deleteProject } from '../../../api/projects_api';

const DeleteButton = ({ projectId, onDelete, onCancel }) => {
    const handleDelete = async () => {
        try {
            const response = await deleteProject(projectId);
            if (response.status === 200) {
                console.log(`Project ${projectId} deleted successfully.`);
                onDelete();
            }
        } catch (error) {
            console.error('Error al eliminar el proyecto:', error);
        }
    };

    return (
        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 relative">
                <button onClick={onCancel} className="absolute top-2 right-2">
                    Cancelar
                </button>
                <h2>¿Estás seguro de que deseas eliminar este proyecto?</h2>
                <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 mt-4">
                    Confirmar
                </button>
            </div>
        </div>
    );
};

export default DeleteButton;
