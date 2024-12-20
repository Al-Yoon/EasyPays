//esto para la tabla de usuarios en el proyecto
const getUsers = async(id) => {
    const users = []
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    let response = await fetch(`http://localhost:8080/api/userProject/users/${id}`, requestOptions);
    let jsonData = await response.json();
    for (const value of Object.values(jsonData.body)) {
        users.push(
            fetch(`http://localhost:8080/api/users/${value.userId}`, requestOptions)
                .then((response) => {
                    if (!response.ok) throw new Error(`Error al traer el proyecto ${value.userId}`);
                    return response.json();
                })
        );
    }
    try {
        const results = await Promise.all(users);
        return results;
    } catch (err) {
        console.error('errores', err);
    }
}

const addUser = async (token,id,nombre,email) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("jwt", token);
    const raw = JSON.stringify({
    "nombre": nombre,
    "email": email
    });
    
    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };
    
    let response = await fetch("http://localhost:8080/api/userProject/projects/", requestOptions);
    let jsonData = await response.json();
    
    const raw1 = JSON.stringify({
        "userId": jsonData.id,
        "proyectId": id,
        "balance": 0
        });
    
    const requestOptions1 = {
    method: "POST",
    headers: myHeaders,
    body: raw1,
    redirect: "follow"
    };
    await fetch("http://localhost:8080/api/userProject/projects/", requestOptions1);
    return jsonData;
    
};

const deleteUser = async (token,id,nombre) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("jwt", token);

    const raw = JSON.stringify({
    "nombre": nombre
    });
    
    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };
    
    let response = await fetch("http://localhost:8080/api/userProject/projects/", requestOptions);
    let jsonData = await response.json();
    
    const myHeaders2 = new Headers();
    myHeaders2.append("Content-Type", "application/json");

    const raw2 = JSON.stringify({
    "userId": jsonData.id,
    "projectId": id
    });

    const requestOptions2 = {
    method: "DELETE",
    headers: myHeaders,
    body: raw2,
    redirect: "follow"
    };

    fetch("http://localhost:8080/api/userProject/projects/", requestOptions2)
    return jsonData;
    
};

export {getUsers, addUser, deleteUser};