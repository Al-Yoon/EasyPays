import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { notify } from "../../../api/projects_api";

function TableUsers({ data, totalAmount, handlePayment, updatePercentage }) {

  const [error, setError] = useState("");

  const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSendNotification = async (row, index) => {
    const { userId, projectId, email } = row;

    // Validaciones
    if (!userId || !projectId || !email) {
      setError("Faltan datos necesarios para enviar la notificación.");
      return;
    }

    if (!validarEmail(email)) {
      setError("El correo electrónico no es válido.");
      return;
    }

    try {
      setError(""); // Limpia errores previos

      // Llamada a la API de notificación
      const response = await notify(projectId, userId);

      if (response) {
        alert(`Notificación enviada a ${email}`);
        handlePayment(index, (totalAmount * row.percentage / 100).toFixed(2));
      } else {
        setError("Error al enviar la notificación. Intente de nuevo.");
      }
    } catch (err) {
      console.error("Error al notificar:", err);
      setError("Ocurrió un error al enviar la notificación.");
    }
  };

  const columns = [
    { name: "Usuario ID", selector: (row) => row.userId, sortable: true },
    { name: "Proyecto ID", selector: (row) => row.projectId, sortable: true },
    { name: "Email", selector: (row) => row.email, sortable: true },
    {
      name: "Porcentaje",
      cell: (row, index) => (
        <input
          type="number"
          value={row.percentage}
          onChange={(e) =>
            updatePercentage(index, parseFloat(e.target.value) || 0)
          }
          style={{ width: "60px" }}
        />
      ),
    },
    {
      name: "Monto a Pagar",
      selector: (row) => (totalAmount * row.percentage / 100).toFixed(2),
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row, index) => (
        <button
          className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-[#38bdf8]"
          onClick={() => handleSendNotification(row, index)}
        >
          Enviar Notificación
        </button>
      ),
    },
  ];

  const totalPercentage = data.reduce((total, member) => total + member.percentage, 0);

  return (
    <div>
      <DataTable columns={columns} data={data} selectableRows pagination fixedHeader />
      {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
      <div style={{ padding: "10px", fontWeight: "bold" }}>
        Total Porcentaje: {totalPercentage}% (Falta {100 - totalPercentage}%)
      </div>
    </div>
  );
}

export default TableUsers;
