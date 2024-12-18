const getProjects = async(setProjects) => {
    const accessToken = sessionStorage.getItem('access-token');

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`); // Incluye el token JWT en el encabezado
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
        mode: 'cors'
    };

    let response = await fetch("http://localhost:8080/api/projects/", requestOptions);
    let jsonData = await response.json();
    setProjects(jsonData);
    console.log(jsonData);
}

export default getProjects;