import DataTable from "react-data-table-component";

function Table(){

    const columns = [
        {
            name: "Ticket",
            selector:row => row.name
        },
        {
            date: "Fecha",
            selector:row => row.date
        },
        {
            total: "Monto",
            selector:row => row.total
        },
    ]

    const data = [{
            name:"Finde salida",
            date:"11/06/2024",
            total:5000
        },
        {
            name:"Bayside",
            date:"05/12/2024",
            total:87000
        },
        {
            name:"Cine",
            date:"02/12/2024",
            total:9000
        },
        {
            name:"Bodegon",
            date:"22/12/2024",
            total:5500
        },
    ]

    return(
        <div>
        <DataTable columns={columns}
            data={data}/>
    </div>
    )
}

export default Table;