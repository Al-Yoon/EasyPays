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

const notify = async (projectId, userId) => {
    const accessToken = sessionStorage.getItem('access-token');

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({ projectId, userId });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: body,
        redirect: 'follow',
        mode: 'cors',
    };

    try {
        let response = await fetch("http://localhost:8080/api/projects/notify", requestOptions);
        if (response.ok) {
            let jsonData = await response.json();
            return jsonData; // Devuelve el mensaje de éxito
        } else {
            let errorData = await response.json();
            throw new Error(errorData.message || "Error al enviar notificación");
        }
    } catch (err) {
        console.error("Error en notify:", err.message);
        throw err; // Manejo de errores
    }
};

export { notify , getProjects};
