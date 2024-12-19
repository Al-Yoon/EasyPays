//esto para traer lo q tiene ese proyecto individual
// Obtener información de un proyecto
export const getProject = async (id) => {
    const requestOptions = {
    method: "GET",
    redirect: "follow"
    };

    let res = await fetch(`http://localhost:8080/api/projects/${id}`, requestOptions);
    let jsonData = await res.json();
    return jsonData;
};

  // Traer tickets del proyecto
export const getTicketsProject = async (id, nombre, descripcion, fecha, monto, imgUrl) => {
    const requestOptions = {
    method: "GET",
    redirect: "follow"
    };

    const ticketsRes = await fetch(`http://localhost:8080/api/tickets/projects/${id}`, requestOptions); // todas las transacciones del proyecto
    const tickets = await ticketsRes.json(); 
    
    const data = await Promise.all(
    tickets.map(async (ticket) => {
        // Obtener los gastos relacionados con la transacción
        const pagosRes = await fetch(
        `http://localhost:8080/api/tickets/${ticket.id}`, 
        requestOptions
        ); // todos los gastos de esa transacción
        const gastos = await pagosRes.json();
        
        // Aquí podrías procesar los datos de los gastos si es necesario
        return { ticket, gastos }; // Retornar ambos, transacción y gastos
    })
    );
    
    return data; // Retornar la lista de datos de transacciones y gastos
};


//Traer miembros del proyecto: