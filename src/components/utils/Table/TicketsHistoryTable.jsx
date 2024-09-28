import React from 'react';
import DataTable from 'react-data-table-component';
import { CSVLink } from 'react-csv';

function TicketsHistoryTable({ data }) {

    const columns = [
        {
            name: "Ticket ID",
            selector: row => row.ticketId,
            sortable: true,
        },
        {
            name: "Descripción",
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
            name: "Proyecto",
            selector: () => "Proyecto Finde Pasado",
            sortable: true,
        }
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
            <CSVLink data={csvData} filename="historial_tickets.csv" className='text-[#2c392e]'>
                <button className='bg-[#42e663] w-[19vh] h-[4vh]  hover:bg-[#38bdf8] mx-auto my-auto mt-1 rounded-lg'>
                    Descargar Historial
                </button>
            </CSVLink>
        </div>
    );
}

export default TicketsHistoryTable;