import { jwtDecode } from "jwt-decode"; // Importación correcta

const login = async (user) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "email": user.email,
    "contrasenia": user.password
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
    
    return { token };
  } else {
    throw new Error(jsonData.message);
  }
};

export default login;