import React from 'react';
import DataTable from 'react-data-table-component';

function TableUsers({ data, updatePercentage, totalAmount }) {
    const handlePercentageChange = (e, rowIndex) => {
        const newPercentage = parseFloat(e.target.value);
        if (!isNaN(newPercentage)) {
            updatePercentage(rowIndex, newPercentage);
        }
    };

    const handleSendNotification = (email) => {
        alert(`Notificación Enviada a ${email}`);
    };

    const columns = [
        {
            name: "Usuario ID",
            selector: row => row.userId,
            sortable: true
        },
        {
            name: "Nombre",
            selector: row => row.firstName,
            sortable: true
        },
        {
            name: "Apellido",
            selector: row => row.lastName,
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
            cell: row => (
                <button
                    className="bg-blue-500 text-white py-1 px-3 rounded"
                    onClick={() => handleSendNotification(row.email)}
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