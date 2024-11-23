const register = async(name,email,password) =>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    //armado del body
    var raw = JSON.stringify({
        "name": name,
        "email": email,
        "password": password
    });

    //le pego al endpoint con esye post
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    let response = await fetch("http://localhost:8080/api/users/register",requestOptions);//endpoint
    let jsonData = await response.json();

    return jsonData; //response en un json
}

export default register;