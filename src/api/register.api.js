const register = async(user) => {
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "nombre": user.nombre,
        "apellido": user.apellido,
        "email": user.email,
        "contrasenia": user.contrasenia,
        "saldo": user.saldo
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    let response = await fetch("http://localhost:8080/api/users/", requestOptions);
    let jsonData = await response.json();
    return jsonData;
}

export default register;