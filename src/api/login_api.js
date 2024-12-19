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


    return jsonData;
};

export default login;