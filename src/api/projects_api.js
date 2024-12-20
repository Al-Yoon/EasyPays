export const getProjectByUserId = async (id) => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    try {
        const ProjectsByUser = await fetch(`http://localhost:8080/api/userProject/projects/${id}`, requestOptions);
        const data = await ProjectsByUser.json(); // Asegurarse de esperar la promesa
        return data;
    } catch (error) {
        console.error('error', error);
    }
};

export const createProjects = async (project) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify(project);

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    let response = await fetch("http://localhost:8080/api/projects/", requestOptions);
    if (!response.ok) {
        throw new Error('Error al crear un nuevo Proyecto');
    }
    const data = await response.json(); // Asegurarse de esperar la promesa
    return data;
};

export const deleteProject = async (id) => {
    const requestOptions = {
        method: "DELETE",
        redirect: "follow"
    };

    let res = await fetch(`http://localhost:8080/api/projects/${id}`, requestOptions);
    return res;
};

const notify = async (email) => {
    const body = JSON.stringify({ email: email });

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body,
        redirect: 'follow',
    };

    const response = await fetch("http://localhost:8080/api/projects/notify", requestOptions);
    return response;
};

export { notify };