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

export const createProjects = async(project)=>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify(project);

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
    return response;
};

export const deleteProject = async(id) => {
    const requestOptions = {
        method: "DELETE",
        redirect: "follow"
    };
    
    let res = await fetch(`http://localhost:8080/api/projects/${id}`, requestOptions);
    return res;
};

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

export { notify };
