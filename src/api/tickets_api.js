//Esto para historial en panel
const getTickets = async(id,setTickets) => {
    const formData = new formData();
    formData.append("projectId",id);

    console.log("Obtenemos el token de la sesión una vez logueado");
    const accessToken = sessionStorage.getItem('access-token');

    var myHeaders = new Headers();
    myHeaders.append("jwt", accessToken); // pasamos la key del accessToken
    myHeaders.append("Content-Type", "application/json"); // ponemos el valor del token como header

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
        mode: 'cors'
    };

    let response = await fetch("http://localhost:8080/api/tickets/", requestOptions);
    let jsonData = await response.json();
    setTickets(jsonData);
    console.log(jsonData);
}

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
