import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { CSVLink } from 'react-csv';
import {getTickets} from '../api/tickets.api';

const TableTickets = () => {
    const [tickets, setTickets] = useState([]);
    console.log("Me traigo el token una vez que estoy logeado");
    const accessToken = sessionStorage.getItem('access-token');

    useEffect(() => {
        console.log("Pido la lista de tickets con mi token de sesión");
        getTickets(setTickets);
    }, []);

    const[data,setData] = React.useState([]);
    //const token = sessionStorage.getItem('access-token');
    React.useEffect(() =>{
        const fetchData = async() =>{
            const data = await getTickets();
            setData(data);
        };
            fetchData();
    },[data,setData]);

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
        }
    ];

    const csvData = tickets.map(ticket => ({
        ...ticket,
        project: ticket.project.nombre
    }));

    return (
        <div>
            <DataTable 
                columns={columns} 
                data={data} 
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

export default TableTickets;