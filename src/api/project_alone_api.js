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
export const getTicketsProject = async (id) => {
    const requestOptions = {
    method: "GET",
    redirect: "follow"
    };

    const ticketsRes = await fetch(`http://localhost:8080/api/tickets/projects/${id}`, requestOptions); // todas las transacciones del proyecto
    const tickets = ticketsRes.json(); 

    
    return tickets; // Retornar la lista de datos de transacciones y gastos
};


//Traer miembros del proyecto: