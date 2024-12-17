const register = async(user) => {
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "nombre": user.name,
        "email": user.email,
        "contrasenia": user.password,
        "saldo": 0
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    let response = await fetch("http://localhost:8080/api/login/register/", requestOptions);
    let jsonData = await response.json();
    return jsonData;
}

export default register;