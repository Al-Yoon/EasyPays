const getTickets = async(setTickets) => {
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

export default getTickets;