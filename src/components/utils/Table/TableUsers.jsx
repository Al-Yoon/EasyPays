import { AuthContext } from "../AuthContextPrueba";
import DataTable from 'react-data-table-component';
import * as React from 'react';
import {getUsers} from '../../../api/users_project';

function TableUsers({updatePercentage, totalAmount, handlePayment }) {
    
    const handlePercentageChange = (e, rowIndex) => {
        const newPercentage = parseFloat(e.target.value);
        if (!isNaN(newPercentage)) {
            updatePercentage(rowIndex, newPercentage);
        }
    };

    const handleSendNotification = (email, index) => {
        alert(`Notificación Enviada a ${email}`);
        handlePayment(index, (totalAmount * data[index].percentage / 100).toFixed(2));
    };

    const { user } = React.useContext(AuthContext); //datos del usuario logueado
    const[data,setData] = React.useState([]);
    //const token = sessionStorage.getItem('access-token');
    React.useEffect(() =>{
        const fetchData = async() =>{
            const data = await getUsers(user.id);
            setData(data);
        };
        if(user){
            fetchData();
        }
    },[user,setData]);

    const columns = [
        {
            name: "Usuario ID",
            selector: row => row.id,
            sortable: true
        },
        {
            name: "Nombre",
            selector: row => row.nombre,
            sortable: true
        },
        {
            name: "Email",
            selector: row => row.email,
            sortable: true
        },
        {
            name: "Porcentaje",
            cell: (row, index) => (
                <input 
                    type="number"
                    value={row.percentage}
                    onChange={(e) => handlePercentageChange(e, index)}
                    style={{ width: '60px' }}
                />
            )
        },
        {
            name: "Monto a Pagar",
            selector: row => (totalAmount * row.percentage / 100).toFixed(2),
            sortable: true
        },
        {
            name: "Acciones",
            cell: (row, index) => (
                <button
                    className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-[#38bdf8]"
                    onClick={() => handleSendNotification(row.email, index)}
                >
                    Enviar Notificación
                </button>
            )
        }
    ];

    const totalPercentage = data.reduce((total, member) => total + member.percentage, 0);

    return (
        <div>
            <DataTable 
                columns={columns} 
                data={data} 
                selectableRows 
                pagination 
                fixedHeader 
            />
            <div style={{ padding: '10px', fontWeight: 'bold' }}>
                Total Porcentaje: {totalPercentage}% (Falta {100 - totalPercentage}%)
            </div>
        </div>
    );
}

export default TableUsers;