<<<<<<< HEAD
//Esto para historial en panel
const getTickets = async(id,setTickets) => {
    const formData = new formData();
    formData.append("projectId",id);

=======
export const getTickets = async(setTickets) => {
>>>>>>> 939bc3baf1ce26612c703c3028c679e22806c5b6
    console.log("Obtenemos el token de la sesión una vez logueado");
    const accessToken = sessionStorage.getItem("access-token");

    const myHeaders = new Headers();
    myHeaders.append("jwt", accessToken); // Pasamos la key del accessToken
    myHeaders.append("Content-Type", "application/json"); // Ponemos el valor del token como header

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
        mode: "cors",
    };

    try {
        const response = await fetch("http://localhost:8080/api/tickets/", requestOptions);
        const jsonData = await response.json();
        setTickets(jsonData);
        console.log(jsonData);
    } catch (error) {
        console.error("Error obteniendo los tickets:", error);
    }
};

<<<<<<< HEAD
const getTicketsByUserId = async(id) => {
    //traemos todos los gastos del usuario para obtener la informacion del ticket
    const data = [];
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    
    const response = await fetch(`http://localhost:8080/api/tickets/users/${id}`, requestOptions);
    const gastos = await response.json();
    for (const gasto of gastos) {
        const ticketsResponse = await fetch(
        `http://localhost:8080/api/tickets/${gasto.ticketId}`,
        requestOptions
    );
    const ticket = await ticketsResponse.json();

    const projectResponse = await fetch(`http://localhost:8080/api/projects/${ticket.projectId}`,requestOptions);
    const project = await projectResponse.json();
      // Formatear la información y agregarla a 'data'
    data.push({
        id: ticket.id,
        project: project.nombre, // Reemplaza por la propiedad real si es diferente
        date: ticket.fecha,
        value: ticket.total,
        comprobante: ticket.imageUrl,
    });
    }
    return data;
}

export {getTickets,getTicketsByUserId};
=======

export const getTicketsByUserId = async (id) => {
    const requestOptions = {
        method: "GET",
        redirect: "follow",
    };
        const response = await fetch(`http://localhost:8080/api/tickets/`, requestOptions);
        const tickets = await response.json();
        return tickets;
};

export const createTicket = async(ticket) =>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(ticket);

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    const response = await fetch("http://localhost:8080/api/tickets/", requestOptions);
    const data = response.json();
    return data;
}
>>>>>>> 939bc3baf1ce26612c703c3028c679e22806c5b6
