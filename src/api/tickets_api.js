export const getTickets = async(setTickets) => {
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