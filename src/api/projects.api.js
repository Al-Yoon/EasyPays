const getProjects = async(setProjects) =>{
    console.log("Obtenemos el token de la sesión una vez logueado");
    const accessToken = sessionStorage.getItem('access-token');

    var myHeaders = new Headers();
    myHeaders.append("jwt",accessToken); //pasamos la key del acccesstoken
    myHeaders.append("Content-Type","application/json"); //ponermos el valor del token como header

    var requestOptions ={
        method: 'GET',
        Headers: myHeaders,
        redirect: 'follow',
        mode: 'cors'
    };

    let response = await fetch("http://localhost:8080/api/projects/",requestOptions);
    let jsonData = await response.json();
    setProjects(jsonData);
    console.log(jsonData);
}

export default getProjects;