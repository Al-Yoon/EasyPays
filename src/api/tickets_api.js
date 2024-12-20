// Esto para historial en panel
const getTickets = async (id, setTickets) => {
    const formData = new FormData();
    formData.append("projectId", id);

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

const getTicketsByUserId = async (id) => {
    const requestOptions = {
        method: "GET",
        redirect: "follow",
    };
        const response = await fetch(`http://localhost:8080/api/tickets/`, requestOptions);
        const tickets = await response.json();
        return tickets;
};

export { getTickets, getTicketsByUserId };
