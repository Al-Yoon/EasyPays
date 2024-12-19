export const getProjects = async(id,setProjects) => {
    const projects = [];

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const ProjectsByUser = await fetch(`http://localhost:8080/api/userProject/projects/${id}`, requestOptions);
    const usersProjects = await ProjectsByUser.json();
    for (const value of Object.values(usersProjects)) {
        const projectRes = await fetch(`http://localhost:8080/api/projects/${value.projectId}`, requestOptions);
        const project = await projectRes.json();
        projects.push({
            id:project.id,
            nombre:project.nombre,
            descripcion:project.descripcion,
            total:value.total,
        }
        );
    }
    
    try {
        const res = await Promise.all(projects);
        console.log(res); // donde estén los datos juntos
        setProjects(res);
    } catch (error) {
        console.error('error', error);
        setProjects([]);
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
