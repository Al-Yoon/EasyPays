import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { CSVLink} from "react-csv";

function TicketsHistoryTable({ data }) {
    const [previewImage, setPreviewImage] = useState(null);

    const handleImageClick = (image) => {
        setPreviewImage(URL.createObjectURL(image));
    };

    const columns = [
        {
            name: "Ticket ID",
            selector: row => row.ticketId,
            sortable: true,
        },
        {
            name: "Descripcion",
            selector: row => row.name,
            sortable: true,
        },
        {
            name: "Fecha",
            selector: row => row.date,
            sortable: true,
        },
        {
            name: "Monto",
            selector: row => row.total,
            sortable: true,
        },
        {
            name: "Imagen Ticket",
            cell: row => row.image ? (
                <a href="#!" onClick={() => handleImageClick(row.image)}>
                    {row.image.name}
                </a>
            ) : "Sin Imagen",
        },
    ];

    const csvData = data.map(ticket => ({
        ...ticket,
        project: "Proyecto Finde Pasado"
    }));

    return (
        <div>
            <DataTable 
                columns={columns} 
                data={data.map(ticket => ({
                    ...ticket,
                    project: "Proyecto Finde Pasado"
                }))} 
                noHeader 
                pagination 
                highlightOnHover 
                striped 
                responsive
            />
            {previewImage && (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1000,
                    background: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0px 0px 15px rgba(0,0,0,0.5)'
                }}>
                    <img src={previewImage} alt="Preview" style={{ maxWidth: '500px', maxHeight: '500px' }} />
                    <br />
                    <button onClick={() => setPreviewImage(null)}>Cerrar</button>
                </div>
            )}
            <CSVLink data={csvData} filename="historial_tickets.csv" className='text-[#2c392e]'>
                <button className='bg-[#42e663] w-[200px] h-[50px] hover:bg-[#38bdf8] mx-auto mt-1 rounded-xl'>
                    Descargar Historial
                </button>
            </CSVLink>
        </div>
    );
}

export default TicketsHistoryTable;