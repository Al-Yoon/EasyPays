/* const login = async(email, contrasenia) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // Armado del body
    var raw = JSON.stringify({
        "email": email,
        "contrasenia": contrasenia
    });

    // Le pego al endpoint con este post
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    let response = await fetch("http://localhost:8080/api/login/signin", requestOptions); // endpoint
    let jsonData = await response.json();

    return jsonData; // response en un json
}

export default login; */

import jwtDecode from 'jwt-decode';

const login = async (email, contrasenia) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "email": email,
    "contrasenia": contrasenia
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  let response = await fetch("http://localhost:8080/api/login/signin", requestOptions);
  let jsonData = await response.json();

  if (response.status === 200) {
    const token = jsonData.token;
    const decodedToken = jwtDecode(token);
    return { token, decodedToken };
  } else {
    throw new Error(jsonData.message);
  }
};

export default login;