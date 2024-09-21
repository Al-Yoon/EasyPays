import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

function Table({ data }) {
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
            ) : "No Image",
        },
    ];

    return (
        <div>
            <DataTable columns={columns} data={data} />
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
        </div>
    );
}

export default Table;