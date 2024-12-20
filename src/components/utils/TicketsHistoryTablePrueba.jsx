import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { CSVLink } from 'react-csv';
import getTickets from '../api/tickets.api';

const TicketsHistoryTable = () => {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true); // Indicador de carga
    const [error, setError] = useState(null); // Estado para errores

    useEffect(() => {
        console.log("Pido la lista de tickets con mi token de sesión");
        const fetchTickets = async () => {
            try {
                const data = await getTickets();
                setTickets(data);
            } catch (err) {
                console.error("Error al obtener los tickets:", err);
                setError("No se pudieron cargar los tickets. Intenta nuevamente.");
            } finally {
                setLoading(false); // Termina la carga
            }
        };
        fetchTickets();
    }, []);

    const columns = [
        {
            name: "Ticket ID",
            selector: row => row.id,
            sortable: true,
        },
        {
            name: "Descripción",
            selector: row => row.descripcion,
            sortable: true,
            wrap: true, // Permitir que el texto se ajuste si es largo
        },
        {
            name: "Fecha",
            selector: row => row.fecha,
            sortable: true,
        },
        {
            name: "Monto",
            selector: row => row.monto,
            sortable: true,
            right: true, // Alinear a la derecha
        },
        {
            name: "Proyecto",
            selector: row => row.project?.nombre || "N/A", // Validar existencia de `project`
            sortable: true,
        },
    ];

    const csvData = tickets.map(ticket => ({
        ...ticket,
        project: ticket.project?.nombre || "N/A", // Validar datos en la exportación
    }));

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Historial de Tickets</h1>
            {loading ? (
                <p className="text-center">Cargando tickets...</p>
            ) : error ? (
                <p className="text-red-600 text-center">{error}</p>
            ) : (
                <DataTable 
                    columns={columns} 
                    data={tickets.map(ticket => ({
                        ...ticket,
                        project: ticket.project?.nombre || "N/A"
                    }))} 
                    noHeader 
                    pagination 
                    highlightOnHover 
                    striped 
                    responsive
                    defaultSortFieldId="id"
                />
            )}
            {!loading && !error && (
                <div className="mt-4 text-center">
                    <CSVLink 
                        data={csvData} 
                        filename="historial_tickets.csv" 
                        className='text-[#2c392e]'
                    >
                        <button className='bg-[#56a967] px-6 py-2 hover:bg-[#42e663] rounded-lg'>
                            Descargar Historial
                        </button>
                    </CSVLink>
                </div>
            )}
        </div>
    );
};

export default TicketsHistoryTable;
