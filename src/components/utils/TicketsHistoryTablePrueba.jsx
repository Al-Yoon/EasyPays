// src/components/Body/TicketsHistoryTable.jsx
import { useEffect, useState } from 'react';
import React from 'react';
import DataTable from 'react-data-table-component';
import { CSVLink } from 'react-csv';
import getTickets from '../api/tickets.api';


    const columns = ({tickets}) => ([
        {
            name: "Ticket ID",
            selector: row => row.id,
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
            selector: () => "Proyecto Finde Pasado", // Agregar la columna de Proyecto
            sortable: true,
        }
    ]);

    const csvData = ({tickets}) => (tickets.map(ticket => ({
        ...ticket,
    })));

function TicketsHistoryTable() {

    const [tickets, setTickets] = useState([]);
    console.log("Me traigo el token una vez que estoy logeado")
    const accessToken = sessionStorage.getItem('access-token')
    
    useEffect(() => {
        console.log("Pido la lista de productos con mi token de sesion")
        getTickets(accessToken,setTickets);
    }, [setTickets,accessToken]);

    return (
        <div>
            <DataTable 
                columns={columns} 
                data=
                {tickets.map(ticket => ({
                    ...ticket
                }))} 
                noHeader 
                pagination 
                highlightOnHover 
                striped 
                responsive
            />
            <CSVLink data={csvData} filename="historial_tickets.csv" className='text-[#2c392e]'>
                <button className='bg-[#56a967] w-[40vh] h-[9vh] hover:bg-[#42e663] mx-auto my-auto mt-1 rounded-lg'>
                    Descargar Historial
                </button>
            </CSVLink>
        </div>
    );
}

export default TicketsHistoryTable;