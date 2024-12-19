export const getProjectByUserId = async(id) => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    try {
        const ProjectsByUser = await fetch(`http://localhost:8080/api/userProject/projects/${id}`, requestOptions);
        const data = ProjectsByUser.json();
        return data;
    } catch (error) {
        console.error('error', error);
    }
};

export const createProjects = async(userId,nombre,descripcion,fecha)=>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
        "nombre": nombre,
        "descripcion": descripcion,
        "fecha": fecha
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    
    let response = await fetch("http://localhost:8080/api/projects/", requestOptions)
    if (!response.ok) {
        throw new Error('Error al crear un nuevo Proyecto');
    }
    let jsonData = await response.json();
    
    const raw1 = JSON.stringify({
        "userId": userId,
        "proyectId": jsonData.id,
        "total": 0
    });

<<<<<<< HEAD
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
=======
    const requestOptions1 = {
        method: "POST",
        headers: myHeaders,
        body: raw1,
        redirect: "follow"
    };
    await fetch("http://localhost:8080/api/userProject/projects", requestOptions1);
    
    return jsonData;
};

export const deleteProject = async(token,id) => {
    const myHeaders = new Headers();
    myHeaders.append("jwt", token);

    const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow"
    };
    
    let res = await fetch(`http://localhost:8080/api/projects/${id}`, requestOptions);
    return res;
};
>>>>>>> abcc660ade4f01587c3aa63936e886b7ba82e6e1
