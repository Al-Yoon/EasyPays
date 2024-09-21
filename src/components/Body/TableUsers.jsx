import DataTable from "react-data-table-component";

function TableUsers(){

    const columns = [
        {
            name: "Nombre",
            selector:row => row.name
        },
        {
            lastname: "Apellido",
            selector:row => row.lastname
        },
        {
            email: "Email",
            selector:row => row.email
        },
    ]

    const data = [{
            name:"Fede",
            lastname:"Gonzalo",
            email:"fede@gmail.com"
            
        },
        {
            name:"Fede",
            lastname:"Gonzalo",
            email:"fede@gmail.com"
        },
        {
            name:"Fede",
            lastname:"Gonzalo",
            email:"fede@gmail.com"
        },
        {
            name:"Fede",
            lastname:"Gonzalo",
            email:"fede@gmail.com"
        },
    ]

    return(
        <div>
        <DataTable columns={columns}
            data={data}
            selectableRows
            onSelectedRowsChange={rows => console.log(rows)}
            pagination
            fixedHeader
            />
    </div>
    )
}

export default TableUsers;